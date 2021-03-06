const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const apiPort = 3000
    //the database
const magatamaDB = require('./database')
const magatamaRouter = require('./route/magatama-router')

console.log('bruh')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

magatamaDB.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')

})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))

app.use('/api', magatamaRouter)