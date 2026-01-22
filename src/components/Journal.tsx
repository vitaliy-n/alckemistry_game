import { useMemo } from 'react';
import { ScrollText, Clock, Bookmark, BookmarkCheck, ChevronRight } from 'lucide-react';
import { recipes, getRecipeById } from '../data/recipes';
import { getElementById } from '../data/elements';
import type { UserProgress } from '../types';

interface JournalProps {
  progress: UserProgress;
  onToggleBookmark: (recipeId: string) => void;
}

export const Journal = ({ progress, onToggleBookmark }: JournalProps) => {
  const recentReactions = useMemo(() => {
    return progress.reactionHistory.slice(0, 15).map(item => {
      const recipe = getRecipeById(item.recipeId);
      if (!recipe) return null;
      const result = getElementById(recipe.result);
      return { ...item, recipe, result };
    }).filter(Boolean);
  }, [progress.reactionHistory]);

  const bookmarkedReactions = useMemo(() => {
    return progress.bookmarks.map(id => {
      const recipe = getRecipeById(id);
      if (!recipe) return null;
      const result = getElementById(recipe.result);
      return { recipe, result };
    }).filter(Boolean);
  }, [progress.bookmarks]);

  const formatTime = (timestamp: number) => {
    const diff = Date.now() - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    
    if (minutes < 1) return 'Щойно';
    if (minutes < 60) return `${minutes} хв тому`;
    if (hours < 24) return `${hours} год тому`;
    return new Date(timestamp).toLocaleDateString('uk-UA');
  };

  return (
    <div className="w-72 h-full glass-dark rounded-2xl flex flex-col overflow-hidden">
      <div className="p-4 border-b border-white/10">
        <h2 className="text-lg font-bold flex items-center gap-2">
          <ScrollText size={20} className="text-purple-400" />
          Журнал хіміка
        </h2>
        <p className="text-xs text-white/50 mt-1">
          Всього реакцій: {progress.totalReactions}
        </p>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-thin">
        {bookmarkedReactions.length > 0 && (
          <div className="p-3 border-b border-white/10">
            <h3 className="text-sm font-semibold text-yellow-400 flex items-center gap-1 mb-2">
              <Bookmark size={14} />
              Закладки ({bookmarkedReactions.length})
            </h3>
            <div className="space-y-2">
              {bookmarkedReactions.map((item) => item && (
                <div
                  key={item.recipe.id}
                  className="flex items-center gap-2 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
                >
                  <span className="text-xl">{item.result?.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{item.result?.name}</p>
                    <p className="text-xs text-white/50 font-mono truncate">{item.recipe.equation}</p>
                  </div>
                  <button
                    onClick={() => onToggleBookmark(item.recipe.id)}
                    className="p-1 opacity-0 group-hover:opacity-100 transition-opacity text-yellow-400"
                  >
                    <BookmarkCheck size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="p-3">
          <h3 className="text-sm font-semibold text-white/70 flex items-center gap-1 mb-2">
            <Clock size={14} />
            Останні реакції
          </h3>
          
          {recentReactions.length === 0 ? (
            <div className="text-center text-white/40 py-6">
              <p className="text-sm">Ще немає реакцій</p>
              <p className="text-xs mt-1">Змішайте елементи для початку</p>
            </div>
          ) : (
            <div className="space-y-2">
              {recentReactions.map((item, index) => item && (
                <div
                  key={`${item.recipeId}-${index}`}
                  className="flex items-center gap-2 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
                >
                  <span className="text-xl">{item.result?.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{item.result?.name}</p>
                    <p className="text-xs text-white/40">{formatTime(item.timestamp)}</p>
                  </div>
                  <ChevronRight size={14} className="text-white/30 group-hover:text-white/60 transition-colors" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="p-3 border-t border-white/10 bg-white/5">
        <div className="text-xs text-white/50 text-center">
          <p>Унікальних реакцій: {progress.completedReactions.length}/{recipes.length}</p>
        </div>
      </div>
    </div>
  );
};
