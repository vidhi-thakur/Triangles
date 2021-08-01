import React from 'react'
import "./Question.css"

function Question({ ques_no, question, option01, option02, option03 }) {
    return (
        <div className="questions">
            <p>{ques_no}. {question}</p>
            {option01 && <>
                <label>
                    <input type="radio" /> {option01}
                </label>
            </>}
            {option02 && <>
                <label>
                    <input type="radio" /> {option02}
                </label>
            </>}
            {option03 && <>
                <label>
                    <input type="radio" /> {option03}
                </label>
            </>}
        </div>
    )
}

export default Question
