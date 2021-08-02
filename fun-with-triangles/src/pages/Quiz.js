import React, { useState } from 'react'
import "./Quiz.css"
import Back from '../components/Back'

function Quiz({handleBack}) {

    const initialState = {
        enteredAnswer1: "",
        enteredAnswer2: "",
        enteredAnswer3: "",
        enteredAnswer4: "",
        enteredAnswer5: "",
        enteredAnswer6: "",
        enteredAnswer7: "",
        enteredAnswer8: "",
        enteredAnswer9: "",
        enteredAnswer10: ""
    }

    const [result, setResult] = useState(0)
    const [userAnswer, setUserAnswer] = useState(initialState)

    const array = [
        {
            ques_no: 1,
            question: "If a triangle has 3 equal sides. Is it an  Equilateral triangle?",
            option01: "yes",
            option02: "no",
            option03: "",
            answer: "yes",
            id: "question_1"
        },
        {
            ques_no: 2,
            question: "If a triangle has 2 equal sides. Is it an Isosceles triangle?",
            option01: "yes",
            option02: "no",
            option03: "",
            answer: "yes",
            id: "question_2"
        },
        {
            ques_no: 3,
            question: "If a triangle has a 90° angle. Is it a right angle triangle?",
            option01: "yes",
            option02: "no",
            option03: "",
            answer: "yes",
            id: "question_3"
        },
        {
            ques_no: 4,
            question: "If a triangle has angles 25°, 75°, 80°. Is it an acute triangle?",
            option01: "yes",
            option02: "no",
            option03: "",
            answer: "yes",
            id: "question_4"
        },
        {
            ques_no: 5,
            question: "A triangle which has all its sides unequal, is called a scalene triangle. True or false?",
            option01: "true",
            option02: "false",
            option03: "",
            answer: "true",
            id: "question_5"
        },
        {
            ques_no: 6,
            question: "A triangle whose all its angles are greater than 90°, is called an acute-angled triangle. True or false?",
            option01: "true",
            option02: "false",
            option03: "",
            answer: "false",
            id: "question_6"
        },
        {
            ques_no: 7,
            question: "A triangle whose all its angles are greater than 90°, is called an obtuse-angled triangle. True or false?",
            option01: "true",
            option02: "false",
            option03: "",
            answer: "true",
            id: "question_7"
        },
        {
            ques_no: 8,
            question: "What is the sum of all the angles of a triangle?",
            option01: "180°",
            option02: "360°",
            option03: "90°",
            answer: "180°",
            id: "question_8"
        },
        {
            ques_no: 9,
            question: "If a triangle has its sides equal to 5cm, 4cm and 6cm, then its perimeter is?",
            option01: "16",
            option02: "10",
            option03: "15",
            answer: "15",
            id: "question_9"
        },
        {
            ques_no: 10,
            question: "If in a right triangle, the base is 4cm and hypotenuse equal to 5cm, then the length of its perpendicular is?",
            option01: "5",
            option02: "4",
            option03: "3",
            answer: "3",
            id: "question_10"
        }
    ]

    const handleQuiz = (e) => {
        e.preventDefault();
        let score = 0;
        console.log("handleBack >>>",handleBack)
        array.map((item, i) => {
            const temp = userAnswer[`enteredAnswer${i}`]
            console.log(temp)
            if (item.answer === item[temp]) {
                score = score + 1;
            }
        })
        setResult(score)
        setUserAnswer(initialState)
    }

    return (
        <div className="quiz-component">
            <Back handleBack={handleBack} />
            <h2 className="angles-heading">Quizz time!!!</h2>
            <form className="quiz-form">
                {
                    array.map(item => {
                        return (
                            <div className="question-container inequality-result">
                                <p><strong>{item.ques_no}. </strong>{item.question}</p>
                                <div className="margin-quiz-input">
                                    {item.option01 && <><input onChange={(e) => setUserAnswer({ ...userAnswer, [`enteredAnswer${item.ques_no}`]: e.target.value })} className="quiz-input" type="radio" id="option01" name={item.id} value="option01" />
                                        <label className="mr-1" for="option01"> {item.option01}</label></>}
                                    {item.option02 && <><input onChange={(e) => setUserAnswer({ ...userAnswer, [`enteredAnswer${item.ques_no}`]: e.target.value })} className="quiz-input" type="radio" id="option02" name={item.id} value="option02" />
                                        <label className="mr-1" for="option02"> {item.option02}</label></>}
                                    {item.option03 && <><input onChange={(e) => setUserAnswer({ ...userAnswer, [`enteredAnswer${item.ques_no}`]: e.target.value })} className="quiz-input" type="radio" id="option03" name={item.id} value="option03" />
                                        <label className="mr-1" for="option03"> {item.option03}</label></>}
                                </div>
                            </div>
                        )
                    })
                }
                <button className="button btn-quiz" onClick={handleQuiz}>Submit</button>
            </form>
            <h2 className="mb-1">Score will be shown here-</h2>
            <div className="inequality-result">
                {result ? <div>
                    Your score: {result}
                </div> : <div>
                    Score: For each correct answer you will get 1 point
                </div>}
            </div>
        </div>
    )
}

export default Quiz
