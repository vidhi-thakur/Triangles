import React, { useState } from 'react'
import "./Inequality.css"
import Back from '../components/Back'

function Inequality({ handleBack }) {

    const initialState = {
        inputA: 0,
        inputB: 0,
        inputC: 0
    }

    const [input, setInput] = useState(initialState)
    const [result, setResult] = useState("")

    const handleInequality = (e) => {
        e.preventDefault();
        const x = Number(input.inputA)
        const y = Number(input.inputB)
        const z = Number(input.inputC)
        if ((x + y) - z > 0 && (y + z) - x > 0 && (z + x) - y > 0) {
            setResult(`Input sides a = ${input.inputA}, b = ${input.inputB}, b = ${input.inputC} form a triangle.`)
        } else if (x === 0 || y === 0 || z === 0) {
            alert("Sides cannot be 0. Enter number > 0")
        } else {
            setResult(`Input sides a = ${input.inputA}, b = ${input.inputB}, b = ${input.inputC} does not form a triangle.`)
        }
    }

    return (
        <div style={{ padding: "1rem" }} className="inequality-component flex">
            <Back handleBack={handleBack} />
            <h2 className="area-heading" >Check triangle Inequality!!!</h2>
            <div className="inequality-triangle">
                <label className="inequality-a">a</label>
                <label className="inequality-b">b</label>
                <label className="inequality-c">c</label>
            </div>

            <p>Enter sides of the trinagle</p>
            <form className="inequality-form">
                <div className="input-containers">
                    <label>a = </label>
                    <input min={1} onChange={(e) => setInput({ ...input, inputA: e.target.value })} value={input.inputA} className="inequality-input" type="number" />
                </div>
                <div className="input-containers">
                    <label>b = </label>
                    <input min={1} onChange={(e) => setInput({ ...input, inputB: e.target.value })} value={input.inputB} className="inequality-input" type="number" />
                </div>
                <div className="input-containers">
                    <label>c = </label>
                    <input min={1} onChange={(e) => setInput({ ...input, inputC: e.target.value })} value={input.inputC} className="inequality-input" type="number" />
                </div>
                <br />
                <button onClick={handleInequality} className="button">Submit</button>
            </form>
            <div className="inequality-result">
                {result ? <div>
                    {result}
                </div> : <div>
                    The triangle inequality states that for any triangle, the sum of the lengths of any two sides must be greater than or equal to the length of the remaining side, i.e., <br />
                    <strong>{`a + b > c`}</strong>
                </div>}
            </div>

        </div>
    )
}

export default Inequality
