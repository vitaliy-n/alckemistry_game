import { useState, useEffect, useCallback } from 'react';
import { useStorage } from './hooks/useStorage';
import { useGame } from './hooks/useGame';
import { checkAchievements } from './data/achievements';
import type { Achievement, Element, SavedCombination } from './types';
import {
  Header,
  Sidebar,
  WorkAreaAdvanced,
  TimelineJournal,
  ReactionModal,
  Encyclopedia,
  Achievements,
  AchievementToast,
  Settings,
  SavedCombinations,
  HintsPanel,
  Glossary,
  ReactionParticles,
  CustomElementBuilder,
  DailyChallenges,
  QuestSystem,
  Tutorial,
  Leaderboard
} from './components';
import { useSoundEffects } from './hooks/useSoundEffects';

function App() {
  const {
    progress,
    discoverElement,
    addReaction,
    unlockAchievement,
    toggleBookmark,
    saveCombination,
    removeSavedCombination,
    toggleCombinationFavorite,
    updateSettings,
    spendCurrency,
    addCustomElement,
    resetProgress
  } = useStorage();

  const {
    gameState,
    setSlot,
    addToNextEmptySlot,
    clearSlots,
    clearSlot,
    performReaction,
    performDirectReaction,
    closeModal
  } = useGame(progress.discoveredElements, discoverElement, addReaction);

  const [showEncyclopedia, setShowEncyclopedia] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showSavedCombinations, setShowSavedCombinations] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [showGlossary, setShowGlossary] = useState(false);
  const [showCustomBuilder, setShowCustomBuilder] = useState(false);
  const [showDailyChallenges, setShowDailyChallenges] = useState(false);
  const [showQuests, setShowQuests] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [newAchievement, setNewAchievement] = useState<Achievement | null>(null);

  const sounds = useSoundEffects(progress.settings.soundEnabled);

  useEffect(() => {
    const hasSeenTutorial = localStorage.getItem('tutorial-completed');
    if (!hasSeenTutorial && progress.totalReactions === 0) {
      setShowTutorial(true);
    }
  }, [progress.totalReactions]);

  useEffect(() => {
    const newAchievements = checkAchievements(
      progress.discoveredElements,
      progress.completedReactions,
      progress.achievements
    );

    if (newAchievements.length > 0) {
      const achievement = newAchievements[0];
      unlockAchievement(achievement.id);
      setNewAchievement(achievement);
    }
  }, [progress.discoveredElements, progress.completedReactions, progress.achievements, unlockAchievement]);

  const handleElementClick = useCallback((element: Element) => {
    addToNextEmptySlot(element);
    sounds.playClick();
  }, [addToNextEmptySlot, sounds]);

  const handleCloseAchievementToast = useCallback(() => {
    setNewAchievement(null);
  }, []);

  const handleTutorialComplete = useCallback(() => {
    localStorage.setItem('tutorial-completed', 'true');
    unlockAchievement('tutorial_complete', 50);
  }, [unlockAchievement]);

  const handleSaveCombination = useCallback((combo: Omit<SavedCombination, 'id' | 'createdAt'>) => {
    saveCombination({
      ...combo,
      id: `combo-${Date.now()}`,
      createdAt: Date.now()
    });
  }, [saveCombination]);

  const handleLoadCombination = useCallback((elements: Element[]) => {
    clearSlots();
    elements.forEach((el, idx) => {
      if (idx < 4) setSlot(idx, el);
    });
  }, [clearSlots, setSlot]);

  const handleClaimReward = useCallback((challengeId: string, reward: number) => {
    unlockAchievement(challengeId, reward);
    sounds.playSuccess();
  }, [unlockAchievement]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        progress={progress}
        onOpenEncyclopedia={() => setShowEncyclopedia(true)}
        onOpenAchievements={() => setShowAchievements(true)}
        onOpenSettings={() => setShowSettings(true)}
        onOpenSavedCombinations={() => setShowSavedCombinations(true)}
        onOpenHints={() => setShowHints(true)}
        onOpenGlossary={() => setShowGlossary(true)}
        onOpenCustomBuilder={() => setShowCustomBuilder(true)}
        onOpenDailyChallenges={() => setShowDailyChallenges(true)}
        onOpenQuests={() => setShowQuests(true)}
        onOpenTutorial={() => setShowTutorial(true)}
        onOpenLeaderboard={() => setShowLeaderboard(true)}
        onResetProgress={resetProgress}
      />

      <main className="flex-1 flex items-stretch p-4 gap-4 overflow-hidden min-h-0">
        <Sidebar
          discoveredElements={progress.discoveredElements}
          customElements={progress.customElements}
          currentSlots={gameState.slots}
          onElementClick={handleElementClick}
          onReaction={performDirectReaction}
        />

        <WorkAreaAdvanced
          gameState={gameState}
          onSetSlot={setSlot}
          onClearSlot={clearSlot}
          onReact={performReaction}
          onClearAll={clearSlots}
          onSaveCombination={handleSaveCombination}
          currency={progress.currency}
        />

        <TimelineJournal
          progress={progress}
          onToggleBookmark={toggleBookmark}
        />
      </main>

      {gameState.showModal && gameState.lastResult && (
        <ReactionModal
          element={gameState.lastResult.element}
          recipe={gameState.lastResult.recipe}
          isNew={!progress.discoveredElements.includes(gameState.lastResult.element.id) || 
                 progress.discoveredElements.indexOf(gameState.lastResult.element.id) === progress.discoveredElements.length - 1}
          isBookmarked={progress.bookmarks.includes(gameState.lastResult.recipe.id)}
          onClose={closeModal}
          onToggleBookmark={() => toggleBookmark(gameState.lastResult!.recipe.id)}
        />
      )}

      <Encyclopedia
        discoveredElements={progress.discoveredElements}
        isOpen={showEncyclopedia}
        onClose={() => setShowEncyclopedia(false)}
      />

      <Achievements
        progress={progress}
        isOpen={showAchievements}
        onClose={() => setShowAchievements(false)}
      />

      <Settings
        settings={progress.settings}
        stats={progress.stats}
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        onUpdateSettings={updateSettings}
        onResetProgress={resetProgress}
      />

      <SavedCombinations
        combinations={progress.savedCombinations}
        isOpen={showSavedCombinations}
        onClose={() => setShowSavedCombinations(false)}
        onRemove={removeSavedCombination}
        onToggleFavorite={toggleCombinationFavorite}
        onLoadCombination={handleLoadCombination}
      />

      <HintsPanel
        isOpen={showHints}
        onClose={() => setShowHints(false)}
        discoveredElements={progress.discoveredElements}
        completedReactions={progress.completedReactions}
        currency={progress.currency}
        onSpendCurrency={spendCurrency}
      />

      <Glossary
        isOpen={showGlossary}
        onClose={() => setShowGlossary(false)}
      />

      <CustomElementBuilder
        isOpen={showCustomBuilder}
        onClose={() => setShowCustomBuilder(false)}
        onSave={(element) => {
          addCustomElement(element);
          discoverElement(element.id);
          unlockAchievement('custom_creator', 50);
        }}
        discoveredElements={progress.discoveredElements}
      />

      <DailyChallenges
        isOpen={showDailyChallenges}
        onClose={() => setShowDailyChallenges(false)}
        progress={progress}
        onClaimReward={handleClaimReward}
      />

      <QuestSystem
        isOpen={showQuests}
        onClose={() => setShowQuests(false)}
        progress={progress}
      />

      <Tutorial
        isOpen={showTutorial}
        onClose={() => setShowTutorial(false)}
        onComplete={handleTutorialComplete}
      />

      <Leaderboard
        isOpen={showLeaderboard}
        onClose={() => setShowLeaderboard(false)}
        currentProgress={progress}
      />

      <ReactionParticles isReacting={gameState.isReacting} />

      {newAchievement && (
        <AchievementToast
          achievement={newAchievement}
          onClose={handleCloseAchievementToast}
        />
      )}
    </div>
  );
}

export default App;
