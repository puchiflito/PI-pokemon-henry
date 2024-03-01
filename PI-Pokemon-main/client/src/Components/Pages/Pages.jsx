import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon, getType } from "../../Redux/Actions/actions";
import Pagination from "./Pagination";
import Cards from "../Cards/Cards";
import Fillter from "../Filter/Fillter";
import style from "./page.module.css";
import portada from "../../assets/logo.png";

const Pages = () => {
  const dispacth = useDispatch();
  const pokemons = useSelector((state) => state.filters);
  const types = useSelector((state) => state.type);
  console.log(types);
  console.log("pokemons del arreglo filters: ", pokemons);

  useEffect(() => {
    dispacth(getPokemon());
    dispacth(getType());
  }, [dispacth]);
  const [limiteDeDatos, setLimiteDeDatos] = useState(12);
  const [paginaActual, setPaginaActual] = useState(1);
  const indiceFinal = paginaActual * limiteDeDatos;
  const indiceInicial = indiceFinal - limiteDeDatos;
  const nPokemons = Array.isArray(pokemons)
    ? pokemons.slice(indiceInicial, indiceFinal)
    : [];

  const nPage = Math.ceil(pokemons.length / limiteDeDatos);
  return (
    <div className={style.content}>
      <div className={style.logoContent}>
        <img className={style.logo} src={portada} alt="portada de la pokedex" />
      </div>
      <Fillter />
      <Pagination
        setPaginaActual={setPaginaActual}
        paginaActual={paginaActual}
        nPage={nPage}
      />
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
