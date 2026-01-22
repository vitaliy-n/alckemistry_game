import type { Element, Recipe } from '../types';
import { X, Zap, Thermometer, Lightbulb, Bookmark, BookmarkCheck, Sparkles, FlaskConical, Atom, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface ReactionModalProps {
  element: Element;
  recipe: Recipe;
  isNew: boolean;
  isBookmarked: boolean;
  onClose: () => void;
  onToggleBookmark: () => void;
}

const getReactionTypeColor = (type: string): string => {
  switch (type) {
    case 'синтез': return 'text-green-400 bg-green-400/20';
    case 'розклад': return 'text-orange-400 bg-orange-400/20';
    case 'заміщення': return 'text-blue-400 bg-blue-400/20';
    case 'обмін': return 'text-purple-400 bg-purple-400/20';
    case 'нейтралізація': return 'text-cyan-400 bg-cyan-400/20';
    default: return 'text-white/60 bg-white/10';
  }
};

const getEnergyColor = (energy: string): string => {
  return energy === 'екзотермічна' 
    ? 'text-red-400 bg-red-400/20' 
    : 'text-blue-400 bg-blue-400/20';
};

export const ReactionModal = ({
  element,
  recipe,
  isNew,
  isBookmarked,
  onClose,
  onToggleBookmark
}: ReactionModalProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEquation = () => {
    navigator.clipboard.writeText(recipe.equation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative glass rounded-3xl p-6 max-w-md w-full animate-pop-in shadow-2xl border border-white/20">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <X size={18} />
        </button>

        <div className="text-center mb-6">
          {isNew && (
            <div className="inline-flex items-center gap-1 px-4 py-1.5 bg-gradient-to-r from-yellow-400/30 to-amber-400/30 text-yellow-300 rounded-full text-sm mb-3 animate-pulse border border-yellow-400/40">
              <Sparkles size={14} className="animate-spin" style={{ animationDuration: '3s' }} />
              Нове відкриття!
            </div>
          )}
          
          <div className="relative inline-block">
            <div className="text-7xl mb-3 animate-bounce" style={{ animationDuration: '2s' }}>{element.emoji}</div>
            {isNew && (
              <div className="absolute -top-2 -right-2">
                <Sparkles size={24} className="text-yellow-400 animate-ping" />
              </div>
            )}
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">{element.name}</h2>
          <p className="text-white/70 font-mono text-lg mt-1">{element.formula}</p>
          <p className="text-white/50 text-sm mt-1">{element.nameEn}</p>
        </div>

        <div className="bg-black/30 rounded-xl p-4 mb-4 relative group">
          <div className="flex items-center justify-center gap-2">
            <FlaskConical size={16} className="text-purple-400" />
            <p className="text-center font-mono text-lg text-blue-300">
              {recipe.equation}
            </p>
            <button
              onClick={handleCopyEquation}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors opacity-0 group-hover:opacity-100"
              title="Копіювати рівняння"
            >
              {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} className="text-white/60" />}
            </button>
          </div>
          {copied && (
            <p className="text-center text-green-400 text-xs mt-2 animate-fade-in-up">Скопійовано!</p>
          )}
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-4">
          <span className={`px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 ${getReactionTypeColor(recipe.reactionType)}`}>
            <Atom size={14} />
            {recipe.reactionType}
          </span>
          <span className={`px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 ${getEnergyColor(recipe.energy)}`}>
            <Thermometer size={14} />
            {recipe.energy}
          </span>
        </div>

        <div className="space-y-3 text-sm">
          <div className="bg-white/5 rounded-lg p-3">
            <div className="flex items-start gap-2">
              <Zap size={16} className="text-yellow-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-white/90 mb-1">Пояснення реакції</p>
                <p className="text-white/70">{recipe.explanation}</p>
              </div>
            </div>
          </div>

          {recipe.conditions && (
            <div className="bg-white/5 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <Thermometer size={16} className="text-orange-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white/90 mb-1">Умови</p>
                  <p className="text-white/70">{recipe.conditions}</p>
                </div>
              </div>
            </div>
          )}

          {recipe.application && (
            <div className="bg-white/5 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <Lightbulb size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white/90 mb-1">Застосування</p>
                  <p className="text-white/70">{recipe.application}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="text-white/60 text-sm text-center mb-3">{element.description}</p>
          
          <div className="flex gap-2 justify-center">
            <button
              onClick={onToggleBookmark}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all
                ${isBookmarked 
                  ? 'bg-yellow-400/20 text-yellow-300 border border-yellow-400/30' 
                  : 'bg-white/10 text-white/70 hover:bg-white/20'}
              `}
            >
              {isBookmarked ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
              {isBookmarked ? 'У закладках' : 'Додати до закладок'}
            </button>
            
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500/40 to-purple-500/40 text-white hover:from-blue-500/50 hover:to-purple-500/50 transition-all text-sm font-medium border border-blue-400/30 hover:border-blue-400/50"
            >
              Продовжити експерименти
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
