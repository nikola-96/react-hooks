import React from 'react'

function Count({ count, text }) {
    console.log(`Count for ${text}`)

    return (
        <div>
            <p>Your {text} is {count}.</p>
        </div>
    )
}

export default React.memo(Count)
