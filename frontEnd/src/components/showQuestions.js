import React from "react"
import axios from "axios"

const ShowQuestion = () => 
{
    const [questions, setQuestions] = React.useState([])

    const get_all_questions = async () =>
    {
        const axios1 = await axios({
            "method": "get",
            "url": "/api/questions",
        })
        setQuestions(axios1.body)
    }
    
    return (
        <div>
            <h6>Klausimai</h6>
            <p>{JSON.stringify(questions)}</p>
            <button onClick={get_all_questions}>Gauti klausimus</button>
        </div>
    )
}

export default ShowQuestion