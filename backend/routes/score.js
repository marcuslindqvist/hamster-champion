const getDatabase = require('../database.js')

const db = getDatabase()

const express = require('express')
const router = express.Router()


router.get('/:challenger/:defender', async (req, res) => {
	try {
		const challengerId = req.params.challenger
		const defenderId = req.params.defender

		if (!challengerId || challengerId.length !== 20 || !defenderId || defenderId.length !== 20) {
			return res.sendStatus(400)
		}

		const chalwins = await db.collection('matches').where('winnerId', '==', challengerId).where('loserId', '==', defenderId).get()

		const defWins = await db.collection('matches').where('winnerId', '==', defenderId).where('loserId', '==', challengerId).get()

		if (chalwins.empty || defWins.empty) {
			res.status(404).send([])
			return
		}

		let chalwinsList = []
		chalwins.forEach(doc => {
			let data = doc.data()
			chalwinsList.push(data)
		});

		let defwinsList = []
		defWins.forEach(doc => {
			let data = doc.data()
			defwinsList.push(data)
		});

		const result = {
			challengerWins: chalwinsList.length,
			defenderWins: defwinsList.length
		}
		res.status(200).send(result)

	} catch (err) {
		res.status(500).send(err.message)

	}
})

module.exports = router
