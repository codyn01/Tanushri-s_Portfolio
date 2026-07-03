/**
 * @copyright 2025 Looknath
 * @license Apache-2.0
*/

import { Astronaut } from "../components/Astronaut";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import DigitalClock from "../components/DigitalClock";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Suspense } from "react";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <section
      className="flex items-start justify-center md:items-start
      md:justify-start min-h-screen overflow-hidden c-space"
    >
      <HeroText />
      <ParallaxBackground />
      <DigitalClock />

      <figure
        className="absolute inset-0 z-10"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>

          {/* LIGHTS */}
          <ambientLight intensity={1.2} />
          <directionalLight position={[2, 2, 2]} intensity={1.5} />

          <Suspense
            fallback={
              <mesh>
                <boxGeometry />
                <meshBasicMaterial color="white" />
              </mesh>
            }
          >
            <Astronaut
              scale={isMobile ? 0.23 : 0.3}
              position={
                isMobile
                  ? [0, -1.5, 0]
                  : [1.3, -1, 0]
              }
            />
          </Suspense>

          <Rig />

        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  useFrame((state) => {
    state.camera.position.x =
      state.mouse.x * 0.5;

    state.camera.position.y =
      1 + state.mouse.y * 0.5;

    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

export default Hero;