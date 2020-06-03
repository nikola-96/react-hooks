import React from 'react'

function Button({ handleButton, children }) {
    console.log(`Button for ${children}`)
    return (
        <div>
            <button onClick={handleButton}>{children}</button>
        </div>
    )
}

export default React.memo(Button)
