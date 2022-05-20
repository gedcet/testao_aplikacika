const express = require('express')
const model_user = require("../models/modelUser")
const routerUsers = express.Router()

routerUsers.post("/", async function (req, res)
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
        const result = await model_user.create({
            "userName": req.body.userName,
            "userPassword": req.body.userPassword,
        })

        if (result === null)
        {
            res.statusCode = 400
            req.end()
            return
        }
        //laiminga pabaiga
        res.statusCode = 200
        res.end()
    }
    catch (err)
    {
        res.statusCode = 400
        req.end()
    }
})

module.exports = routerUsers