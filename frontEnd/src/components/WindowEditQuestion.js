import React from "react"
import axios from "axios"
import Answer from "./Answer"

const WindowEditQuestion = (props) =>
{
    //console.log("is WindowEditQuestion", props.question.text)

    const refQuestionText = React.createRef()
    const refQuestionTypeSelectMultiple = React.createRef()
    const refQuestionTypeSelectSingle = React.createRef()

    const refAnswer1Text = React.createRef()
    const refAnswer1Correct = React.createRef()

    const refAnswer2Text = React.createRef()
    const refAnswer2Correct = React.createRef()

    const refAnswer3Text = React.createRef()
    const refAnswer3Correct = React.createRef()

    const refAnswer4Text = React.createRef()
    const refAnswer4Correct = React.createRef()


    const change_field_value = () =>
    {
        let copy_of_state = { ...props.state }

        copy_of_state.text = refQuestionText.current.value //tekstinis laukas

        if (refQuestionTypeSelectMultiple.current.checked === true)// tipas
        {
            copy_of_state.type = "selectMultiple"
        }
        else
        {
            copy_of_state.type = "selectOne"
        }

        if (copy_of_state.answers.length > 0)
        {
            copy_of_state.answers[0].text = refAnswer1Text.current.value //atsakymo 1 laukas
            copy_of_state.answers[0].correct = refAnswer1Correct.current.checked //correct 1 laukas
        }

        if (copy_of_state.answers.length > 1)
        {
            copy_of_state.answers[1].text = refAnswer2Text.current.value //atsakymo 2 laukas
            copy_of_state.answers[1].correct = refAnswer2Correct.current.checked //correct 2 laukas
        }

        if (copy_of_state.answers.length > 3)
        {
            copy_of_state.answers[2].text = refAnswer3Text.current.value //atsakymo 3 laukas
            copy_of_state.answers[2].correct = refAnswer3Correct.current.checked //correct 3 laukas
        }

        if (copy_of_state.answers.length > 4)
        {
            copy_of_state.answers[3].text = refAnswer4Text.current.value //atsakymo 4 laukas
            copy_of_state.answers[3].correct = refAnswer4Correct.current.checked //correct 4 laukas
        }

        props.setState(copy_of_state)
        //console.log(copy_of_state)
    }

    const send_request_edit_question = async () => 
    {
        //  console.log("vesime duomenis " + props.state.text)
        try
        {
            const axios1 = await axios({
                "method": "put",
                "url": `/api/questions/${props.state._id}`,
                "data": props.state
            })
            alert("ok ")
            console.log("send_request_edit_question ", axios1)
        }
        catch (err)
        {
            alert("not ok")
            console.log("send_request_edit_question ", err)
        }
    }

    return (
        <div className="window_edit_question">
            <h4>Klausimo redagavimo langas</h4>

            <textarea
                className="addquestiontextarea"
                value={props.state.text}
                onChange={change_field_value}
                ref={refQuestionText}>
            </textarea>

            <br></br><br></br>
            <label>Select multiple
                <input
                    type="radio" name="radBut"
                    checked={props.state.type === "selectMultiple"}
                    onChange={change_field_value}
                    ref={refQuestionTypeSelectMultiple}>
                </input>
            </label>

            <label>Select one
                <input
                    type="radio"
                    name="radBut"
                    checked={props.state.type === "selectOne"}
                    onChange={change_field_value}
                    ref={refQuestionTypeSelectSingle}>
                </input>
            </label>

            {props.state.answers.length > 0 ? < Answer set_nr="1" set_value={props.state.answers[0].answer} set_onChange={change_field_value} set_ref_text={refAnswer1Text} set_ref_checked={refAnswer1Correct} set_checked={props.state.answers[0].correct} /> : null}
            {props.state.answers.length > 1 ? < Answer set_nr="2" set_value={props.state.answers[1].answer} set_onChange={change_field_value} set_ref_text={refAnswer2Text} set_ref_checked={refAnswer2Correct} set_checked={props.state.answers[1].correct} /> : null}
            {props.state.answers.length > 2 ? < Answer set_nr="3" set_value={props.state.answers[2].answer} set_onChange={change_field_value} set_ref_text={refAnswer3Text} set_ref_checked={refAnswer3Correct} set_checked={props.state.answers[2].correct} /> : null}
            {props.state.answers.length > 3 ? < Answer set_nr="3" set_value={props.state.answers[3].answer} set_onChange={change_field_value} set_ref_text={refAnswer4Text} set_ref_checked={refAnswer4Correct} set_checked={props.state.answers[3].correct} /> : null}

            <button onClick={send_request_edit_question}>Ivesti pataisytus klausimus i duomenu baze</button>

            <button>Uždaryti langą be įvedimo </button>
        </div>
    )
}

export default WindowEditQuestion