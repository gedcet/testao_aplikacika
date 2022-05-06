const express = require('express')
const routerQuestions = require('./controllers/controllerQuestions')
const { NET_MESSAGE } = require('./utils/config')

const express1 = express()

//express1.use(express.static("../frontEnd/build"))
express1.use(express.static('C:/Users/Mokinys/Desktop/testao_aplikacika/frontEnd/build'))
express1.use(express.json())
express1.use("/api/questions", routerQuestions)

console.log(NET_MESSAGE)

module.exports = express1