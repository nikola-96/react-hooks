import React, { useState, useEffect } from 'react'

function HoockEfect() {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        document.title = `Clicked ${counter}`/*koristimo da promenimo naslov karice, svaki put kad se izrederuje opet
        okinuce se ova funkcija */
    })

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>Clicked {counter}</button>
        </div>
    )
}
export default HoockEfect
