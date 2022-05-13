import axios from "axios";
import React from "react";

const Question = (props) =>
{
    const delete_question = async () =>
    {
        if (window.confirm("ar tikrai norite istrinti klausima?") === true)
        {
            try
            {
                await axios.delete(`/api/questions/${props.question._id}`)
                props.get_all_questions()
                alert("Pavyko istrinti ")

            }
            catch (err)
            {
                alert("Ivyko trinimo klaida, " + err)
                console.log("trinimo klaidos kodas ", err)
            }
        }
    }

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
        <div className="answer_design">
            {/* <p>ID: {props.question._id}</p> */}
            <p>Klausimo tekstas: {props.question.text}</p>
            <p> Atsakymo tipas: {props.question.type}</p>
            {/* <p>Atsakymas: {props.question.answers[0].answer}</p> */}
            {atsakymo_txt_array}
            <button onClick={delete_question}>Trinti klausima </button>
            <button onClick={() =>
            {
                array_answer = []
                for (let i = 0; i < props.question.answers.length; i++)
                {
                    if (props.question.answers[i].answer !== undefined)
                    {
                        array_answer.push({ text: props.question.answers[i].answer, correct: props.question.answers[i].correct })
                    }
                    
                }
                props.setStateWindowEditQuestion({
                    _id: props.question._id,
                    text: props.question.text,
                    type: props.question.type,
                    answers: [ array_answer ],
                })

            }}> Redaguok</button>
        </div >
    )
}

export default Question