import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPokemonID, getType } from "../../Redux/Actions/actions";

const Detail = () => {
  const { id } = useParams();
  console.log("id del params", id);
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemon);
  useEffect(() => {
    dispatch(getPokemonID(id));
    console.log("id del dispatch", dispatch(getPokemonID(id)));
    if (pokemons?.Type) dispatch(getType());
  }, [id, dispatch]);
  return (
    <div>
      Detail
      <div>
        <img src={pokemons.img} alt="image the pokemons" />
        <h3>{pokemons.id}</h3>
        <h3>{pokemons.name}</h3>
        <h3>{pokemons.hp}</h3>
        <h3>{pokemons.attack}</h3>
        <h3>{pokemons.defense}</h3>
        <h3>{pokemons.speed}</h3>
        <h3>{pokemons.height}</h3>
        <h3>{pokemons.weight}</h3>
      </div>
    </div>
  );
};

export default Detail;
