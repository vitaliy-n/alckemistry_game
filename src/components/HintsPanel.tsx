import { useState, useMemo } from 'react';
import { Lightbulb, X, Lock, Coins, ChevronRight, Sparkles } from 'lucide-react';
import { getAllRecipes } from '../data/recipes';
import { getElementById } from '../data/elements';
import type { Recipe } from '../types';

interface HintsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  discoveredElements: string[];
  completedReactions: string[];
  currency: number;
  onSpendCurrency: (amount: number) => boolean;
}

interface HintLevel {
  level: number;
  cost: number;
  getText: (recipe: Recipe) => string;
}

export const HintsPanel = ({
  isOpen,
  onClose,
  discoveredElements,
  completedReactions,
  currency,
  onSpendCurrency
}: HintsPanelProps) => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [revealedLevel, setRevealedLevel] = useState(0);

  const availableHints = useMemo(() => {
    const allRecipes = getAllRecipes();
    return allRecipes.filter(recipe => {
      const hasAllIngredients = recipe.ingredients.every(ing => discoveredElements.includes(ing));
      const notCompleted = !completedReactions.includes(recipe.id);
      return hasAllIngredients && notCompleted;
    }).slice(0, 10);
  }, [discoveredElements, completedReactions]);

  const hintLevels: HintLevel[] = [
    {
      level: 1,
      cost: 5,
      getText: (recipe) => `Тип реакції: ${recipe.reactionType}`
    },
    {
      level: 2,
      cost: 10,
      getText: (recipe) => `Кількість інгредієнтів: ${recipe.ingredients.length}`
    },
    {
      level: 3,
      cost: 20,
      getText: (recipe) => {
        const result = getElementById(recipe.result);
        return `Результат: ${result?.category || 'невідомо'}`;
      }
    },
    {
      level: 4,
      cost: 30,
      getText: (recipe) => {
        const firstIng = getElementById(recipe.ingredients[0]);
        return `Перший інгредієнт: ${firstIng?.name || 'невідомо'}`;
      }
    },
    {
      level: 5,
      cost: 50,
      getText: (recipe) => {
        const result = getElementById(recipe.result);
        return `Результат: ${result?.name || 'невідомо'} (${result?.formula})`
      }
    }
  ];

  const revealHint = (level: number) => {
    const hint = hintLevels.find(h => h.level === level);
    if (!hint) return;
    
    if (onSpendCurrency(hint.cost)) {
      setRevealedLevel(level);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative glass rounded-3xl w-full max-w-2xl max-h-[80vh] flex flex-col overflow-hidden shadow-2xl border border-white/20">
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Lightbulb size={24} className="text-yellow-400" />
            Лабораторний асистент
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-lg">
              <Coins size={16} className="text-yellow-400" />
              <span className="font-bold text-yellow-400">{currency}</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 scrollbar-thin">
          {!selectedRecipe ? (
            <>
              <p className="text-white/60 mb-4">
                Виберіть реакцію, для якої потрібна підказка. Підказки коштують молі - внутрішню валюту гри.
              </p>
              
              {availableHints.length === 0 ? (
                <div className="text-center text-white/40 py-12">
                  <Sparkles size={48} className="mx-auto mb-3 opacity-30" />
                  <p>Вітаємо! Ви вже відкрили всі доступні реакції!</p>
                  <p className="text-sm mt-2">Спробуйте відкрити нові елементи для нових реакцій</p>
                </div>
              ) : (
                <div className="space-y-2">
                  <h3 className="font-semibold text-white/70 mb-3">
                    Доступні реакції для відкриття ({availableHints.length})
                  </h3>
                  {availableHints.map((recipe, idx) => (
                    <button
                      key={recipe.id}
                      onClick={() => {
                        setSelectedRecipe(recipe);
                        setRevealedLevel(0);
                      }}
                      className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 bg-yellow-400/20 rounded-lg flex items-center justify-center text-yellow-400 font-bold">
                          {idx + 1}
                        </span>
                        <div className="text-left">
                          <p className="font-medium">Невідома реакція #{idx + 1}</p>
                          <p className="text-sm text-white/50">
                            {recipe.ingredients.length} інгредієнт{recipe.ingredients.length > 1 ? 'и' : ''}
                          </p>
                        </div>
                      </div>
                      <ChevronRight size={20} className="text-white/30 group-hover:text-white/60 transition-colors" />
                    </button>
                  ))}
                </div>
              )}
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  setSelectedRecipe(null);
                  setRevealedLevel(0);
                }}
                className="mb-4 text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
              >
                ← Назад до списку
              </button>

              <div className="glass-dark rounded-xl p-4 mb-4">
                <h3 className="font-semibold mb-2">Підказки для реакції</h3>
                <p className="text-sm text-white/50">
                  Кожен рівень підказки розкриває більше інформації
                </p>
              </div>

              <div className="space-y-3">
                {hintLevels.map(hint => {
                  const isRevealed = revealedLevel >= hint.level;
                  const canAfford = currency >= hint.cost;
                  const isNextLevel = hint.level === revealedLevel + 1;

                  return (
                    <div
                      key={hint.level}
                      className={`p-4 rounded-xl transition-all ${
                        isRevealed 
                          ? 'bg-green-500/20 border border-green-400/30' 
                          : 'bg-white/5 border border-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
                            isRevealed ? 'bg-green-400/30 text-green-400' : 'bg-white/10 text-white/50'
                          }`}>
                            {hint.level}
                          </span>
                          <div>
                            <p className="font-medium">Підказка рівня {hint.level}</p>
                            {isRevealed ? (
                              <p className="text-sm text-green-400 mt-1">
                                {hint.getText(selectedRecipe)}
                              </p>
                            ) : (
                              <p className="text-sm text-white/40">
                                {isNextLevel ? 'Доступна для розкриття' : 'Розкрийте попередні рівні'}
                              </p>
                            )}
                          </div>
                        </div>
                        
                        {!isRevealed && (
                          <button
                            onClick={() => revealHint(hint.level)}
                            disabled={!isNextLevel || !canAfford}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                              isNextLevel && canAfford
                                ? 'bg-yellow-500/30 text-yellow-300 hover:bg-yellow-500/40'
                                : 'bg-white/10 text-white/30 cursor-not-allowed'
                            }`}
                          >
                            {isNextLevel ? (
                              <>
                                <Coins size={16} />
                                {hint.cost}
                              </>
                            ) : (
                              <Lock size={16} />
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>

        <div className="p-4 border-t border-white/10 bg-white/5">
          <div className="flex items-center gap-2 text-sm text-white/50">
            <Lightbulb size={14} />
            <span>Заробляйте молі, відкриваючи нові речовини та проводячи реакції</span>
          </div>
        </div>
      </div>
    </div>
  );
};
