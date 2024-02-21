const { Pokemon } = require("../db");

const getId = async (req, res) => {
  try {
    const { id } = req.params;
    const pokedb = await Pokemon.findOne({
      where: { id },
    });
    if (!pokedb) {
      const idApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await idApi.json();
      const pokemonId = {
        id: data.id,
        name: data.name,
        img: data.sprites.other.dream_world.front_default,
        type: data.types.map((types) => types.type.name),
        health: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        speed: data.stats[5].base_stat,
        height: data.height,
        weight: data.weight,
      };
      return res.status(200).json(pokemonId);
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
