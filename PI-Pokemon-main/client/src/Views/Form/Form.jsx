import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getType } from "../../Redux/Actions/actions";
import style from "./form.module.css";
const Form = () => {
  const urlPokemon = "http://localhost:3001/pokemon";
  //Trago datos de redus para los type
  const dispacth = useDispatch();
  const types = useSelector((state) => state.type);
  console.log(types);
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
    types: [],
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
    setPokemon((prevPokemon) => ({
      ...prevPokemon,
      types: [...prevPokemon.types, target.value],
    }));
    setError({ ...error, type: "" });
  };
  // REMOVER TYPES
  const removeTypes = (types) => {
    setType(type.filter((t) => t !== types));
    setPokemon({
      ...pokemon,
      types: pokemon.types.filter((t) => t !== types),
    });
  };
  // ordenar
  const compareTypes = (a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  };
  //ENVIAR DATOS
  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(urlPokemon, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pokemon),
      });
      if (response.ok) {
        alert("Se creo el pokemon");
        setPokemon({
          name: "",
          img: "",
          hp: "",
          attack: "",
          defense: "",
          speed: "",
          height: "",
          weight: "",
          types: [],
        });
      } else {
        throw new Error("Error al cargar el pokemon");
      }
    } catch (error) {
      alert("ERROR: ", error);
    }
  };
  return (
    <div>
      Form
      <form onSubmit={submit} className={style.form}>
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
        <select
          name="type"
          value={pokemon.types}
          onChange={changeTypes}
          multiple
          className={style.types}
        >
          <option disabled>Select Types</option>
          {types.sort(compareTypes).map((type, index) => (
            <option key={index} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>

        <div className={style.types}>
          {type.map((typeId) => {
            const ty = types.find((t) => t.id === typeId);
            return (
              <div key={typeId}>
                <div>
                  <button
                    className={style.btn}
                    onClick={() => removeTypes(typeId)}
                  >
                    Delete
                  </button>
                </div>

                <h3>{types.name}</h3>
              </div>
            );
          })}
        </div>

        <button className={style.btn}>Save</button>
      </form>
    </div>
  );
};

export default Form;
