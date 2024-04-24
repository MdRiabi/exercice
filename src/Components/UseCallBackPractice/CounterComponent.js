import React from 'react'

function CounterComponent({text, count}) {
    return (
        <div>

            {text} : {count}
        </div>
    )
}

export default React.memo(CounterComponent);
