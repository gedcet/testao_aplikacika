const supertest = require('supertest')
const express1 = require("../app")
const model_question = require('../models/modelQuestion')

const supertest1 = supertest(express1)

const initialtext =
    [
        {
            "text": "Kiek metu vilkui",
            "type": {
                "type": "",
                "enum": ["selectOne", "selectMultiple"]
            },
            "answers": [
                {
                    "answer": "nieks nezino",
                    "correct": true
                }
            ],
        }
    ]

beforeAll(async () =>
{
    await model_question.deleteMany()

    for (i = 0; i < initialtext.length; i++)
    {
        await modelBlog.create(initialtext[i])
    }
})

afterAll(async () =>
{
    await mongooseConnection.close()
    express1Listiner.close()
})