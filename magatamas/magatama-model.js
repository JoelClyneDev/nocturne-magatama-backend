const mongoose = require('mongoose')
const Schema = mongoose.Schema

//use the real magatama schema later
const magatamaSchema = new Schema({
    name: { type: String, required: true },
    element: { type: String, required: true },
    wild_effects: { type: String, required: true },
    //may change to number
    st: { type: String, required: true },
    ma: { type: String, required: true },
    vt: { type: String, required: true },
    ag: { type: String, required: true },
    lu: { type: String, required: true },
    //resistances
    reflect: { type: String, required: true },
    absorb: { type: String, required: true },
    void: { type: String, required: true },
    weak: { type: String, required: true },
    resist: { type: String, required: true },
    //fix later, make own schema?
    skills: [{
        skill_name: { type: String, required: true },
        cost: { type: String, required: true },
        effect: { type: String, required: true },
        level: { type: String, required: true }
    }]
})

module.exports = mongoose.model('smtWiki', magatamaSchema, 'smtWiki')