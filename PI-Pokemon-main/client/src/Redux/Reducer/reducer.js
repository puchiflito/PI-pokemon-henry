import { GET_POKEMON, GET_POKEMON_ID, GET_TYPE } from "../Actions/actions";
const initiaState = {
  pokemon: [],
  pokemonDetail: [],
  type: [],
  filters: [],
  order: [],
  resetPokemon: [],
};

const reducer = (state = initiaState, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
        filters: action.payload,
        order: action.payload,
        resetPokemon: action.payload,
      };
    case GET_POKEMON_ID:
      return {
        ...state,
        pokemonDetail: action.payload,
      };

      return {
        ...state,
        pokemon: [...state.pokemon, action.payload],
      };
    case GET_TYPE:
      return {
        ...state,
        type: action.payload,
      };
    default:
      return state;
  }
};
console.log("pokemon Detalle reducer: ", initiaState.pokemonDetail);

export default reducer;
