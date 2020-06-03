import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetchingOne() {
    const [loading, setLoading] = useState(false)
    const [errorMessage, setError] = useState('')
    const [post, setPost] = useState({})
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then((response) => {
            setLoading(false)
            setError('')
            setPost(response.data)
            console.log(response.data)
        }).catch(error => {
            setError('Something went wrong')
            setPost({})
        })
    }, [])
    return (
        <div>

            <h1>{loading ? 'Loading' : post.title}</h1>
            <h2>{errorMessage ? errorMessage : null}</h2>
        </div>
    )
}

export default DataFetchingOne
