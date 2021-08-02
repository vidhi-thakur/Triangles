import React from 'react'
import "./Back.css"

function back({handleBack}) {
    return (
        <div onClick={handleBack} className="back-button">
            Go back
        </div>
    )
}

export default back
