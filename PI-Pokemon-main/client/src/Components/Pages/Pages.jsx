import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../../Redux/Actions/actions";

const Pages = () => {
  const pokemons = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  console.log(pokemons);
  useEffect(() => {
    console.log(dispatch(getPokemon()));
  }, []);

  return (
    <div>
      {pokemons.map((p, index) => (
        <h2 key={index}>{p.name}</h2>
      ))}
    </div>
  );
};

export default Pages;
