const getDatabase = require('../database.js')
const {
	check,
	validationResult
} = require('express-validator');
const db = getDatabase()

const express = require('express')
const router = express.Router()

//Hämtar lista på alla matcher
router.get('/', async (req, res) => {
	try {
		const matchesRef = db.collection('matches')
		const snapshot = await matchesRef.get()

		if (snapshot.empty) {
			res.send([])
			return
		}

		let items = []
		snapshot.forEach(doc => {
			const data = doc.data()
			data.id = doc.id
			items.push(data)
		});
		res.status(200).send(items)
	} catch (err) {
		res.sendStatus(500).send(err.message)
	}
})

//Hämtar ett match-objekt via id.
router.get('/:id', async (req, res) => {
	try {
		const id = req.params.id
		const docRef = await db.collection('matches').doc(id).get()

		if (!docRef.exists) {
			res.sendStatus(404)
			return;
		}
		const data = docRef.data()
		data.id = docRef.id
		res.status(200).send(data)
	} catch (err) {
		res.sendStatus(500).send(err.message)
	}
})


//Lägger till ett matchobjekt utan id(id läggs till autom. i firestore)
router.post('/', [
	check('winnerId').not().isEmpty(),
	check('loserId').not().isEmpty(),
], async (req, res) => {
	try {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).jsonp(errors.array());
		} else {

			const newMatch = {
				winnerId: req.body.winnerId,
				loserId: req.body.loserId
			}

			const docRef = await db.collection('matches').add(newMatch)
			idObject = {
				id: docRef.id
			}
			res.status(200).send(idObject)
		}
	} catch (err) {
		res.status(500).send(err.message)

	}
})

//Tar bort matchobjektet med det id som skickas
router.delete('/:id', async (req, res) => {
	const id = req.params.id
	const docRef = await db.collection('matches').doc(id).get()
	try {
		if (!id) {
			res.sendStatus(400)
			return
		} else if (!docRef.exists) {
			res.sendStatus(404)
			return
		}
		// Statuskod 400 om ett annat fel inträffar.
		const result = await db.collection('matches').doc(id).delete()
		res.sendStatus(200)
	} catch (err) {
		res.status(500).send(err.message)
	}

})
module.exports = router
