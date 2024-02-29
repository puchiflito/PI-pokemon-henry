const { Pokemon } = require("../db");
const { Op } = require("sequelize");

const getName = async (req, res) => {
  try {
    const { name } = req.query;

    const pokedb = await Pokemon.findOne({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
    if (!pokedb) {
      const nameApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await nameApi.json();
      const pokemonName = {
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
      return pokemonName.length === 0
        ? res.status(400).json({ message: "no se encontro nada" })
        : res.status(200).json(pokemonName);
    }
    pokedb.length === 0
      ? res.status(400).json({ message: "no se encontro nada" })
      : res.status(200).json(pokedb);
  } catch (error) {
    return "ERROR: " + error;
  }
};
module.exports = getName;
