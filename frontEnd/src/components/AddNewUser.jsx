import React from "react"
import axios from "axios"


const AddNewUser = (props) => 
{
    const refUserName = React.createRef()
    const refUserPassword = React.createRef()

    const handleClick = async () =>
    {
        if (refUserName.current.value === "")
        {
            alert("Neuzpildytas vartotojo vardo laukas ")
            return
        }

        if (refUserPassword.current.value === "")
        {
            alert("Pamirsote ivest slaptazodi ")
            return
        }

        try
        {
            const axios1 = await axios({
                "method": "post",
                "url": "/api/users",
                "data":
                {
                    "userName": refUserName.current.value,
                    "userPassword": refUserPassword.current.value,
                }
            })

            console.log("Add new User succesfully ", axios1)
        }
        catch (err)
        {
            console.log("Error add new User ", err)
        }
    }

    return (
        <div className="AddQuestion">
            <h1>Naujo vartotojo ivedimas</h1>
            <label>User Name:
                <input type="text" className="answtxt" ref={refUserName}></input>
            </label>
            <br />
            <label>User password:
                <input type="text" className="answtxt" ref={refUserPassword}></input>
            </label>
            <pre></pre>
            <button onClick={handleClick}>Ivesti nauja vartotoja duomenu baze</button>
            <button onClick={() => { props.closeButton(null) }}>Uzdaryti</button>
        </div>
    )
}
export default AddNewUser