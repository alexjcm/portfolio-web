import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from "@tsparticles/slim";
import type { Container, ISourceOptions } from "@tsparticles/engine";

import styled from 'styled-components';

const ParticlesWrapper = styled.div`
  position: fixed;
  z-index: -1;
`;

const CustomParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    // console.log('Particles container loaded', container);
  };

  const options: ISourceOptions = {
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'repulse',
        },
        onHover: {
          enable: true,
          mode: 'bubble',
          parallax: {
            enable: false,
            force: 2,
            smooth: 10,
          },
        },
        resize: {
          delay: 0.5,
          enable: true,
        },
      },
      modes: {
        push: {
          default: true,
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 16,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: 'ease-out-quad',
        },
        bubble: {
          distance: 200,
          duration: 2,
          mix: false,
          opacity: 0,
          size: 0,
        },
      },
    },
    particles: {
      color: {
        value: '#ffffff',
      },
      links: {
        blink: false,
        color: '#ffffff',
        distance: 150,
        enable: false,
        frequency: 1,
        opacity: 0.1,
        shadow: {
          blur: 5,
          color: '#000',
          enable: false,
        },
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: 'top',
        drift: 0,
        enable: true,
        outModes: {
          default: 'out',
        },
        random: true,
        speed: 0.3,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 160,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  return (
    init ? (
      <ParticlesWrapper>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </ParticlesWrapper>
    ) : null
  );
};

export default CustomParticles;