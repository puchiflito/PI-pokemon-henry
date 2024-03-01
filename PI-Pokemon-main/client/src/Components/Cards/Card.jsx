import { Link } from "react-router-dom";
import style from "./card.module.css";
const Card = (props) => {
  return (
    <div className={style.pokemon}>
      <Link to={`/detail/${props.id}`}>
        <h3 className={style.name}>{props.name}</h3>

        <div className={style.detail}>
          <ul className={style.types}>
            {!props.type
              ? "Types"
              : props.type.map((types, index) => (
                  <ul className={`style.type ${types}`} key={index}>
                    {types}
                  </ul>
                ))}
          </ul>
          <img src={props.img} alt="imagen del pokemon" />
        </div>
      </Link>
    </div>
  );
};

export default Card;
