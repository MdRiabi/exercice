import React from 'react'

function ButtonComponent({handleClick, children}) {
    return (
        <div>
            <button onClick={handleClick}>{children}</button>
        </div>
    )
}

export default React.memo(ButtonComponent);
