import React, { useState } from 'react'
import "./Inequality.css"
import logo01 from "../images/logo01.png"

function Inequality() {

    const initialState = {
        inputA: 0,
        inputB: 0,
        inputC: 0
    }

    const [input, setInput] = useState(initialState)

    return (
        <div style={{padding: "1rem"}} className="inequality-component flex">
            <h2 className="area-heading" >Check triangle Inequality!!!</h2>
            <div className="inequality-triangle"> 
                <label className="inequality-a">a</label>
                <label className="inequality-b">b</label>
                <label className="inequality-c">c</label>
            </div>

            <p>Enter sides of the trinagle</p>
            <form className="inequality-form">
                <label>a = </label>
                <input value={input.inputA} min={0} className="inequality-input" type="number" />
                <label>b = </label>
                <input value={input.inputB} min={0} className="inequality-input" type="number" />
                <label>c = </label>
                <input value={input.inputC} min={0} className="inequality-input" type="number" />
                <br />
                <button className="button">Submit</button>
            </form>
            
        </div>
    )
}

export default Inequality
