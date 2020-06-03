import React, { useReducer } from 'react'
const initalState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return { ...state, firstCounter: initalState.firstCounter }
        case 'reset2':
            return { ...state, secondCounter: initalState.secondCounter }
        default:
            return state
    }
}

function CounterOne() {
    const [count, dispatch] = useReducer(reducer, initalState)
    return (
        <div>
            <h1>{count.firstCounter}</h1>
            <h2>{count.secondCounter}</h2>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })} >Reset</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement 5</button>
            <br />
            <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment second value</button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Increment second value</button>
            <button onClick={() => dispatch({ type: 'reset2' })} >Reset second value</button>
            <button onClick={() => dispatch({ type: 'increment2', value: 5 })}>Increment second value 5</button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 5 })}>Increment second value 5</button>


        </div >
    )
}

export default CounterOne
