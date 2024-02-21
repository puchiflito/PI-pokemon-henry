const { Type } = require("../db");

const getTypes = async (req, res) => {
  try {
    const types = await Type.findAll();
    if (types.length === 0) {
      const response = await fetch("https://pokeapi.co/api/v2/type");
      const data = await response.json();
      const type = data.results.map((t) => {
        return { id: t.id, name: t.name };
      });
      res.json(type);
    }
    res.status(200).json(types);
  } catch (error) {
    return "ERROR: " + error;
  }
};

module.exports = getTypes;
