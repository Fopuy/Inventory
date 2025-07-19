const db = require("../db/queries");

const addCards = async (req, res) =>{
    const { name, rarity, set_name, condition, quantity, notes, price, image_url } = req.body;

    await db.addCards([name, rarity, set_name, condition, quantity, notes, price, image_url]);
    if (![name, rarity, set_name, condition, quantity, notes, price, image_url]) {
        res.status(400).send("Card data is required");
        return;
    }
  res.status(201).send("Card added successfully");
};

module.exports = { addCards };