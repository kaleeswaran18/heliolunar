import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Particle = ({ options, rekey }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    setInit(false);
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, [rekey]);

  if (!init) return null;

  return (
    <Particles
      id={`tsparticles-${rekey}`} 
      options={options}
      style={{
        position: "absolute",
        top: 50,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
};

export default Particle;
