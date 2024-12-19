import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei"
import Model from './Iratv1'
function Scene() 
{
  return (
    <div className='scene'>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
        <Suspense fallback={null}>
          <Model />
          <Environment preset="city" />
          <ContactShadows
            rotateX={Math.PI / 2}
            position={[0, -0.8, 0]}
            opacity={0.25}
            width={10}
          />
        </Suspense>
        <OrbitControls
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>

    </div>
  );
}
function HeroSection() {
  return (
    <>
      <Scene />
    </>

  );
}

export default HeroSection;