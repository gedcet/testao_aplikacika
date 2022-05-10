import axios from "axios";
import React from "react";

const Question = (props) =>
{
    const edit_question = () =>
    {
        window.confirm("ar tikrai norite redaguoti klausima")
    }

    const delete_question = async () =>
    {
        if (window.confirm("ar tikrai norite istrinti klausima") === true)
        {
            try
            {
                const result = await axios.delete(`/api/questions/${props.question._id}`)
                props.get_all_questions()
                alert("Pavyko istrinti ")

            }
            catch (err)
            {
                alert("Ivyko klaida: ", err)
                console.log(err)
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
            <p>ID: {props.question._id}</p>
            <p>Klausimo tekstas: {props.question.text}</p>
            <p> Atsakymo tipas: {props.question.type}</p>
            {/* <p>Atsakymas: {props.question.answers[0].answer}</p> */}
            {atsakymo_txt_array}
            <button onClick={delete_question}>Trinti klausima </button>
            <button onClick={() =>
            {
                props.setStateWindowEditQuestion({
                    text: props.question.text,
                    type: props.question.type,
                    answers: [
                        { text: props.question.answers[0].answer, correct: false },
                        { text: props.question.answers[1].answer, correct: true },
                        { text: props.question.answers[2].answer, correct: true },
                        { text: props.question.answers[3].answer, correct: true }],
                })
            }}> Redaguok</button>
        </div >
    )
}

export default Question