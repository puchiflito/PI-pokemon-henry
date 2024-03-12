import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterApi,
  filterDb,
  filterType,
  getType,
  orderAttack,
  orderName,
  resetPoke,
} from "../../Redux/Actions/actions";
import style from "./filter.module.css";
const Fillter = () => {
  const dispatch = useDispatch();
  const Types = useSelector((state) => state.type);

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

  const filterTypes = (e) => {
    console.log("type: ", e.target.value);
    dispatch(filterType(e.target.value));
  };
  useEffect(() => {
    dispatch(getType());
  }, [dispatch]);
  return (
    <div className={style.nav}>
      <ul className={style.navList}>
        <li className={style.navItem}>
          <button className={style.btn} onClick={filterForApi}>
            Filter for Api
          </button>
        </li>
        <li className={style.navItem}>
          <button className={style.btn} onClick={filterForDb}>
            Filter for DB
          </button>
        </li>
        <li className={style.navItem}>
          <button className={style.btn} onClick={resetPokemon}>
            Reset Pokemons
          </button>
        </li>
        <li className={style.navItem}>
          <button value="A" className={style.btn} onClick={orderNameA}>
            Order Name A - Z
          </button>
        </li>
        <li className={style.navItem}>
          {" "}
          <button value="Z" className={style.btn} onClick={orderNameA}>
            Order Name Z - A
          </button>
        </li>
        <li className={style.navItem}>
          {" "}
          <button value="asc" className={style.btn} onClick={orderAttackPoke}>
            Order Attack ASC
          </button>
        </li>
        <li className={style.navItem}>
          <button value="des" className={style.btn} onClick={orderAttackPoke}>
            Order Attack DES
          </button>
        </li>
        {/* <li className={style.navItem}>
          <button onClick={() => filterTypes("fire")}>Fire</button>
        </li> */}
      </ul>
      <select onChange={(t) => filterTypes(t)}>
        <option value="all">ALL types</option>
        {Types.map((t, index) => (
          <option key={index} value={t.name}>
            {t.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Fillter;
