import { useState } from 'react';
import { Bookmark, X, Star, Trash2, Play, Search } from 'lucide-react';
import type { SavedCombination, Element } from '../types';
import { getElementById } from '../data/elements';

interface SavedCombinationsProps {
  combinations: SavedCombination[];
  isOpen: boolean;
  onClose: () => void;
  onRemove: (id: string) => void;
  onToggleFavorite: (id: string) => void;
  onLoadCombination: (elements: Element[]) => void;
}

export const SavedCombinations = ({
  combinations,
  isOpen,
  onClose,
  onRemove,
  onToggleFavorite,
  onLoadCombination
}: SavedCombinationsProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  if (!isOpen) return null;

  const filteredCombinations = combinations.filter(combo => {
    const matchesSearch = searchQuery === '' || 
      combo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      combo.notes.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFavorite = !showFavoritesOnly || combo.isFavorite;
    return matchesSearch && matchesFavorite;
  });

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('uk-UA', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleLoad = (combo: SavedCombination) => {
    const elements = combo.elements
      .map(id => getElementById(id))
      .filter((el): el is Element => el !== undefined);
    onLoadCombination(elements);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative glass rounded-3xl w-full max-w-2xl max-h-[80vh] flex flex-col overflow-hidden shadow-2xl border border-white/20">
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Bookmark size={24} className="text-green-400" />
            Збережені комбінації
            <span className="text-sm font-normal text-white/50 ml-2">
              ({combinations.length})
            </span>
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-4 border-b border-white/10 flex gap-3">
          <div className="flex-1 relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Пошук комбінацій..."
              className="w-full bg-white/10 border border-white/10 rounded-lg pl-9 pr-3 py-2 text-sm placeholder:text-white/40 focus:outline-none focus:border-green-400/50 transition-colors"
            />
          </div>
          <button
            onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              showFavoritesOnly 
                ? 'bg-yellow-500/30 text-yellow-300 border border-yellow-400/30' 
                : 'bg-white/10 hover:bg-white/20'
            }`}
          >
            <Star size={16} fill={showFavoritesOnly ? 'currentColor' : 'none'} />
            Обрані
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 scrollbar-thin">
          {filteredCombinations.length === 0 ? (
            <div className="text-center text-white/40 py-12">
              <Bookmark size={48} className="mx-auto mb-3 opacity-30" />
              <p>{combinations.length === 0 ? 'Немає збережених комбінацій' : 'Нічого не знайдено'}</p>
              <p className="text-sm mt-2">Збережіть комбінацію з робочої зони</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredCombinations.map(combo => {
                const elements = combo.elements.map(id => getElementById(id)).filter(Boolean);
                
                return (
                  <div
                    key={combo.id}
                    className={`glass-dark rounded-xl p-4 transition-all hover:bg-white/5 ${
                      combo.isFavorite ? 'border border-yellow-400/30' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold flex items-center gap-2">
                          {combo.name}
                          {combo.isFavorite && <Star size={14} className="text-yellow-400" fill="currentColor" />}
                        </h3>
                        <p className="text-xs text-white/40">{formatDate(combo.createdAt)}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => onToggleFavorite(combo.id)}
                          className={`p-2 rounded-lg transition-all ${
                            combo.isFavorite 
                              ? 'bg-yellow-500/20 text-yellow-400' 
                              : 'bg-white/10 hover:bg-white/20 text-white/60'
                          }`}
                          title={combo.isFavorite ? 'Видалити з обраних' : 'Додати до обраних'}
                        >
                          <Star size={16} fill={combo.isFavorite ? 'currentColor' : 'none'} />
                        </button>
                        <button
                          onClick={() => handleLoad(combo)}
                          className="p-2 rounded-lg bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-all"
                          title="Завантажити у робочу зону"
                        >
                          <Play size={16} />
                        </button>
                        <button
                          onClick={() => onRemove(combo.id)}
                          className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all"
                          title="Видалити"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="flex gap-2 flex-wrap mb-2">
                      {elements.map((el, idx) => el && (
                        <span key={idx} className="px-2 py-1 bg-white/10 rounded-lg text-sm flex items-center gap-1">
                          <span>{el.emoji}</span>
                          <span className="font-mono text-xs">{el.formula}</span>
                        </span>
                      ))}
                    </div>

                    {combo.notes && (
                      <p className="text-sm text-white/60 mt-2 italic">"{combo.notes}"</p>
                    )}

                    {combo.result && (
                      <div className="mt-2 pt-2 border-t border-white/10">
                        <span className="text-xs text-white/40">Результат: </span>
                        <span className="text-green-400 text-sm">{getElementById(combo.result)?.name}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
