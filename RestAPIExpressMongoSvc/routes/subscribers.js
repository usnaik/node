const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')

// Getting all
router.get('/', async (req, res) => {
	try {
		const subscribers = await Subscriber.find()
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
})

// Getting one
router.get('/:id', (req, res) => {
	res.send(req.params.id)
})

// Creating one
router.post('/', (req, res) => {
})

// Updating one
router.patch('/:id', (req, res) => {
})

// Deleting one
router.delete('/:id', (req, res) => {
})

module.exports = router
