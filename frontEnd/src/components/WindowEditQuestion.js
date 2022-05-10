import React from "react"

const WindowEditQuestion = (props) =>
{
    //console.log("is WindowEditQuestion", props.state)

    return (
        <div className="window_edit_question">
            <h4>Window edit question</h4>
            <textarea className="addquestiontextarea" value={props.state.text}></textarea>
            <br></br><br></br>
            <label>Select multiple
                <input type="radio" name="radBut" checked={props.state.type==="selectMultiple"}></input>
            </label>

            <label>Select one
                <input type="radio" name="radBut" checked={props.state.type==="selectOne"}></input>
            </label>
            <br></br>
            <br></br>
            <label>1
                <input type="text" className="answtxt" value={props.state.answers[0].text}></input>
            </label>
            <label>Correct
                <input type="checkbox" checked={props.state.answers[0].correct}></input>
            </label>
            <br />

            <label>2
                <input type="text" className="answtxt" value={props.state.answers[1].text}></input>
            </label>
            <label>Correct
                <input type="checkbox" checked={props.state.answers[1].correct}></input>
            </label>
            <br />

            <label>3
                <input type="text" className="answtxt" value={props.state.answers[2].text}></input>
            </label>
            <label>Correct
                <input type="checkbox" checked={props.state.answers[2].correct}></input>
            </label>
            <br />

            <label>4
                <input type="text" className="answtxt" value={props.state.answers[3].text}></input>
            </label>
            <label>Correct
                <input type="checkbox" checked={props.state.answers[3].correct}></input>
            </label>
            <br></br><br></br>
            <button >Ivesti pataisytus klausima i duomenu baze</button>
        </div>
    )
}

export default WindowEditQuestion