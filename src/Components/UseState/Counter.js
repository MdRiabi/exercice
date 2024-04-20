import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(1);
    return (
        <div>

<h1>counter is : {count}</h1>
<button onClick={() => setCount(count+2)} >change counter</button>

        </div>
    )
}

export default Counter
