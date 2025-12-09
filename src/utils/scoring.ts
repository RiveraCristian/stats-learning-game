import { Level, ScoreResult, UserProfile, GameData } from '../types';

export const calculateStars = (score: number): number => {
  if (score >= 80) return 3;
  if (score >= 60) return 2;
  if (score >= 40) return 1;
  return 0;
};

export const calculateXP = (level: Level, stars: number): number => {
  const xpTable = {
    basic: { 1: 50, 2: 75, 3: 100 },
    intermediate: { 1: 75, 2: 100, 3: 150 },
    advanced: { 1: 100, 2: 150, 3: 200 },
  };

  return xpTable[level][stars as 1 | 2 | 3] || 0;
};

export const calculateLevel = (totalXP: number): number => {
  if (totalXP < 500) return 1;
  if (totalXP < 1000) return 2;
  if (totalXP < 2000) return 3;
  if (totalXP < 3500) return 4;
  
  // Level 5+: +1500 XP per level
  return 5 + Math.floor((totalXP - 3500) / 1500);
};

export const getXPForNextLevel = (currentLevel: number): number => {
  if (currentLevel === 1) return 500;
  if (currentLevel === 2) return 1000;
  if (currentLevel === 3) return 2000;
  if (currentLevel === 4) return 3500;
  
  // Level 5+
  return 3500 + (currentLevel - 4) * 1500;
};

export const processGameCompletion = (
  profile: UserProfile,
  game: GameData,
  score: number
): ScoreResult => {
  const stars = calculateStars(score);
  const xpEarned = calculateXP(game.level, stars);
  const newTotalXP = profile.totalXP + xpEarned;
  const newLevel = calculateLevel(newTotalXP);
  const leveledUp = newLevel > profile.level;

  return {
    score,
    stars,
    xpEarned,
    leveledUp,
    newLevel: leveledUp ? newLevel : undefined,
  };
};

export const getProgressPercentage = (currentXP: number, currentLevel: number): number => {
  const currentLevelXP = currentLevel === 1 ? 0 : getXPForNextLevel(currentLevel - 1);
  const nextLevelXP = getXPForNextLevel(currentLevel);
  const xpInCurrentLevel = currentXP - currentLevelXP;
  const xpNeededForLevel = nextLevelXP - currentLevelXP;
  
  return Math.min(100, (xpInCurrentLevel / xpNeededForLevel) * 100);
};

export const calculateStreak = (lastPlayed: string): number => {
  if (!lastPlayed) return 0;
  
  const last = new Date(lastPlayed);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  last.setHours(0, 0, 0, 0);
  
  const diffTime = today.getTime() - last.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  // If last played was today or yesterday, streak continues
  if (diffDays <= 1) {
    return 1; // Will be incremented by the system
  }
  
  // Streak broken
  return 0;
};

export const shouldUpdateStreak = (lastPlayed: string): boolean => {
  if (!lastPlayed) return true;
  
  const last = new Date(lastPlayed);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  last.setHours(0, 0, 0, 0);
  
  return last.getTime() !== today.getTime();
};
