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
        intensity={0.5} 
        contactShadow={true}
        adjustCamera={true}
        >
                <Chair />
               

        </Stage>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0,-2, 0]}>
             <planeGeometry args={[170,170]} />
             <MeshReflectorMaterial
                blur = {[300, 300]}
                resolution = {[2048]}
                mixBlur={1}
                mixStrength={30}
                roughness={1}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color="#101010"
                metalness={0.7}
             />   
        </mesh>

    </PresentationControls>
  );
};
export default Experience;