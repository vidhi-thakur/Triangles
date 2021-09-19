import React, { useState } from 'react'
import "./Angles.css"
import Back from '../components/Back'

function Angles({ handleBack }) {

    const initialState = {
        x: "",
        y: "",
        z: ""
    }

    const [formstate, setformstate] = useState(initialState)
    const [result, setResult] = useState("")

    const handleAngles = (e) => {
        e.preventDefault();
        const x = Number(formstate.x)
        const y = Number(formstate.y)
        const z = Number(formstate.z)
        if(x===0 || y===0 || z === 0) {
            alert("Angles should be greater or equal to 1")
            setResult("")
        } else {
            if (x + y + z === 180) {
                setResult("YAY! The angles form a triangle.")
            } else {
                setResult("NOPE! The angles are nor correct. Try again!")
            }
        }
    }

    return (
        <div className="angles-component">
            <Back handleBack={handleBack} />
            <h2 className="angles-heading">Calculate angles</h2>
            <div>
                Enter the angles in below input boxes and we will tell you if those angles make a Triangle
            </div>
            <form className="flex angles-form">
                <div className="flex flex-align">
                    <div className="input-containers">
                        <label for="angle-input01"> angle 1 = </label>
                        <input id="angle-input01" className="angles-input" min={1} value={formstate.x} onChange={(e) => setformstate({ ...formstate, x: e.target.value })} type="number" name="angles" required />
                    </div>
                    <div className="input-containers">
                        <label for="angle-input02"> angle 2 = </label>
                        <input id="angle-input02" className="angles-input" min={1} value={formstate.y} onChange={(e) => setformstate({ ...formstate, y: e.target.value })} type="number" name="angles" required />
                    </div>
                    <div className="input-containers">
                        <label for="angle-input03"> angle 3 = </label>
                        <input id="angle-input03" className="angles-input" min={1} value={formstate.z} onChange={(e) => setformstate({ ...formstate, z: e.target.value })} type="number" name="angles" required />
                    </div>
                </div>
                <button className="button" onClick={handleAngles}>Submit</button>
            </form>
            <div className="inequality-result">
                {result ? <div>
                    {result}
                </div> : <div>
                    The interior angles of a triangle always add up to 180°, i.e., <br />
                    <strong>Angle 1 + Angle 2 + Angle 3 = 180°</strong>
                </div>}
            </div>
        </div>
    )
}

export default Angles
