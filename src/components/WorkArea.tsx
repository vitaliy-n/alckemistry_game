import type { Element, GameState } from '../types';
import { DropZone } from './DropZone';
import { Sparkles, ArrowRightLeft, Trash2, Loader2 } from 'lucide-react';

interface WorkAreaProps {
  gameState: GameState;
  onSetSlot1: (element: Element | null) => void;
  onSetSlot2: (element: Element | null) => void;
  onReact: () => void;
  onClear: () => void;
  onSwap: () => void;
}

export const WorkArea = ({
  gameState,
  onSetSlot1,
  onSetSlot2,
  onReact,
  onClear,
  onSwap
}: WorkAreaProps) => {
  const { slot1, slot2, isReacting, failedReaction } = gameState;
  const canReact = slot1 !== null && slot2 !== null && !isReacting;

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8">
      <div className="glass rounded-3xl p-8 max-w-lg w-full">
        <h2 className="text-xl font-bold text-center mb-6 flex items-center justify-center gap-2">
          <Sparkles className="text-yellow-400" size={24} />
          Реакційна колба
        </h2>

        <div className="flex items-center justify-center gap-6 mb-6">
          <DropZone
            element={slot1}
            onDrop={onSetSlot1}
            onClear={() => onSetSlot1(null)}
            label="Перша речовина"
            isShaking={failedReaction}
          />

          <button
            onClick={onSwap}
            disabled={!slot1 && !slot2}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            title="Поміняти місцями"
          >
            <ArrowRightLeft size={20} />
          </button>

          <DropZone
            element={slot2}
            onDrop={onSetSlot2}
            onClear={() => onSetSlot2(null)}
            label="Друга речовина"
            isShaking={failedReaction}
          />
        </div>

        {failedReaction && (
          <div className="text-center mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
            <p className="text-red-300 text-sm">
              ⚠️ Ці речовини не реагують за звичайних умов
            </p>
          </div>
        )}

        <div className="flex gap-3 justify-center">
          <button
            onClick={onReact}
            disabled={!canReact}
            className={`
              flex items-center gap-2 px-6 py-3 rounded-xl font-semibold
              transition-all duration-300 transform
              ${canReact 
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 hover:scale-105 shadow-lg shadow-blue-500/30' 
                : 'bg-white/10 text-white/40 cursor-not-allowed'}
            `}
          >
            {isReacting ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Реакція...
              </>
            ) : (
              <>
                <Sparkles size={20} />
                Змішати
              </>
            )}
          </button>

          <button
            onClick={onClear}
            disabled={!slot1 && !slot2}
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <Trash2 size={18} />
            Очистити
          </button>
        </div>

        {slot1 && slot2 && (
          <div className="mt-6 text-center text-white/60 text-sm">
            <p>
              {slot1.formula} + {slot2.formula} → ?
            </p>
          </div>
        )}
      </div>

      <div className="mt-6 text-center text-white/40 text-sm max-w-md">
        <p>Перетягніть елементи з лабораторії у колбу для проведення реакції</p>
      </div>
    </div>
  );
};
