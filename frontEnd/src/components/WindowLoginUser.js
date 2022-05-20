import React from "react"
import axios from "axios"

const WindowLoginUser = (props) => 
{
    const refUserName = React.createRef()
    const refUserPassword = React.createRef()

    const sendRequestLogin = async () =>
    {
        if (refUserName.current.value === "")
        {
            alert("Iveskite vartotojo varda ")
            return
        }

        if (refUserPassword.current.value === "")
        {
            alert("Iveskite slaptazodi ")
            return
        }

        try
        {
            const axios1 = await axios({
                "method": "post",
                "url": "/api/login",
                "data":
                {
                    "userName": refUserName.current.value,
                    "userPassword": refUserPassword.current.value,
                    
                }
            })
            props.setShowWindow("ShowQuizForMe")
             console.log("Login User succesfully ", axios1)
        }
        catch (err)
        {
            console.log("Error login User ", err)
        }
    }

    return (
        <div className="AddQuestion">
            <h1>Iveskite savo: </h1>
            <label>User Name:
                <input type="text" className="answtxt" ref={refUserName}></input>
            </label>
            <br />
            <label>User password:
                <input type="password" className="answtxt" ref={refUserPassword}></input>
            </label>
            <pre></pre>
            <button onClick={sendRequestLogin}>Logintis</button>
            <button onClick={() => { props.closeButton(null) }}>Uzdaryti</button>
        </div>
    )
}
export default WindowLoginUser