import React from "react"
import axios from "axios"
import AnswerShow from "./AnswerShow"

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
    const questionsCopy = [...questions]

    const stataCssClassName = React.useState(null)
    const readCssClassName = stataCssClassName[0]
    const setCssClassName = stataCssClassName[1]

    for (let i = 0; i < questionsCopy.length; i++)
    {
        array_text.push(
            <div key={i}>
                <b><p>Klausimas {i + 1}</p></b>
                <p>{questionsCopy[i].text}</p>
                <h6>Issirinkite teisinga atsakyma/us: </h6>
                <table>
                    <tbody>
                        {
                            questionsCopy[i].answers[0].text === undefined ?
                                null
                                :
                                <AnswerShow setClassName={readCssClassName} answer={questionsCopy[i].answers[0]} />
                        }
                        {
                            questionsCopy[i].answers[1].text === undefined ?
                                null
                                :
                                <AnswerShow setClassName={readCssClassName} answer={questionsCopy[i].answers[1]} />
                        }
                        {
                            questionsCopy[i].answers[2].text === undefined ?
                                null
                                :
                                <AnswerShow setClassName={readCssClassName} answer={questionsCopy[i].answers[2]} />
                        }
                        {
                            questionsCopy[i].answers[3].text === undefined ?
                                null
                                :
                                <AnswerShow setClassName={readCssClassName} answer={questionsCopy[i].answers[3]} />
                        }
                    </tbody>
                </table>
            </div>
        )
    }

    React.useEffect(() => { get_all_questions() }, [])

    return (
        <div className="viktorinos_langas">
            <h1 > Atsakykite i klausimus: </h1>
            {array_text}
            <button onClick={() => { props.setShowWindow(null); readCssClassName = "answer_correct" }}>Uzdaryti viktorina</button>
            <button onClick={() =>
            {
                let taskai = 0
                let klausimo_taskai = 0
                for (let i = 0; i < questionsCopy.length; i++)
                {
                    let klausimo_taskai = 0
                    //console.log(questionsCopy[i].text)
                    // console.log(questionsCopy[i].answers[0].correct, questionsCopy[i].answers[0].refCheckbox.current.checked)
                    // console.log(questionsCopy[i].answers[1].correct, questionsCopy[i].answers[1].refCheckbox.current.checked)
                    // console.log(questionsCopy[i].answers[2].correct, questionsCopy[i].answers[2].refCheckbox.current.checked)
                    // console.log(questionsCopy[i].answers[3].correct, questionsCopy[i].answers[3].refCheckbox.current.checked)
                    if (questionsCopy[i].answers[0].correct === questionsCopy[i].answers[0].refCheckbox.current.checked &&
                        questionsCopy[i].answers[1].correct === questionsCopy[i].answers[1].refCheckbox.current.checked &&
                        questionsCopy[i].answers[2].correct === questionsCopy[i].answers[2].refCheckbox.current.checked &&
                        questionsCopy[i].answers[3].correct === questionsCopy[i].answers[3].refCheckbox.current.checked) { taskai++; klausimo_taskai = 1 }
                    //console.log("Uz ", i, " klausima gavote ", klausimo_taskai, " taska.")

                }
                //console.log("Is viso uz viktorina gavote " + taskai + " tasku. ")
                let rezultasProcentais = (taskai * 100) / questionsCopy.length
                let rezultasIsvada = ""
                if (rezultasProcentais > 50)
                {
                    rezultasIsvada = "Sveikiname Jus islaiket!"
                }
                else
                {
                    rezultasIsvada = "Jus viktorinos neislaiket"
                }

                let tasko_galune = ""
                if (taskai === 1)
                {
                    tasko_galune = " taska"
                }
                else
                {
                    tasko_galune = " taskus"
                }

                props.setStateWindowText("Uz viktorina gavote " + taskai + tasko_galune + ", is galimu " + questionsCopy.length + " tasku, arba islaikymo procentas. " + rezultasProcentais + `\n ` + rezultasIsvada)
                setCssClassName("answer_correct")
            }
            
            }>Varnu rezultatai </button>
        </div>
    )
}

export default WindowQuiz