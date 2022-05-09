import React from "react";

const Question = (props) =>
{
    let atsakymo_txt_array = []
    for (let i = 0; i < props.question.answers.length; i++)
    {
        if (props.question.answers[i].correct === true)
        {
            atsakymo_txt_array.push(<div className="answer_correct" key={i} >Atsakymas: {props.question.answers[i].answer}</div>)
        }
        else
        {
            atsakymo_txt_array.push(<div className="answer_not_correct" key={i} >Atsakymas: {props.question.answers[i].answer}</div>)
        }
    }

    return (
        <div>
            <p>Klausimo tekstas: {props.question.text}</p>
            <p>Atsakymo tipas: {props.question.type}</p>
            {/* <p>Atsakymas: {props.question.answers[0].answer}</p> */}
            {atsakymo_txt_array}
            <br></br>
        </div >
    )
}

export default Question