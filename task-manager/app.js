const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

// middleware
app.use(express.json()) // i will got get the data in req.body if i dont use this

//routes
app.get('/hello', (req, res) => {
    res.send('Task Manager')
})

app.use('/api/v1/tasks', tasks)



const port = 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on ${port}`))

    } catch (error) {
        console.log(error);
    }
}

start()

