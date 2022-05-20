const express = require('express')
const model_user = require("../models/modelUser")
const generateRandomString = require("../utils/generateRandomString")

const routerLogin = express.Router()

routerLogin.post("/", async function (req, res)
{
    if (req.body.userName === undefined)
    {
        res.statusCode = 400
        res.end()
        return
    }

    if (req.body.userPassword === undefined)
    {
        res.statusCode = 400
        res.end()
        return
    }

    try 
    {
        // const result = await model_user.findOne({
        //     "userName": req.body.userName,
        //     "userPassword": req.body.userPassword,
        // })
        const random_sausainis = generateRandomString(512)//generuojam sausaini 512 zenklu ilgio
        //iesko vartotojo ir tada priskiriam sausani vartotojui
        const result = await model_user.findOneAndUpdate(
            {
                "userName": req.body.userName,
                "userPassword": req.body.userPassword,
            },
            { "authentificationToken": random_sausainis })

        if (result === null)
        {
            res.statusCode = 400
            req.end()
            return
        }
        //laiminga pabaiga
        res.statusCode = 200
        //duosim sausaini narsyklei
        res.cookie("sausainis1", random_sausainis)
        res.end()
    }
    catch (err)
    {
        res.statusCode = 400
        res.end()
    }
})

module.exports = routerLogin