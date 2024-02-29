const GET_POKEMON = "GET_POKEMON";
const GET_POKEMON_ID = "GET_POKEMON_ID";
const GET_POKEMON_NAME = "GET_POKEMON_NAME";
const GET_TYPE = "GET_TYPE";
const FILTER_API = "FILTER_API";
const FILTER_DB = "FILTER_DB";
const RESET_POKE = "RESET_POKE";
const ORDER_ATTACK = "ORDER_ATTACK";
const ORDER_NAME = "ORDER_NAME";
const urlPokemon = "http://localhost:3001/pokemon";
const urlTypes = "http://localhost:3001/type";

const getPokemon = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(urlPokemon);
      const data = await res.json();
      dispatch({
        type: GET_POKEMON,
        payload: data,
      });
    } catch (error) {
      console.log("ERROR: " + error);
    }
  };
};

const getPokemonID = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${urlPokemon}/${id}`);
      const data = await res.json();
      console.log("pokemon id redux: ", data);
      dispatch({
        type: GET_POKEMON_ID,
        payload: data,
      });
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };
};

const getPokemonName = (name) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${urlPokemon}/n?name=${name}`);
      const data = await res.json();
      dispatch({
        type: GET_POKEMON_NAME,
        payload: data,
      });
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };
};

const getType = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(urlTypes);
      const data = await res.json();

      dispatch({
        type: GET_TYPE,
        payload: data,
      });
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };
};

const filterApi = () => {
  return {
    type: FILTER_API,
  };
};

const filterDb = () => {
  return {
    type: FILTER_DB,
  };
};
const resetPoke = () => {
  return {
    type: RESET_POKE,
  };
};
const orderAttack = (types) => {
  return {
    type: ORDER_ATTACK,
    payload: types,
  };
};

const orderName = (types) => {
  return {
    type: ORDER_NAME,
    payload: types,
  };
};
export {
  GET_POKEMON,
  getPokemon,
  GET_POKEMON_ID,
  getPokemonID,
  GET_POKEMON_NAME,
  getPokemonName,
  GET_TYPE,
  getType,
  FILTER_API,
  filterApi,
  FILTER_DB,
  filterDb,
  RESET_POKE,
  resetPoke,
  ORDER_ATTACK,
  orderAttack,
  ORDER_NAME,
  orderName,
};
