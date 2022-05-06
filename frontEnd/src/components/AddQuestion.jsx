import React from "react"
import axios from "axios"

const AddQuestion = () => 
{
    const refQuestionText = React.createRef()
    const refQuestionTypeSelectMultiple = React.createRef()
    const refQuestionTypeSelectSingle = React.createRef()

    const refAnswer1Text = React.createRef()
    const refAnswer1Correct = React.createRef()

    const refAnswer2Text = React.createRef()
    const refAnswer2Correct = React.createRef()

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

    const handleClick = async () =>
    {
        try
        {
            const axios1 = await axios({
                "method": "post",
                "url": "/api/questions",
                "data": {
                    "text": refQuestionText.current.value,
                    "type": getSellectedQuestionType(),
                    "answers": [
                        {
                            "answer": refAnswer1Text.current.value,
                            "correct": refAnswer1Correct.current.checked
                        },
                        {
                            "answer": refAnswer2Text.current.value,
                            "correct": refAnswer2Correct.current.checked
                        }
                    ]
                }
            })

            console.log("AddQuestion", axios1)
        }
        catch (err)
        {
            console.log("AddQuestion", err)
        }
    }

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

            <label>1
                <input type="text" className="answtxt" ref={refAnswer1Text}></input>
            </label>
            <label>Correct
                <input type="checkbox" ref={refAnswer1Correct}></input>
            </label>
            <br />

            <label>2
                <input type="text" className="answtxt" ref={refAnswer2Text}></input>
            </label>
            <label>Correct
                <input type="checkbox" ref={refAnswer2Correct}></input>
            </label>
            <br />

            <button onClick={handleClick}>add</button>

        </div>
    )
}
export default AddQuestion