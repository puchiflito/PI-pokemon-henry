const { Pokemon } = require("../db");

const getDB = async (req, res) => {
  try {
    const pokedb = await Pokemon.findAll();
    if (pokedb.length === 0) {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await response.json();
      const pokemon = data.results;
      return res.json(pokemon);
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
