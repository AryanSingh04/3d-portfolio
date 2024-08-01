import React from 'react'
import FoxScene from "../assets/3d/fox.glb"
import { useAnimations, useGLTF } from '@react-three/drei'
const Fox = () => {
  const {scene,animations}=useGLTF(FoxScene)
  const { actions } = useAnimations(animations, scene);

  // Play a specific animation
  React.useEffect(() => {
    if (actions) {
        console.log(actions)
        const action = actions['hit']; // Use the correct animation name here
      if (action) {
        action.play();}
    //   actions['AnimationName'].play();
    }
  }, [actions]);
  return (
    <mesh position={[0,0,-5]} rotation={[0,12,0]} >
        <primitive object={scene}/>
    </mesh>
  )
}

export default Fox