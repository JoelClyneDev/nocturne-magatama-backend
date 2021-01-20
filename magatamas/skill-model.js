const mongoose = require('mongoose')
const Schema = mongoose.Schema

const skill = new Schema({
    skill_name: { type: String, required: true },
    cost: { type: String, required: true },
    effect: { type: String, required: true },
    level: { type: String, required: true }
})