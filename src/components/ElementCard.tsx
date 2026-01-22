import type { Element } from '../types';
import '../index.css';

const getCategoryEmoji = (category: string): string => {
  switch (category) {
    case 'елемент': return '⚛️';
    case 'сполука': return '🔬';
    case 'кислота': return '🧪';
    case 'основа': return '💧';
    case 'сіль': return '🧂';
    case 'оксид': return '🔥';
    case 'газ': return '💨';
    case 'custom': return '✨';
    default: return '🔹';
  }
};

interface ElementCardProps {
  element: Element;
  onClick?: () => void;
  isDragging?: boolean;
  size?: 'small' | 'medium' | 'large';
  isNew?: boolean;
  reactionCount?: number;
  showReactionHint?: boolean;
}

const getCategoryClass = (category: string): string => {
  switch (category) {
    case 'елемент':
      return 'element-nonmetal';
    case 'сполука':
      return 'element-compound';
    case 'кислота':
      return 'element-acid';
    case 'основа':
      return 'element-base';
    case 'сіль':
      return 'element-salt';
    case 'оксид':
      return 'element-oxide';
    case 'газ':
      return 'element-gas';
    case 'custom':
      return 'element-custom';
    default:
      return 'element-nonmetal';
  }
};

const sizeClasses = {
  small: 'w-16 h-16 text-xl',
  medium: 'w-20 h-20 text-2xl',
  large: 'w-28 h-28 text-4xl'
};

export const ElementCard = ({
  element,
  onClick,
  isDragging = false,
  size = 'medium',
  isNew = false,
  reactionCount = 0,
  showReactionHint = false
}: ElementCardProps) => {
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('element', JSON.stringify(element));
    e.dataTransfer.effectAllowed = 'copy';
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onClick={onClick}
      className={`
        group relative
        ${sizeClasses[size]}
        ${getCategoryClass(element.category)}
        ${isDragging ? 'opacity-50 scale-95' : ''}
        ${isNew ? 'animate-pop-in ring-2 ring-yellow-400' : ''}
        flex flex-col items-center justify-center
        rounded-xl cursor-pointer
        transition-all duration-300 ease-out
        hover:scale-110 hover:z-10
        select-none backdrop-blur-sm
      `}
    >
      <span className="text-center leading-none drop-shadow-lg">{element.emoji}</span>
      {size !== 'small' && (
        <span className="text-xs mt-1 font-mono text-white/90 text-center px-1 truncate w-full font-semibold">
          {element.formula}
        </span>
      )}
      
      {showReactionHint && reactionCount > 0 && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xs font-bold shadow-lg border-2 border-white/30 animate-pulse">
          {reactionCount}
        </div>
      )}
      
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50 animate-slide-up">
        <div className="glass-vibrant rounded-xl p-3 shadow-2xl border border-white/20 min-w-[220px]">
          <div className="flex items-start gap-2 mb-2">
            <span className="text-lg">{getCategoryEmoji(element.category)}</span>
            <div>
              <p className="font-bold text-sm text-white">{element.name}</p>
              <p className="text-[10px] text-white/50 uppercase tracking-wide">{element.category}</p>
            </div>
          </div>
          <p className="text-xs text-white/70 mb-2 leading-relaxed">{element.description}</p>
          {element.state && (
            <div className="flex items-center gap-1 text-[10px] text-white/50 mb-2">
              <span>Стан:</span>
              <span className="text-white/70">{element.state}</span>
            </div>
          )}
          {showReactionHint && reactionCount > 0 && (
            <div className="flex items-center gap-2 text-xs pt-2 border-t border-white/10">
              <span className="text-purple-400 font-semibold">⚗️ {reactionCount}</span>
              <span className="text-white/60">можливих реакцій</span>
            </div>
          )}
          <div className="text-[10px] text-white/40 mt-2 flex items-center gap-1">
            <span>👆</span>
            <span>Клацніть або перетягніть</span>
          </div>
        </div>
      </div>
    </div>
  );
};
