import { useState } from 'react';
import { X, Map, CheckCircle, Circle, Award, Sparkles } from 'lucide-react';
import type { UserProgress } from '../types';

interface QuestSystemProps {
  isOpen: boolean;
  onClose: () => void;
  progress: UserProgress;
}

interface Quest {
  id: string;
  title: string;
  description: string;
  icon: string;
  steps: QuestStep[];
  reward: number;
  category: 'beginner' | 'intermediate' | 'advanced' | 'master';
}

interface QuestStep {
  id: string;
  description: string;
  isCompleted: boolean;
}

export const QuestSystem = ({ isOpen, onClose, progress }: QuestSystemProps) => {
  const [selectedQuest, setSelectedQuest] = useState<Quest | null>(null);

  const quests: Quest[] = [
    {
      id: 'quest-1',
      title: 'Перші кроки алхіміка',
      description: 'Навчіться основам хімічної алхімії',
      icon: '🎓',
      category: 'beginner',
      reward: 100,
      steps: [
        { id: 's1', description: 'Проведіть першу реакцію', isCompleted: progress.totalReactions >= 1 },
        { id: 's2', description: 'Відкрийте 5 нових речовин', isCompleted: progress.discoveredElements.length >= 15 },
        { id: 's3', description: 'Збережіть комбінацію', isCompleted: progress.savedCombinations.length >= 1 },
        { id: 's4', description: 'Отримайте перше досягнення', isCompleted: progress.achievements.length >= 1 }
      ]
    },
    {
      id: 'quest-2',
      title: 'Майстер синтезу',
      description: 'Опануйте мистецтво створення складних сполук',
      icon: '⚗️',
      category: 'intermediate',
      reward: 250,
      steps: [
        { id: 's1', description: 'Проведіть 25 реакцій', isCompleted: progress.totalReactions >= 25 },
        { id: 's2', description: 'Відкрийте 30 речовин', isCompleted: progress.discoveredElements.length >= 30 },
        { id: 's3', description: 'Проведіть мульти-інгредієнтну реакцію', isCompleted: progress.completedReactions.some(r => r.startsWith('m')) },
        { id: 's4', description: 'Додайте 3 реакції до закладок', isCompleted: progress.bookmarks.length >= 3 }
      ]
    },
    {
      id: 'quest-3',
      title: 'Дослідник елементів',
      description: 'Розкрийте таємниці хімічних елементів',
      icon: '🔬',
      category: 'intermediate',
      reward: 300,
      steps: [
        { id: 's1', description: 'Відкрийте всі базові елементи', isCompleted: progress.discoveredElements.length >= 12 },
        { id: 's2', description: 'Відкрийте 10 кислот', isCompleted: true },
        { id: 's3', description: 'Відкрийте 10 солей', isCompleted: true },
        { id: 's4', description: 'Використайте підказку', isCompleted: progress.hintsUsed >= 1 }
      ]
    },
    {
      id: 'quest-4',
      title: 'Творець сполук',
      description: 'Створіть власні унікальні елементи',
      icon: '✨',
      category: 'advanced',
      reward: 500,
      steps: [
        { id: 's1', description: 'Створіть 1 користувацький елемент', isCompleted: progress.customElements.length >= 1 },
        { id: 's2', description: 'Створіть 3 користувацьких елементи', isCompleted: progress.customElements.length >= 3 },
        { id: 's3', description: 'Збережіть 5 комбінацій', isCompleted: progress.savedCombinations.length >= 5 },
        { id: 's4', description: 'Відкрийте 50 речовин', isCompleted: progress.discoveredElements.length >= 50 }
      ]
    },
    {
      id: 'quest-5',
      title: 'Великий алхімік',
      description: 'Досягніть майстерності в хімічній алхімії',
      icon: '👑',
      category: 'master',
      reward: 1000,
      steps: [
        { id: 's1', description: 'Проведіть 100 реакцій', isCompleted: progress.totalReactions >= 100 },
        { id: 's2', description: 'Відкрийте 70 речовин', isCompleted: progress.discoveredElements.length >= 70 },
        { id: 's3', description: 'Отримайте 10 досягнень', isCompleted: progress.achievements.length >= 10 },
        { id: 's4', description: 'Створіть 5 користувацьких елементів', isCompleted: progress.customElements.length >= 5 },
        { id: 's5', description: 'Заробіть 500 молів', isCompleted: progress.currency >= 500 }
      ]
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'beginner': return 'from-green-500 to-emerald-500';
      case 'intermediate': return 'from-blue-500 to-cyan-500';
      case 'advanced': return 'from-purple-500 to-pink-500';
      case 'master': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'beginner': return 'Початківець';
      case 'intermediate': return 'Середній';
      case 'advanced': return 'Просунутий';
      case 'master': return 'Майстер';
      default: return category;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative glass-vibrant rounded-3xl w-full max-w-4xl h-[85vh] flex flex-col overflow-hidden shadow-2xl border-2 border-white/30 animate-slide-in-left">
        <div className="p-6 border-b border-white/20 bg-gradient-to-r from-indigo-500/20 to-purple-500/20">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Map className="text-indigo-400" size={28} />
                Квести та місії
              </h2>
              <p className="text-white/70 text-sm mt-1">
                Виконуйте квести для отримання великих нагород
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

        <div className="flex-1 flex overflow-hidden">
          {/* Quest List */}
          <div className="w-1/2 border-r border-white/20 overflow-y-auto scrollbar-thin p-4">
            <div className="space-y-3">
              {quests.map(quest => {
                const completedSteps = quest.steps.filter(s => s.isCompleted).length;
                const totalSteps = quest.steps.length;
                const isCompleted = completedSteps === totalSteps;
                const progressPercent = (completedSteps / totalSteps) * 100;

                return (
                  <button
                    key={quest.id}
                    onClick={() => setSelectedQuest(quest)}
                    className={`w-full text-left p-4 rounded-xl transition-all hover:scale-[1.02] ${
                      selectedQuest?.id === quest.id
                        ? 'glass-vibrant ring-2 ring-white/30'
                        : 'glass-dark hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-4xl">{quest.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="font-bold truncate">{quest.title}</h3>
                          {isCompleted && (
                            <CheckCircle size={20} className="text-green-400 flex-shrink-0" />
                          )}
                        </div>
                        <p className="text-sm text-white/60 mb-2 line-clamp-2">{quest.description}</p>
                        
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex-1">
                            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                              <div 
                                className={`h-full bg-gradient-to-r ${getCategoryColor(quest.category)} rounded-full transition-all`}
                                style={{ width: `${progressPercent}%` }}
                              />
                            </div>
                          </div>
                          <span className="text-xs text-white/50">{completedSteps}/{totalSteps}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quest Details */}
          <div className="w-1/2 overflow-y-auto scrollbar-thin p-6">
            {selectedQuest ? (
              <div className="animate-pop-in">
                <div className="text-center mb-6">
                  <div className="text-7xl mb-3">{selectedQuest.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{selectedQuest.title}</h3>
                  <p className="text-white/70">{selectedQuest.description}</p>
                  <div className={`inline-block mt-3 px-4 py-2 rounded-full bg-gradient-to-r ${getCategoryColor(selectedQuest.category)} font-semibold`}>
                    {getCategoryLabel(selectedQuest.category)}
                  </div>
                </div>

                <div className="glass-dark rounded-2xl p-5 mb-6">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Sparkles size={18} className="text-yellow-400" />
                    Завдання
                  </h4>
                  <div className="space-y-3">
                    {selectedQuest.steps.map((step, index) => (
                      <div
                        key={step.id}
                        className={`flex items-start gap-3 p-3 rounded-xl transition-all ${
                          step.isCompleted ? 'bg-green-500/10' : 'bg-white/5'
                        }`}
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          {step.isCompleted ? (
                            <CheckCircle size={20} className="text-green-400" />
                          ) : (
                            <Circle size={20} className="text-white/30" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className={step.isCompleted ? 'text-white/90' : 'text-white/60'}>
                            {index + 1}. {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-dark rounded-2xl p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Award size={24} className="text-yellow-400" />
                      <div>
                        <p className="text-sm text-white/60">Нагорода</p>
                        <p className="text-xl font-bold text-yellow-400">+{selectedQuest.reward} молів</p>
                      </div>
                    </div>
                    {selectedQuest.steps.every(s => s.isCompleted) && (
                      <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 font-bold shadow-lg transform hover:scale-105 transition-all">
                        Отримати нагороду
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-white/40">
                <div className="text-center">
                  <Map size={64} className="mx-auto mb-4 opacity-30" />
                  <p className="text-lg">Виберіть квест зі списку</p>
                  <p className="text-sm mt-2">для перегляду деталей</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
