const getDB = require("./getPokemon");
const getId = require("./getPokemonId");
const getName = require("./getPokemonName");
const { getTypes } = require("./getTypes");
const postPokemon = require("./postPokemon");

module.exports = { getDB, getId, getName, getTypes, postPokemon };
