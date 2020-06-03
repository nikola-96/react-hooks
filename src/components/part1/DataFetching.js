import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts, setPosts] = useState({})
    const [id, setId] = useState(1)
    const [idFromButton, setidFromButton] = useState(1)

    const handleSubmit = () => {
        setidFromButton(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
            .then(response => {
                console.log(response.data)
                setPosts(response.data)
            })
            .catch(err => console.log(err))
    }, [idFromButton])
    return (
        <div>
            <input value={id} onChange={e => setId(e.target.value)}></input>{/*ovde punimo vrednost id, kada je ona 
            popunjena, kliknemo na dugme i okida se fnj koja ubacuje vrednost iz inputa u idFromButton i okida se 
            useEffect i poziva se posaban id post */}
            <button onClick={handleSubmit}>Fetch Data</button>
            <h1>{posts.title}</h1>
            <p>{posts.body}</p>

            {/* {
                posts.map(data =>
                    <div>
                        <h1 key={data.id}>{data.title}</h1>
                        <p>{data.body}</p>
                    </div>)
            } */}
        </div>
    )
}

export default DataFetching
