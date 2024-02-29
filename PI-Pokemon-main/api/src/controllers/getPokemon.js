const { Pokemon, Type } = require("../db");

const getPokemonApi = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
  const data = await response.json();

  const pokemons = data.results.map(async (pokemon) => {
    const respon = await fetch(pokemon.url);
    const datas = await respon.json();
    return datas;
  });

  const results = await Promise.all(pokemons).then((res) =>
    res.map((p) => {
      return {
        id: p.id,
        name: p.name,
        img: p.sprites.other.dream_world.front_default,
        type: p.types.map((el) => el.type.name),
        health: p.stats[0].base_stat,
        attack: p.stats[1].base_stat,
        defense: p.stats[2].base_stat,
        speed: p.stats[5].base_stat,
        height: p.height,
        weight: p.weight,
        source: "api",
      };
    })
  );
  return results;
};

const getDB = async () => {
  try {
    const pokedb = await Pokemon.findAll({
      include: {
        model: Type,
        attributes: ["name"],
      },
    });

    return pokedb;
  } catch (error) {
    throw new Error("ERROR: " + error);
  }
};

const getPokemon = async (req, res) => {
  try {
    const api = await getPokemonApi();
    const db = await getDB(); // Aquí pasas req y res
    const info = api.concat(db);
    res.json(info);
  } catch (error) {
    res.status(500).send("ERROR: " + error); // También deberías enviar el error con res.status(500)
  }
};

module.exports = getPokemon;
