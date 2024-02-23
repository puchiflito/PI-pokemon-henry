const { Pokemon, Type } = require("../db");

const postPokemon = async (req, res) => {
  try {
    const { name, img, hp, attack, defense, speed, height, weight, type } =
      req.body;
    if (
      !name ||
      !img ||
      !hp ||
      !attack ||
      !defense ||
      !speed ||
      !height ||
      !weight
    ) {
      return res
        .status(415)
        .send("Debe ingresar todos los datos. Type esta exento de esto");
    }
    const pokemon = await Pokemon.create({
      name,
      img: img
        ? img
        : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png",
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      type: type.length ? type : ["normal"],
    });
    if (type && type.length > 0) {
      const types = await Type.findAll({
        where: {
          name: type,
        },
      });

      // Asociar cada tipo encontrado al Pokemon
      const relationTable = await pokemon.addTypes(types);
      return res.send(relationTable);
    }
  } catch (error) {
    res.send("ERROR: " + error);
  }
};

module.exports = postPokemon;
