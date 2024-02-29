import {
  FILTER_API,
  FILTER_DB,
  GET_POKEMON,
  GET_POKEMON_ID,
  GET_POKEMON_NAME,
  GET_TYPE,
  ORDER_ATTACK,
  ORDER_NAME,
  RESET_POKE,
  orderName,
} from "../Actions/actions";
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
      // case GET_POKEMON_NAME:
      return {
        ...state,
        filters: action.payload,
      };
    case GET_TYPE:
      return {
        ...state,
        type: action.payload,
      };
    case FILTER_API:
      return {
        ...state,
        filters: state.pokemon.filter((p) => p.source === "api"),
      };
    case FILTER_DB:
      return {
        ...state,
        filters: state.pokemon.filter((p) => p.source === "db"),
      };
    case RESET_POKE:
      return {
        ...state,
        filters: state.resetPokemon,
      };
    case ORDER_NAME:
      const order =
        action.payload === "A"
          ? state.pokemon.slice().sort((a, b) => {
              let first = a.name.toLowerCase();
              let second = b.name.toLowerCase();
              if (first > second) return 1;
              if (first < second) return -1;
              return 0;
            })
          : state.pokemon.slice().sort((a, b) => {
              let first = a.name.toLowerCase();
              let second = b.name.toLowerCase();
              if (first > second) return -1;
              if (first < second) return 1;
              return 0;
            });
      return { ...state, filters: order };
    case ORDER_ATTACK:
      const orderAttack =
        action.payload === "asc"
          ? state.pokemon.slice().sort((a, b) => {
              return b.attack - a.attack;
            })
          : state.pokemon.slice().sort((a, b) => {
              return a.attack - b.attack;
            });
      return {
        ...state,
        filters: orderAttack,
      };
    default:
      return state;
  }
};
console.log("FILTERS: ", initiaState.filters);

export default reducer;
