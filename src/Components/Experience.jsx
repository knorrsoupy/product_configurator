import { PresentationControls, Stage, MeshReflectorMaterial, Center } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Chair from "./Chair";



const Experience = () => {

  return (
    <PresentationControls 
    speed={1.5} 
    global 
    zoom={0.3} 
    polar={[-0.1, Math.PI / 4]}
    >
    
        <Stage 
        environment={"city"} 
        intensity={0.4} 
        contactShadow={true}
        adjustCamera={true}
        >
                <Chair />
               

        </Stage>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0,-2, 0]}>
             <planeGeometry args={[170,170]} />
             <MeshReflectorMaterial
                blur = {[250, 250]}
                resolution = {[2048]}
                mixBlur={1}
                mixStrength={40}
                roughness={1}
                depthScale={1.3}
                minDepthThreshold={0.2}
                maxDepthThreshold={1.3}
                color="#11021c"
                metalness={0.5}
             />   
        </mesh>

    </PresentationControls>
  );
};
export default Experience;