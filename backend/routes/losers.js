const getDatabase = require('../database.js')

const db = getDatabase()

const express = require('express')
const router = express.Router()

//En array med hamsterobjekt för de 5 som förlorat flest matcher
router.get('/', async (req, res) => {
	try {
		const hamstersRef = db.collection('hamsters')
		const snapshot = await hamstersRef.get()

		let items = []
		snapshot.forEach(doc => {
			const data = doc.data()
			items.push(data)
		});

		// sort by value
		const fiveWorst = items.sort((a, b) => b.defeats - a.defeats).slice(0, 5);

		res.status(200).send(fiveWorst)
	} catch (err) {
		res.status(500).send(err.message)
	}
})

module.exports = router
