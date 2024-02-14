const { Pokemon } = require("../db");

const getName = async (req, res) => {
  try {
    const { name } = req.query;
    const lowerCase = name.toLowerCase();
    const poke = await Pokemon.findOne({
      where: { name: lowerCase },
    });
    !poke
      ? res
          .status(404)
          .json({ message: "No se encontro ningun pokemon con ese nombre" })
      : res.status(200).json(poke);
  } catch (error) {}
};
module.exports = getName;
