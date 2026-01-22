import { useMemo } from 'react';
import { Trophy, X, Lock, CheckCircle } from 'lucide-react';
import { achievements } from '../data/achievements';
import type { UserProgress } from '../types';

interface AchievementsProps {
  progress: UserProgress;
  isOpen: boolean;
  onClose: () => void;
}

export const Achievements = ({ progress, isOpen, onClose }: AchievementsProps) => {
  const achievementStatus = useMemo(() => {
    return achievements.map(achievement => ({
      ...achievement,
      isUnlocked: progress.achievements.includes(achievement.id),
      canUnlock: achievement.condition(progress.discoveredElements, progress.completedReactions)
    }));
  }, [progress]);

  const unlockedCount = achievementStatus.filter(a => a.isUnlocked).length;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative glass rounded-3xl w-full max-w-2xl max-h-[80vh] flex flex-col overflow-hidden shadow-2xl border border-white/20">
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Trophy size={24} className="text-yellow-400" />
            Досягнення
            <span className="text-sm font-normal text-white/50 ml-2">
              {unlockedCount}/{achievements.length}
            </span>
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 scrollbar-thin">
          <div className="grid gap-3">
            {achievementStatus.map(achievement => (
              <div
                key={achievement.id}
                className={`
                  flex items-center gap-4 p-4 rounded-xl transition-all
                  ${achievement.isUnlocked 
                    ? 'bg-yellow-400/10 border border-yellow-400/30' 
                    : 'bg-white/5 border border-white/10'}
                `}
              >
                <div className={`
                  text-4xl w-14 h-14 flex items-center justify-center rounded-xl
                  ${achievement.isUnlocked 
                    ? 'bg-yellow-400/20' 
                    : 'bg-white/10 grayscale opacity-50'}
                `}>
                  {achievement.icon}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className={`font-semibold ${achievement.isUnlocked ? 'text-yellow-300' : 'text-white/70'}`}>
                      {achievement.name}
                    </h3>
                    {achievement.isUnlocked ? (
                      <CheckCircle size={16} className="text-green-400" />
                    ) : (
                      <Lock size={14} className="text-white/30" />
                    )}
                  </div>
                  <p className="text-sm text-white/50 mt-0.5">{achievement.description}</p>
                </div>

                {achievement.isUnlocked && (
                  <div className="text-xs text-yellow-400/70 bg-yellow-400/10 px-2 py-1 rounded">
                    Отримано
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-white/10 bg-white/5">
          <div className="flex items-center justify-between text-sm">
            <span className="text-white/50">Прогрес досягнень</span>
            <span className="text-yellow-400">{Math.round((unlockedCount / achievements.length) * 100)}%</span>
          </div>
          <div className="mt-2 h-2 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transition-all duration-500"
              style={{ width: `${(unlockedCount / achievements.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
