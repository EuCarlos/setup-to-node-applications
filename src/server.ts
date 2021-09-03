import express, { response } from 'express'
import '@controllers/UserController'

const app = express()

app.get('/', (req, response) => {
    return response.json({ message: 'Hello world!' })
})

app.listen(3333, () => {
    console.log("🔥 Server is running in PORT 3333")
})
