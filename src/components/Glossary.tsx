import { useState, useMemo } from 'react';
import { BookOpen, X, Search, ExternalLink, ChevronRight } from 'lucide-react';
import { glossaryTerms } from '../data/glossary';
import type { GlossaryTerm } from '../types';

interface GlossaryProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Glossary = ({ isOpen, onClose }: GlossaryProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTerm, setSelectedTerm] = useState<GlossaryTerm | null>(null);

  const filteredTerms = useMemo(() => {
    if (searchQuery === '') return glossaryTerms;
    const lowerQuery = searchQuery.toLowerCase();
    return glossaryTerms.filter(term =>
      term.term.toLowerCase().includes(lowerQuery) ||
      term.termEn.toLowerCase().includes(lowerQuery) ||
      term.definition.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery]);

  const getRelatedTerms = (ids: string[] | undefined) => {
    if (!ids) return [];
    return ids.map(id => glossaryTerms.find(t => t.id === id)).filter(Boolean) as GlossaryTerm[];
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative glass rounded-3xl w-full max-w-4xl h-[80vh] flex flex-col overflow-hidden shadow-2xl border border-white/20">
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <BookOpen size={24} className="text-cyan-400" />
            Глосарій хімічних термінів
            <span className="text-sm font-normal text-white/50 ml-2">
              ({glossaryTerms.length} термінів)
            </span>
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-4 border-b border-white/10">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Пошук термінів..."
              className="w-full bg-white/10 border border-white/10 rounded-lg pl-9 pr-3 py-2 text-sm placeholder:text-white/40 focus:outline-none focus:border-cyan-400/50 transition-colors"
            />
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
          {/* Terms list */}
          <div className="w-1/3 border-r border-white/10 overflow-y-auto scrollbar-thin">
            {filteredTerms.length === 0 ? (
              <div className="p-4 text-center text-white/40">
                <p>Нічого не знайдено</p>
              </div>
            ) : (
              <div className="p-2">
                {filteredTerms.map(term => (
                  <button
                    key={term.id}
                    onClick={() => setSelectedTerm(term)}
                    className={`w-full text-left p-3 rounded-lg transition-all mb-1 group ${
                      selectedTerm?.id === term.id
                        ? 'bg-cyan-500/20 border border-cyan-400/30'
                        : 'hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{term.term}</p>
                        <p className="text-xs text-white/40">{term.termEn}</p>
                      </div>
                      <ChevronRight size={16} className="text-white/30 group-hover:text-white/60 transition-colors" />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Term details */}
          <div className="flex-1 overflow-y-auto p-6 scrollbar-thin">
            {selectedTerm ? (
              <div className="animate-pop-in">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-cyan-400">{selectedTerm.term}</h3>
                  <p className="text-white/50 italic">{selectedTerm.termEn}</p>
                </div>

                <div className="glass-dark rounded-xl p-4 mb-4">
                  <h4 className="font-semibold mb-2 text-white/70">Визначення</h4>
                  <p className="text-white/90 leading-relaxed">{selectedTerm.definition}</p>
                </div>

                {selectedTerm.example && (
                  <div className="glass-dark rounded-xl p-4 mb-4">
                    <h4 className="font-semibold mb-2 text-white/70">Приклад</h4>
                    <p className="text-green-400 font-mono">{selectedTerm.example}</p>
                  </div>
                )}

                {selectedTerm.relatedTerms && selectedTerm.relatedTerms.length > 0 && (
                  <div className="glass-dark rounded-xl p-4">
                    <h4 className="font-semibold mb-3 text-white/70">Пов'язані терміни</h4>
                    <div className="flex flex-wrap gap-2">
                      {getRelatedTerms(selectedTerm.relatedTerms).map(relatedTerm => (
                        <button
                          key={relatedTerm.id}
                          onClick={() => setSelectedTerm(relatedTerm)}
                          className="flex items-center gap-1 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors"
                        >
                          <ExternalLink size={12} />
                          {relatedTerm.term}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-white/40">
                <div className="text-center">
                  <BookOpen size={48} className="mx-auto mb-3 opacity-30" />
                  <p>Виберіть термін зі списку</p>
                  <p className="text-sm mt-2">для перегляду визначення</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="p-4 border-t border-white/10 bg-white/5">
          <p className="text-xs text-white/40 text-center">
            💡 Використовуйте пошук для швидкого знаходження термінів українською або англійською
          </p>
        </div>
      </div>
    </div>
  );
};
