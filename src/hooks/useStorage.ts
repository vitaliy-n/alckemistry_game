import { useState, useEffect, useCallback } from 'react';
import type { UserProgress, CustomElement, SavedCombination, UserSettings, UserStats } from '../types';
import { getBasicElements } from '../data/elements';

const STORAGE_KEY = 'alchemy-progress-v2';

const defaultSettings: UserSettings = {
  soundEnabled: true,
  musicEnabled: false,
  animationsEnabled: true,
  language: 'uk',
  theme: 'dark',
  showHints: true,
  autoSave: true
};

const defaultStats: UserStats = {
  totalPlayTime: 0,
  longestStreak: 0,
  currentStreak: 0,
  lastPlayDate: new Date().toISOString().split('T')[0],
  favoriteElement: '',
  totalExperiments: 0,
  successfulReactions: 0,
  failedReactions: 0
};

const getInitialProgress = (): UserProgress => {
  const basicElementIds = getBasicElements().map(el => el.id);
  return {
    discoveredElements: basicElementIds,
    completedReactions: [],
    achievements: [],
    bookmarks: [],
    reactionHistory: [],
    totalReactions: 0,
    customElements: [],
    currency: 100,
    hintsUsed: 0,
    dailyChallenges: [],
    quests: [],
    settings: defaultSettings,
    stats: defaultStats,
    savedCombinations: []
  };
};

export const useStorage = () => {
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        const basicElements = getBasicElements().map(el => el.id);
        const discoveredElements = [...new Set([...basicElements, ...(parsed.discoveredElements || [])])];
        return {
          ...getInitialProgress(),
          ...parsed,
          discoveredElements,
          settings: { ...defaultSettings, ...(parsed.settings || {}) },
          stats: { ...defaultStats, ...(parsed.stats || {}) }
        };
      }
    } catch (e) {
      console.error('Error loading progress:', e);
    }
    return getInitialProgress();
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error('Error saving progress:', e);
    }
  }, [progress]);

  const discoverElement = useCallback((elementId: string) => {
    setProgress(prev => {
      if (prev.discoveredElements.includes(elementId)) {
        return prev;
      }
      return {
        ...prev,
        discoveredElements: [...prev.discoveredElements, elementId],
        currency: prev.currency + 10
      };
    });
  }, []);

  const addReaction = useCallback((recipeId: string, success: boolean = true) => {
    setProgress(prev => {
      const newHistory = [
        { recipeId, timestamp: Date.now() },
        ...prev.reactionHistory.slice(0, 99)
      ];
      const completedReactions = prev.completedReactions.includes(recipeId)
        ? prev.completedReactions
        : [...prev.completedReactions, recipeId];
      
      return {
        ...prev,
        completedReactions,
        reactionHistory: newHistory,
        totalReactions: prev.totalReactions + 1,
        currency: prev.currency + (success ? 5 : 0),
        stats: {
          ...prev.stats,
          totalExperiments: prev.stats.totalExperiments + 1,
          successfulReactions: prev.stats.successfulReactions + (success ? 1 : 0),
          failedReactions: prev.stats.failedReactions + (success ? 0 : 1)
        }
      };
    });
  }, []);

  const unlockAchievement = useCallback((achievementId: string, reward: number = 0) => {
    setProgress(prev => {
      if (prev.achievements.includes(achievementId)) {
        return prev;
      }
      return {
        ...prev,
        achievements: [...prev.achievements, achievementId],
        currency: prev.currency + reward
      };
    });
  }, []);

  const toggleBookmark = useCallback((recipeId: string) => {
    setProgress(prev => {
      const bookmarks = prev.bookmarks.includes(recipeId)
        ? prev.bookmarks.filter(id => id !== recipeId)
        : [...prev.bookmarks, recipeId];
      return { ...prev, bookmarks };
    });
  }, []);

  const addCustomElement = useCallback((element: CustomElement) => {
    setProgress(prev => ({
      ...prev,
      customElements: [...prev.customElements, element],
      currency: prev.currency + 25
    }));
  }, []);

  const removeCustomElement = useCallback((elementId: string) => {
    setProgress(prev => ({
      ...prev,
      customElements: prev.customElements.filter(el => el.id !== elementId)
    }));
  }, []);

  const saveCombination = useCallback((combination: SavedCombination) => {
    setProgress(prev => ({
      ...prev,
      savedCombinations: [...prev.savedCombinations, combination]
    }));
  }, []);

  const removeSavedCombination = useCallback((combinationId: string) => {
    setProgress(prev => ({
      ...prev,
      savedCombinations: prev.savedCombinations.filter(c => c.id !== combinationId)
    }));
  }, []);

  const toggleCombinationFavorite = useCallback((combinationId: string) => {
    setProgress(prev => ({
      ...prev,
      savedCombinations: prev.savedCombinations.map(c =>
        c.id === combinationId ? { ...c, isFavorite: !c.isFavorite } : c
      )
    }));
  }, []);

  const updateSettings = useCallback((newSettings: Partial<UserSettings>) => {
    setProgress(prev => ({
      ...prev,
      settings: { ...prev.settings, ...newSettings }
    }));
  }, []);

  const spendCurrency = useCallback((amount: number): boolean => {
    if (progress.currency < amount) return false;
    setProgress(prev => ({
      ...prev,
      currency: prev.currency - amount,
      hintsUsed: prev.hintsUsed + 1
    }));
    return true;
  }, [progress.currency]);

  const resetProgress = useCallback(() => {
    const initial = getInitialProgress();
    setProgress(initial);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
  }, []);

  return {
    progress,
    discoverElement,
    addReaction,
    unlockAchievement,
    toggleBookmark,
    addCustomElement,
    removeCustomElement,
    saveCombination,
    removeSavedCombination,
    toggleCombinationFavorite,
    updateSettings,
    spendCurrency,
    resetProgress
  };
};
