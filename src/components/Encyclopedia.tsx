import { useState, useMemo } from 'react';
import { BookOpen, Search, X, Beaker, FlaskConical, Atom, Flame, Droplets, Wind, Filter, Sparkles, ChevronDown } from 'lucide-react';
import type { Element, CategoryFilter } from '../types';
import { elements } from '../data/elements';
import { getRecipesByElement } from '../data/recipes';
import { ElementCard } from './ElementCard';

interface EncyclopediaProps {
  discoveredElements: string[];
  isOpen: boolean;
  onClose: () => void;
}

const categories: { id: CategoryFilter; label: string; icon: React.ReactNode }[] = [
  { id: 'all', label: 'Всі', icon: <Beaker size={16} /> },
  { id: 'елемент', label: 'Елементи', icon: <Atom size={16} /> },
  { id: 'сполука', label: 'Сполуки', icon: <Sparkles size={16} /> },
  { id: 'кислота', label: 'Кислоти', icon: <FlaskConical size={16} /> },
  { id: 'основа', label: 'Основи', icon: <Droplets size={16} /> },
  { id: 'сіль', label: 'Солі', icon: <Filter size={16} /> },
  { id: 'оксид', label: 'Оксиди', icon: <Flame size={16} /> },
  { id: 'газ', label: 'Гази', icon: <Wind size={16} /> },
];

export const Encyclopedia = ({ discoveredElements, isOpen, onClose }: EncyclopediaProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);

  const discoveredElementsList = useMemo(() => {
    return elements.filter(el => discoveredElements.includes(el.id));
  }, [discoveredElements]);

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

  const elementRecipes = useMemo(() => {
    if (!selectedElement) return [];
    return getRecipesByElement(selectedElement.id).filter(r => 
      discoveredElements.includes(r.result) && 
      r.ingredients.every(i => discoveredElements.includes(i))
    );
  }, [selectedElement, discoveredElements]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative glass rounded-3xl w-full max-w-4xl h-[80vh] flex flex-col overflow-hidden shadow-2xl border border-white/20">
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <BookOpen size={24} className="text-green-400" />
            Енциклопедія
            <span className="text-sm font-normal text-white/50 ml-2">
              {discoveredElements.length}/{elements.length} речовин
            </span>
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-4 border-b border-white/10 space-y-3">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Пошук речовин..."
              className="w-full bg-white/10 border border-white/10 rounded-lg pl-9 pr-3 py-2 text-sm placeholder:text-white/40 focus:outline-none focus:border-green-400/50 transition-colors"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm transition-all
                  ${activeCategory === cat.id 
                    ? 'bg-green-500/30 text-green-300 border border-green-400/30' 
                    : 'bg-white/5 text-white/60 border border-transparent hover:bg-white/10'}
                `}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
          <div className="w-1/2 border-r border-white/10 overflow-y-auto p-4 scrollbar-thin">
            {filteredElements.length === 0 ? (
              <div className="text-center text-white/40 py-12">
                <BookOpen size={48} className="mx-auto mb-3 opacity-30" />
                <p>Нічого не знайдено</p>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-3">
                {filteredElements.map(element => (
                  <button
                    key={element.id}
                    onClick={() => setSelectedElement(element)}
                    className={`
                      flex flex-col items-center p-3 rounded-xl transition-all
                      ${selectedElement?.id === element.id 
                        ? 'bg-green-500/20 border border-green-400/30' 
                        : 'bg-white/5 hover:bg-white/10 border border-transparent'}
                    `}
                  >
                    <ElementCard element={element} size="small" />
                    <span className="text-xs mt-2 text-center truncate w-full">{element.name}</span>
                    <span className="text-[10px] text-white/50 font-mono">{element.formula}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="w-1/2 overflow-y-auto p-4 scrollbar-thin">
            {selectedElement ? (
              <div>
                <div className="text-center mb-6">
                  <div className="text-6xl mb-2">{selectedElement.emoji}</div>
                  <h3 className="text-2xl font-bold">{selectedElement.name}</h3>
                  <p className="text-white/60 font-mono text-lg">{selectedElement.formula}</p>
                  <p className="text-white/40 text-sm">{selectedElement.nameEn}</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Beaker size={16} className="text-blue-400" />
                      Опис
                    </h4>
                    <p className="text-white/70 text-sm">{selectedElement.description}</p>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Властивості</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-white/50">Категорія:</span>
                        <span className="capitalize">{selectedElement.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/50">Стан:</span>
                        <span>{selectedElement.state}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/50">Базовий:</span>
                        <span>{selectedElement.isBasic ? 'Так' : 'Ні'}</span>
                      </div>
                    </div>
                  </div>

                  {elementRecipes.length > 0 && (
                    <div className="bg-white/5 rounded-lg p-4">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <FlaskConical size={16} className="text-purple-400" />
                        Відомі реакції ({elementRecipes.length})
                      </h4>
                      <div className="space-y-2 max-h-48 overflow-y-auto scrollbar-thin">
                        {elementRecipes.map(recipe => (
                          <div key={recipe.id} className="text-sm bg-black/20 rounded-lg p-2">
                            <p className="font-mono text-blue-300 text-xs">{recipe.equation}</p>
                            <p className="text-white/50 text-xs mt-1">{recipe.reactionType}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-white/40">
                <div className="text-center">
                  <ChevronDown size={48} className="mx-auto mb-3 opacity-30" />
                  <p>Виберіть речовину зі списку</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
