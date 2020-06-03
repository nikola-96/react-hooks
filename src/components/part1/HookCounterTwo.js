import React, { useState } from 'react'


function HookCounterTwo() {
    let starter = 0;
    const [count, setCount] = useState(starter)

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevState => prevState + 1) /*ova fnj ima sposbnost da uzme prethodno stanje i da sa tim stanje nesto 
            odradi. To se desava ovde, da je bilo samo count +1 dobili bi rezultat 1 */
        }
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(starter)}>Reset</button>
            <button onClick={() => setCount(prevState => prevState + 1)}>Increment</button>
            <button onClick={() => setCount(prevState => prevState - 1)}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    )
}
export default HookCounterTwo
