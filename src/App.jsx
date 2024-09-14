import './App.css';
import Experience from './Components/Experience.jsx';
import { Canvas } from '@react-three/fiber';
import Configurator from './Components/Configurator.jsx';
import { CustomizationProvider } from './contexts/Customization.jsx';

function App(){
    return (
        <CustomizationProvider >
    <div className="App">
        <Canvas>
            <color attach="background" args={['#9b66cc']} />
            <fog attach="fog" args={['#9b66cc', 1, 20]} />
            <Experience/>
        </Canvas>
        <Configurator />
    </div>
    </CustomizationProvider>
    )
}
export default App