import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon, getType } from "../../Redux/Actions/actions";
import style from "./form.module.css";
const Form = () => {
  const urlPokemon = "http://localhost:3001/pokemon";
  //Trago datos de redus para los type
  const dispacth = useDispatch();
  const types = useSelector((state) => state.type);
  const allPokemon = useSelector((state) => state.pokemon);
  console.log("imagen de los pokemones: ", allPokemon);

  useEffect(() => {
    dispacth(getType());
    dispacth(getPokemon());
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
  // ESTADO DE LA IMAGEN A SELECCIONAR
  const [selectImg, setSelectImg] = useState("");
  // seleccionar imagen del pokemon
  const changeImage = ({ target }) => {
    setSelectImg(target.value);
    setPokemon({
      ...pokemon,
      img: target.value,
    });
  };
  console.log("imagen del pokemon: ", pokemon.img);
  //Estado errores
  const [error, setError] = useState({});
  //Estado de types
  const [selectType, setSelectType] = useState([]);
  // Change inputs
  const changeInput = ({ target }) => {
    const { name, value } = target;
    // setError(validation({ ...pokemon, [name]: value }));
    setPokemon({ ...pokemon, [name]: value });
  };
  //CHANGE DE TYPES
  const changeTypes = ({ target }) => {
    setSelectType([...selectType, target.value]);
    setPokemon({
      ...pokemon,
      type: [...pokemon.type, target.value],
    });
    setError({ ...error, type: "" });
  };
  // REMOVER TYPES
  const removeTypes = (types) => {
    setSelectType(selectType.filter((t) => t !== types));
    setPokemon({
      ...pokemon,
      type: pokemon.type.filter((t) => t !== types),
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
        console.log("res: ", response);
        alert("Se creo el pokemon");
        console.log(pokemon);
        setPokemon({
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

        <select name="image" value={pokemon.img} onChange={changeImage}>
          <option>Select img</option>
          {allPokemon.map((p, index) => (
            <option key={index} value={p.img}>
              {p.img}
            </option>
          ))}
        </select>

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
          value={pokemon.type}
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
        {/*imgane seleccionada */}
        <div>
          <img src={selectImg} alt="imagen seleccionada" />
        </div>
        {/*LISTA DE TYPES SELECCIONADOS */}
        <div className={style.types}>
          {selectType.map((typeId) => {
            console.log("selectTypes: ", selectType);
            const ty = types.find((t) => t.name === typeId);
            console.log("types seleccionados: ", ty);
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

                <h3>{ty.name}</h3>
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

// (prevPokemon) => ({
//   ...prevPokemon,
//   type: [...prevPokemon.type, target.value],
// })
