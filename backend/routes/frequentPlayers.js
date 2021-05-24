const getDatabase = require('../database.js')

const db = getDatabase()

const express = require('express')
const router = express.Router()

router.get('/least', async (req, res) => {
	try {

		const snapshot = await db.collection('hamsters').orderBy('games').get()

		if (snapshot.empty) {
			res.status(404).send([])
			return
		}

		let items = []

		snapshot.forEach(doc => {
			const data = doc.data()
			items.push(doc.id)
		});

		res.status(200).send(items)

	} catch (err) {
		res.status(500).send(err.message)
	}
})

router.get('/most', async (req, res) => {
	try {

		const snapshot = await db.collection('hamsters').orderBy('games', 'desc').get()

		if (snapshot.empty) {
			res.status(404).send([])
			return
		}

		let items = []

		snapshot.forEach(doc => {
			const data = doc.data()
			items.push(doc.id)
		});

		res.status(200).send(items)

	} catch (err) {
		res.status(500).send(err.message)
	}
})

module.exports = router
