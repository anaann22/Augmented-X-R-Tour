import { Earth } from '../Earth.tsx';
import { Canvas, useThree } from '@react-three/fiber';
import {  OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import '../css/Earth.css'

function SkySphere() {
  return (
    <mesh>
      <sphereGeometry args={[50, 32, 32]} />
      <meshBasicMaterial side={2} map={new THREE.TextureLoader().load('..')} />
    </mesh>
  );
}

function Controls(){
  const {
    camera,
    gl: {domElement},
  } = useThree();

  return <OrbitControls args={[camera, domElement]}  />
}

function Scene() {

  return (
    <div>
      <div className = 'textEarth' >mama</div>
      <div className = 'textE2'> idee </div>
      </div>
      );
}


function ThreeScene() {
  return (
    <div>
      <Canvas style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
        <ambientLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-3, -3, 2]} />
        <Controls />
        <SkySphere />
        <Earth />
      </Canvas>
      <Scene />
    </div>
  );
}


export default ThreeScene;