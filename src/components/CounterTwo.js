import React, { useReducer } from 'react'
const initalState = {
    firstCounter: 0
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { firstCounter: state.firstCounter - action.value }
        case 'reset':
            return initalState
        default:
            return state
    }
}

function CounterOne() {
    const [count, dispatch] = useReducer(reducer, initalState)
    return (
        <div>
            <h1>{count.firstCounter}</h1>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })} >Reset</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement 5</button>

        </div >
    )
}

export default CounterOne
