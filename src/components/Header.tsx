import { Beaker, BookOpen, Trophy, Settings, Bookmark, Lightbulb, BookText, Coins, Sparkles } from 'lucide-react';
import { elements } from '../data/elements';
import { getAllRecipes } from '../data/recipes';
import type { UserProgress } from '../types';

interface HeaderProps {
  progress: UserProgress;
  onOpenEncyclopedia: () => void;
  onOpenAchievements: () => void;
  onOpenSettings: () => void;
  onOpenSavedCombinations: () => void;
  onOpenHints: () => void;
  onOpenGlossary: () => void;
  onOpenCustomBuilder: () => void;
  onOpenDailyChallenges: () => void;
  onOpenQuests: () => void;
  onOpenTutorial: () => void;
  onOpenLeaderboard: () => void;
  onResetProgress: () => void;
}

const getLevel = (discovered: number): { name: string; color: string } => {
  if (discovered >= 80) return { name: 'Алхімік', color: 'text-purple-400' };
  if (discovered >= 60) return { name: 'Хімік', color: 'text-blue-400' };
  if (discovered >= 40) return { name: 'Лаборант', color: 'text-green-400' };
  if (discovered >= 20) return { name: 'Студент', color: 'text-yellow-400' };
  return { name: 'Новачок', color: 'text-white/70' };
};

export const Header = ({ 
  progress, 
  onOpenEncyclopedia, 
  onOpenAchievements,
  onOpenSettings,
  onOpenSavedCombinations,
  onOpenHints,
  onOpenGlossary,
  onOpenCustomBuilder,
  onOpenDailyChallenges,
  onOpenQuests,
  onOpenTutorial,
  onOpenLeaderboard
}: HeaderProps) => {
  const level = getLevel(progress.discoveredElements.length);
  const totalElements = elements.length;
  const totalRecipes = getAllRecipes().length;

  return (
    <header className="glass-dark border-b border-purple-500/20 shadow-lg shadow-purple-500/10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Beaker size={36} className="text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
              <div className="absolute inset-0 blur-xl bg-purple-500/30 -z-10" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
                Хімічна Алхімія
              </h1>
              <p className="text-xs text-purple-300/70 font-medium">Інтерактивна гра з хімії v4.0</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Currency display */}
          <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-4 py-2 rounded-xl border border-yellow-500/40 shadow-lg shadow-yellow-500/20">
            <Coins size={18} className="text-yellow-400 drop-shadow-[0_0_5px_rgba(251,191,36,0.5)]" />
            <span className="font-bold text-yellow-300 text-lg">{progress.currency}</span>
            <span className="text-yellow-200/60 text-xs font-medium">молів</span>
          </div>

          <div className="hidden lg:flex items-center gap-4 text-sm">
            <div className="text-center px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20">
              <p className="text-purple-300/70 text-xs font-medium">Рівень</p>
              <p className={`font-bold ${level.color} drop-shadow-lg`}>{level.name}</p>
            </div>
            <div className="text-center px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <p className="text-blue-300/70 text-xs font-medium">Речовини</p>
              <p className="font-bold text-blue-300">{progress.discoveredElements.length}<span className="text-blue-300/50">/{totalElements}</span></p>
            </div>
            <div className="text-center px-3 py-1 rounded-lg bg-green-500/10 border border-green-500/20">
              <p className="text-green-300/70 text-xs font-medium">Реакції</p>
              <p className="font-bold text-green-300">{progress.completedReactions.length}<span className="text-green-300/50">/{totalRecipes}</span></p>
            </div>
            <div className="text-center px-3 py-1 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
              <p className="text-yellow-300/70 text-xs font-medium">Досягнення</p>
              <p className="font-bold text-yellow-300">{progress.achievements.length}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenCustomBuilder}
              className="p-2.5 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 hover:from-pink-500/30 hover:to-purple-500/30 border border-pink-500/30 hover:border-pink-400/50 transition-all hover:scale-110 hover:shadow-lg hover:shadow-pink-500/30"
              title="Створити елемент"
            >
              <Sparkles size={18} className="text-pink-300" />
            </button>

            <button
              onClick={onOpenDailyChallenges}
              className="p-2.5 rounded-xl bg-gradient-to-br from-orange-500/20 to-yellow-500/20 hover:from-orange-500/30 hover:to-yellow-500/30 border border-orange-500/30 hover:border-orange-400/50 transition-all hover:scale-110 hover:shadow-lg hover:shadow-orange-500/30"
              title="Щоденні виклики"
            >
              <Trophy size={18} className="text-orange-300" />
            </button>

            <button
              onClick={onOpenQuests}
              className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 hover:from-purple-500/30 hover:to-indigo-500/30 border border-purple-500/30 hover:border-purple-400/50 transition-all hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30"
              title="Квести"
            >
              <BookOpen size={18} className="text-purple-300" />
            </button>

            <button
              onClick={onOpenSavedCombinations}
              className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 border border-blue-500/30 hover:border-blue-400/50 transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30"
              title="Збережені комбінації"
            >
              <Bookmark size={18} className="text-blue-300" />
            </button>
            
            <button
              onClick={onOpenHints}
              className="p-2.5 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 border border-green-500/30 hover:border-green-400/50 transition-all hover:scale-110 hover:shadow-lg hover:shadow-green-500/30"
              title="Підказки"
            >
              <Lightbulb size={18} className="text-green-300" />
            </button>

            <button
              onClick={onOpenGlossary}
              className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500/20 to-blue-500/20 hover:from-indigo-500/30 hover:to-blue-500/30 border border-indigo-500/30 hover:border-indigo-400/50 transition-all hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/30"
              title="Глосарій"
            >
              <BookText size={18} className="text-indigo-300" />
            </button>

            <button
              onClick={onOpenEncyclopedia}
              className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-500/30 hover:border-cyan-400/50 transition-all hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30"
              title="Енциклопедія"
            >
              <BookOpen size={18} className="text-cyan-300" />
            </button>

            <button
              onClick={onOpenAchievements}
              className="p-2.5 rounded-xl bg-gradient-to-br from-yellow-500/20 to-amber-500/20 hover:from-yellow-500/30 hover:to-amber-500/30 border border-yellow-500/30 hover:border-yellow-400/50 transition-all hover:scale-110 hover:shadow-lg hover:shadow-yellow-500/30"
              title="Досягнення"
            >
              <Trophy size={18} className="text-yellow-300" />
            </button>

            <button
              onClick={onOpenLeaderboard}
              className="p-2.5 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 hover:from-red-500/30 hover:to-orange-500/30 border border-red-500/30 hover:border-red-400/50 transition-all hover:scale-110 hover:shadow-lg hover:shadow-red-500/30"
              title="Таблиця лідерів"
            >
              <Trophy size={18} className="text-red-300" />
            </button>

            <button
              onClick={onOpenTutorial}
              className="p-2.5 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 hover:from-teal-500/30 hover:to-cyan-500/30 border border-teal-500/30 hover:border-teal-400/50 transition-all hover:scale-110 hover:shadow-lg hover:shadow-teal-500/30"
              title="Навчання"
            >
              <Lightbulb size={18} className="text-teal-300" />
            </button>

            <button
              onClick={onOpenSettings}
              className="p-2.5 rounded-xl bg-gradient-to-br from-slate-500/20 to-gray-500/20 hover:from-slate-500/30 hover:to-gray-500/30 border border-slate-500/30 hover:border-slate-400/50 transition-all hover:scale-110 hover:shadow-lg hover:shadow-slate-500/30"
              title="Налаштування"
            >
              <Settings size={18} className="text-slate-300" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
