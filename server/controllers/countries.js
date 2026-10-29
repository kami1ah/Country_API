const Country = require('../models/Country')

const index = async (req, res) => {
    try {
        const countries = await Country.getAll()
        res.status(200).json(countries)
    } catch(err) {
        res.status(500).json({error: err.message})
    }
}

const show = async (req, res) => {
    try {
        const name = req.params.name
        const country = await Country.getOneByCountryName(name)
        res.status(200).json(country)
    }catch(err) {
        res.status(404).json({error: err.message})

    }
}

const create = async (req, res) => {
    try {
        const data = req.body
        const newCountry = await Country.create(data)

        res.status(201).json(newCountry)

    }catch(err) {
        res.status(400).json({ error: err.message})
    }
}

const update = async (req, res) => {
            const data = req.params.name
    try {
        const country = await Country.getOneByCountryName(data)
        const updateCountry = await country.update(req.body)

        res.status(200).json(updateCountry)
    } catch(err) {
        res.status(404).json({error: err.message})
    }
}


const destroy = async (req, res) => {
    try{
        const name = req.params.name
        const country = await Country.getOneByCountryName(name)
        const result = await country.destroy()
        res.status(204).end()
    } catch(err) {
        res.status(404).json({error: err.message})
    }
}

module.exports = { index, show, create, destroy, update }