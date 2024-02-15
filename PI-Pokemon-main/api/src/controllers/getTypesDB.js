const { Type } = require("../db");

const getTypes = async (req, res) => {
  try {
    const types = await Type.findAll();
    res.status(200).json(types);
  } catch (error) {
    return "ERROR: " + error;
  }
};

module.exports = getTypes;
