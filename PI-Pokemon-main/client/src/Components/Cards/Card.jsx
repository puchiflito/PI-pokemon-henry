import { Link } from "react-router-dom";
import style from "./card.module.css";
const Card = (props) => {
  const getTypePoke = (type) => {
    // if (type.toLowerCase() === "fire") {
    //   return style.fire;
    // }
    return style[type.toLowerCase()];
  };
  return (
    <div className={style.pokemon}>
      <Link to={`/detail/${props.id}`}>
        <div className={style.image}>
          <img src={props.img} alt={props.name} />
        </div>
        <div className={style.pokemonInfo}>
          <div className="pokemonNombre">
            <h2 className={style.name}>{props.name}</h2>
          </div>
          {/* Mostrar tipos si está presente "type" */}
          {props.type && (
            <div className="pokemonType">
              <ul className={style.types}>
                {props.type.map((type, index) => (
                  <li className={getTypePoke(type)} key={index}>
                    {type}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Mostrar tipos si está presente "Types" */}
          {props.Types && (
            <div className="pokemonType">
              <ul className={style.types}>
                {props.Types.map((type, index) => (
                  <li className={getTypePoke(type.name)} key={index}>
                    {type.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* <div className="pokemonType">
            <ul className={style.types}>
              {!props.type
                ? "Types"
                : props.type.map((types, index) => (
                    <li className={getTypePoke(types)} key={index}>
                      {types}
                    </li>
                  ))}
            </ul>
          </div>

          <div className="pokemonType">
            <ul className={style.types}>
              {!props.Types
                ? "Types"
                : props.Types.map((type, index) => (
                    <li key={index}>{type.name}</li>
                  ))}
            </ul>
          </div> */}
        </div>
      </Link>
    </div>
  );
};

export default Card;
