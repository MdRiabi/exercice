import React, { useEffect, useState } from 'react'

function EffectExample3() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const logMousePostion = (e) =>{
        console.log("mouse x position: ");
        setX(e.clientX);
        setY(e.clientY)
    }

    useEffect(() =>{
        console.log("useeFFECT IS CALLED");
        window.addEventListener('mousemove', logMousePostion);

        /* for unmount th component wich use useEffect we use 
        removeEventListener() */ 
        window.removeEventListener('mousemove', logMousePostion);
    })
    return (
        <div>
            <p>mouse postion </p>
            <p> X : {x} Y : {y}</p> 
        </div>
    )
}

export default EffectExample3
