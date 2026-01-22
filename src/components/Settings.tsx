import { X, Volume2, VolumeX, Music, Zap, Globe, Palette, Lightbulb, Save, RotateCcw } from 'lucide-react';
import type { UserSettings, UserStats } from '../types';

interface SettingsProps {
  settings: UserSettings;
  stats: UserStats;
  isOpen: boolean;
  onClose: () => void;
  onUpdateSettings: (settings: Partial<UserSettings>) => void;
  onResetProgress: () => void;
}

export const Settings = ({ 
  settings, 
  stats, 
  isOpen, 
  onClose, 
  onUpdateSettings,
  onResetProgress 
}: SettingsProps) => {
  if (!isOpen) return null;

  const formatPlayTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) return `${hours} год ${mins} хв`;
    return `${mins} хв`;
  };

  const handleReset = () => {
    if (confirm('Ви впевнені, що хочете скинути весь прогрес? Ця дія незворотна!')) {
      onResetProgress();
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative glass rounded-3xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden shadow-2xl border border-white/20">
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Palette size={24} className="text-pink-400" />
            Налаштування
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin">
          {/* Audio settings */}
          <div className="glass-dark rounded-xl p-4">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Volume2 size={18} className="text-blue-400" />
              Звук
            </h3>
            <div className="space-y-3">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="flex items-center gap-2">
                  {settings.soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
                  Звукові ефекти
                </span>
                <button
                  onClick={() => onUpdateSettings({ soundEnabled: !settings.soundEnabled })}
                  className={`w-12 h-6 rounded-full transition-colors ${settings.soundEnabled ? 'bg-blue-500' : 'bg-white/20'}`}
                >
                  <div className={`w-5 h-5 rounded-full bg-white transition-transform ${settings.soundEnabled ? 'translate-x-6' : 'translate-x-0.5'}`} />
                </button>
              </label>
              
              <label className="flex items-center justify-between cursor-pointer">
                <span className="flex items-center gap-2">
                  <Music size={16} />
                  Фонова музика
                </span>
                <button
                  onClick={() => onUpdateSettings({ musicEnabled: !settings.musicEnabled })}
                  className={`w-12 h-6 rounded-full transition-colors ${settings.musicEnabled ? 'bg-blue-500' : 'bg-white/20'}`}
                >
                  <div className={`w-5 h-5 rounded-full bg-white transition-transform ${settings.musicEnabled ? 'translate-x-6' : 'translate-x-0.5'}`} />
                </button>
              </label>
            </div>
          </div>

          {/* Visual settings */}
          <div className="glass-dark rounded-xl p-4">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Zap size={18} className="text-yellow-400" />
              Візуальні ефекти
            </h3>
            <div className="space-y-3">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="flex items-center gap-2">
                  <Zap size={16} />
                  Анімації
                </span>
                <button
                  onClick={() => onUpdateSettings({ animationsEnabled: !settings.animationsEnabled })}
                  className={`w-12 h-6 rounded-full transition-colors ${settings.animationsEnabled ? 'bg-yellow-500' : 'bg-white/20'}`}
                >
                  <div className={`w-5 h-5 rounded-full bg-white transition-transform ${settings.animationsEnabled ? 'translate-x-6' : 'translate-x-0.5'}`} />
                </button>
              </label>
              
              <label className="flex items-center justify-between cursor-pointer">
                <span className="flex items-center gap-2">
                  <Lightbulb size={16} />
                  Показувати підказки
                </span>
                <button
                  onClick={() => onUpdateSettings({ showHints: !settings.showHints })}
                  className={`w-12 h-6 rounded-full transition-colors ${settings.showHints ? 'bg-yellow-500' : 'bg-white/20'}`}
                >
                  <div className={`w-5 h-5 rounded-full bg-white transition-transform ${settings.showHints ? 'translate-x-6' : 'translate-x-0.5'}`} />
                </button>
              </label>
            </div>
          </div>

          {/* Language settings */}
          <div className="glass-dark rounded-xl p-4">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Globe size={18} className="text-green-400" />
              Мова інтерфейсу
            </h3>
            <div className="flex gap-3">
              <button
                onClick={() => onUpdateSettings({ language: 'uk' })}
                className={`flex-1 py-3 rounded-xl transition-all ${settings.language === 'uk' ? 'bg-green-500/30 border border-green-400/50' : 'bg-white/10 hover:bg-white/20'}`}
              >
                🇺🇦 Українська
              </button>
              <button
                onClick={() => onUpdateSettings({ language: 'en' })}
                className={`flex-1 py-3 rounded-xl transition-all ${settings.language === 'en' ? 'bg-green-500/30 border border-green-400/50' : 'bg-white/10 hover:bg-white/20'}`}
              >
                🇬🇧 English
              </button>
            </div>
          </div>

          {/* Statistics */}
          <div className="glass-dark rounded-xl p-4">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              📊 Статистика
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-white/50 text-sm">Всього експериментів</p>
                <p className="text-2xl font-bold text-blue-400">{stats.totalExperiments}</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-white/50 text-sm">Успішних реакцій</p>
                <p className="text-2xl font-bold text-green-400">{stats.successfulReactions}</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-white/50 text-sm">Невдалих спроб</p>
                <p className="text-2xl font-bold text-red-400">{stats.failedReactions}</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-white/50 text-sm">Час гри</p>
                <p className="text-2xl font-bold text-purple-400">{formatPlayTime(stats.totalPlayTime)}</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-white/50 text-sm">Поточна серія</p>
                <p className="text-2xl font-bold text-orange-400">{stats.currentStreak} днів</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-white/50 text-sm">Найдовша серія</p>
                <p className="text-2xl font-bold text-yellow-400">{stats.longestStreak} днів</p>
              </div>
            </div>
          </div>

          {/* Data management */}
          <div className="glass-dark rounded-xl p-4">
            <h3 className="font-semibold mb-4 flex items-center gap-2 text-red-400">
              <RotateCcw size={18} />
              Управління даними
            </h3>
            <div className="space-y-3">
              <button
                onClick={() => {
                  const data = JSON.stringify({ settings, stats }, null, 2);
                  const blob = new Blob([data], { type: 'application/json' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'alchemy-backup.json';
                  a.click();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Save size={18} />
                Експортувати прогрес
              </button>
              
              <button
                onClick={handleReset}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors border border-red-500/30"
              >
                <RotateCcw size={18} />
                Скинути весь прогрес
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
