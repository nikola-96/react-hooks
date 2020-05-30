import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response.data)
                setPosts(response.data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            {
                posts.map(data =>
                    <div>
                        <h1 key={data.id}>{data.title}</h1>
                        <p>{data.body}</p>
                    </div>)
            }
        </div>
    )
}

export default DataFetching
