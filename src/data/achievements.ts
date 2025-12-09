import { Achievement, UserProfile } from '../types';
import { games } from './games';

export const achievements: Achievement[] = [
  {
    id: 'first-step',
    name: 'Primer Paso',
    description: 'Completa tu primer juego',
    icon: '🎯',
    condition: (profile: UserProfile) => profile.completedGames.length >= 1,
  },
  {
    id: 'probability-novice',
    name: 'Probabilista Novato',
    description: 'Completa todos los juegos básicos de Probabilidades',
    icon: '🎲',
    condition: (profile: UserProfile) => {
      const basicProbGames = games.filter(g => g.category === 'probability' && g.level === 'basic');
      return basicProbGames.every(g => profile.completedGames.includes(g.id));
    },
  },
  {
    id: 'probability-master',
    name: 'Maestro de las Probabilidades',
    description: 'Obtén 3 estrellas en todos los juegos de Probabilidades',
    icon: '🎲',
    condition: (profile: UserProfile) => {
      const probGames = games.filter(g => g.category === 'probability');
      return probGames.every(g => {
        const score = profile.categoryProgress.probability.bestScores[g.id];
        return score && score.stars === 3;
      });
    },
  },
  {
    id: 'statistics-junior',
    name: 'Estadístico Junior',
    description: 'Completa todos los juegos básicos de Estadística',
    icon: '📊',
    condition: (profile: UserProfile) => {
      const basicStatsGames = games.filter(g => g.category === 'statistics' && g.level === 'basic');
      return basicStatsGames.every(g => profile.completedGames.includes(g.id));
    },
  },
  {
    id: 'statistics-master',
    name: 'Maestro Estadístico',
    description: 'Obtén 3 estrellas en todos los juegos de Estadística',
    icon: '📊',
    condition: (profile: UserProfile) => {
      const statsGames = games.filter(g => g.category === 'statistics');
      return statsGames.every(g => {
        const score = profile.categoryProgress.statistics.bestScores[g.id];
        return score && score.stars === 3;
      });
    },
  },
  {
    id: 'ml-enthusiast',
    name: 'ML Enthusiast',
    description: 'Completa todos los juegos básicos de Machine Learning',
    icon: '🤖',
    condition: (profile: UserProfile) => {
      const basicMLGames = games.filter(g => g.category === 'ml' && g.level === 'basic');
      return basicMLGames.every(g => profile.completedGames.includes(g.id));
    },
  },
  {
    id: 'ml-expert',
    name: 'ML Expert',
    description: 'Obtén 3 estrellas en todos los juegos de Machine Learning',
    icon: '🤖',
    condition: (profile: UserProfile) => {
      const mlGames = games.filter(g => g.category === 'ml');
      return mlGames.every(g => {
        const score = profile.categoryProgress.ml.bestScores[g.id];
        return score && score.stars === 3;
      });
    },
  },
  {
    id: 'ai-explorer',
    name: 'IA Explorer',
    description: 'Completa todos los juegos básicos de Inteligencia Artificial',
    icon: '🧠',
    condition: (profile: UserProfile) => {
      const basicAIGames = games.filter(g => g.category === 'ai' && g.level === 'basic');
      return basicAIGames.every(g => profile.completedGames.includes(g.id));
    },
  },
  {
    id: 'ai-master',
    name: 'IA Master',
    description: 'Obtén 3 estrellas en todos los juegos de Inteligencia Artificial',
    icon: '🧠',
    condition: (profile: UserProfile) => {
      const aiGames = games.filter(g => g.category === 'ai');
      return aiGames.every(g => {
        const score = profile.categoryProgress.ai.bestScores[g.id];
        return score && score.stars === 3;
      });
    },
  },
  {
    id: 'perfectionist',
    name: 'Perfeccionista',
    description: 'Obtén 3 estrellas en TODOS los juegos',
    icon: '⭐',
    condition: (profile: UserProfile) => {
      return games.every(g => {
        const category = g.category;
        const score = profile.categoryProgress[category].bestScores[g.id];
        return score && score.stars === 3;
      });
    },
  },
  {
    id: 'streak-3',
    name: 'Racha de 3 días',
    description: 'Juega durante 3 días consecutivos',
    icon: '🔥',
    condition: (profile: UserProfile) => profile.streak >= 3,
  },
  {
    id: 'streak-7',
    name: 'Racha de 7 días',
    description: 'Juega durante 7 días consecutivos',
    icon: '🔥',
    condition: (profile: UserProfile) => profile.streak >= 7,
  },
  {
    id: 'streak-30',
    name: 'Racha de 30 días',
    description: 'Juega durante 30 días consecutivos',
    icon: '🔥',
    condition: (profile: UserProfile) => profile.streak >= 30,
  },
  {
    id: 'collector',
    name: 'Coleccionista',
    description: 'Completa al menos un juego de cada nivel',
    icon: '📚',
    condition: (profile: UserProfile) => {
      const hasBasic = games.some(g => g.level === 'basic' && profile.completedGames.includes(g.id));
      const hasIntermediate = games.some(g => g.level === 'intermediate' && profile.completedGames.includes(g.id));
      const hasAdvanced = games.some(g => g.level === 'advanced' && profile.completedGames.includes(g.id));
      return hasBasic && hasIntermediate && hasAdvanced;
    },
  },
  {
    id: 'centenarian',
    name: 'Centenario',
    description: 'Alcanza el nivel 10',
    icon: '💯',
    condition: (profile: UserProfile) => profile.level >= 10,
  },
];

export const checkNewAchievements = (profile: UserProfile): Achievement[] => {
  return achievements.filter(achievement => 
    !profile.achievements.includes(achievement.id) && 
    achievement.condition(profile)
  );
};

export const getAchievementById = (id: string): Achievement | undefined => {
  return achievements.find(a => a.id === id);
};
