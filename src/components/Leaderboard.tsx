import { useState, useMemo } from 'react';
import { X, Trophy, Medal, Crown, TrendingUp, Users, Zap, Target } from 'lucide-react';
import type { UserProgress } from '../types';

interface LeaderboardProps {
  isOpen: boolean;
  onClose: () => void;
  currentProgress: UserProgress;
}

interface LeaderboardEntry {
  rank: number;
  name: string;
  avatar: string;
  score: number;
  elements: number;
  reactions: number;
  achievements: number;
  isCurrentUser?: boolean;
}

type LeaderboardCategory = 'overall' | 'elements' | 'reactions' | 'achievements';

export const Leaderboard = ({ isOpen, onClose, currentProgress }: LeaderboardProps) => {
  const [category, setCategory] = useState<LeaderboardCategory>('overall');

  const mockLeaderboard = useMemo((): LeaderboardEntry[] => {
    const entries: LeaderboardEntry[] = [
      { rank: 1, name: 'Хімік-Майстер', avatar: '👨‍🔬', score: 9850, elements: 89, reactions: 120, achievements: 18 },
      { rank: 2, name: 'Алхімік2077', avatar: '🧙', score: 8920, elements: 85, reactions: 115, achievements: 17 },
      { rank: 3, name: 'НаукаПро', avatar: '🔬', score: 8450, elements: 82, reactions: 110, achievements: 16 },
      { rank: 4, name: 'ЛабораторнийГуру', avatar: '⚗️', score: 7890, elements: 78, reactions: 105, achievements: 15 },
      { rank: 5, name: 'ХімічнийГеній', avatar: '🧪', score: 7320, elements: 75, reactions: 98, achievements: 14 },
      { rank: 6, name: 'Експериментатор', avatar: '🥼', score: 6850, elements: 71, reactions: 92, achievements: 13 },
      { rank: 7, name: 'ВчительХімії', avatar: '👩‍🏫', score: 6420, elements: 68, reactions: 88, achievements: 12 },
      { rank: 8, name: 'Студент2024', avatar: '🎓', score: 5980, elements: 64, reactions: 82, achievements: 11 },
      { rank: 9, name: 'НовачокПро', avatar: '🌟', score: 5450, elements: 60, reactions: 75, achievements: 10 },
      { rank: 10, name: 'ЛюбительХімії', avatar: '💫', score: 4920, elements: 55, reactions: 68, achievements: 9 }
    ];

    const userScore = currentProgress.discoveredElements.length * 50 + 
                     currentProgress.completedReactions.length * 30 + 
                     currentProgress.achievements.length * 100;

    const currentUser: LeaderboardEntry = {
      rank: 0,
      name: 'Ви',
      avatar: '⭐',
      score: userScore,
      elements: currentProgress.discoveredElements.length,
      reactions: currentProgress.completedReactions.length,
      achievements: currentProgress.achievements.length,
      isCurrentUser: true
    };

    const allEntries = [...entries, currentUser].sort((a, b) => {
      switch (category) {
        case 'elements': return b.elements - a.elements;
        case 'reactions': return b.reactions - a.reactions;
        case 'achievements': return b.achievements - a.achievements;
        default: return b.score - a.score;
      }
    });

    return allEntries.map((entry, index) => ({ ...entry, rank: index + 1 }));
  }, [category, currentProgress]);

  const currentUserEntry = mockLeaderboard.find(e => e.isCurrentUser);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown size={24} className="text-yellow-400" />;
      case 2: return <Medal size={24} className="text-gray-300" />;
      case 3: return <Medal size={24} className="text-orange-400" />;
      default: return <span className="text-white/60 font-bold">#{rank}</span>;
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1: return 'from-yellow-500/30 to-orange-500/30 border-yellow-400/50';
      case 2: return 'from-gray-400/30 to-gray-500/30 border-gray-400/50';
      case 3: return 'from-orange-400/30 to-orange-500/30 border-orange-400/50';
      default: return 'from-white/5 to-white/10 border-white/20';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative glass-vibrant rounded-3xl w-full max-w-4xl h-[85vh] flex flex-col overflow-hidden shadow-2xl border-2 border-white/30 animate-bounce-in">
        <div className="p-6 border-b border-white/20 bg-gradient-to-r from-yellow-500/20 to-orange-500/20">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Trophy className="text-yellow-400 animate-glow-pulse" size={28} />
                Таблиця лідерів
              </h2>
              <p className="text-white/70 text-sm mt-1">
                Змагайтеся з іншими алхіміками!
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
            >
              <X size={20} />
            </button>
          </div>

          {/* Category tabs */}
          <div className="flex gap-2 mt-4 overflow-x-auto">
            {[
              { id: 'overall' as const, label: 'Загальний', icon: <Trophy size={16} /> },
              { id: 'elements' as const, label: 'Елементи', icon: <Zap size={16} /> },
              { id: 'reactions' as const, label: 'Реакції', icon: <Target size={16} /> },
              { id: 'achievements' as const, label: 'Досягнення', icon: <Medal size={16} /> }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                  category === cat.id
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg scale-105'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Current user stats */}
        {currentUserEntry && (
          <div className="p-4 border-b border-white/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
            <div className="glass-dark rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{currentUserEntry.avatar}</div>
                  <div>
                    <p className="font-bold text-lg">Ваша позиція</p>
                    <p className="text-white/60 text-sm">Продовжуйте експериментувати!</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-yellow-400">#{currentUserEntry.rank}</p>
                    <p className="text-xs text-white/50">Місце</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-400">{currentUserEntry.score}</p>
                    <p className="text-xs text-white/50">Очки</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Leaderboard list */}
        <div className="flex-1 overflow-y-auto p-4 scrollbar-thin">
          <div className="space-y-2">
            {mockLeaderboard.slice(0, 50).map((entry) => (
              <div
                key={entry.rank}
                className={`glass-dark rounded-2xl p-4 transition-all hover:scale-[1.02] ${
                  entry.isCurrentUser ? 'ring-2 ring-blue-400 bg-blue-500/10' : ''
                } bg-gradient-to-r ${getRankColor(entry.rank)} border-2`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 flex items-center justify-center">
                    {getRankIcon(entry.rank)}
                  </div>

                  <div className="text-4xl">{entry.avatar}</div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-lg">{entry.name}</p>
                      {entry.isCurrentUser && (
                        <span className="px-2 py-0.5 bg-blue-500/30 text-blue-300 text-xs rounded-full">
                          Ви
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-white/60">
                      <span>⚗️ {entry.elements} елементів</span>
                      <span>🧪 {entry.reactions} реакцій</span>
                      <span>🏆 {entry.achievements} досягнень</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-2xl font-bold text-yellow-400">{entry.score}</p>
                    <p className="text-xs text-white/50">очків</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-white/20 bg-gradient-to-r from-yellow-500/10 to-orange-500/10">
          <div className="flex items-center justify-between text-sm text-white/70">
            <div className="flex items-center gap-2">
              <Users size={16} />
              <span>Оновлюється кожні 5 хвилин</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp size={16} className="text-green-400" />
              <span>Продовжуйте відкривати нові речовини!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
