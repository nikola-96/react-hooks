import React, { useState } from 'react'

function HookCounter() {

    const [count, setCount] = useState(0) /*ovde kad se pozove ova fnj radi se destrukcija gde je prvi
    parametar vrednost, a drugi parametar je funkcija kojom se menja pomenuta vrednost. Pozivanjem use state on sam kreira ove 
    gore pomenute vrednosti  */

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>{/*zasto on click fnj mora da ima povratnu 
            vrednost kada sama fnj menja rezultat? */}
        </div>
    )
}
export default HookCounter
