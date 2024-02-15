import { GET_POKEMON } from "../Actions/actions";
const initiaState = {
  pokemon: [],
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
        resetPokemon: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
