import React, {useState} from 'react'
import "./Hypotenuse.css"

function Hypotenuse() {

    const [inputA, setInputA] = useState(0);
    const [inputB, setInputB] = useState(0);
    const [result, setResult] = useState(0);

    const onClickHandler = (e) => {
        e.preventDefault();
        let temp = ((inputA*inputA)+(inputB*inputB))**0.5
        setResult(temp)
    }

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
                <input className="hypotenuse-input" min={1} value={inputA} onChange={(e)=>setInputA(e.target.value)} type="number" required />
                <label>b = </label>
                <input className="hypotenuse-input" min={1} value={inputB} onChange={(e)=>setInputB(e.target.value)} type="number" required />
                <br />
                <button onClick={onClickHandler} className="hypotenuse-button">Submit</button>
            </form>
            <div className="hypotenuse-result">
                {result? <div>c = {result}</div>:<div>C= √<span className="hypotenuse-formula">a2+b2</span></div>}
            </div>
        </div>
    )
}

export default Hypotenuse
