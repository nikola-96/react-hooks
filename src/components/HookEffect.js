import React, { useState, useEffect } from 'react'

function HoockEfect() {
    const [counter, setCounter] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        document.title = `Clicked ${counter}`/*koristimo da promenimo naslov karice, svaki put kad se izrederuje opet
        okinuce se ova funkcija */
    }, [counter])//kada ubacujemo vrednost u setName nece se svaki put menjati vrednost, vec kada se counter poveca 
    //i kada se on izrenderuje onda ce se okinuti useEffect

    return (
        <div>
            <input value={name} type="text" onChange={e => setName(e.target.value)}></input>
            <button onClick={() => setCounter(counter + 1)}>Clicked {counter}</button>
        </div >
    )
}
export default HoockEfect
