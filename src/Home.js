import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { useLoader } from '@react-three/fiber'
import { MTLLoader } from 'three/examples/jsm/Addons.js'
import { OBJLoader } from 'three/examples/jsm/Addons.js'
import { OrbitControls } from 'three/examples/jsm/Addons.js'


const Model = () => {
    const materials = useLoader(MTLLoader, "./brand/dscart.mtl");

    const obj = useLoader(OBJLoader, "./brand/dscart.obj", (loader) => {
      materials.preload();
      loader.setMaterials(materials);
    });

    console.log(obj);
    return <primitive object={obj} scale={0.4} />;
  };


const Home = () => {
 
    return (
        
        <div id="landing-page">
            <h1 id="landing-title">NIKOLAI KING</h1>
            <p id="landing-para">Programmer, Web-Developer, Designer, Game Developer</p>
            <div id="landing-canvas">  <Canvas>
                <Suspense fallback={null}>
           <Model />
           {/* <Controls />    */}
                    </Suspense>  
                    </Canvas> 
                      
 </div>
 </div>
    )
}


export default Home
