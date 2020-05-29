import React, { useState, useEffect } from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, sety] = useState(0)

    const logMousePosition = e => {
        setX(e.clientX)
        sety(e.clientY)
    }
    useEffect(() => {
        window.addEventListener('mousemove', logMousePosition)
    }, [])//sa postavljenim praznim nizom okinuce se samo jednom, ali ce svaku vrednost prikaivat
    return (
        <div>
            <h1>Positon x = {x} Positon y = {y}</h1>
        </div>
    )
}

export default HookMouse
