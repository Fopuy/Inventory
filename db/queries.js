const pool = require("./pool");

async function getAllCards() {
  const { rows } = await pool.query("SELECT * FROM cards;");
  return rows;
}

async function addCards([name, rarity, set_name, condition, quantity, notes, price, image_url]) {
    await pool.query(
    `INSERT INTO cards (name, rarity, set_name, condition, quantity, notes, price, image_url)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
    [name, rarity, set_name, condition, quantity, notes, price, image_url]
  );
}

async function deleteCard(id) {
  await pool.query(
    `DELETE FROM cards WHERE id = $1`,
    [id]
  )
}

module.exports = {
  getAllCards, addCards, deleteCard
};
