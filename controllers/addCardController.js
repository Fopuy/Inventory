const db = require("../db/queries");

const addCards = async (req, res) =>{
    const { name, rarity, set_name, condition, quantity, notes, price, image_url } = req.body;

    await db.addCards([name, rarity, set_name, condition, quantity, notes, price, image_url]);
    if (![name, rarity, set_name, condition, quantity, notes, price, image_url]) {
        res.status(400).send("Card data is required");
        return;
    }
  res.redirect('/');
};

const deleteCard = async (req, res) => {
    const id = req.params.id;
    await db.deleteCard(id);
    res.redirect('/');
}

module.exports = { addCards, deleteCard };