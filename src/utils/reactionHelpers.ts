import { getAllRecipes } from '../data/recipes';
import type { Element } from '../types';

export const countPossibleReactions = (selectedElements: (Element | null)[]): number => {
  const validElements = selectedElements.filter((el): el is Element => el !== null);
  
  if (validElements.length === 0) return 0;
  
  const allRecipes = getAllRecipes();
  const elementIds = validElements.map(el => el.id);
  
  let count = 0;
  
  for (const recipe of allRecipes) {
    const recipeIngredients = recipe.ingredients;
    
    if (recipeIngredients.length !== elementIds.length) continue;
    
    const sortedRecipe = [...recipeIngredients].sort();
    const sortedSelected = [...elementIds].sort();
    
    if (JSON.stringify(sortedRecipe) === JSON.stringify(sortedSelected)) {
      count++;
    }
  }
  
  return count;
};

export const getAvailableReactionsForElement = (
  elementId: string,
  currentSlots: (Element | null)[]
): number => {
  const allRecipes = getAllRecipes();
  const currentElementIds = currentSlots
    .filter((el): el is Element => el !== null)
    .map(el => el.id);
  
  const potentialSlots = [...currentElementIds, elementId];
  
  let count = 0;
  
  for (const recipe of allRecipes) {
    if (recipe.ingredients.includes(elementId)) {
      const hasAllIngredients = recipe.ingredients.every(ing => 
        potentialSlots.includes(ing)
      );
      
      if (hasAllIngredients) {
        count++;
      } else {
        const missingCount = recipe.ingredients.filter(
          ing => !potentialSlots.includes(ing)
        ).length;
        
        if (missingCount <= 4 - potentialSlots.length) {
          count++;
        }
      }
    }
  }
  
  return count;
};
