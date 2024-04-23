import React, { useState } from 'react'
import EffectExample3 from './EffectExample3'

function MouseContainer() {
    const [display, setDisplay] = useState(true)
    return (

        <div>
            <button onClick={() =>setDisplay(!display)}> Toggle  Display </button>

            {display && <EffectExample3/>}
        </div>
    )
}

export default MouseContainer
