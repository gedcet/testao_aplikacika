import React from "react"

const Answer = (props) =>
{
    return (
        <div className="Answer">
            <label> {props.set_nr}
                <input
                    type="text"
                    className="answtxt"
                    value={props.set_value}
                    onChange={props.set_onChange}
                    ref={props.set_ref_text}
                >
                </input>
            </label> Correct
            <input
                type="checkbox"
                checked={props.set_checked}
                onChange={props.set_onChange}
                ref={props.set_ref_checked}
            >
            </input>

        </div>
    )
}

export default Answer

