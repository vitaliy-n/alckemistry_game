import { useEffect } from 'react';
import { Trophy, X } from 'lucide-react';
import type { Achievement } from '../types';

interface AchievementToastProps {
  achievement: Achievement;
  onClose: () => void;
}

export const AchievementToast = ({ achievement, onClose }: AchievementToastProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-20 right-4 z-50 animate-pop-in">
      <div className="glass rounded-xl p-4 pr-10 shadow-xl border border-yellow-400/30 bg-yellow-400/10 min-w-[280px]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-white/10 transition-colors"
        >
          <X size={14} />
        </button>
        
        <div className="flex items-center gap-3">
          <div className="text-3xl bg-yellow-400/20 p-2 rounded-lg">
            {achievement.icon}
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-yellow-400 text-xs font-semibold mb-0.5">
              <Trophy size={12} />
              Нове досягнення!
            </div>
            <p className="font-bold text-yellow-300">{achievement.name}</p>
            <p className="text-xs text-white/60 mt-0.5">{achievement.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
