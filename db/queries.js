const pool = require("./pool");

async function getAllCards() {
  const { rows } = await pool.query("SELECT * FROM cards;");
  return rows;
}

//async function insertCards(card) {
//  await pool.query("INSERT INTO cards (card) VALUES ($1)", [card]);
//}

module.exports = {
  getAllCards
};
