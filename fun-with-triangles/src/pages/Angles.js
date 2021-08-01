import React, { useState } from 'react'
import "./Angles.css"

function Angles() {

    const initialState = {
        x: "",
        y: "",
        z: ""
    }

    const [formstate, setformstate] = useState(initialState)
    const [result, setResult] = useState("")

    const handleAngles = () => {
        const x = Number(formstate.x)
        const y = Number(formstate.y)
        const z = Number(formstate.z)
        if (x + y + z === 360) {

        }
    }

    return (
        <div className="angles-component">
            <div>
                Enter the angles in below input boxes and we will tell you if those angles make a Triangle
            </div>
            <form className="flex">
                <div className="flex">
                    <input min={1} value={formstate.x} onChange={(e) => setformstate({ ...formstate, x: e.target.value })} />
                    <input min={1} value={formstate.y} onChange={(e) => setformstate({ ...formstate, y: e.target.value })} />
                    <input min={1} value={formstate.z} onChange={(e) => setformstate({ ...formstate, z: e.target.value })} />
                </div>
                <button onClick={handleAngles}>Submit</button>
            </form>
            <div className="inequality-result">
                {result ? <div>

                </div> : <div>
                The interior angles of a triangle always add up to 180°, i.e., <br />
                <strong>Angle 1 + Angle 2 + Angle 3 = 180</strong>
                </div>}
            </div>
        </div>
    )
}

export default Angles
