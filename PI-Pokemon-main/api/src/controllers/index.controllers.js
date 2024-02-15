const getDB = require("./getPokemonDb");
const getId = require("./getPokemonIdDB");
const getName = require("./getPokemonNameDB");
const getTypes = require("./getTypesDB");
const postPokemon = require("./postPokemon");

module.exports = { getDB, getId, getName, getTypes, postPokemon };
