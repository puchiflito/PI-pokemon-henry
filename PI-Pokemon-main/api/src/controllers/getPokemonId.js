const { Pokemon } = require("../db");

const getId = async (req, res) => {
  try {
    const { id } = req.params;
    const poke = await Pokemon.findOne({
      where: { id },
    });
    !poke
      ? res.status(404).json({ message: "No existe pokemon con ese id" })
      : res.status(200).json(poke);
  } catch (error) {
    return "ERROR: " + error;
  }
};

module.exports = getId;
