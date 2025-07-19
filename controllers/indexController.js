const db = require("../db/queries");

const getAllCards = async (req, res) => {
    const checkQuery = JSON.stringify(req.query) === "{}";

    if (!checkQuery) {
        const cards = await db.getAllCards(req.query);

        res.render("index", {
            title: "Pokemon Cards",
            cards: cards,
        });

        return;
    }

    const cards = await db.getAllCards();
    res.render("index", {
        title: "Pokemon Cards",
        cards: cards,
    });
};

module.exports = { getAllCards };