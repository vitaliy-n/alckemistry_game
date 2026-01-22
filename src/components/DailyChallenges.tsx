import { useState, useMemo } from 'react';
import { Calendar, X, Trophy, Gift, CheckCircle, Lock, Zap, Target } from 'lucide-react';
import type { UserProgress } from '../types';

interface DailyChallengesProps {
  isOpen: boolean;
  onClose: () => void;
  progress: UserProgress;
  onClaimReward: (challengeId: string, reward: number) => void;
}

interface Challenge {
  id: string;
  title: string;
  description: string;
  icon: string;
  reward: number;
  target: number;
  current: number;
  type: 'reactions' | 'discoveries' | 'elements' | 'combo';
  difficulty: 'easy' | 'medium' | 'hard';
}

export const DailyChallenges = ({ 
  isOpen, 
  onClose, 
  progress,
  onClaimReward 
}: DailyChallengesProps) => {
  const [claimedToday, setClaimedToday] = useState<string[]>([]);

  const dailyChallenges = useMemo((): Challenge[] => {
    const today = new Date().toDateString();
    const seed = today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const random = (min: number, max: number) => {
      const x = Math.sin(seed + min) * 10000;
      return Math.floor((x - Math.floor(x)) * (max - min + 1)) + min;
    };

    const totalReactions = progress.reactionHistory.filter(r => {
      const date = new Date(r.timestamp).toDateString();
      return date === today;
    }).length;

    const totalDiscoveries = progress.discoveredElements.length;

    return [
      {
        id: 'daily-1',
        title: 'Ранкова хімія',
        description: 'Проведіть 5 реакцій сьогодні',
        icon: '🌅',
        reward: 50,
        target: 5,
        current: totalReactions,
        type: 'reactions',
        difficulty: 'easy'
      },
      {
        id: 'daily-2',
        title: 'Дослідник',
        description: 'Відкрийте 3 нові речовини',
        icon: '🔍',
        reward: 75,
        target: 3,
        current: Math.min(3, totalDiscoveries - (progress.discoveredElements.length - 10)),
        type: 'discoveries',
        difficulty: 'medium'
      },
      {
        id: 'daily-3',
        title: 'Майстер реакцій',
        description: 'Проведіть 15 успішних реакцій',
        icon: '⚗️',
        reward: 100,
        target: 15,
        current: totalReactions,
        type: 'reactions',
        difficulty: 'hard'
      },
      {
        id: 'daily-4',
        title: 'Колекціонер',
        description: `Відкрийте ${random(30, 50)} різних речовин`,
        icon: '📚',
        reward: 150,
        target: random(30, 50),
        current: totalDiscoveries,
        type: 'elements',
        difficulty: 'hard'
      }
    ];
  }, [progress]);

  const handleClaim = (challenge: Challenge) => {
    if (challenge.current >= challenge.target && !claimedToday.includes(challenge.id)) {
      onClaimReward(challenge.id, challenge.reward);
      setClaimedToday(prev => [...prev, challenge.id]);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-400 bg-green-400/20';
      case 'medium': return 'text-yellow-400 bg-yellow-400/20';
      case 'hard': return 'text-red-400 bg-red-400/20';
      default: return 'text-white/60 bg-white/10';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative glass-vibrant rounded-3xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden shadow-2xl border-2 border-white/30 animate-slide-in-right">
        <div className="p-6 border-b border-white/20 bg-gradient-to-r from-orange-500/20 to-yellow-500/20">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Calendar className="text-orange-400" size={28} />
                Щоденні виклики
              </h2>
              <p className="text-white/70 text-sm mt-1">
                Виконуйте завдання та отримуйте нагороди!
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin space-y-4">
          {dailyChallenges.map(challenge => {
            const isCompleted = challenge.current >= challenge.target;
            const isClaimed = claimedToday.includes(challenge.id);
            const progress = Math.min(100, (challenge.current / challenge.target) * 100);

            return (
              <div
                key={challenge.id}
                className={`glass-dark rounded-2xl p-5 transition-all hover:scale-[1.02] ${
                  isCompleted ? 'ring-2 ring-green-400/50' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{challenge.icon}</div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-lg">{challenge.title}</h3>
                        <p className="text-white/60 text-sm">{challenge.description}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(challenge.difficulty)}`}>
                        {challenge.difficulty === 'easy' ? 'Легко' : challenge.difficulty === 'medium' ? 'Середньо' : 'Важко'}
                      </span>
                    </div>

                    <div className="mb-3">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-white/70">
                          Прогрес: {challenge.current}/{challenge.target}
                        </span>
                        <span className="text-white/70">{Math.round(progress)}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full transition-all duration-500"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-yellow-400">
                        <Gift size={18} />
                        <span className="font-bold">+{challenge.reward} молів</span>
                      </div>

                      {isCompleted && !isClaimed && (
                        <button
                          onClick={() => handleClaim(challenge)}
                          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 transition-all font-semibold shadow-lg transform hover:scale-105"
                        >
                          <Trophy size={16} />
                          Отримати
                        </button>
                      )}

                      {isClaimed && (
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500/20 text-green-400">
                          <CheckCircle size={16} />
                          Отримано
                        </div>
                      )}

                      {!isCompleted && (
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-white/40">
                          <Lock size={16} />
                          Заблоковано
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-6 border-t border-white/20 bg-gradient-to-r from-orange-500/10 to-yellow-500/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Zap size={16} className="text-yellow-400" />
              <span>Виклики оновлюються щодня о 00:00</span>
            </div>
            <div className="flex items-center gap-2">
              <Target size={16} className="text-orange-400" />
              <span className="font-bold text-orange-400">
                {dailyChallenges.filter(c => c.current >= c.target).length}/{dailyChallenges.length} виконано
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
