import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticleBg() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10"
      options={{
        fpsLimit: 60,
        particles: {
          number: { value: 30, density: { enable: true } },
          color: { value: '#64ffda' },
          opacity: { value: 0.15 },
          size: { value: { min: 1, max: 3 } },
          move: {
            enable: true,
            speed: 0.5,
            direction: 'none' as const,
            random: true,
            straight: false,
            outModes: { default: 'bounce' as const },
          },
          links: {
            enable: true,
            color: '#64ffda',
            opacity: 0.08,
            distance: 150,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'grab' as const },
          },
          modes: {
            grab: { distance: 140, links: { opacity: 0.2 } },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
