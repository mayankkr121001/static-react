import React, {useState, useRef } from 'react'
import section12Plus from "../assets/section12Plus.png"

const qaArary = [
    {
        question: "Can i choose the dentist on my own for treatment ?",
        answer: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor esse minus quibusdam omnis sint. Rerum mollitia delectus saepe incidunt officia"
    },
    {
        question: "Will i get the same doctor each time i visit the same clinic ?",
        answer: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor esse minus quibusdam omnis sint. Rerum mollitia delectus saepe incidunt officia"
    },
    {
        question: "How you are able to provide less prices than other dental brands ?",
        answer: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor esse minus quibusdam omnis sint. Rerum mollitia delectus saepe incidunt officia"
    },
    {
        question: "Can i choose the dentist on my own for treatment ?",
        answer: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor esse minus quibusdam omnis sint. Rerum mollitia delectus saepe incidunt officia"
    },
    {
        question: "Will i get the same doctor each time i visit the same clinic ?",
        answer: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor esse minus quibusdam omnis sint. Rerum mollitia delectus saepe incidunt officia"
    },
    {
        question: "How you are able to provide less prices than other dental brands ?",
        answer: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor esse minus quibusdam omnis sint. Rerum mollitia delectus saepe incidunt officia"
    }
]

function Section12() {
    const answerRef = useRef([])  

    const onQuestionClick = (index)=>{
        answerRef.current[index].classList.toggle("section12QuestionHedingVisible")  
    }


    return (
        <div className="section12Container">
            <h1>Frequently Asked Questions</h1>

            <div className="section12QuestionsDiv">

                {qaArary && qaArary?.map((qa, index)=>(
                <div key={index} className="section12Question">
                    <div onClick={() => onQuestionClick(index )} className="section12QuestionHeding">
                        <h4>{qa.question}</h4>
                        <img src={section12Plus} />
                    </div>

                    <div ref={(element) => answerRef.current[index] = element}className="section12QuestionAnswer">
                    {qa.answer}
                    </div>
                </div>

                ))}
                

            </div>
        </div>
    )
}

export default Section12