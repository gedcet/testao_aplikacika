import React from "react"
import axios from "axios"

const AddQuestion = () => 
{
    const [answers, setAnswers] = React.useState([
        {
            "answer": "",
            "correct": "",
        }
    ])

    const refQuestionText = React.createRef()
    const refQuestionTypeSelectMultiple = React.createRef()
    const refQuestionTypeSelectSingle = React.createRef()

    const refAnswerText = React.createRef()
    const refAnswerCorrect = React.createRef()

    const getSellectedQuestionType = () =>
    {
        if (refQuestionTypeSelectMultiple.current.checked === true)
        {
            return "selectMultiple"
        }
        if (refQuestionTypeSelectSingle.current.checked === true)
        {
            return "selectOne"
        }
    }

    // const addAnswerRow = () =>
    // {
    //     const temp = [...answers]
    //     temp.push(
    //         {
    //             "answer": "",
    //             "correct": "",
    //             "ref": React.createRef()
    //         }
    //     )
    //     setAnswers(temp)
    // }

    // const delAnswerRow = () =>
    // {
    //     const temp = [...answers]
    //     temp.pop()
    //     setAnswers(temp)
    // }

    const handleClick = async () =>
    {
        const axios1 = await axios({
            "method": "post",
            "url": "/api/questions",
            "data":
            {
                "text": refQuestionText.current.value,
                "type": getSellectedQuestionType(),
                "answers": [
                    {
                        "answer": refAnswerText.current.value,
                        "correct": false
                    }
                ]
            }
        }
        )
    }

    // const array = []
    // for (let i = 0; i < answers.length; i++)
    // {
    //     array.push(
    //         <div key={i}>
    //             <label>Answer {i}
    //                 <input type="text" className="answtxt" ></input>
    //             </label>
    //             <label> Correct
    //                 <input type="checkbox" ></input>
    //             </label>
    //         </div>
    //     )
    // }

    return (
        <div>
            <h6>Klausimas</h6>
            <textarea ref={refQuestionText} className="addquestiontextarea"></textarea>
            <h6>Klausimo tipas</h6>

            <label>Select multiple
                <input type="radio" ref={refQuestionTypeSelectMultiple} name="radBut"></input>
            </label>
            <label>Select one
                <input type="radio" ref={refQuestionTypeSelectSingle} name="radBut"></input>
            </label>

            <h6>Iveskite atsakyma/us</h6>
            <label>Answer
                <input type="text" className="answtxt" ref={refAnswerText}></input>
            </label>
            <label> Correct
                <input type="checkbox" ref={refAnswerCorrect} ></input>
            </label>
            {/* {array}
            <br></br>
            <button onClick={addAnswerRow}>Ivesk dar viena atsakyma</button>
            <button onClick={delAnswerRow}>Istrink paskutini atsakyma</button> */}
            <br></br>
            <button onClick={handleClick}>Patvirtink</button>

        </div>

    )
}
export default AddQuestion