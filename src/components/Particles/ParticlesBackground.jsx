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
        size: {
          value: 4,
          random: true,
          anim: {
            enable: true,
            speed: 5,
            size_min: 0.1,
            sync: false,
          },
        },
        color: {
          value: "#e6429c",
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: true,
            speed: 3,
            opacity_min: 0.1,
            sync: false,
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
