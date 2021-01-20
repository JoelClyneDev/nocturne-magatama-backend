const mongoose = require('mongoose')

mongoose
    .connect('mongodb://127.0.0.1:27017/mycustomers', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })
console.log("Connection Established!")

const magatamaDB = mongoose.connection

module.exports = magatamaDB