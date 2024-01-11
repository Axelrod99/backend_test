const express = require('express')
const dbConnection = require('./config/db')
const cors = require('cors')
require('dotenv').config();

const app = express()

app.use(cors())

const PORT = process.env.PORT || 5000

app.use(express.json())

//establish connection to database
dbConnection()

app.get('/', (req, res) => {
    return res.json({ msg: `App running on PORT ${PORT}` })
})


app.listen(PORT)