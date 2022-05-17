import React from "react"

const AnswerShow = (props) =>
{
    if (props.answer.correct === true)
    {
        return (
            <tr>
                <td className={props.setClassName}>{props.answer.text}</td>
                <td>
                    <input type="checkbox" ref={(() =>
                    {
                        const ref = React.createRef()
                        props.answer.refCheckbox = ref
                        return ref
                    })()}
                    />
                </td>
            </tr>
        )
    }

    return (
        <tr>
            <td className={null}>{props.answer.text}</td>
            <td>
                <input type="checkbox" ref={(() =>
                {
                    const ref = React.createRef()
                    props.answer.refCheckbox = ref
                    return ref
                })()}
                />
            </td>
        </tr>
    )
}

export default AnswerShow