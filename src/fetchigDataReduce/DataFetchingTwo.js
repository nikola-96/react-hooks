import React, { useReducer, useEffect } from 'react'
import axios from 'axios'
const initialState = {
    error: '',
    post: {},
    loading: true
}
const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_SUCCESS":
            return {
                loading: false,
                post: action.payLoad,
                error: ''
            }
        case "FETCH_FALSE":
            return {
                error: "Sometnih went wrong",
                post: {},
                loading: false
            }
        default:
            return state
    }

}

function DataFetchingTwo() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get("https://jsonplaceholder.cypress.io/todos/1").then((response) => {
            dispatch({ type: "FETCH_SUCCESS", payLoad: response.data })
        }).catch(error => {
            dispatch({ type: "FETCH_FALSE" })
        })
    }, [])

    return (
        <div>
            {state.loading ? "post is loading" : null}
            {state.error ? state.error : null}
            <h1>{state.post ? state.post.title : null}</h1>
        </div>
    )
}

export default DataFetchingTwo
