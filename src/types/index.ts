export interface Element {
  id: string;
  name: string;
  nameEn: string;
  formula: string;
  category: 'елемент' | 'сполука' | 'кислота' | 'основа' | 'сіль' | 'оксид' | 'газ' | 'органіка' | 'полімер' | 'custom';
  emoji: string;
  description: string;
  isBasic: boolean;
  state: 'газ' | 'рідина' | 'тверда' | 'плазма';
  discoveredAt?: number;
  isCustom?: boolean;
  createdBy?: string;
  color?: string;
  rarity?: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
}

export interface Recipe {
  id: string;
  ingredients: string[];
  result: string;
  equation: string;
  reactionType: 'синтез' | 'розклад' | 'заміщення' | 'обмін' | 'нейтралізація' | 'полімеризація' | 'каталіз' | 'електроліз' | 'відновлення' | 'окислення' | 'розкладання' | 'диспропорціонування' | 'комплексоутворення';
  explanation: string;
  conditions?: string;
  energy: 'екзотермічна' | 'ендотермічна';
  application?: string;
  difficulty?: 'easy' | 'medium' | 'hard' | 'expert';
  isMultiIngredient?: boolean;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  condition: (discoveredElements: string[], completedReactions: string[]) => boolean;
  unlockedAt?: number;
  reward?: number;
  category?: 'discovery' | 'reaction' | 'collection' | 'mastery' | 'special';
}

export interface CustomElement {
  id: string;
  name: string;
  formula: string;
  emoji: string;
  description: string;
  ingredients: string[];
  createdAt: number;
  color: string;
}

export interface DailyChallenge {
  id: string;
  date: string;
  targetElement: string;
  description: string;
  reward: number;
  completed: boolean;
  hints: string[];
}

export interface Quest {
  id: string;
  name: string;
  description: string;
  tasks: QuestTask[];
  reward: number;
  isCompleted: boolean;
}

export interface QuestTask {
  id: string;
  description: string;
  type: 'discover' | 'react' | 'collect';
  target: string | number;
  progress: number;
  isCompleted: boolean;
}

export interface Hint {
  id: string;
  text: string;
  category: 'general' | 'reaction' | 'element';
  relatedElements?: string[];
  cost: number;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  termEn: string;
  definition: string;
  example?: string;
  relatedTerms?: string[];
}

export interface UserProgress {
  discoveredElements: string[];
  completedReactions: string[];
  achievements: string[];
  bookmarks: string[];
  reactionHistory: { recipeId: string; timestamp: number }[];
  totalReactions: number;
  customElements: CustomElement[];
  currency: number;
  hintsUsed: number;
  dailyChallenges: { date: string; completed: boolean }[];
  quests: { questId: string; progress: number; completed: boolean }[];
  settings: UserSettings;
  stats: UserStats;
  savedCombinations: SavedCombination[];
}

export interface UserSettings {
  soundEnabled: boolean;
  musicEnabled: boolean;
  animationsEnabled: boolean;
  language: 'uk' | 'en';
  theme: 'dark' | 'light' | 'auto';
  showHints: boolean;
  autoSave: boolean;
}

export interface UserStats {
  totalPlayTime: number;
  longestStreak: number;
  currentStreak: number;
  lastPlayDate: string;
  favoriteElement: string;
  totalExperiments: number;
  successfulReactions: number;
  failedReactions: number;
}

export interface SavedCombination {
  id: string;
  name: string;
  elements: string[];
  result?: string;
  notes: string;
  createdAt: number;
  isFavorite: boolean;
}

export type CategoryFilter = 'all' | 'елемент' | 'сполука' | 'кислота' | 'основа' | 'сіль' | 'оксид' | 'газ' | 'органіка' | 'полімер' | 'custom';

export interface GameState {
  slots: (Element | null)[];
  isReacting: boolean;
  lastResult: { element: Element; recipe: Recipe } | null;
  showModal: boolean;
  failedReaction: boolean;
  reactionProgress: number;
  comboCount: number;
  lastComboTime: number;
}

export interface ParticleEffect {
  id: string;
  x: number;
  y: number;
  color: string;
  size: number;
  velocity: { x: number; y: number };
  life: number;
}
