import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <div>
      <Link to={`/detail/${props.id}`}></Link>
      <img src={props.img} alt="imagen del pokemon" />
      <h3>{props.name}</h3>
      <p>{props.type}</p>
    </div>
  );
};

export default Card;
