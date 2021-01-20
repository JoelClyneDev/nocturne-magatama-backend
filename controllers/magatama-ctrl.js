const Magatama = require('../magatamas/magatama-model')
const magatamaDB = require('../database')

createMagatama = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a magatama',
        })
    }

    const magatama = new Magatama(body)

    if (!magatama) {
        return res.status(400).json({ success: false, error: err })
    }

    magatama
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: magatama._id,
                message: 'Magatama Created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Magatama not created!'
            })
        })

}

updateMagatama = async(req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Magatama.findOne({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Magatama not found',
            })
        }
        magatama.name = body.name
        magatama.element = body.element
        magatama.wild_effects = body.wild_effects
        magatama.st = body.st
        magatama.ma = body.ma
        magatama.vt = body.vt
        magatama.ag = body.ag
        magatama.lu = body.lu
        magatama.reflect = body.reflect
        magatama.absorb = body.absorb
        magatama.void = body.void
        magatama.weak = body.weak
        magatama.resist = body.resist
            //fix this later to be a skill
        magatama.skills = body.skills
        magatama
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: magatama._id,
                    message: 'Magatama updated',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Magatama not updated!',
                })
            })

    })
}

deleteMagatama = async(req, res) => {
    await Magatama.findOneAndDelete({ _id: req.params.id }, (err, magatama) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!magatama) {
            return res
                .status(404)
                .json({ success: false, error: `Magatama not found` })
        }

        return res.status(200).json({ success: true, data: magatama })
    }).catch(err => console.log(err))
}

getMagatamaById = async(req, res) => {
    await Magatama.findOne({ _id: req.params.id }, (err, magatama) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!magatama) {
            return res
                .status(404)
                .json({ success: false, error: `Magatama not found` })
        }
        return res.status(200).json({ success: true, data: magatama })
    }).catch(err => console.log(err))
}

/*
 **Gets the json response from the database
 */
getMagatamas = async(req, res) => {
    await Magatama.find({}, (err, magatamas) => {

        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!magatamas.length) {
            return res
                .status(404)
                .json({ success: false, error: `Magatama not found`, length: magatamas.length })
        }
        return res.status(200).json({ success: true, data: magatamas })
    }).catch(err => console.log(err))
}

module.exports = {
    createMagatama,
    updateMagatama,
    deleteMagatama,
    getMagatamas,
    getMagatamaById,
}