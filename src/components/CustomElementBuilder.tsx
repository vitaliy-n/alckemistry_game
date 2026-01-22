import { useState } from 'react';
import { X, Palette, Sparkles, Save, Shuffle } from 'lucide-react';
import type { CustomElement, Element } from '../types';
import { getElementById } from '../data/elements';

interface CustomElementBuilderProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (element: CustomElement) => void;
  discoveredElements: string[];
}

const EMOJI_OPTIONS = ['⚗️', '🧪', '💎', '🔮', '✨', '💫', '🌟', '⭐', '🔥', '❄️', '💧', '🌊', '🌪️', '⚡', '🌈', '🎨', '🎭', '🎪', '🎯', '🎲', '🧬', '🔬', '🧫', '🦠'];
const COLOR_OPTIONS = [
  '#667eea', '#764ba2', '#f093fb', '#4facfe', '#00f2fe',
  '#fa709a', '#fee140', '#30cfd0', '#a8edea', '#fed6e3',
  '#ff9a9e', '#fecfef', '#ffecd2', '#fcb69f', '#ff6e7f'
];

export const CustomElementBuilder = ({ 
  isOpen, 
  onClose, 
  onSave,
  discoveredElements 
}: CustomElementBuilderProps) => {
  const [name, setName] = useState('');
  const [formula, setFormula] = useState('');
  const [description, setDescription] = useState('');
  const [emoji, setEmoji] = useState('⚗️');
  const [color, setColor] = useState('#667eea');
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const availableElements = discoveredElements
    .map(id => getElementById(id))
    .filter((el): el is Element => el !== undefined);

  const handleRandomize = () => {
    setEmoji(EMOJI_OPTIONS[Math.floor(Math.random() * EMOJI_OPTIONS.length)]);
    setColor(COLOR_OPTIONS[Math.floor(Math.random() * COLOR_OPTIONS.length)]);
  };

  const handleSave = () => {
    if (!name.trim() || !formula.trim() || selectedIngredients.length < 2) {
      alert('Заповніть всі обов\'язкові поля та виберіть мінімум 2 інгредієнти');
      return;
    }

    const customElement: CustomElement = {
      id: `custom-${Date.now()}`,
      name: name.trim(),
      formula: formula.trim(),
      emoji,
      description: description.trim() || 'Користувацька сполука',
      ingredients: selectedIngredients,
      createdAt: Date.now(),
      color
    };

    onSave(customElement);
    
    setName('');
    setFormula('');
    setDescription('');
    setEmoji('⚗️');
    setColor('#667eea');
    setSelectedIngredients([]);
    onClose();
  };

  const toggleIngredient = (id: string) => {
    setSelectedIngredients(prev => 
      prev.includes(id) 
        ? prev.filter(i => i !== id)
        : [...prev, id]
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative glass-vibrant rounded-3xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border-2 border-white/30 animate-bounce-in">
        <div className="p-6 border-b border-white/20 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <Sparkles className="text-yellow-400 animate-glow-pulse" size={28} />
              Створити власний елемент
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:rotate-90"
            >
              <X size={20} />
            </button>
          </div>
          <p className="text-white/70 text-sm mt-2">
            Комбінуйте відкриті елементи для створення унікальної сполуки
          </p>
        </div>

        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin space-y-6">
          {/* Visual Preview */}
          <div className="glass-dark rounded-2xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-3xl mb-4 transition-all hover:scale-110"
                 style={{ 
                   background: `linear-gradient(135deg, ${color}80, ${color}40)`,
                   boxShadow: `0 8px 32px ${color}60`
                 }}>
              <span className="text-6xl animate-float">{emoji}</span>
            </div>
            <h3 className="text-2xl font-bold mb-1">{name || 'Нова сполука'}</h3>
            <p className="text-xl font-mono text-blue-300">{formula || 'X₂Y₃'}</p>
          </div>

          {/* Name & Formula */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2 text-white/80">
                Назва <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Супер-сполука"
                className="w-full bg-white/10 border-2 border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-400 transition-all"
                maxLength={30}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-white/80">
                Формула <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={formula}
                onChange={(e) => setFormula(e.target.value)}
                placeholder="X₂Y₃Z"
                className="w-full bg-white/10 border-2 border-white/20 rounded-xl px-4 py-3 font-mono focus:outline-none focus:border-purple-400 transition-all"
                maxLength={20}
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-white/80">Опис</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Опишіть властивості вашої сполуки..."
              rows={3}
              className="w-full bg-white/10 border-2 border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-400 transition-all resize-none"
              maxLength={200}
            />
          </div>

          {/* Emoji & Color */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-white/80">Іконка</label>
                <button
                  onClick={handleRandomize}
                  className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs transition-all"
                >
                  <Shuffle size={12} />
                  Випадково
                </button>
              </div>
              <div className="grid grid-cols-6 gap-2">
                {EMOJI_OPTIONS.map(e => (
                  <button
                    key={e}
                    onClick={() => setEmoji(e)}
                    className={`p-3 rounded-xl text-2xl transition-all hover:scale-110 ${
                      emoji === e 
                        ? 'bg-purple-500/30 ring-2 ring-purple-400' 
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    {e}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-white/80">
                <Palette size={14} className="inline mr-1" />
                Колір
              </label>
              <div className="grid grid-cols-5 gap-2">
                {COLOR_OPTIONS.map(c => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`h-12 rounded-xl transition-all hover:scale-110 ${
                      color === c ? 'ring-4 ring-white' : ''
                    }`}
                    style={{ 
                      background: `linear-gradient(135deg, ${c}, ${c}cc)`,
                      boxShadow: color === c ? `0 4px 20px ${c}` : 'none'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Ingredients Selection */}
          <div>
            <label className="block text-sm font-semibold mb-3 text-white/80">
              Інгредієнти <span className="text-red-400">*</span>
              <span className="text-white/50 text-xs ml-2">
                (Обрано: {selectedIngredients.length}, мінімум 2)
              </span>
            </label>
            <div className="grid grid-cols-4 gap-2 max-h-60 overflow-y-auto scrollbar-thin p-2 bg-white/5 rounded-xl">
              {availableElements.map(el => (
                <button
                  key={el.id}
                  onClick={() => toggleIngredient(el.id)}
                  className={`p-3 rounded-xl transition-all hover:scale-105 ${
                    selectedIngredients.includes(el.id)
                      ? 'bg-green-500/30 ring-2 ring-green-400'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  <div className="text-2xl mb-1">{el.emoji}</div>
                  <div className="text-xs font-mono truncate">{el.formula}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
          <div className="flex gap-3 justify-end">
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all"
            >
              Скасувати
            </button>
            <button
              onClick={handleSave}
              disabled={!name.trim() || !formula.trim() || selectedIngredients.length < 2}
              className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Save size={20} />
              Створити елемент
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
