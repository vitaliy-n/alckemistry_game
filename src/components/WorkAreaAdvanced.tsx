import { useState, useEffect, useRef } from 'react';
import type { Element, GameState, SavedCombination } from '../types';
import { ElementCard } from './ElementCard';
import { findRecipe, findMultiRecipe } from '../data/recipes';
import { 
  Loader2, Plus, X, Save, Zap, 
  FlaskConical, RotateCcw, ArrowRight, Flame, Snowflake, Sparkles, CheckCircle2
} from 'lucide-react';

interface WorkAreaAdvancedProps {
  gameState: GameState;
  onSetSlot: (index: number, element: Element | null) => void;
  onClearSlot: (index: number) => void;
  onReact: () => void;
  onClearAll: () => void;
  onSaveCombination: (combination: Omit<SavedCombination, 'id' | 'createdAt'>) => void;
  currency: number;
}

export const WorkAreaAdvanced = ({
  gameState,
  onSetSlot,
  onClearSlot,
  onReact,
  onClearAll,
  onSaveCombination,
  currency
}: WorkAreaAdvancedProps) => {
  const { slots, isReacting, failedReaction, reactionProgress, comboCount } = gameState;
  const filledSlots = slots.filter(s => s !== null);
  const canReact = filledSlots.length >= 2 && !isReacting;
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [saveName, setSaveName] = useState('');
  const [saveNotes, setSaveNotes] = useState('');
  const [showSuccessFlash, setShowSuccessFlash] = useState(false);
  const prevReactingRef = useRef(isReacting);

  // Check if current slots can form a reaction
  const possibleRecipe = filledSlots.length >= 2 ? (() => {
    const ids = filledSlots.map(s => s.id);
    if (ids.length === 2) {
      return findRecipe(ids[0], ids[1]);
    }
    return findMultiRecipe(ids);
  })() : null;

  // Flash effect on successful reaction
  useEffect(() => {
    if (prevReactingRef.current && !isReacting && !failedReaction) {
      setShowSuccessFlash(true);
      setTimeout(() => setShowSuccessFlash(false), 600);
    }
    prevReactingRef.current = isReacting;
  }, [isReacting, failedReaction]);

  const handleDrop = (index: number) => (e: React.DragEvent) => {
    e.preventDefault();
    try {
      const data = e.dataTransfer.getData('element');
      if (data) {
        const element = JSON.parse(data) as Element;
        onSetSlot(index, element);
      }
    } catch (error) {
      console.error('Error parsing dropped element:', error);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleSave = () => {
    if (!saveName.trim()) return;
    const elements = slots.filter((s): s is Element => s !== null).map(s => s.id);
    onSaveCombination({
      name: saveName,
      elements,
      notes: saveNotes,
      isFavorite: false
    });
    setShowSaveModal(false);
    setSaveName('');
    setSaveNotes('');
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {isReacting && (
          <>
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-blue-400/50 animate-ping"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 0.5}s`,
                  animationDuration: `${0.5 + Math.random() * 0.5}s`
                }}
              />
            ))}
          </>
        )}
      </div>

      {/* Combo indicator */}
      {comboCount > 1 && (
        <div className="absolute top-4 right-4 glass rounded-xl px-4 py-2 animate-pop-in">
          <div className="flex items-center gap-2">
            <Flame className="text-orange-400" size={20} />
            <span className="font-bold text-orange-400">КОМБО x{comboCount}</span>
          </div>
        </div>
      )}

      {/* Currency display */}
      <div className="absolute top-4 left-4 glass rounded-xl px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl">⚗️</span>
          <span className="font-bold text-yellow-400">{currency}</span>
          <span className="text-white/50 text-sm">молів</span>
        </div>
      </div>

      <div className={`glass rounded-3xl p-8 max-w-3xl w-full relative transition-all duration-300 ${showSuccessFlash ? 'animate-reaction-success ring-4 ring-green-400/50' : ''}`}>
        <h2 className="text-2xl font-bold text-center mb-2 flex items-center justify-center gap-3">
          <FlaskConical className="text-purple-400" size={28} />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Реакційна Камера
          </span>
          <FlaskConical className="text-purple-400 transform scale-x-[-1]" size={28} />
        </h2>
        <p className="text-center text-white/50 text-sm mb-2">
          Перетягніть до 4 речовин для проведення реакції
        </p>
        
        {/* Reaction preview hint */}
        {possibleRecipe && !isReacting && (
          <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in-up">
            <CheckCircle2 size={16} className="text-green-400" />
            <span className="text-green-400 text-sm font-medium">Реакція можлива!</span>
            <span className="text-white/40 text-xs">→ {possibleRecipe.result}</span>
          </div>
        )}

        {/* Reaction slots */}
        <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
          {slots.map((slot, index) => (
            <div key={index} className="relative group">
              <div
                onDrop={handleDrop(index)}
                onDragOver={handleDragOver}
                className={`
                  w-28 h-28 rounded-2xl border-2 border-dashed
                  flex items-center justify-center
                  transition-all duration-300 transform
                  ${slot ? 'border-solid border-white/40 bg-white/5' : 'border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30'}
                  ${failedReaction ? 'animate-shake border-red-500/50' : ''}
                  ${isReacting ? 'animate-pulse' : ''}
                `}
              >
                {slot ? (
                  <div className={isReacting ? 'animate-wiggle' : ''}>
                    <ElementCard element={slot} size="large" />
                  </div>
                ) : (
                  <div className="text-center text-white/30">
                    <Plus size={32} className="mx-auto mb-1" />
                    <span className="text-xs">Слот {index + 1}</span>
                  </div>
                )}
              </div>
              
              {slot && (
                <button
                  onClick={() => onClearSlot(index)}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-500/80 hover:bg-red-500 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100"
                >
                  <X size={14} />
                </button>
              )}

              {index < slots.length - 1 && slots[index] && (
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                  <Plus size={16} className="text-white/30" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Progress bar */}
        {isReacting && (
          <div className="mb-4">
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-100"
                style={{ width: `${reactionProgress}%` }}
              />
            </div>
            <p className="text-center text-white/50 text-sm mt-2">
              Реакція в процесі... {reactionProgress}%
            </p>
          </div>
        )}

        {/* Error message */}
        {failedReaction && (
          <div className="mb-4 p-4 bg-red-500/10 border border-red-500/30 rounded-xl animate-pop-in">
            <div className="flex items-center gap-3 justify-center">
              <Snowflake className="text-red-400" size={20} />
              <p className="text-red-300">
                Ці речовини не реагують за звичайних умов. Спробуйте іншу комбінацію!
              </p>
            </div>
          </div>
        )}

        {/* Formula preview */}
        {filledSlots.length > 0 && (
          <div className={`mb-6 p-4 rounded-xl transition-all duration-300 ${possibleRecipe ? 'bg-green-900/20 border border-green-500/30' : 'bg-black/30'}`}>
            <div className="flex items-center justify-center gap-2 flex-wrap font-mono text-lg">
              {filledSlots.map((el, idx) => (
                <span key={idx} className="flex items-center gap-2">
                  <span className="flex items-center gap-1">
                    <span className="text-xl">{el.emoji}</span>
                    <span className={possibleRecipe ? 'text-green-300' : 'text-blue-300'}>{el.formula}</span>
                  </span>
                  {idx < filledSlots.length - 1 && (
                    <span className="text-white/50">+</span>
                  )}
                </span>
              ))}
              <ArrowRight className={`mx-2 transition-colors ${possibleRecipe ? 'text-green-400' : 'text-white/50'}`} size={20} />
              {possibleRecipe ? (
                <span className="text-green-300 font-bold flex items-center gap-1">
                  <Sparkles size={16} className="text-yellow-400" />
                  {possibleRecipe.result}
                </span>
              ) : (
                <span className="text-purple-300">?</span>
              )}
            </div>
            {possibleRecipe && (
              <p className="text-center text-green-400/70 text-xs mt-2">
                {possibleRecipe.equation}
              </p>
            )}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex gap-3 justify-center flex-wrap">
          <button
            onClick={onReact}
            disabled={!canReact}
            className={`
              flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg
              transition-all duration-300 transform
              ${canReact 
                ? possibleRecipe
                  ? 'bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 hover:scale-105 shadow-lg shadow-green-500/30 animate-pulse'
                  : 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:scale-105 shadow-lg shadow-purple-500/30'
                : 'bg-white/10 text-white/40 cursor-not-allowed'}
            `}
          >
            {isReacting ? (
              <>
                <Loader2 size={24} className="animate-spin" />
                Реакція...
              </>
            ) : possibleRecipe ? (
              <>
                <Sparkles size={24} />
                Синтезувати!
              </>
            ) : (
              <>
                <Zap size={24} />
                Провести реакцію
              </>
            )}
          </button>

          <button
            onClick={() => setShowSaveModal(true)}
            disabled={filledSlots.length < 2}
            className="flex items-center gap-2 px-4 py-4 rounded-xl bg-green-500/20 text-green-300 hover:bg-green-500/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all border border-green-500/30"
            title="Зберегти комбінацію"
          >
            <Save size={20} />
          </button>

          <button
            onClick={onClearAll}
            disabled={filledSlots.length === 0}
            className="flex items-center gap-2 px-4 py-4 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            title="Очистити все"
          >
            <RotateCcw size={20} />
          </button>
        </div>
      </div>

      {/* Tips */}
      <div className="mt-6 text-center text-white/40 text-sm max-w-md space-y-1">
        <p>💡 Комбінуйте 2-4 речовини для створення нових сполук</p>
        <p>⚡ Швидкі реакції підряд дають бонусне комбо!</p>
        <p>🔬 Використовуйте режим "Швидко" в Лабораторії для миттєвих реакцій</p>
      </div>

      {/* Save modal */}
      {showSaveModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowSaveModal(false)} />
          <div className="relative glass rounded-2xl p-6 max-w-md w-full animate-pop-in">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Save className="text-green-400" size={24} />
              Зберегти комбінацію
            </h3>
            
            <div className="mb-4">
              <label className="block text-sm text-white/60 mb-1">Назва</label>
              <input
                type="text"
                value={saveName}
                onChange={(e) => setSaveName(e.target.value)}
                placeholder="Моя комбінація..."
                className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 focus:outline-none focus:border-green-400/50"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm text-white/60 mb-1">Нотатки</label>
              <textarea
                value={saveNotes}
                onChange={(e) => setSaveNotes(e.target.value)}
                placeholder="Додаткові примітки..."
                rows={3}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 focus:outline-none focus:border-green-400/50 resize-none"
              />
            </div>

            <div className="mb-4 p-3 bg-white/5 rounded-lg">
              <p className="text-sm text-white/50 mb-2">Елементи:</p>
              <div className="flex gap-2 flex-wrap">
                {filledSlots.map((el, idx) => (
                  <span key={idx} className="px-2 py-1 bg-white/10 rounded text-sm">
                    {el.emoji} {el.formula}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowSaveModal(false)}
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                Скасувати
              </button>
              <button
                onClick={handleSave}
                disabled={!saveName.trim()}
                className="px-4 py-2 rounded-lg bg-green-500/30 text-green-300 hover:bg-green-500/40 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Зберегти
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
