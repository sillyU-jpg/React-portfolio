import { Canvas } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { useLoader } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import Carousel from './Carousel'
import { useState } from 'react'


function Model({ path }) {
  const { scene} = useGLTF(path);
  
  const ref = useRef()
  useFrame((state, delta) => {

    ref.current.rotation.y += delta
  let rotation_counter = ref.current.rotation.y;
  ref.current.position.y = Math.sin(state.clock.elapsedTime)/3

  })

  return <primitive object={scene} ref={ref} />;
}




const Home = () => {
 
    return (
        <>
        <div id="landing-page">
            <h1 id="landing-title">NIKOLAI KING</h1>
            <p id="landing-para">Programmer, Web-Developer, Designer, Game Developer</p>
       
 </div>
      <div id="landing-canvas"> 
      <Canvas >
      <ambientLight intensity={1} />
      <directionalLight color="white" position={[0, 0, 5]} />
      <directionalLight color="white" position={[0, 0, -5]} />
       <Suspense fallback={null}>
  <Model path="/brand/dscart.glb">
</Model>
<OrbitControls enableZoom={false} enablePan={false}/>
           </Suspense>  
           </Canvas> 
             
</div>
    <Carousel>
    </Carousel>
</>
    )
}

useGLTF.preload("/brand/dscart.glb");
export default Home
