import React from "react"
import axios from "axios"
import Question from "./Question"

const WindowQuiz = (props) => 
{

    const array_questions = React.useState([])
    const questions = array_questions[0]
    const setQuestions = array_questions[1]




    const get_all_questions = async () =>
    {
        try
        {
            const axios1 = await axios({
                "method": "get",
                "url": "/api/questions"
            })
            setQuestions(axios1.data)
            console.log("ShowQuestions", axios1)
        }
        catch (err)
        {
            console.log(err)
        }
    }

    const array_text = []
    const array_ref = []
    for (let i = 0; i < questions.length; i++)
    {

        array_text.push(
            <div key={i}>
                <b><p>Klausimas {i + 1}</p></b>
                <p>{questions[i].text}</p>
                <h6>Issirinkite teisinga atsakyma/us: </h6>
                {questions[i].answers[0].text === undefined ?
                    null
                    :
                    <label>
                        {questions[i].answers[0].text} <input type="checkbox" ref={() =>
                        {
                            const ref = React.createRef()
                            array_ref.push(ref)
                            return ref
                        }} />
                    </label>
                }
                <br></br>
                {questions[i].answers[1].text === undefined ?
                    null
                    :
                    <label>
                        {questions[i].answers[1].text} <input type="checkbox" ref={() =>
                        {
                            const ref = React.createRef()
                            array_ref.push(ref)
                            return ref
                        }} />
                    </label>
                }

                <br></br>
                {questions[i].answers[2].text === undefined ?
                    null
                    :
                    <label>
                        {questions[i].answers[2].text} <input type="checkbox" ref={() =>
                        {
                            const ref = React.createRef()
                            array_ref.push(ref)
                            return ref
                        }} />
                    </label>
                }
                <br></br>
                {questions[i].answers[3].text === undefined ?
                    null
                    :
                    <label>
                        {questions[i].answers[3].text} <input type="checkbox" ref={() =>
                        {
                            const ref = React.createRef()
                            array_ref.push(ref)
                            return ref
                        }} />
                    </label>
                }



            </div>
        )
    }

    React.useEffect(() => { get_all_questions() }, [])

    return (
        <div className="viktorinos_langas">
            <h1 > Atsakykite i klausimus: </h1>
            {array_text}
            <button onClick={() => { props.setShowWindow(null) }}>Tikrinti</button>
            <button onClick={() => { props.setShowWindow(null) }}>Uzdaryti viktorina</button>
        </div>
    )

}

export default WindowQuiz