import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Intro from './Pages/Intro.js';
import Guide from './Pages/Guide.js';
import Login from './Pages/Login.js';
import Art from './Pages/Art.js';
import Auth from './Pages/Auth.js';
import { Earth } from './Earth.tsx';
import { Canvas, useThree } from '@react-three/fiber';
import {  OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

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

function ThreeScene() {
  return (
    <Canvas style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
      <ambientLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-3, -3, 2]} />
      <Controls />
      <SkySphere/>
      <Earth />
    </Canvas>
  );
}


function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/Guide" element={<Guide />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Art" element={<Art />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/Earth" element={<ThreeScene/>}/>
      </Routes>
      </Router>
  );
}

export default App;
