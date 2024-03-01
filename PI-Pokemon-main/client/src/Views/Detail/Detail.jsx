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
  useEffect(() => {
    dispatch(getPokemonID(id));
    console.log("DISPATCH DE TYPES: ", dispatch(getType()));

    if (pokemons?.Types) dispatch(getType());
    console.log("dispatch del detalle: ", dispatch(getType()));
  }, [id, dispatch]);
  return (
    <div>
      Detail
      {/* <div>
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
      </div> */}
      <div className={style.pokedex}>
        <div className={style.left}>
          <div className={style.logo}></div>
          <div className={style.bg_curve1_left}></div>
          <div className={style.bg_curve2_left}></div>
          <div className={style.curve1_left}>
            <div className={style.buttonGlass}>
              <div className={style.reflect}> </div>
            </div>
            <div className={style.miniButtonGlass1}></div>
            <div className={style.miniButtonGlass2}></div>
            <div className={style.miniButtonGlass3}></div>
          </div>
          <div className={style.curve2_left}>
            <div className={style.junction}>
              <div className={style.junction1}></div>
              <div className={style.junction2}></div>
            </div>
          </div>
          <div className={style.screen}>
            <div className={style.topPicture}>
              <div className={style.buttontopPicture1}></div>
              <div className={style.buttontopPicture2}></div>
            </div>
            <div className={style.picture}>
              <img src={pokemons.img} alt="" height="170" />
            </div>
            <div className={style.buttonbottomPicture}></div>
            <div className={style.speakers}>
              <div className={style.sp}></div>
              <div className={style.sp}></div>
              <div className={style.sp}></div>
              <div className="sp"></div>
            </div>
          </div>
          <div className={style.bigbluebutton}></div>
          <div className={style.barbutton1}></div>
          <div className={style.barbutton2}></div>
          <div className={style.cross}>
            <div className={style.leftcross}>
              <div className={style.leftT}></div>
            </div>
            <div className={style.topcross}>
              <div className={style.upT}></div>
            </div>
            <div className={style.rightcross}>
              <div className={style.rightT}></div>
            </div>
            <div className={style.midcross}>
              <div className={style.midCircle}></div>
            </div>
            <div className={style.botcross}>
              <div className={style.downT}></div>
            </div>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.stats}>
            <strong>Name:</strong> {pokemons.name}
            <br />
            <strong>Health: </strong>
            {pokemons.hp}
            <br />
            <strong>Attack: </strong>
            {pokemons.attack}
            <br />
            <strong>Defense: </strong>
            {pokemons.defense}
            <br />
            <strong>Speed: </strong>
            {pokemons.speed}
            <br />
            <strong>Type:</strong>{" "}
            {
              <ul>
                {!pokemons.type
                  ? "algo salio mal"
                  : pokemons.type.map((types, index) => (
                      <ul key={index}>{types}</ul>
                    ))}
              </ul>
            }
            <br />
            <strong>Height:</strong> {pokemons.height}
            <br />
            <strong>Weight:</strong> {pokemons.weight}
            <br />
            <strong></strong>
            <br />
          </div>

          <div className={style.miniButtonGlass4}></div>
          <div className={style.miniButtonGlass5}></div>
          <div className={style.barbutton3}></div>
          <div className={style.barbutton4}></div>
          <div className={style.yellowBox1}></div>
          <div className={style.yellowBox2}></div>
          <div className={style.bg_curve1_right}></div>
          <div className={style.bg_curve2_right}></div>
          <div className={style.curve1_right}></div>
          <div className={style.curve2_right}></div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Detail;
