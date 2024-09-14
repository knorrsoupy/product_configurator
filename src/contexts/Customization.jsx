import { createContext, useContext, useState} from "react";


const CustomizationContext = createContext({});

export const chairColors = [
    {color: '#ff0000',name: 'red' },
    {color: '#0000ff',name: 'blue'},
    { color: '#ffff00',name: 'yellow'},
    {color: '#008000',name: 'green'},
    {color: '#800080',name: 'purple'},
    {color: '#ffa500',name: 'orange' },
    { color: '#ffc0cb',name: 'pink'},
    {color: '#a52a2a',name: 'brown' },
    {color: '#808080',name: 'grey'},
    {color: '#ffd700',name: 'gold' },
    {color: '#c0c0c0',name: 'silver'},
]
export const cushionColors = [
    {color: '#ff0000',name: 'red' },
    {color: '#0000ff',name: 'blue'},
    { color: '#ffff00',name: 'yellow'},
    {color: '#008000',name: 'green'},
    {color: '#800080',name: 'purple'},
    {color: '#ffa500',name: 'orange' },
    {color: '#ffc0cb',name: 'pink'},
    {color: '#a52a2a',name: 'brown' },
    {color: '#808080',name: 'grey'},
    {color: '#ffd700',name: 'gold' },
    {color: '#c0c0c0',name: 'silver'},
]

export const CustomizationProvider = (props) => {

    const[material, setMaterial] = useState('leather');
    const[legs, setLegs] = useState(1);
    const[chairColor, setChairColor] = useState(chairColors[0]);
    const[cushionColor, setCushionColor] = useState(cushionColors[0]);




 return ( <CustomizationContext.Provider value={{
        material,
        setMaterial,
        legs,
        setLegs,
        chairColor,
        setChairColor,
        cushionColor,
        setCushionColor,
 }}>
    {props.children}
 </CustomizationContext.Provider> 
 );
}


export const useCustomization = () => {

    const context = useContext(CustomizationContext);
    return context;
}