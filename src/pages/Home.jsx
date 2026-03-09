import { Environment } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import sakura from "../assets/sakura.mp3";
import { HomeInfo, Loader } from "../components";
import { soundoff, soundon } from "../assets/icons";
import { Bird, Island, Plane, SceneDecor, Sky } from "../models";

const stageMeta = {
  1: { label: "Intro", hint: "Drag the island to explore points of interest." },
  2: { label: "Experience", hint: "Discover skills, timeline, and services." },
  3: { label: "Projects", hint: "Browse selected builds with outcomes and stacks." },
  4: { label: "Contact", hint: "Reach out to start your next build." },
};

const DynamicLights = () => {
  const keyLight = useRef();
  const rimLight = useRef();

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    keyLight.current.intensity = 1.9 + Math.sin(t * 0.7) * 0.35;
    keyLight.current.position.x = 6 + Math.cos(t * 0.35) * 3;
    keyLight.current.position.z = 5 + Math.sin(t * 0.4) * 2;
    rimLight.current.intensity = 1 + Math.cos(t * 0.9) * 0.22;
  });

  return (
    <>
      <directionalLight ref={keyLight} position={[6, 8, 5]} intensity={2} />
      <pointLight ref={rimLight} position={[-12, 6, -8]} color='#7dd3fc' intensity={1.1} />
    </>
  );
};

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  const activeStage = stageMeta[currentStage];

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center px-4'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <div className='home-panel'>
        <p className='home-panel-kicker'>Interactive 3D Portfolio</p>
        <h2 className='home-panel-title'>
          {activeStage?.label || "Explore"}
        </h2>
        <p className='home-panel-text'>
          {activeStage?.hint || "Rotate the scene to reveal sections."}
        </p>
        <div className='home-stage-row'>
          {[1, 2, 3, 4].map((stage) => (
            <span
              key={stage}
              className={`home-stage-dot ${currentStage === stage ? "home-stage-dot-active" : ""}`}
            />
          ))}
        </div>
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        dpr={[1, 1.5]}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <DynamicLights />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={1.6} color='#bae6fd' />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1.8}
          />
          <hemisphereLight
            skyColor='#a5f3fc'
            groundColor='#082f49'
            intensity={1.1}
          />
          <fog attach='fog' args={["#b8e7ff", 30, 130]} />

          <Environment preset='sunset' />
          <SceneDecor />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />
        </Suspense>
      </Canvas>

      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
    </section>
  );
};

export default Home;
