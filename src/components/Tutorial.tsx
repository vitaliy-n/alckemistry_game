import { useState, useEffect } from 'react';
import { X, ChevronRight, ChevronLeft, Sparkles, Zap } from 'lucide-react';

interface TutorialProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

interface TutorialStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlight?: string;
  action?: string;
}

const tutorialSteps: TutorialStep[] = [
  {
    id: 'welcome',
    title: 'Ласкаво просимо до Хімічної Алхімії!',
    description: 'Це інтерактивна освітня гра, де ви можете комбінувати хімічні елементи та створювати нові речовини. Давайте розпочнемо!',
    icon: '🎓',
    action: 'Натисніть "Далі" для продовження'
  },
  {
    id: 'sidebar',
    title: 'Лабораторія',
    description: 'Ліворуч знаходиться ваша лабораторія з усіма відкритими елементами. Спочатку у вас є базові елементи: Водень, Кисень, Вуглець та інші.',
    icon: '🧪',
    highlight: 'sidebar',
    action: 'Перегляньте доступні елементи'
  },
  {
    id: 'workarea',
    title: 'Реакційна камера',
    description: 'У центрі екрану - реакційна камера. Сюди можна додати до 4 елементів для проведення хімічної реакції.',
    icon: '⚗️',
    highlight: 'workarea',
    action: 'Перетягніть елементи або клацніть на них'
  },
  {
    id: 'reaction',
    title: 'Проведення реакції',
    description: 'Коли ви додали 2 або більше елементів, натисніть кнопку "Провести реакцію". Якщо комбінація правильна, ви отримаєте нову речовину!',
    icon: '💥',
    highlight: 'react-button',
    action: 'Спробуйте змішати H₂ + O₂'
  },
  {
    id: 'journal',
    title: 'Журнал хіміка',
    description: 'Праворуч знаходиться журнал, де зберігається історія всіх ваших реакцій. Ви можете додавати цікаві реакції до закладок.',
    icon: '📔',
    highlight: 'journal',
    action: 'Переглядайте історію реакцій'
  },
  {
    id: 'features',
    title: 'Додаткові можливості',
    description: 'У верхній панелі є багато корисних функцій: Енциклопедія, Досягнення, Щоденні виклики, Квести, Підказки та Глосарій.',
    icon: '🎯',
    highlight: 'header',
    action: 'Досліджуйте всі можливості'
  },
  {
    id: 'currency',
    title: 'Валюта "Молі"',
    description: 'За кожну нову речовину ви отримуєте молі - внутрішню валюту гри. Витрачайте їх на підказки та інші бонуси!',
    icon: '💰',
    action: 'Заробляйте молі за відкриття'
  },
  {
    id: 'complete',
    title: 'Готові до експериментів!',
    description: 'Тепер ви знаєте основи. Відкривайте нові речовини, виконуйте квести, створюйте власні елементи та ставайте великим алхіміком!',
    icon: '🏆',
    action: 'Розпочати гру!'
  }
];

export const Tutorial = ({ isOpen, onClose, onComplete }: TutorialProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showSpotlight, setShowSpotlight] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0);
      setShowSpotlight(true);
    }
  }, [isOpen]);

  const handleNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleComplete = () => {
    onComplete();
    onClose();
  };

  const handleSkip = () => {
    onComplete();
    onClose();
  };

  if (!isOpen) return null;

  const step = tutorialSteps[currentStep];
  const progress = ((currentStep + 1) / tutorialSteps.length) * 100;

  return (
    <>
      {/* Backdrop with spotlight effect */}
      {showSpotlight && step.highlight && (
        <div className="fixed inset-0 z-40 pointer-events-none">
          <div className="absolute inset-0 bg-black/80" />
        </div>
      )}

      {/* Tutorial modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleSkip} />
        
        <div className="relative glass-vibrant rounded-3xl w-full max-w-2xl shadow-2xl border-2 border-white/30 animate-bounce-in overflow-hidden">
          {/* Progress bar */}
          <div className="h-2 bg-white/10">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Header */}
          <div className="p-6 border-b border-white/20 bg-gradient-to-r from-blue-500/20 to-purple-500/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-5xl">{step.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold">{step.title}</h2>
                  <p className="text-white/60 text-sm">
                    Крок {currentStep + 1} з {tutorialSteps.length}
                  </p>
                </div>
              </div>
              <button
                onClick={handleSkip}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <p className="text-lg text-white/90 leading-relaxed mb-6">
              {step.description}
            </p>

            {step.action && (
              <div className="glass-dark rounded-xl p-4 flex items-center gap-3">
                <Zap size={20} className="text-yellow-400 flex-shrink-0" />
                <p className="text-white/80 text-sm">{step.action}</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-white/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
            <div className="flex items-center justify-between">
              <button
                onClick={handleSkip}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-sm"
              >
                Пропустити навчання
              </button>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft size={18} />
                  Назад
                </button>

                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all font-semibold shadow-lg"
                >
                  {currentStep === tutorialSteps.length - 1 ? (
                    <>
                      <Sparkles size={18} />
                      Розпочати!
                    </>
                  ) : (
                    <>
                      Далі
                      <ChevronRight size={18} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Step indicators */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
            {tutorialSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentStep 
                    ? 'bg-white w-8' 
                    : index < currentStep 
                      ? 'bg-green-400' 
                      : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
