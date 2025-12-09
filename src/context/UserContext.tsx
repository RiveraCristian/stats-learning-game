import React, { createContext, useContext, useEffect, useState } from 'react';
import { UserProfile, GameData, GameScore, Category, CategoryProgress } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { processGameCompletion, calculateLevel, shouldUpdateStreak } from '../utils/scoring';
import { checkNewAchievements } from '../data/achievements';
import { games } from '../data/games';

interface UserContextType {
  profile: UserProfile;
  updateProfile: (updates: Partial<UserProfile>) => void;
  completeGame: (game: GameData, score: number) => void;
  resetProfile: () => void;
}

const defaultCategoryProgress: CategoryProgress = {
  totalXP: 0,
  gamesCompleted: 0,
  totalGames: 0,
  bestScores: {},
};

const defaultProfile: UserProfile = {
  name: 'Jugador',
  level: 1,
  totalXP: 0,
  streak: 0,
  lastPlayed: '',
  categoryProgress: {
    probability: { ...defaultCategoryProgress },
    statistics: { ...defaultCategoryProgress },
    ml: { ...defaultCategoryProgress },
    ai: { ...defaultCategoryProgress },
  },
  completedGames: [],
  achievements: [],
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useLocalStorage<UserProfile>('userProfile', defaultProfile);
  const [, setNewAchievements] = useState<string[]>([]);

  const updateProfile = (updates: Partial<UserProfile>) => {
    setProfile(prev => ({ ...prev, ...updates }));
  };

  const completeGame = (game: GameData, score: number) => {
    setProfile(prev => {
      // Process game completion
      const result = processGameCompletion(prev, game, score);
      
      // Update category progress
      const categoryKey = game.category as Category;
      const categoryProgress = prev.categoryProgress[categoryKey];
      
      const newBestScores = { ...categoryProgress.bestScores };
      const currentBest = newBestScores[game.id];
      
      const gameScore: GameScore = {
        score: result.score,
        stars: result.stars,
        xpEarned: result.xpEarned,
        completedAt: new Date().toISOString(),
      };
      
      // Only update if this is a better score or first completion
      if (!currentBest || result.score > currentBest.score) {
        newBestScores[game.id] = gameScore;
      }
      
      // Add to completed games if not already there
      const completedGames = prev.completedGames.includes(game.id)
        ? prev.completedGames
        : [...prev.completedGames, game.id];
      
      // Update streak
      const today = new Date().toISOString().split('T')[0];
      const updateStreak = shouldUpdateStreak(prev.lastPlayed);
      const newStreak = updateStreak ? prev.streak + 1 : prev.streak;
      
      // Calculate new total XP and level
      const newTotalXP = prev.totalXP + result.xpEarned;
      const newLevel = calculateLevel(newTotalXP);
      
      const newProfile: UserProfile = {
        ...prev,
        level: newLevel,
        totalXP: newTotalXP,
        streak: newStreak,
        lastPlayed: today,
        completedGames,
        categoryProgress: {
          ...prev.categoryProgress,
          [categoryKey]: {
            ...categoryProgress,
            totalXP: categoryProgress.totalXP + result.xpEarned,
            gamesCompleted: completedGames.filter(id => {
              // Count games in this category by looking up the game
              const gameData = games.find(g => g.id === id);
              return gameData?.category === categoryKey;
            }).length,
            bestScores: newBestScores,
          },
        },
      };
      
      // Check for new achievements
      const newAchievementsList = checkNewAchievements(newProfile);
      if (newAchievementsList.length > 0) {
        setNewAchievements(newAchievementsList.map(a => a.id));
        newProfile.achievements = [
          ...newProfile.achievements,
          ...newAchievementsList.map(a => a.id),
        ];
      }
      
      return newProfile;
    });
  };

  const resetProfile = () => {
    setProfile(defaultProfile);
  };

  // Update streak on mount
  useEffect(() => {
    const updateStreak = shouldUpdateStreak(profile.lastPlayed);
    if (updateStreak && profile.completedGames.length > 0) {
      // Streak continues
    } else if (profile.completedGames.length > 0) {
      // Check if streak should be reset
      const today = new Date();
      const lastPlayed = new Date(profile.lastPlayed);
      const diffDays = Math.floor((today.getTime() - lastPlayed.getTime()) / (1000 * 60 * 60 * 24));
      
      if (diffDays > 1) {
        // Streak broken, reset
        updateProfile({ streak: 0 });
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <UserContext.Provider value={{ profile, updateProfile, completeGame, resetProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
