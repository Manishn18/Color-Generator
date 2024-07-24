import { useEffect, useState } from "react"
import './Color.css'

const hexString = "0123456789ABCDEF"

const colorGeneratorFunc = () => {
    let emptyString = "#"
    for (let i = 0; i < 6; i++) {
        emptyString += hexString[Math.floor(Math.random() * 16)]
    }
    return emptyString
}

function Color(){

    const [initialColor, setInitialColor] = useState("")
    const [isDiscoMode, setIsDiscoMode] = useState(false)

    useEffect(() => {
        let interval
        if (isDiscoMode) 
        {
            interval = setInterval(() => {
                setColor();
            }, 400);
        }
        else 
        {
            clearInterval(interval);
            setInitialColor("#FFFFFF")
        }

        return () => clearInterval(interval);

    },[isDiscoMode])

    const setColor = () => {
        setInitialColor(colorGeneratorFunc())
    }
    
    const toggleDiscoMode = () => {
        setIsDiscoMode((prevMode) => !prevMode);
    };

    return (
        <div className="color-container" style={{ backgroundColor: initialColor}}>
            <button className = "color-button" onClick = {setColor}>Generate Color</button>
            <button className="disco-button" onClick={toggleDiscoMode}>{isDiscoMode ? 'Stop Disco Mode' : 'Disco Mode 🪩𝄞💃🏻🕺🏽'}</button>
        </div>
    )
}

export default Color