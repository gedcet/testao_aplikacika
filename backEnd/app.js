const path = require("path")
const express = require('express')
const routerQuestions = require('./controllers/controllerQuestions')

const express1 = express()

const path_1 = path.resolve(__dirname, "..", "frontend", "build")
express1.use(express.static(path_1))

express1.use(express.json())
express1.use("/api/questions", routerQuestions)

module.exports = express1