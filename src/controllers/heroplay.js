import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei"
import Model from './Iratv1'

function Scene() {
  return (
    <div id='canvas-container'>
    <Canvas>
      <mesh>
        <sphereGeometry />
        <meshBasicMaterial />
        <ambientLight color={0xfcfcfc} intensity={0.2} />
      </mesh>
    </Canvas>
  </div>
  )
}
function HeroSection() {
  return (
    <>
      <Scene />
    </>

  );
}

export default HeroSection;