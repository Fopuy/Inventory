const express = require('express');
const router = express.Router();

const addCardController = require('../controllers/addCardController');

router.get('/', (req, res) => {
    res.render('addCardForm', { title: 'Add Pokémon Card' });
});
router.post('/', addCardController.addCards);

module.exports = router;