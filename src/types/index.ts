// Core Types
export type Category = 'probability' | 'statistics' | 'ml' | 'ai';
export type Level = 'basic' | 'intermediate' | 'advanced';
export type GameStatus = 'locked' | 'available' | 'in-progress' | 'completed';

// User Profile
export interface UserProfile {
  name: string;
  level: number;
  totalXP: number;
  streak: number;
  lastPlayed: string;
  categoryProgress: {
    probability: CategoryProgress;
    statistics: CategoryProgress;
    ml: CategoryProgress;
    ai: CategoryProgress;
  };
  completedGames: string[];
  achievements: string[];
}

// Category Progress
export interface CategoryProgress {
  totalXP: number;
  gamesCompleted: number;
  totalGames: number;
  bestScores: { [gameId: string]: GameScore };
}

// Game Data
export interface GameData {
  id: string;
  name: string;
  description: string;
  category: Category;
  level: Level;
  xpReward: { 1: number; 2: number; 3: number };
  relatedArticles?: string[];
}

// Game Score
export interface GameScore {
  score: number;
  stars: number;
  xpEarned: number;
  completedAt: string;
}

// Achievement
export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  condition: (profile: UserProfile) => boolean;
}

// Wiki Article
export interface WikiArticle {
  id: string;
  title: string;
  category: Category;
  path: string;
  relatedGames?: string[];
}

// Category Info
export interface CategoryInfo {
  id: Category;
  name: string;
  description: string;
  color: string;
  lightColor: string;
  icon: string;
}

// Game State Hook Return Type
export interface GameState<T = any> {
  state: T;
  setState: React.Dispatch<React.SetStateAction<T>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  isComplete: boolean;
  completeGame: (finalScore: number) => void;
}

// Score Result
export interface ScoreResult {
  score: number;
  stars: number;
  xpEarned: number;
  leveledUp: boolean;
  newLevel?: number;
}
