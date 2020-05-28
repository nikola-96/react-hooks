import React, { useState } from 'react'

function HookCounterTheree() {
    const [name, setName] = useState({ firstName: "", lastname: "" })
    return (
        <div>
            <input type="text"
                value={name.firstName}
                onChange={e => setName({ ...name, firstName: e.target.value })}></input>{/*
                ovde spredovanjem postizemo to da se prvo ime koje se otkucalo iskopira kao vrednost u 
                samom objektu, a tek onda sledeca vrednost se opet ubacuje i tako svaki put.
                da nema ovog ne bi mogli da dobijemo vrednost objekta!!!! */}
            <input type="text"
                value={name.lastname}
                onChange={e => setName({ ...name, lastname: e.target.value })}></input>
            <h1>Your name is {name.firstName} {name.lastname}</h1>
        </div >
    )
}
export default HookCounterTheree
