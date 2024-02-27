import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon, getType } from "../../Redux/Actions/actions";
import Pagination from "./Pagination";
import Cards from "../Cards/Cards";

const Pages = () => {
  const dispacth = useDispatch();
  const pokemons = useSelector((state) => state.pokemon);
  const types = useSelector((state) => state.type);
  console.log(types);
  console.log(pokemons);

  useEffect(() => {
    dispacth(getPokemon());
    dispacth(getType());
  }, [dispacth]);
  const [limiteDeDatos, setLimiteDeDatos] = useState(12);
  const [paginaActual, setPaginaActual] = useState(1);
  const indiceFinal = paginaActual * limiteDeDatos;
  const indiceInicial = indiceFinal - limiteDeDatos;
  const nPokemons = pokemons.slice(indiceInicial, indiceFinal);
  const nPage = Math.ceil(pokemons.length / limiteDeDatos);
  return (
    <div>
      <Cards nPokemons={nPokemons} />
      <Pagination
        setPaginaActual={setPaginaActual}
        paginaActual={paginaActual}
        nPage={nPage}
      />
    </div>
  );
};

export default Pages;
