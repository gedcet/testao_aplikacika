const express = require('express')
const model_question = require('../models/modelQuestion')
const routerQuestions = express.Router()

routerQuestions.get("/", async function (req, res)
{
    try
    {
        const result = await model_question.find()
        //laiminga pabaiga
        res.statusCode = 200
        res.json(result)
    }
    catch (err)
    {
        res.statusCode = 400
        res.end()
    }
})

routerQuestions.put("/api/questions/:_id", async function (req, res)
{
    if(req.params._id === undefined)
    {
        res.statusCode = 400
        res.end()
    }
    
    try
    {
        const result = await model_question.findByIdAndUpdate(req.params._id, {
            "text": req.body.text,
            "type": req.body.type,
            "answers": req.body.answers,
        })
        res.statusCode = 200
        res.json(result)
    }
    catch (err)
    {
        res.statusCode = 405
        res.end()
    }
})

routerQuestions.delete("/api/questions/:_id", async function (req, res)
{
    try
    {
        const result = await model_question.findByIdAndDelete(req.params._id)
        //laiminga pabaiga
        if (result === null)
        {
            res.statusCode = 400
            alert("Nepavyko istrinti ")
            res.end()
        }
        res.statusCode = 200
        res.json(result)
    }
    catch (err)
    {
        res.statusCode = 400
        res.end()
    }
})

routerQuestions.post("/", function (req, res)
{
    if (req.body.text === undefined)
    {
        res.statusCode = 400
        res.end()
        return
    }

    if (req.body.type === undefined)
    {
        res.statusCode = 400
        res.end()
        return
    }

    if (req.body.answers === undefined)
    {
        res.statusCode = 400
        res.end()
        return
    }

    if ((req.body.answers instanceof Array) === false)
    {
        res.statusCode = 400
        res.end()
        return
    }
    try 
    {
        const result = model_question.create({
            "text": req.body.text,
            "answers": req.body.answers,
            "type": req.body.type
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

module.exports = routerQuestions