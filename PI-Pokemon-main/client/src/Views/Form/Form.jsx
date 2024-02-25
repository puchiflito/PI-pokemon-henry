import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getType } from "../../Redux/Actions/actions";
const Form = () => {
  //Trago datos de redus para los type
  const dispacth = useDispatch();
  const types = useSelector((state) => state.type);
  useEffect(() => {
    dispacth(getType());
  }, [dispacth]);
  // Estado Pokemon
  const [pokemon, setPokemon] = useState({
    name: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    type: [],
  });
  //Estado errores
  const [error, setError] = useState({});
  //Estado de types
  const [type, setType] = useState([]);
  // Change inputs
  const changeInput = ({ target }) => {
    const { name, value } = target;
    // setError(validation({ ...pokemon, [name]: value }));
    setPokemon({ ...pokemon, [name]: value });
  };
  //CHANGE DE TYPES
  const changeTypes = ({ target }) => {
    setType([...type, target.value]);
    setPokemon({
      ...pokemon,
      type: [...setPokemon.type, target.value],
    });
    setError({ ...error, type: "" });
  };
  // REMOVER TYPES
  const removeTypes = (type) => {
    setType(type.filter((t) => t !== type));
    setPokemon({
      ...pokemon,
      type: pokemon.type.filter((t) => t !== type),
    });
  };
  //ENVIAR DATOS
  const submit = async (pokemon) => {
    error.preventDefault();
    try {
    } catch (error) {
      alert("ERROR: ", error);
    }
  };
  return (
    <div>
      Form
      <form onSubmit={submit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" onChange={changeInput} />
        <label htmlFor="image">Image</label>
        <input type="text" name="image" onChange={changeInput} />
        <label htmlFor="hp">Health</label>
        <input type="number" name="hp" onChange={changeInput} />
        <label htmlFor="attack">Attack</label>
        <input type="number" name="attack" onChange={changeInput} />
        <label htmlFor="defense">Defense</label>
        <input type="number" name="defense" onChange={changeInput} />
        <label htmlFor="speed">Speed</label>
        <input type="number" name="speed" onChange={changeInput} />
        <label htmlFor="height">Height</label>
        <input type="number" name="height" onChange={changeInput} />
        <label htmlFor="weight">Weight</label>
        <input type="number" name="weight" onChange={changeInput} />
        <label htmlFor="type">Type</label>
        <input type="text" name="type" />
        <button>Save</button>
      </form>
    </div>
  );
};

export default Form;
