import React from 'react'
import "./Hypotenuse.css"

function Hypotenuse() {
    return (
        <div className="hypotenuse-component flex">
            <h2 className="mb-3">Calculate hypotenuse</h2>
            <div className="hypotenuse-triangle">
                <label className="a">a</label>
                <label className="b">b</label>
                <label className="c">c</label>
            </div>
            <p>Enter the lengths of sides of right angle triangle</p>
            <form className="hypotenuse-form">
                <label>a = </label>
                <input classname="hypotenuse-input" type="number" />
                <label>b = </label>
                <input classname="hypotenuse-input" type="number" />
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Hypotenuse
