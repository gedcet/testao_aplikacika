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

    const refAnswer3Text = React.createRef()
    const refAnswer3Correct = React.createRef()

    const refAnswer4Text = React.createRef()
    const refAnswer4Correct = React.createRef()

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

    const sum_of_sellected = () =>//skaiciuojam kiek pazymeta correct varneliu
    {
        let sum_of_correct = 0
        if (refAnswer1Correct.current.checked === true)
        { sum_of_correct = sum_of_correct + 1 }

        if (refAnswer2Correct.current.checked === true)
        { sum_of_correct = sum_of_correct + 1 }

        if (refAnswer3Correct.current.checked === true)
        { sum_of_correct = sum_of_correct + 1 }

        if (refAnswer4Correct.current.checked === true)
        { sum_of_correct = sum_of_correct + 1 }
        return sum_of_correct
    }

    const handleClick = async () =>
    {
        if (refQuestionText.current.value === "")
        {
            alert("Neuzpildytas klausimo laukas ")
            return
        }

        if (getSellectedQuestionType() === undefined)
        {
            alert("Nepasirinktas klausimo tipas ")
            return
        }

        if (refAnswer1Text.current.value === "")
        {
            alert("varnele nepazymetas teisigas/i atsakymai")
            return
        }

        if ((refQuestionTypeSelectSingle.current.checked === true) &&
            (sum_of_sellected() !== 1))
        {
             alert("pazymetas atsakymas netinka ")
            return
        }

        if (window.confirm("Ar norite issiut? ") === false)
        { return }

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
                        },
                        {
                            "answer": refAnswer3Text.current.value,
                            "correct": refAnswer3Correct.current.checked
                        },
                        {
                            "answer": refAnswer4Text.current.value,
                            "correct": refAnswer4Correct.current.checked
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

            <label>3
                <input type="text" className="answtxt" ref={refAnswer3Text}></input>
            </label>
            <label>Correct
                <input type="checkbox" ref={refAnswer3Correct}></input>
            </label>
            <br />

            <label>4
                <input type="text" className="answtxt" ref={refAnswer4Text}></input>
            </label>
            <label>Correct
                <input type="checkbox" ref={refAnswer4Correct}></input>
            </label>
            <br />

            <button onClick={handleClick}>Ivesti klausima i duomenu baze</button>

        </div>
    )
}
export default AddQuestion