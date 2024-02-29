import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon, getPokemonName } from "../../Redux/Actions/actions";
const SearchBar = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemon);
  const [poke, setPoke] = useState("");
  const change = ({ target }) => {
    setPoke(target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    if (!poke.length) {
      alert("No ingreso nada a buscar");
    } else {
      const pokemon = pokemons.find((p) => {
        return p.name.toLowerCase().includes(poke.toLowerCase());
      });

      if (pokemon) {
        dispatch(getPokemonName(poke));
      }
    }
  };
  useEffect(() => {
    dispatch(getPokemon);
  }, [dispatch]);
  return (
    <div>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Search pokemon...."
          value={poke}
          onChange={change}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
