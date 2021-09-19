import React, { useState } from 'react'
import "./Hypotenuse.css"
import Back from '../components/Back';

function Hypotenuse({ handleBack }) {

    const [inputA, setInputA] = useState(null);
    const [inputB, setInputB] = useState(null);
    const [result, setResult] = useState(null);

    const onClickHandler = (e) => {
        e.preventDefault();
        if (inputA == 0 || inputB == 0 || inputA === null || inputB === null) {
            alert("sides should be greater or equal 1")
            setResult(null)
        } else {
            let temp = ((inputA * inputA) + (inputB * inputB)) ** 0.5
            setResult(temp)
        }
    }

    return (
        <div className="hypotenuse-component flex">
            <Back handleBack={handleBack} />
            <h2 className="hypotenuse-heading">Calculate hypotenuse</h2>
            <div className="hypotenuse-triangle">
                <label className="a">a</label>
                <label className="b">b</label>
                <label className="c">c</label>
            </div>
            <p>Enter the lengths of sides of right angle triangle</p>
            <form className="hypotenuse-form">
                <div className="flex flex-align">
                    <div className="input-containers inline-block">
                        <label>a = </label>
                        <input className="hypotenuse-input" min={1} value={inputA} onChange={(e) => setInputA(e.target.value)} type="number" required />
                    </div>
                    <div className="input-containers inline-block">
                        <label>b = </label>
                        <input className="hypotenuse-input" min={1} value={inputB} onChange={(e) => setInputB(e.target.value)} type="number" required />
                    </div>
                </div>
                <button onClick={(e) => onClickHandler(e)} className="button">Submit</button>
            </form>
            <div className="hypotenuse-result">
                {result ? <div>c = {result}</div> : <div>C= √<span className="hypotenuse-formula">a2+b2</span></div>}
            </div>
        </div>
    )
}

export default Hypotenuse
