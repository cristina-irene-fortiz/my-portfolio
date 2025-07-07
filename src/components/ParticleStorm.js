// src/components/ParticleStorm.js
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function ParticleStorm() {
  // initialize the full tsParticles bundle
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },        // render within parent
        particles: {
          number: { value: 120, density: { enable: false } },
          color: { value: '#ff41b5' },        // your pink accent
          shape: { type: 'circle' },
          opacity: { value: 0.8, random: true },
          size: { value: { min: 2, max: 5 }, random: true },
          move: {
            enable: true,
            speed: 4,
            // → SWIRL: use “attract” to pull them around an invisible center
            attract: { enable: true, rotateX: 600, rotateY: 1200 },
            outModes: { default: 'out' }
          }
        },
        detectRetina: true
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none'
      }}
    />
  );
}
