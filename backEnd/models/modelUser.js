const mongoose = require('mongoose')
const { MONGOOSE_URL } = require('../utils/config')

const mongoose_connection = mongoose.createConnection(MONGOOSE_URL)

const schema_user = new mongoose.Schema(
    {
        "userName": { "type": String, "require": true },
        "userPassword": { "type": String, "require": true },
        "authentificationToken": {"type": String, "required": true}
    }
)

const model_user = mongoose_connection.model("User", schema_user)

module.exports = model_user