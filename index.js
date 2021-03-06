var magatamaSchema = require('./magatamas/magatama-model')
var mongoose = require("mongoose");

//makes an express server ho use the backend called app
const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
var port = 4000;
var mongoDBUrl = 'mongodb://127.0.0.1:27017/Magatamas'
const router = express.Router();
const magatamaRouter = require('./route/magatama-router')
const magatamaModel = require('./magatamas/magatama-model')
const skillModel = require('./magatamas/skill-model')
const magatamaCtrl = require('./controllers/magatama-ctrl')



mongoose
    .connect(mongoDBUrl, { useUnifiedTopology: true, useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })


const connection = mongoose.connection;

app.use(bodyParser.json())
app.use(cors())

connection.once("open", function() {
    console.log("MongoDB database connection established successfully");
});

app.get('/', magatamaCtrl.getMagatamas)

app.use('/api', magatamaRouter)
app.use('/test', magatamaRouter)
app.use('/help', magatamaCtrl.getMagatamas)
app.get('/test', (req, res) => {
    res.send('Hello World! 2')
})



app.listen(port, function() {
    console.log("Server is running on Port: " + port);
});