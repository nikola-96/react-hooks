import React, { useState } from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>hide</button>
            {display && <HookMouse />} {/*ovo znaci ukoliko je display true renederuj komponentu */}
        </div>
    )
}

export default MouseContainer
