import React from "react"

const WindowStatus = (props) =>
{
    return (
        <div className="WindowStatus">
            <p>{props.text}</p>
            <button onClick={ () => { props.setStateWindowText(null)} }>Uzdaryti langa</button>
        </div>
    )
}

export default WindowStatus