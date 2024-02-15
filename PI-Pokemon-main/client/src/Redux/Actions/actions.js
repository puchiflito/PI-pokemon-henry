const GET_POKEMON = "GET_POKEMON";

const getPokemon = () => {
  return async (dispatch) => {
    const res = await fetch("http://localhost:3001/pokemon");
    const data = await res.json();
    dispatch({
      type: GET_POKEMON,
      payload: data,
    });
  };
};

export { GET_POKEMON, getPokemon };
