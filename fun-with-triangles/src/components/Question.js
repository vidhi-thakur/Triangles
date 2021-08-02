import React from 'react'
import "./Question.css"

function Question({ ques_no, question, option01, option02, option03 }) {
    return (
        <div className="questions">
            <p>{ques_no}. {question}</p>
            {option01 && <>
                <label for="firstInput">
                    <input type="radio" id="firstInput" name="firstInput" value="firstInput" /> {option01}
                </label>
            </>}
            {option02 && <>
                <label for="secondInput">
                    <input type="radio" id="secondInput" name="secondInput" value="secondInput" /> {option02}
                </label>
            </>}
            {option03 && <>
                <label for="thirdInput">
                    <input type="radio" id="thirdInput" name="thirdInput" value="thirdInput" /> {option03}
                </label>
            </>}
        </div>
    )
}

export default Question
