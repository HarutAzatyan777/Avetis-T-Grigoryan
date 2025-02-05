import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import Target from '../components/Target.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import { HackerRoom } from '../components/HackerRoom.jsx';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Avetis <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Building Products & Brands</p>
      </div>

      {/* <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
           
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0.1, -Math.PI, 0]}
              />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
            </group>

            <ambientLight intensity={10} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div> */}
      {/* Development Skills Section */}
      <div className="skills w-full text-center mt-12 text-white">
        <h2 className="text-3xl font-semibold mb-6">Development Skills</h2>

        {/* Languages & Technologies */}
        <div className="skills-section mb-8 px-4">
          <h3 className="text-xl font-medium mb-2">Languages & Technologies</h3>
          <p className="text-lg text-gray-300">
            Solidity, JavaScript, Go Lang, Python, Node.js, Ruby, HTML, CSS
          </p>
        </div>

        {/* Front-End */}
        <div className="skills-section mb-8 px-4">
          <h3 className="text-xl font-medium mb-2">Front-End</h3>
          <p className="text-lg text-gray-300">
            React-JS, Web3-React, React-Native, React-Redux, Redux-Saga, TypeScript, Immutable-JS, Reselect, Bootstrap, Reactstrap, Material-UI
          </p>
        </div>

        {/* Back-End */}
        <div className="skills-section mb-8 px-4">
          <h3 className="text-xl font-medium mb-2">Back-End</h3>
          <p className="text-lg text-gray-300">
            Express.js (Senior), Web3, Web3-eth, Flask, Ruby On Rails
          </p>
        </div>

        {/* Software & Databases */}
        <div className="skills-section mb-8 px-4">
          <h3 className="text-xl font-medium mb-2">Software & Databases</h3>
          <p className="text-lg text-gray-300">
            MySQL, MongoDB, Windows, Mac OS, Nginx
          </p>
        </div>

        {/* Version Control & Environments */}
        <div className="skills-section mb-8 px-4">
          <h3 className="text-xl font-medium mb-2">Version Control & Environments</h3>
          <p className="text-lg text-gray-300">
            GIT, WebStorm, Intellij, Command Line
          </p>
        </div>
      </div>

      {/* Call-to-Action Button */}
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
