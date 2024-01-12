const express = require('express')
const dbConnection = require('./config/db')
const cors = require('cors')
require('dotenv').config();
const resturantRoute = require("./api/restaurant.route")

const app = express()

app.use(cors())

const PORT = process.env.PORT || 5000

app.use(express.json())

//establish connection to database
dbConnection()

//APIs
app.get('/', (req, res) => {
    return res.json({ msg: `App running on PORT ${PORT}...` })
})

app.use('/api', resturantRoute)
app.use('*', (req, res) => res.status(404).json({error: 'not found'}))


app.listen(PORT)