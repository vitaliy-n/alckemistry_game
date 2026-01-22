import { useState, useMemo } from 'react';
import { Clock, Bookmark, BookmarkCheck, Flame, Droplets, Zap, Filter } from 'lucide-react';
import type { UserProgress } from '../types';
import { getRecipeById } from '../data/recipes';
import { getElementById } from '../data/elements';

interface TimelineJournalProps {
  progress: UserProgress;
  onToggleBookmark: (recipeId: string) => void;
}

type FilterType = 'all' | 'today' | 'week' | 'bookmarks';

export const TimelineJournal = ({ progress, onToggleBookmark }: TimelineJournalProps) => {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredHistory = useMemo(() => {
    const now = Date.now();
    const oneDayAgo = now - 24 * 60 * 60 * 1000;
    const oneWeekAgo = now - 7 * 24 * 60 * 60 * 1000;

    return progress.reactionHistory.filter(item => {
      if (filter === 'bookmarks') {
        return progress.bookmarks.includes(item.recipeId);
      }
      if (filter === 'today') {
        return item.timestamp >= oneDayAgo;
      }
      if (filter === 'week') {
        return item.timestamp >= oneWeekAgo;
      }
      return true;
    });
  }, [progress.reactionHistory, progress.bookmarks, filter]);

  const groupedByDate = useMemo(() => {
    const groups: { [key: string]: typeof filteredHistory } = {};
    
    filteredHistory.forEach(item => {
      const date = new Date(item.timestamp);
      const dateKey = date.toLocaleDateString('uk-UA', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
      
      if (!groups[dateKey]) {
        groups[dateKey] = [];
      }
      groups[dateKey].push(item);
    });

    return groups;
  }, [filteredHistory]);

  const getReactionIcon = (type: string) => {
    switch (type) {
      case 'синтез': return <Zap size={16} className="text-blue-400" />;
      case 'розклад': return <Flame size={16} className="text-red-400" />;
      case 'нейтралізація': return <Droplets size={16} className="text-green-400" />;
      default: return <Zap size={16} className="text-purple-400" />;
    }
  };

  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString('uk-UA', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="w-80 h-full glass-vibrant rounded-3xl flex flex-col overflow-hidden shadow-2xl border-2 border-white/20 animate-slide-in-right">
      <div className="p-5 border-b border-white/20 bg-gradient-to-r from-green-500/20 to-emerald-500/20">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Clock size={24} className="text-green-400 animate-glow-pulse" />
            Журнал хіміка
          </h2>
          <span className="text-sm font-bold text-white bg-gradient-to-r from-green-500 to-emerald-500 px-3 py-1.5 rounded-full shadow-lg">
            {filteredHistory.length}
          </span>
        </div>

        <div className="flex gap-2 overflow-x-auto">
          {[
            { id: 'all' as const, label: 'Всі', icon: <Filter size={14} /> },
            { id: 'today' as const, label: 'Сьогодні', icon: <Clock size={14} /> },
            { id: 'week' as const, label: 'Тиждень', icon: <Clock size={14} /> },
            { id: 'bookmarks' as const, label: 'Закладки', icon: <Bookmark size={14} /> }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs whitespace-nowrap transition-all font-medium ${
                filter === f.id
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg scale-105'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {f.icon}
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 scrollbar-thin">
        {Object.keys(groupedByDate).length === 0 ? (
          <div className="text-center text-white/40 py-12">
            <Clock size={48} className="mx-auto mb-3 opacity-30" />
            <p className="text-sm">Історія порожня</p>
            <p className="text-xs mt-2">Проведіть першу реакцію!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {Object.entries(groupedByDate).map(([date, items]) => (
              <div key={date} className="relative">
                <div className="sticky top-0 z-10 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm px-3 py-2 rounded-xl mb-3 border border-white/10">
                  <p className="text-sm font-semibold text-white/90">{date}</p>
                </div>

                <div className="space-y-2 relative pl-6">
                  <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-emerald-400 opacity-30" />

                  {items.map((item, index) => {
                    const recipe = getRecipeById(item.recipeId);
                    if (!recipe) return null;

                    const resultElement = getElementById(recipe.result);
                    const isBookmarked = progress.bookmarks.includes(item.recipeId);

                    return (
                      <div
                        key={`${item.recipeId}-${item.timestamp}`}
                        className="relative group"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <div className="absolute -left-5 top-3 w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 border-2 border-white/20 shadow-lg" />

                        <div className="glass-dark rounded-xl p-3 hover:bg-white/10 transition-all cursor-pointer">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div className="flex items-center gap-2">
                              {getReactionIcon(recipe.reactionType)}
                              <span className="text-xs text-white/50">{formatTime(item.timestamp)}</span>
                            </div>
                            <button
                              onClick={() => onToggleBookmark(item.recipeId)}
                              className={`p-1 rounded-lg transition-all ${
                                isBookmarked
                                  ? 'text-yellow-400 bg-yellow-400/20'
                                  : 'text-white/40 hover:text-yellow-400 hover:bg-yellow-400/10'
                              }`}
                            >
                              {isBookmarked ? <BookmarkCheck size={14} /> : <Bookmark size={14} />}
                            </button>
                          </div>

                          <div className="flex items-center gap-2 mb-2">
                            {recipe.ingredients.slice(0, 2).map((ingId, i) => {
                              const ing = getElementById(ingId);
                              return ing ? (
                                <span key={i} className="text-lg">{ing.emoji}</span>
                              ) : null;
                            })}
                            {recipe.ingredients.length > 2 && (
                              <span className="text-xs text-white/50">+{recipe.ingredients.length - 2}</span>
                            )}
                            <span className="text-white/50">→</span>
                            {resultElement && (
                              <span className="text-lg">{resultElement.emoji}</span>
                            )}
                          </div>

                          <p className="text-sm font-medium mb-1">{resultElement?.name}</p>
                          <p className="text-xs text-white/60 font-mono">{recipe.equation}</p>
                          
                          <div className="mt-2 flex items-center gap-2">
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                              recipe.energy === 'екзотермічна' 
                                ? 'bg-red-400/20 text-red-300' 
                                : 'bg-blue-400/20 text-blue-300'
                            }`}>
                              {recipe.energy}
                            </span>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/70">
                              {recipe.reactionType}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="p-4 border-t border-white/20 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
        <div className="flex items-center justify-between text-xs text-white/60">
          <span>Всього реакцій: {progress.totalReactions}</span>
          <span>Закладок: {progress.bookmarks.length}</span>
        </div>
      </div>
    </div>
  );
};
