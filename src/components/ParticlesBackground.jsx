import { useCallback } from "react";
import Particles from "react-tsparticles";
import { tsParticles } from "tsparticles-engine";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine); // ✅ Correct engine object with checkVersion
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        background: {
          color: { value: "#1f2937" }
        },
        particles: {
          number: { value: 60 },
          color: { value: "#fff" },
          shape: { type: ["circle", "star", "polygon"] },
          links: {
            enable: true,
            color: "#fff",
            distance: 150
          },
          move: {
            enable: true,
            speed: 2
          },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 3 } }
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 }
          }
        }
      }}
    />
  );
};

export default ParticlesBackground;
