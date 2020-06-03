import React from 'react'

function Title() {
    console.log("Title")
    return (
        < div >
            <h1>Use CallbackHook</h1>
        </div >
    )
}

export default React.memo(Title)
