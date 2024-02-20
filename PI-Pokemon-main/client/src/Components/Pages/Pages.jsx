import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../../Redux/Actions/actions";

const Pages = () => {
  const pokemons = useSelector((state) => state.pokemon);

  return (
    <div>
      {pokemons.map((p, index) => (
        <h2 key={index}>{p.name}</h2>
      ))}
    </div>
  );
};

export default Pages;
