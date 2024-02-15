const { Pokemon, Type } = require("../db");

const postPokemon = async (req, res) => {
  try {
    const { name, img, type, hp, attack, defense, speed, height, weight } =
      req.body;

    const pokemon = await Pokemon.create({
      name,
      img: img
        ? img
        : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png",
      type: type.length ? type : ["normal"],
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
    });
    if (type && type.length > 0) {
      const types = await Type.findAll({
        where: {
          name: type,
        },
      });

      // Asociar cada tipo encontrado al Pokemon
      await pokemon.addTypes(types);
    }
    res.send("Pokemon creado");
  } catch (error) {
    res.send("ERROR: " + error);
  }
};

module.exports = postPokemon;
