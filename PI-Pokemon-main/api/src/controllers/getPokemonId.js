const { Pokemon } = require("../db");

const getId = async (req, res) => {
  try {
    const { id } = req.params;
    const pokedb = await Pokemon.findOne({
      where: { id },
    });
    if (!pokedb) {
      const idApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      console.log(idApi);
      const data = await idApi.json();
      return res.status(200).json(data);
    }
    res.json(pokedb);
    // !poke
    //   ? res.status(404).json({ message: "No existe pokemon con ese id" })
    //   : res.status(200).json(poke);
  } catch (error) {
    return "ERROR: " + error;
  }
};

module.exports = getId;
