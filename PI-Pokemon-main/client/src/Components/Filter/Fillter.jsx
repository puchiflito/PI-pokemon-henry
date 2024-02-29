import React from "react";
import { useDispatch } from "react-redux";
import {
  filterApi,
  filterDb,
  orderAttack,
  orderName,
  resetPoke,
} from "../../Redux/Actions/actions";

const Fillter = () => {
  const dispatch = useDispatch();
  const filterForApi = () => {
    dispatch(filterApi());
  };
  const filterForDb = () => {
    dispatch(filterDb());
  };
  const resetPokemon = () => {
    dispatch(resetPoke());
  };
  const orderNameA = ({ target }) => {
    dispatch(orderName(target.value));
  };
  const orderAttackPoke = ({ target }) => {
    dispatch(orderAttack(target.value));
  };
  return (
    <div>
      <button onClick={filterForApi}>Filter for Api</button>
      <button onClick={filterForDb}>Filter for DB</button>
      <button onClick={resetPokemon}>Reset Pokemons</button>
      <button value="A" onClick={orderNameA}>
        Order Name A - Z
      </button>
      <button value="Z" onClick={orderNameA}>
        Order Name Z - A
      </button>
      <button value="asc" onClick={orderAttackPoke}>
        Order Attack ASC
      </button>

      <button value="des" onClick={orderAttackPoke}>
        Order Attack DES
      </button>
    </div>
  );
};

export default Fillter;
