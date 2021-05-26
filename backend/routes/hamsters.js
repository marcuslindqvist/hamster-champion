const getDatabase = require("../database.js");
const { check, validationResult } = require("express-validator");
const db = getDatabase();

const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const hamstersRef = db.collection("hamsters");
		const snapshot = await hamstersRef.get();

		if (snapshot.empty) {
			res.send([]);
			return;
		}
		let items = [];
		snapshot.forEach((doc) => {
			const data = doc.data();
			data.id = doc.id;
			items.push(data);
		});
		res.send(items);
	} catch (err) {
		res.status(500).send(err.message);
	}
});

router.get("/random", async (req, res) => {
	try {
		const hamstersRef = db.collection("hamsters");
		const snapshot = await hamstersRef.get();

		if (snapshot.empty) {
			res.status(404).send([]);
			return;
		}

		let items = [];
		snapshot.forEach((doc) => {
			const data = doc.data();
			items.push(data);
		});
		let randomIndex = Math.floor(Math.random() * items.length);

		res.status(200).send(items[randomIndex]);
	} catch (err) {
		res.status(500).send(err.message);
	}
});
router.get("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const docRef = await db.collection("hamsters").doc(id).get();

		if (!docRef.exists) {
			res.status(404).send("Sorry, that hamster does not exist!");
			return;
		}

		const data = docRef.data();
		res.status(200).send(data);
	} catch (err) {
		res.status(500).send(err.message);
	}
});

router.post(
	"/",
	[
		check("name").not().isEmpty().withMessage("Hamster needs a name"),
		check("age", "Age should be a number").isNumeric(),
		check("imgName").not().isEmpty().withMessage("Hamster needs an image?"),
		check("favFood").not().isEmpty().withMessage("Hamster needs favFood?"),
		check("loves").not().isEmpty().withMessage("Hamster needs to love?"),
	],
	async function (req, res) {
		try {
			const errors = validationResult(req);

			if (!errors.isEmpty()) {
				return res.status(400).jsonp(errors.array());
			} else {
				const newHamster = {
					name: req.body.name,
					age: req.body.age,
					favFood: req.body.favFood,
					loves: req.body.loves,
					imgName: req.body.imgName,
					wins: 0,
					defeats: 0,
					games: 0,
				};
				const docRef = await db.collection("hamsters").add(newHamster);
				idObject = {
					id: docRef.id,
				};
				res.status(200).send(idObject);
			}
		} catch (err) {
			res.status(500).send(err.message);
		}
	}
);

router.put("/:id", async (req, res) => {
	console.log(req)
	try {
		const id = req.params.id;
		const patch = req.body;
		console.log(patch);
		const docRef = await db.collection("hamsters").doc(id).get();

		if (!Object.keys(patch)) {
			console.log("rad 115", patch);
			res.sendStatus(400);
			return;
		} else if (!docRef.exists) {
			res.sendStatus(404);
			return;
		}
		//tidyUpRequest tar bort ogiltiga properties
		const updatedHamster = tidyUpRequest(patch);

		//checkPropertyDatatypes kollar att properties har rätt datatyp
		if (!checkPropertyDatatypes(updatedHamster)) {
			console.log("rad 127");
			res.sendStatus(400);
			return;
		}
console.log("rad 131");
		await db.collection("hamsters").doc(id).set(updatedHamster, {
			merge: true,
		});

		res.sendStatus(200);
	} catch (err) {
		res.status(500).send(err.message);
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const hamstersRef = db.collection("hamsters");
		const docRef = await hamstersRef.doc(id).get();
		// Kollar om valt id  existerar, om den inte finns skickas 404
		if (!docRef.exists) {
			res.sendStatus(404);
			return;
		} // Om id hittas i databasen så tas det bort
		const result = await db.collection("hamsters").doc(id).delete();
		res.sendStatus(200);
	} catch (err) {
		res.status(500).send(err.message);
	}
});

function tidyUpRequest(body) {
	const keys = [
		"name",
		"favFood",
		"loves",
		"imgName",
		"age",
		"wins",
		"defeats",
		"games",
	];

	let result = keys.reduce((acc, key) => {
		if (body[key]) {
			acc[key] = body[key];
		}
		return acc;
	}, {});

	return result;
}

function checkPropertyDatatypes(hamsterObj) {
	for (const property in hamsterObj) {
		const value = hamsterObj[property];
		if (
			property == "age" ||
			property == "wins" ||
			property == "defeats" ||
			property == "games"
		) {
			if (typeof value !== "number") {
				return false;
			}
		} else if (
			property == "name" ||
			property == "favFood" ||
			property == "loves" ||
			property == "imgName"
		) {
			if (typeof value !== "string") {
				return false;
			}
		}
	}
	return true;
}

function isAgeNum(maybeObject) {
	if (typeof maybeObject.age !== "number") {
		return false;
	} else {
		return true;
	}
}

module.exports = router;
