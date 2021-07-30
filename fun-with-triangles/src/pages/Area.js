import React, { useState } from 'react'
import "./Area.css"
import logo01 from "../images/logo01.png"

function Area() {

    const [input01, setInput01] = useState(false)
    const [input02, setInput02] = useState(false)
    const [input03, setInput03] = useState(false)

    const onClickInput01 = () => {
        setInput01(true)
        setInput02(false)
        setInput03(false)
    }
    const onClickInput02 = () => {
        setInput02(true)
        setInput01(false)
        setInput03(false)
    }
    const onClickInput03 = () => {
        setInput03(true)
        setInput02(false)
        setInput01(false)
    }

    return (
        <div style={{padding: "1rem"}} className="area-component flex">
            <h2 className="area-heading" >Calculate area</h2>
            <div className="mb-3">Select an option below as per the data you have for a triangle</div>
            <label onChange={onClickInput01} className="area-input1" for="base_height">
                <input type="radio" id="base_height" name="area" value="base_height" /> If you have base and height length
            </label>
            <label onChange={onClickInput02} className="area-input1" for="sides">
                <input type="radio" id="sides" name="area" value="sides" /> If you have length of 3 sides
            </label>
            <label onChange={onClickInput03} className="area-input1" for="side_angle">
                <input type="radio" id="side_angle" name="area" value="side_angle" /> If you have length of 2 sides and included angle
            </label>

            {input01 && <div className="area-display">
                <img className="image01" src={logo01} alt="area-img1" />
            </div> }
            {input02 && <div className="area-display">
                Input 2
            </div>}
            {input03 && <div className="area-display">
                Input 3
            </div>}
        </div>
    )
}

export default Area
