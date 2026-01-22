import { useState } from 'react';
import type { Element } from '../types';
import { ElementCard } from './ElementCard';
import { X } from 'lucide-react';

interface DropZoneProps {
  element: Element | null;
  onDrop: (element: Element) => void;
  onClear: () => void;
  label: string;
  isShaking?: boolean;
}

export const DropZone = ({ element, onDrop, onClear, label, isShaking = false }: DropZoneProps) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    try {
      const data = e.dataTransfer.getData('element');
      if (data) {
        const droppedElement = JSON.parse(data) as Element;
        onDrop(droppedElement);
      }
    } catch (error) {
      console.error('Error parsing dropped element:', error);
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`
        relative w-32 h-32 rounded-2xl border-2 border-dashed
        flex items-center justify-center
        transition-all duration-200
        ${isDragOver ? 'drag-over border-blue-400 bg-blue-400/20' : 'border-white/30 bg-white/5'}
        ${isShaking ? 'animate-shake' : ''}
        ${element ? 'border-solid border-white/40' : ''}
      `}
    >
      {element ? (
        <>
          <ElementCard element={element} size="large" />
          <button
            onClick={onClear}
            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500/80 hover:bg-red-500 rounded-full flex items-center justify-center transition-colors"
          >
            <X size={14} />
          </button>
        </>
      ) : (
        <div className="text-center text-white/40">
          <p className="text-3xl mb-1">+</p>
          <p className="text-xs">{label}</p>
        </div>
      )}
    </div>
  );
};
