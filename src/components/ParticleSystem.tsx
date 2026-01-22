import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
  size: number;
}

interface ParticleSystemProps {
  isActive: boolean;
  centerX: number;
  centerY: number;
  color?: string;
  count?: number;
}

export const ParticleSystem = ({ 
  isActive, 
  centerX, 
  centerY, 
  color = '#4facfe',
  count = 30 
}: ParticleSystemProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (!isActive) {
      setParticles([]);
      return;
    }

    const newParticles: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: centerX,
      y: centerY,
      vx: (Math.random() - 0.5) * 8,
      vy: (Math.random() - 0.5) * 8,
      life: 1,
      color,
      size: Math.random() * 6 + 2
    }));

    setParticles(newParticles);

    const interval = setInterval(() => {
      setParticles(prev => 
        prev
          .map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.2,
            life: p.life - 0.02
          }))
          .filter(p => p.life > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, [isActive, centerX, centerY, color, count]);

  if (!isActive || particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            opacity: p.life,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
            transform: `translate(-50%, -50%)`,
            transition: 'all 0.016s linear'
          }}
        />
      ))}
    </div>
  );
};

export const ReactionParticles = ({ isReacting }: { isReacting: boolean }) => {
  if (!isReacting) return null;

  return (
    <>
      <ParticleSystem 
        isActive={isReacting} 
        centerX={window.innerWidth / 2} 
        centerY={window.innerHeight / 2}
        color="#667eea"
        count={50}
      />
      <ParticleSystem 
        isActive={isReacting} 
        centerX={window.innerWidth / 2 - 50} 
        centerY={window.innerHeight / 2}
        color="#f093fb"
        count={30}
      />
      <ParticleSystem 
        isActive={isReacting} 
        centerX={window.innerWidth / 2 + 50} 
        centerY={window.innerHeight / 2}
        color="#4facfe"
        count={30}
      />
    </>
  );
};
