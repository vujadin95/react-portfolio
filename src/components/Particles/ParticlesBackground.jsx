import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

const ParticlesBackground = () => {
  const options = useMemo(() => {
    return {
      particles: {
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 100,
        },
        color: {
          // value: "#9ec8ff",
          value: "#ffbe31",
        },
        size: {
          value: 2,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: true,
          },
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: true,
          },
        },
      },
    };
  }, []);
  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);
  return <Particles init={particlesInit} options={options} />;
};

export default ParticlesBackground;
