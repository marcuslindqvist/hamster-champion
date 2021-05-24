const getDatabase = require('../database.js')
const db = getDatabase()
const express = require('express')
const router = express.Router()

router.get('/:id', async (req, res) => {
	try {
		const id = req.params.id

		if (!id) {
			return res.sendStatus(400)
		}

		const snapshot = await db.collection('matches').where('winnerId', '==', id).get()

		if (snapshot.empty) {
			res.status(404).send([])
			return
		}

		let items = []
		snapshot.forEach(doc => {
			let data = doc.data()
			items.push(data.loserId)
		});

		res.status(200).send(items)

	} catch (err) {
		res.status(500).send(err.message)
	}

})

module.exports = router
