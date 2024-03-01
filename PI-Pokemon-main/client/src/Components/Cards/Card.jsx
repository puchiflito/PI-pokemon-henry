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
          <div className="pokemonType">
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
        </div>
      </Link>
    </div>
  );
};

export default Card;
