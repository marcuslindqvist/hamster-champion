const getDatabase = require('../database.js')

const db = getDatabase()

const express = require('express')
const router = express.Router()

//En array med hamsterobjekt för de 5 som vunnit flest matcher
router.get('/', async (req, res) => {
	try {
		console.log("inne i winners");
		const matchesRef = db.collection('hamsters')
		const snapshot = await matchesRef.get()

		let items = []
		snapshot.forEach(doc => {
			const data = doc.data()
			items.push(data)
		});

		// sort by value
		const fiveBest = items.sort((a, b) => b.wins - a.wins).slice(0, 5);

		res.status(200).send(fiveBest)
	} catch (err) {
		res.status(500).send(err.message)
	}

})

module.exports = router
