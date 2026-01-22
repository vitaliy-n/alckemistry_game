import { useState, useCallback } from 'react';
import type { Element, GameState } from '../types';
import { findRecipe, findMultiRecipe } from '../data/recipes';
import { getElementById } from '../data/elements';

const MAX_SLOTS = 4;

const initialState: GameState = {
  slots: [null, null, null, null],
  isReacting: false,
  lastResult: null,
  showModal: false,
  failedReaction: false,
  reactionProgress: 0,
  comboCount: 0,
  lastComboTime: 0
};

export const useGame = (
  discoveredElements: string[],
  onDiscover: (elementId: string) => void,
  onReaction: (recipeId: string, success?: boolean) => void
) => {
  const [gameState, setGameState] = useState<GameState>(initialState);

  const setSlot = useCallback((index: number, element: Element | null) => {
    if (index < 0 || index >= MAX_SLOTS) return;
    setGameState(prev => {
      const newSlots = [...prev.slots];
      newSlots[index] = element;
      return { ...prev, slots: newSlots, failedReaction: false };
    });
  }, []);

  const addToNextEmptySlot = useCallback((element: Element) => {
    setGameState(prev => {
      const emptyIndex = prev.slots.findIndex(s => s === null);
      if (emptyIndex === -1) {
        const newSlots = [...prev.slots];
        newSlots[0] = element;
        return { ...prev, slots: newSlots, failedReaction: false };
      }
      const newSlots = [...prev.slots];
      newSlots[emptyIndex] = element;
      return { ...prev, slots: newSlots, failedReaction: false };
    });
  }, []);

  const clearSlots = useCallback(() => {
    setGameState(prev => ({ 
      ...prev, 
      slots: [null, null, null, null], 
      failedReaction: false,
      reactionProgress: 0
    }));
  }, []);

  const clearSlot = useCallback((index: number) => {
    if (index < 0 || index >= MAX_SLOTS) return;
    setGameState(prev => {
      const newSlots = [...prev.slots];
      newSlots[index] = null;
      return { ...prev, slots: newSlots, failedReaction: false };
    });
  }, []);

  const performReaction = useCallback(() => {
    const filledSlots = gameState.slots.filter((s): s is Element => s !== null);
    
    if (filledSlots.length < 2) return;

    setGameState(prev => ({ ...prev, isReacting: true, reactionProgress: 0 }));

    const progressInterval = setInterval(() => {
      setGameState(prev => {
        if (prev.reactionProgress >= 100) {
          clearInterval(progressInterval);
          return prev;
        }
        return { ...prev, reactionProgress: prev.reactionProgress + 10 };
      });
    }, 80);

    setTimeout(() => {
      clearInterval(progressInterval);
      
      const ingredientIds = filledSlots.map(s => s.id);
      
      let recipe = null;
      if (filledSlots.length === 2) {
        recipe = findRecipe(ingredientIds[0], ingredientIds[1]);
      }
      if (!recipe && filledSlots.length >= 2) {
        recipe = findMultiRecipe(ingredientIds);
      }
      
      if (recipe) {
        const resultElement = getElementById(recipe.result);
        if (resultElement) {
          const isNew = !discoveredElements.includes(resultElement.id);
          if (isNew) {
            onDiscover(resultElement.id);
          }
          onReaction(recipe.id, true);
          
          const now = Date.now();
          const isCombo = now - gameState.lastComboTime < 5000;
          
          setGameState(prev => ({
            ...prev,
            isReacting: false,
            lastResult: { element: resultElement, recipe: recipe! },
            showModal: true,
            slots: [null, null, null, null],
            failedReaction: false,
            reactionProgress: 100,
            comboCount: isCombo ? prev.comboCount + 1 : 1,
            lastComboTime: now
          }));
        }
      } else {
        onReaction('failed', false);
        setGameState(prev => ({
          ...prev,
          isReacting: false,
          failedReaction: true,
          reactionProgress: 0,
          comboCount: 0
        }));
      }
    }, 1000);
  }, [gameState.slots, gameState.lastComboTime, discoveredElements, onDiscover, onReaction]);

  const closeModal = useCallback(() => {
    setGameState(prev => ({ ...prev, showModal: false, lastResult: null }));
  }, []);

  const performDirectReaction = useCallback((recipe: { id: string; result: string; ingredients: string[] }) => {
    setGameState(prev => ({ ...prev, isReacting: true, reactionProgress: 0 }));

    const progressInterval = setInterval(() => {
      setGameState(prev => {
        if (prev.reactionProgress >= 100) {
          clearInterval(progressInterval);
          return prev;
        }
        return { ...prev, reactionProgress: prev.reactionProgress + 10 };
      });
    }, 80);

    setTimeout(() => {
      clearInterval(progressInterval);
      
      const resultElement = getElementById(recipe.result);
      if (resultElement) {
        const isNew = !discoveredElements.includes(resultElement.id);
        if (isNew) {
          onDiscover(resultElement.id);
        }
        onReaction(recipe.id, true);
        
        const now = Date.now();
        const isCombo = now - gameState.lastComboTime < 5000;
        
        setGameState(prev => ({
          ...prev,
          isReacting: false,
          lastResult: { element: resultElement, recipe: recipe as any },
          showModal: true,
          slots: [null, null, null, null],
          failedReaction: false,
          reactionProgress: 100,
          comboCount: isCombo ? prev.comboCount + 1 : 1,
          lastComboTime: now
        }));
      }
    }, 800);
  }, [discoveredElements, onDiscover, onReaction, gameState.lastComboTime]);

  const swapSlots = useCallback((index1: number, index2: number) => {
    if (index1 < 0 || index1 >= MAX_SLOTS || index2 < 0 || index2 >= MAX_SLOTS) return;
    setGameState(prev => {
      const newSlots = [...prev.slots];
      [newSlots[index1], newSlots[index2]] = [newSlots[index2], newSlots[index1]];
      return { ...prev, slots: newSlots };
    });
  }, []);

  const getFilledSlotsCount = useCallback(() => {
    return gameState.slots.filter(s => s !== null).length;
  }, [gameState.slots]);

  return {
    gameState,
    setSlot,
    addToNextEmptySlot,
    clearSlots,
    clearSlot,
    performReaction,
    performDirectReaction,
    closeModal,
    swapSlots,
    getFilledSlotsCount
  };
};
