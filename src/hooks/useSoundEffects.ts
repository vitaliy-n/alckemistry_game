import { useCallback, useRef } from 'react';

interface SoundEffects {
  playClick: () => void;
  playSuccess: () => void;
  playError: () => void;
  playDiscover: () => void;
  playAchievement: () => void;
  playReaction: () => void;
  playCombo: () => void;
}

const createOscillator = (
  context: AudioContext,
  frequency: number,
  type: OscillatorType = 'sine',
  duration: number = 0.1
) => {
  const oscillator = context.createOscillator();
  const gainNode = context.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(context.destination);
  
  oscillator.type = type;
  oscillator.frequency.value = frequency;
  
  gainNode.gain.setValueAtTime(0.3, context.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + duration);
  
  oscillator.start(context.currentTime);
  oscillator.stop(context.currentTime + duration);
};

export const useSoundEffects = (enabled: boolean = true): SoundEffects => {
  const audioContextRef = useRef<AudioContext | null>(null);

  const getAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioContextRef.current;
  }, []);

  const playClick = useCallback(() => {
    if (!enabled) return;
    const context = getAudioContext();
    createOscillator(context, 800, 'sine', 0.05);
  }, [enabled, getAudioContext]);

  const playSuccess = useCallback(() => {
    if (!enabled) return;
    const context = getAudioContext();
    createOscillator(context, 523.25, 'sine', 0.1);
    setTimeout(() => createOscillator(context, 659.25, 'sine', 0.1), 50);
    setTimeout(() => createOscillator(context, 783.99, 'sine', 0.15), 100);
  }, [enabled, getAudioContext]);

  const playError = useCallback(() => {
    if (!enabled) return;
    const context = getAudioContext();
    createOscillator(context, 200, 'sawtooth', 0.2);
  }, [enabled, getAudioContext]);

  const playDiscover = useCallback(() => {
    if (!enabled) return;
    const context = getAudioContext();
    createOscillator(context, 440, 'sine', 0.1);
    setTimeout(() => createOscillator(context, 554.37, 'sine', 0.1), 80);
    setTimeout(() => createOscillator(context, 659.25, 'sine', 0.1), 160);
    setTimeout(() => createOscillator(context, 880, 'sine', 0.2), 240);
  }, [enabled, getAudioContext]);

  const playAchievement = useCallback(() => {
    if (!enabled) return;
    const context = getAudioContext();
    createOscillator(context, 523.25, 'triangle', 0.1);
    setTimeout(() => createOscillator(context, 659.25, 'triangle', 0.1), 100);
    setTimeout(() => createOscillator(context, 783.99, 'triangle', 0.1), 200);
    setTimeout(() => createOscillator(context, 1046.5, 'triangle', 0.3), 300);
  }, [enabled, getAudioContext]);

  const playReaction = useCallback(() => {
    if (!enabled) return;
    const context = getAudioContext();
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        createOscillator(context, 200 + i * 100, 'square', 0.05);
      }, i * 30);
    }
  }, [enabled, getAudioContext]);

  const playCombo = useCallback(() => {
    if (!enabled) return;
    const context = getAudioContext();
    createOscillator(context, 880, 'sine', 0.05);
    setTimeout(() => createOscillator(context, 1046.5, 'sine', 0.1), 50);
  }, [enabled, getAudioContext]);

  return {
    playClick,
    playSuccess,
    playError,
    playDiscover,
    playAchievement,
    playReaction,
    playCombo
  };
};
