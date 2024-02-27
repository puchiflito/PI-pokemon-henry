import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPokemonID, getType } from "../../Redux/Actions/actions";

const Detail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemonDetail);
  const types = useSelector((state) => state.type);
  useEffect(() => {
    dispatch(getPokemonID(id));
    console.log("DISPATCH DE TYPES: ", dispatch(getType()));

    if (pokemons?.Types) dispatch(getType());
    console.log("dispatch del detalle: ", dispatch(getType()));
  }, [id, dispatch]);
  return (
    <div>
      Detail
      <div>
        <img src={pokemons.img} alt="image the pokemons" />
        <h3>ID: {pokemons.id}</h3>
        <h3>NAME: {pokemons.name}</h3>
        <h3>HEALTH: {pokemons.hp}</h3>
        <h3>ATTACK: {pokemons.attack}</h3>
        <h3>DEFENSE: {pokemons.defense}</h3>
        <h3>SPEED: {pokemons.speed}</h3>
        <h3>HEIGHT: {pokemons.height}</h3>
        <h3>WEIGHT: {pokemons.weight}</h3>
        <h3>
          TYPE:
          {
            <ul>
              {!pokemons.type
                ? "algo salio mal"
                : pokemons.type.map((types, index) => (
                    <ul key={index}>{types}</ul>
                  ))}
            </ul>
          }
        </h3>

        <h3>
          TYPES DESDE REDUX
          {
            <ul>
              {!types
                ? "algo salio mal"
                : types.map((type, index) => <ul key={index}>{type.name}</ul>)}
            </ul>
          }
        </h3>
      </div>
    </div>
  );
};

export default Detail;
