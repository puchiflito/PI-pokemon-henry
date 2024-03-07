import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPokemonID, getType } from "../../Redux/Actions/actions";
import style from "./detail.module.css";

const Detail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemonDetail);
  const types = useSelector((state) => state.type);
  const getTypePoke = (type) => {
    return style[type.toLowerCase()];
  };
  useEffect(() => {
    dispatch(getPokemonID(id));
    console.log("DISPATCH DE TYPES: ", dispatch(getType()));

    if (pokemons?.Types) dispatch(getType());
    console.log("dispatch del detalle: ", dispatch(getType()));
  }, [id, dispatch]);
  return (
    <div className={style.pokemon}>
      Detail
      <div className={style.image}>
        <img src={pokemons.img} alt="image the pokemons" />
      </div>
      <div className={style.pokemonInfo}>
        <h3 className={style.id}>ID: {pokemons.id}</h3>
        <h3 className={style.name}>NAME: {pokemons.name}</h3>
      </div>
      <div className={style.stats}>
        <h3 className={style.stat}>HEALTH: {pokemons.hp}</h3>
        <h3 className={style.stat}>ATTACK: {pokemons.attack}</h3>
        <h3 className={style.stat}>DEFENSE: {pokemons.defense}</h3>
        <h3 className={style.stat}>SPEED: {pokemons.speed}</h3>
        <h3 className={style.stat}>HEIGHT: {pokemons.height}</h3>
        <h3 className={style.stat}>WEIGHT: {pokemons.weight}</h3>
      </div>
      <div className={style.pokemonType}>
        <h3>
          TYPE:
          {pokemons.type && (
            <div className="pokemonType">
              <ul className={style.types}>
                {pokemons.type.map((type, index) => (
                  <li className={getTypePoke(type)} key={index}>
                    {type}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* Mostrar tipos si está presente "Types" */}
          {pokemons.Types && (
            <div className="pokemonType">
              <ul className={style.types}>
                {pokemons.Types.map((type, index) => (
                  <li className={getTypePoke(type.name)} key={index}>
                    {type.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </h3>
      </div>
    </div>
  );
};

export default Detail;
