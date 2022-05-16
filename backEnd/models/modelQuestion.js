const mongoose = require('mongoose')
const { MONGOOSE_URL } = require('../utils/config')

const mongoose_connection = mongoose.createConnection(MONGOOSE_URL)

const schema_question = new mongoose.Schema(
    {
        "text": { "type": String, "require": true },
        "type": {
            "type": String, "require": true,
            "enum": [
                "selectOne",
                "selectMultiple"
                    ]
        },
        "answers": [
            {
                "text": { "type": String, "require": true },
                "correct": { "type": Boolean, "require": true }
            }
        ],
    }
)

const model_question = mongoose_connection.model("questions", schema_question)

module.exports = model_question