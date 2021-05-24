const getDatabase = require('../database.js')

const db = getDatabase()

const express = require('express')
const router = express.Router()

//Hämtar en array med alla matcher som hamstern med bifogat id har vunnit
router.get('/:id', async (req, res) => {
	try {
		const id = req.params.id
		const matchesRef = db.collection('matches')
		const snapshot = await matchesRef.where("winnerId", "==", id).get()

		if (snapshot.empty) {
			res.sendStatus(404)
			return;
		}

		let items = []

		snapshot.forEach(doc => {
			const data = doc.data()
			data.id = doc.id
			items.push(data)
			console.log(doc.id, '=>', doc.data());
		});

		res.status(200).send(items)
	} catch (err) {
		res.status(500).send(err.message)
	}

})

module.exports = router
