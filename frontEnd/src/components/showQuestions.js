import React from "react"
import axios from "axios"
import Question from "./Question"

const ShowQuestions = () => 
{
    const [questions, setQuestions] = React.useState([])

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
    for (let i = 0; i < questions.length; i++)
    {
        array_text.push(<Question key={i} question={questions[i]} get_all_questions={get_all_questions} />)
    }

    return (
        <div >
            <h6>Klausimai:</h6>
            {/* <p>{JSON.stringify(questions)}</p> */}
            {array_text}
            <button onClick={get_all_questions}>Gauti klausimus</button>
        </div>
    )
}

export default ShowQuestions