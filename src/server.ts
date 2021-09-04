import express, { response } from 'express'
import '@controllers/UserController'
require("dotenv").config()

const app = express()

app.get('/', (req, response) => {
    return response.json({ message: 'Hello world!' })
})

app.listen(3333, () => {
    console.log(`🔥 Server is running in PORT 3333 - ${process.env.TYPE}`)
})
