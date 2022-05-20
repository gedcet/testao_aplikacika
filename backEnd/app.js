const path = require("path")
const express = require('express')
const routerQuestions = require('./controllers/controllerQuestions')
const routerUsers = require("./controllers/controllerUsers")
const routerLogin = require("./controllers/controllerLogin")
const cookieParser = require("cookie-parser")

const express1 = express()

const path_1 = path.resolve(__dirname, "..", "frontend", "build")
//middleware
express1.use(express.static(path_1))
express1.use(cookieParser())

express1.use(express.json())
express1.use("/api/questions", routerQuestions)
express1.use("/api/users", routerUsers)
express1.use("/api/login", routerLogin)

module.exports = express1