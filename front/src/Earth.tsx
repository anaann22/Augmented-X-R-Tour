/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/earth/scene.gltf -t -r public 
Author: denis_cliofas (https://sketchfab.com/denis_cliofas)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/earth-3684eb40fb7e42208089874e6286b9e9
Title: Earth
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Earth_Earth_0: THREE.Mesh
    Earth_Earth_0_1: THREE.Mesh
    Earth_Earth_0_2: THREE.Mesh
  }
  materials: {
    Earth: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ActionName = 'Earth|EarthAction' | 'Earth|Shader NodetreeAction'
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}
type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Earth(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/earth/scene.gltf') as GLTFResult
  const { actions } = useAnimations(animations, group)
  return (
    <group {...props} dispose={null} scale = {13}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.002}>
          <group name="fc09fa6deb6c45f687e724438fed81adfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Earth" rotation={[-Math.PI / 2, 0, 0]} scale={57.393}>
                  <mesh name="Earth_Earth_0" geometry={nodes.Earth_Earth_0.geometry} material={materials.Earth} />
                  <mesh name="Earth_Earth_0_1" geometry={nodes.Earth_Earth_0_1.geometry} material={materials.Earth} />
                  <mesh name="Earth_Earth_0_2" geometry={nodes.Earth_Earth_0_2.geometry} material={materials.Earth} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/earth/scene.gltf')
