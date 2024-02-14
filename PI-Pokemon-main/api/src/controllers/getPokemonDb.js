const { Pokemon } = require("../db");

const getDB = async (req, res) => {
  try {
    const poke = await Pokemon.findAll();
    res.json(poke);
  } catch (error) {
    return "ERROR: " + error;
  }
};

module.exports = getDB;
