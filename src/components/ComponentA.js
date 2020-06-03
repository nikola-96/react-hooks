import React, { useContext } from 'react'
import { CountContext } from '../App'

function ComponentA() {
    const countContext = useContext(CountContext)
    return (
        <div>
            <button onClick={() => countContext.dispatchMethod('increment')}>Increment</button>
            <button onClick={() => countContext.dispatchMethod('decrement')}>Decrement</button>
            <button onClick={() => countContext.dispatchMethod('reset')} >Reset</button>
        </div>
    )
}

export default ComponentA
