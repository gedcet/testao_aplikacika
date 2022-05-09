import React from "react"
import axios from "axios"

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

    return (
        <div>
            <h6>Klausimai</h6>

            <p>{JSON.stringify(questions)}</p>

            <button onClick={get_all_questions}>Gauti klausimus</button>
        </div>
    )
}

export default ShowQuestions