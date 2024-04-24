import React, { useEffect, useRef } from 'react'

function FocusInput() {
    useEffect(() =>{
        inputRef.current.focus();
    },[]);

    const inputRef = useRef(null);


    return (
        <div>
            <input ref={inputRef} type='text'></input>

        </div>
        
    )
}

export default FocusInput
