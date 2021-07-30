import React from 'react'
import "./Area.css"

function Area() {
    return (
        <div className="area-component flex">
            <h2 className="area-heading" >Calculate area</h2>
            <div className="mb-3">Select an option below as per the data you have for a triangle</div>
            <label className="area-input1" for="base_height">
                <input type="radio" id="base_height" name="area" value="base_height" /> If you have base and height length
            </label>
            <label className="area-input1" for="sides">
                <input type="radio" id="sides" name="area" value="sides" /> If you have length of 3 sides
            </label>
            <label className="area-input1" for="side_angle">
                <input type="radio" id="side_angle" name="area" value="side_angle" /> If you have length of 2 sides and included angle
            </label>
        </div>
    )
}

export default Area
