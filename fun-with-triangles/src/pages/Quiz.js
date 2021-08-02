import React from 'react'
import "./Quiz.css"
import Question from '../components/Question'

function Quiz() {

    const array = [
        {
            ques_no: 1,
            question: "If a triangle has 3 equal sides. Is it an  Equilateral triangle?",
            option01: "yes",
            option02: "no",
            option03: "",
        },
        {
            ques_no: 2,
            question: "If a triangle has 2 equal sides. Is it an Isosceles triangle?",
            option01: "yes",
            option02: "no",
            option03: "",
        },
        {
            ques_no: 3,
            question: "If a triangle has a 90° angle. Is it a right angle triangle?",
            option01: "yes",
            option02: "no",
            option03: "",
        },
        {
            ques_no: 4,
            question: "If a triangle has angles 25°, 75°, 80°. Is it an acute triangle?",
            option01: "yes",
            option02: "no",
            option03: "",
        },
        {
            ques_no: 5,
            question: "A triangle which has all its sides unequal, is called a scalene triangle. True or false?",
            option01: "true",
            option02: "false",
            option03: "",
        },
        {
            ques_no: 6,
            question: "A triangle whose all its angles are greater than 90°, is called an acute-angled triangle. True or false?",
            option01: "true",
            option02: "false",
            option03: "",
        },
        {
            ques_no: 7,
            question: "A triangle whose all its angles are greater than 90°, is called an obtuse-angled triangle. True or false?",
            option01: "true",
            option02: "false",
            option03: "",
        },
        {
            ques_no: 8,
            question: "What is the sum of all the angles of a triangle?",
            option01: "180°",
            option02: "360°",
            option03: "90°",
        },
        {
            ques_no: 9,
            question: "If a triangle has its sides equal to 5cm, 4cm and 6cm, then its perimeter is?",
            option01: "16",
            option02: "10",
            option03: "15",
        },
        {
            ques_no: 10,
            question: "If in a right triangle, the base is 4cm and hypotenuse equal to 5cm, then the length of its perpendicular is?",
            option01: "6",
            option02: "7",
            option03: "8",
        }
    ]

    return (
        <div className="quiz-component">
            {
                array.map(item => {
                    return (
                        <Question key={item.ques_no} ques_no={item.ques_no} question={item.question} option01={item.option01} option02={item.option02} option03={item.option03} />
                    )
                })
            }
        </div>
    )
}

export default Quiz
