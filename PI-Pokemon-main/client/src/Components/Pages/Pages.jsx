import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../../Redux/Actions/actions";
import Pagination from "./Pagination";
import Cards from "../Cards/Cards";

const Pages = () => {
  const dispacth = useDispatch();
  const pokemons = useSelector((state) => state.pokemon);
  console.log(pokemons);

  useEffect(() => {
    dispacth(getPokemon());
  }, []);
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
