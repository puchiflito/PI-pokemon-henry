const { Pokemon } = require("../db");

const getPokemonApi = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=200");
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
      };
    })
  );
  return results;
};
const getDB = async (req, res) => {
  try {
    const pokedb = await Pokemon.findAll();
    if (pokedb.length === 0) {
      const pokemon = await getPokemonApi();
      res.json(pokemon);
    }
    res.json(pokedb);
  } catch (error) {
    return "ERROR: " + error;
  }
};

module.exports = getDB;
// const getPokeomApi = async () => {
//   const res = await fetch("https://pokeapi.co/api/v2/pokemon");
//   const data = await res.json();
//   console.log(data);
//   return data;
// };
