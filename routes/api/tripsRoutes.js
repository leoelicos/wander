const router = require('express').Router();
const { Location, Traveller, Trip } = require('../../models');

// GET all trips
router.get('/', async (req, res) => {
	try {
		const tripsData = await Trip.findAll({
			include: [{ model: Location }, { model: Traveller }],
		});
		res.status(200).json(tripsData);
	} catch (err) {
		res.status(500).json(err);
	}
});

// GET a single trip
router.get('/:id', async (req, res) => {
	try {
		const tripsData = await Trip.findByPk(req.params.id, {
			include: [{ model: Location }, { model: Traveller }],
		});

		if (!tripsData) {
			res.status(404).json({ message: 'No trips found with that id!' });
			return;
		}

		res.status(200).json(tripsData);
	} catch (err) {
		res.status(500).json(err);
	}
});

// CREATE a trip
router.post('/', async (req, res) => {
	try {
		const tripsData = await Trip.create(req.body);
		res.status(200).json(tripsData);
	} catch (err) {
		res.status(400).json(err);
	}
});

// DELETE a trip
router.delete('/:id', async (req, res) => {
	try {
		const tripsData = await Trip.destroy({
			where: {
				id: req.params.id,
			},
		});

		if (!tripsData) {
			res.status(404).json({ message: 'No trips found with that id!' });
			return;
		}

		res.status(200).json(tripsData);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
