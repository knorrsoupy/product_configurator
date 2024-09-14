import './App.css';
import Experience from './Components/Experience.jsx';
import { Canvas } from '@react-three/fiber';
import Configurator from './Components/Configurator.jsx';
import { CustomizationProvider } from './contexts/Customization.jsx';
import Intro from './Intro.jsx';

function App(){
    return (
        <CustomizationProvider >
    <div className="App">
             <Intro />
        <Canvas>
            <color attach="background" args={['#3b274a']} />
            <fog attach="fog" args={['#3b274a', 1, 20]} />
            <Experience/>
        </Canvas>
        <Configurator />
    </div>
    </CustomizationProvider>
    )
}
export default App