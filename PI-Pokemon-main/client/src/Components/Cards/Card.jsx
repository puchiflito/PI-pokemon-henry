import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <div>
      <Link to={`/detail/${props.id}`}>
        <img src={props.img} alt="imagen del pokemon" />
        <h3>{props.name}</h3>
        <ul>
          {props.type.map((types, index) => (
            <ul key={index}>{types}</ul>
          ))}
        </ul>
      </Link>
    </div>
  );
};

export default Card;
