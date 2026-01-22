import { useState, useMemo, useCallback, useEffect } from 'react';
import type { CustomElement, Element, CategoryFilter, Recipe } from '../types';
import { elements } from '../data/elements';
import { getAllRecipes } from '../data/recipes';
import { ElementCard } from './ElementCard';
import { getAvailableReactionsForElement } from '../utils/reactionHelpers';
import { Search, Beaker, FlaskConical, Atom, Flame, Droplets, Wind, Sparkles, Zap, X, ChevronDown, MousePointer2, Wand2, Grid3X3, List, ArrowRight } from 'lucide-react';

interface SidebarProps {
  discoveredElements: string[];
  customElements?: CustomElement[];
  currentSlots?: (Element | null)[];
  onElementClick?: (element: Element) => void;
  onReaction?: (recipe: Recipe) => void;
}

const categories: { id: CategoryFilter; label: string; icon: React.ReactNode; color: string }[] = [
  { id: 'all', label: 'Всі', icon: <Beaker size={14} />, color: 'from-indigo-500 to-purple-500' },
  { id: 'елемент', label: 'Елементи', icon: <Atom size={14} />, color: 'from-blue-500 to-cyan-500' },
  { id: 'сполука', label: 'Сполуки', icon: <Sparkles size={14} />, color: 'from-purple-500 to-pink-500' },
  { id: 'кислота', label: 'Кислоти', icon: <FlaskConical size={14} />, color: 'from-red-500 to-orange-500' },
  { id: 'основа', label: 'Основи', icon: <Droplets size={14} />, color: 'from-green-500 to-emerald-500' },
  { id: 'сіль', label: 'Солі', icon: <Zap size={14} />, color: 'from-slate-400 to-zinc-500' },
  { id: 'оксид', label: 'Оксиди', icon: <Flame size={14} />, color: 'from-orange-500 to-amber-500' },
  { id: 'газ', label: 'Гази', icon: <Wind size={14} />, color: 'from-sky-400 to-blue-400' },
  { id: 'custom', label: 'Custom', icon: <Sparkles size={14} />, color: 'from-yellow-500 to-amber-500' },
];

const getCategoryGradient = (category: string): string => {
  switch (category) {
    case 'елемент': return 'from-blue-500 to-cyan-500';
    case 'сполука': return 'from-purple-500 to-pink-500';
    case 'кислота': return 'from-red-500 to-orange-500';
    case 'основа': return 'from-green-500 to-emerald-500';
    case 'сіль': return 'from-slate-400 to-zinc-500';
    case 'оксид': return 'from-orange-500 to-amber-500';
    case 'газ': return 'from-sky-400 to-blue-400';
    default: return 'from-gray-500 to-gray-600';
  }
};

export const Sidebar = ({
  discoveredElements,
  customElements = [],
  currentSlots = [],
  onElementClick,
  onReaction
}: SidebarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);
  const [showCategories, setShowCategories] = useState(false);
  const [mode, setMode] = useState<'add' | 'quick'>('quick');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [reactionFeedback, setReactionFeedback] = useState<{ show: boolean; success: boolean; message: string }>({ show: false, success: false, message: '' });

  // Show feedback when reaction happens
  useEffect(() => {
    if (reactionFeedback.show) {
      const timer = setTimeout(() => {
        setReactionFeedback({ show: false, success: false, message: '' });
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [reactionFeedback.show]);

  const allRecipes = useMemo(() => getAllRecipes(), []);

  const customElementsList = useMemo((): Element[] => {
    return customElements.map((ce): Element => ({
      id: ce.id,
      name: ce.name,
      nameEn: ce.name,
      formula: ce.formula,
      category: 'custom',
      emoji: ce.emoji,
      description: ce.description,
      isBasic: false,
      state: 'тверда',
      discoveredAt: ce.createdAt,
      isCustom: true,
      createdBy: 'user',
      color: ce.color,
      rarity: 'epic'
    }));
  }, [customElements]);

  const discoveredSet = useMemo(() => {
    const ids = new Set<string>(discoveredElements);
    for (const ce of customElementsList) ids.add(ce.id);
    return ids;
  }, [discoveredElements, customElementsList]);

  const allElements = useMemo(() => {
    return [...elements, ...customElementsList];
  }, [customElementsList]);

  const elementById = useMemo(() => {
    return new Map<string, Element>(allElements.map(el => [el.id, el]));
  }, [allElements]);

  const discoveredElementsList = useMemo(() => {
    const list: Element[] = [];
    for (const id of discoveredSet) {
      const el = elementById.get(id);
      if (el) {
        list.push(el);
      } else {
        list.push({
          id,
          name: `Невідомо: ${id}`,
          nameEn: `Unknown: ${id}`,
          formula: id,
          category: 'сполука',
          emoji: '❔',
          description: 'Елемент відсутній у базі даних.',
          isBasic: false,
          state: 'тверда'
        });
      }
    }
    return list;
  }, [discoveredSet, elementById]);

  const filteredElements = useMemo(() => {
    return discoveredElementsList.filter(el => {
      const matchesSearch = searchQuery === '' || 
        el.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        el.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        el.formula.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = activeCategory === 'all' || el.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [discoveredElementsList, searchQuery, activeCategory]);

  const compatibleElements = useMemo(() => {
    if (!selectedElement) return new Map<string, Recipe>();
    
    const compatMap = new Map<string, Recipe>();
    
    for (const recipe of allRecipes) {
      if (recipe.ingredients.includes(selectedElement.id) && recipe.ingredients.length === 2) {
        const otherIngredient = recipe.ingredients.find(ing => ing !== selectedElement.id);
        if (otherIngredient && discoveredSet.has(otherIngredient)) {
          compatMap.set(otherIngredient, recipe);
        }
      }
    }
    
    return compatMap;
  }, [selectedElement, allRecipes, discoveredSet]);

  const handleQuickPick = useCallback((element: Element) => {
    if (!selectedElement) {
      setSelectedElement(element);
      return;
    }

    if (selectedElement.id === element.id) {
      setSelectedElement(null);
      return;
    }

    const recipe = compatibleElements.get(element.id);
    if (recipe) {
      onReaction?.(recipe);
      setReactionFeedback({ 
        show: true, 
        success: true, 
        message: `${selectedElement.formula} + ${element.formula} → ${recipe.result}` 
      });
      setSelectedElement(null);
      return;
    }

    setSelectedElement(element);
  }, [selectedElement, compatibleElements, onReaction]);

  const handleAddClick = useCallback((element: Element) => {
    onElementClick?.(element);
  }, [onElementClick]);

  const clearSelection = useCallback(() => {
    setSelectedElement(null);
  }, []);

  const currentSlotsSafe = currentSlots;

  const totalElements = elements.length + customElementsList.length;
  const currentCat = categories.find(c => c.id === activeCategory);

  return (
    <div className="w-80 h-full flex flex-col rounded-2xl border border-purple-500/30 shadow-2xl overflow-hidden glass-dark" style={{ minHeight: 0 }}>
      <div className="flex-shrink-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-b border-purple-500/30 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
              <Beaker size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Лабораторія</h2>
              <p className="text-xs text-purple-300/70">{discoveredElementsList.length} / {totalElements} елементів</p>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <button
            onClick={() => {
              setMode('add');
              setSelectedElement(null);
            }}
            className={`flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-sm transition-all border ${
              mode === 'add'
                ? 'bg-purple-500/30 border-purple-400/50 text-white'
                : 'bg-purple-900/20 border-purple-500/20 text-purple-200/80 hover:bg-purple-900/35'
            }`}
          >
            <MousePointer2 size={16} />
            Додати
          </button>
          <button
            onClick={() => setMode('quick')}
            className={`flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-sm transition-all border ${
              mode === 'quick'
                ? 'bg-green-500/25 border-green-400/50 text-white'
                : 'bg-purple-900/20 border-purple-500/20 text-purple-200/80 hover:bg-purple-900/35'
            }`}
          >
            <Wand2 size={16} />
            Швидко
          </button>
        </div>

        <div className="mt-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1 bg-purple-900/20 border border-purple-500/20 rounded-xl p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-purple-500/30 text-white' : 'text-purple-200/70 hover:bg-purple-900/30'}`}
            >
              <Grid3X3 size={16} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-purple-500/30 text-white' : 'text-purple-200/70 hover:bg-purple-900/30'}`}
            >
              <List size={16} />
            </button>
          </div>

          <div className="text-[11px] text-purple-200/60 text-right">
            {mode === 'quick' ? '1) вибери  2) натисни зелене' : 'клік або перетягни'}
          </div>
        </div>

        <div className="mt-3 relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={mode === 'quick' ? 'Пошук (швидка реакція)...' : 'Пошук елементів...'}
            className="w-full bg-purple-900/20 border border-purple-500/30 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-purple-400/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400 transition-all"
          />
        </div>

        <div className="mt-3">
          <button
            onClick={() => setShowCategories(!showCategories)}
            className="w-full flex items-center justify-between px-3 py-2 bg-purple-900/20 hover:bg-purple-900/35 rounded-xl transition-all text-sm text-purple-200 border border-purple-500/20"
          >
            <span className="flex items-center gap-2">
              {currentCat?.icon}
              <span className="font-medium">{currentCat?.label}</span>
              <span className="text-purple-400/60">({filteredElements.length})</span>
            </span>
            <ChevronDown size={16} className={`transition-transform ${showCategories ? 'rotate-180' : ''}`} />
          </button>

          {showCategories && (
            <div className="mt-2 grid grid-cols-4 gap-1.5 animate-pop-in">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setShowCategories(false);
                  }}
                  className={`flex flex-col items-center gap-1 p-2 rounded-lg text-xs transition-all ${
                    activeCategory === cat.id
                      ? `bg-gradient-to-br ${cat.color} text-white shadow-lg scale-105`
                      : 'bg-purple-900/20 text-purple-300/70 hover:bg-purple-800/30 hover:text-white'
                  }`}
                >
                  {cat.icon}
                  <span className="text-[9px] truncate w-full text-center">{cat.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Reaction feedback toast */}
      {reactionFeedback.show && (
        <div className={`flex-shrink-0 mx-3 mt-3 p-3 rounded-xl border animate-fade-in-up ${
          reactionFeedback.success 
            ? 'bg-gradient-to-r from-green-600/30 to-emerald-600/30 border-green-400/50' 
            : 'bg-gradient-to-r from-red-600/30 to-orange-600/30 border-red-400/50'
        }`}>
          <div className="flex items-center justify-center gap-2">
            {reactionFeedback.success ? (
              <Sparkles size={16} className="text-green-400" />
            ) : (
              <X size={16} className="text-red-400" />
            )}
            <span className={`text-sm font-medium ${reactionFeedback.success ? 'text-green-300' : 'text-red-300'}`}>
              {reactionFeedback.message}
            </span>
          </div>
        </div>
      )}

      {mode === 'quick' && selectedElement && (
        <div className="flex-shrink-0 mx-3 mt-3 p-3 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl border border-green-400/40 shadow-lg shadow-green-500/10 animate-fade-in-up">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getCategoryGradient(selectedElement.category)} flex items-center justify-center text-2xl shadow-lg animate-heartbeat`}>
                {selectedElement.emoji}
              </div>
              <div>
                <p className="font-bold text-white text-sm">{selectedElement.name}</p>
                <p className="text-xs text-purple-200/80 font-mono">{selectedElement.formula}</p>
              </div>
            </div>
            <button onClick={clearSelection} className="p-1.5 rounded-lg bg-red-500/20 hover:bg-red-500/40 text-red-300 transition-all">
              <X size={16} />
            </button>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-green-200/90">
            <Zap size={14} className="text-yellow-400 animate-pulse" />
            <span className="font-semibold">{compatibleElements.size}</span> сумісних елементів
          </div>
          <div className="mt-2 flex items-center justify-center gap-1 text-[11px] text-green-200/70">
            <ArrowRight size={12} />
            Натисніть на зелений елемент для реакції
          </div>
        </div>
      )}

      <div className="flex-1 min-h-0 px-3 pb-3 pt-3">
        <div
          className="h-full min-h-0 overflow-y-auto pr-2"
          style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(168, 85, 247, 0.6) rgba(20, 20, 35, 0.25)' }}
        >
          {filteredElements.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-purple-300/40">
              <Beaker size={48} className="mb-3 opacity-30" />
              <p className="text-sm font-medium">Нічого не знайдено</p>
              <p className="text-xs mt-1">Спробуйте інший фільтр</p>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-3 gap-2">
              {filteredElements.map((element, index) => {
                const isSelected = mode === 'quick' && selectedElement?.id === element.id;
                const isCompatible = mode === 'quick' && selectedElement && compatibleElements.has(element.id);
                const recipe = isCompatible ? compatibleElements.get(element.id) : null;

                const reactionCount = mode === 'add'
                  ? getAvailableReactionsForElement(element.id, currentSlotsSafe)
                  : 0;
                const hasSlots = mode === 'add' && currentSlotsSafe.some((s) => s !== null);
                const canReactWithSlots = mode === 'add' && hasSlots && reactionCount > 0;

                const dim = mode === 'quick' && selectedElement && !isSelected && !isCompatible;

                return (
                  <div key={element.id} className="animate-pop-in" style={{ animationDelay: `${index * 0.008}s` }}>
                    <div
                      className={`relative rounded-xl transition-all ${
                        isSelected
                          ? 'ring-2 ring-green-300 shadow-lg shadow-green-500/40'
                          : isCompatible
                            ? 'ring-2 ring-green-400 shadow-lg shadow-green-500/40 animate-pulse'
                            : canReactWithSlots
                              ? 'ring-2 ring-purple-400/70'
                              : ''
                      } ${dim ? 'opacity-20 grayscale' : 'opacity-100'}`}
                      title={recipe ? recipe.equation : element.description}
                    >
                      <ElementCard
                        element={element}
                        onClick={() => {
                          if (mode === 'add') {
                            handleAddClick(element);
                          } else {
                            handleQuickPick(element);
                          }
                        }}
                        size="medium"
                        reactionCount={reactionCount}
                        showReactionHint={mode === 'add'}
                      />

                      {isCompatible && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                          <Zap size={12} className="text-white" />
                        </div>
                      )}
                      {isSelected && (
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-blue-500/90 rounded text-[9px] text-white font-medium whitespace-nowrap">
                          Вибрано
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="space-y-1">
              {filteredElements.map((element) => {
                const isSelected = mode === 'quick' && selectedElement?.id === element.id;
                const isCompatible = mode === 'quick' && selectedElement && compatibleElements.has(element.id);
                const dim = mode === 'quick' && selectedElement && !isSelected && !isCompatible;

                const reactionCount = mode === 'add'
                  ? getAvailableReactionsForElement(element.id, currentSlotsSafe)
                  : 0;

                return (
                  <button
                    key={element.id}
                    onClick={() => {
                      if (mode === 'add') {
                        handleAddClick(element);
                      } else {
                        handleQuickPick(element);
                      }
                    }}
                    className={`w-full flex items-center gap-3 p-2 rounded-xl transition-all border ${
                      isSelected
                        ? 'bg-green-500/20 border-green-400/50'
                        : isCompatible
                          ? 'bg-green-500/10 border-green-400/30 hover:bg-green-500/15'
                          : 'bg-purple-900/20 border-purple-500/20 hover:bg-purple-900/30'
                    } ${dim ? 'opacity-25 grayscale' : ''}`}
                  >
                    <span className="text-2xl">{element.emoji}</span>
                    <div className="flex-1 text-left">
                      <p className="text-sm font-semibold text-white">{element.name}</p>
                      <p className="text-xs text-purple-200/70 font-mono">{element.formula}</p>
                    </div>
                    {mode === 'add' && reactionCount > 0 && (
                      <span className="px-2 py-1 bg-purple-500/20 border border-purple-400/30 rounded-lg text-xs text-purple-100">
                        {reactionCount}
                      </span>
                    )}
                    {isCompatible && <Zap size={16} className="text-green-300" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
