const express = require('express');
const router = express.Router();

const addCardController = require('../controllers/addCardController');

router.get('/', (req, res) => {
    res.render('addCardForm', { title: 'Add Pokémon Card' });
});
router.post('/', addCardController.addCards);
router.post('/:id/delete', addCardController.deleteCard);

module.exports = router;