const GET_POKEMON = "GET_POKEMON";
const GET_POKEMON_ID = "GET_POKEMON_ID";

const GET_TYPE = "GET_TYPE";
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
      console.log("ERROR: ", error);
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

const getType = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(urlTypes);
      const data = await res.json();
      console.log("ESTO ES DESDE EL REDUX ", data);
      dispatch({
        type: GET_TYPE,
        payload: data,
      });
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };
};

export {
  GET_POKEMON,
  getPokemon,
  GET_POKEMON_ID,
  getPokemonID,
  GET_TYPE,
  getType,
};
