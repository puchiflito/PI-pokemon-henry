const validation = (pokemon) => {
  const error = {};
  if (!pokemon.name) {
    error.name = "El nombre es requerido";
  } else if (!/^[^\d]*$/.test(pokemon.name))
    error.name = "El nombre no puede contener numeros";

  !pokemon.hp ? (error.hp = "Campo requerido") : "";

  !pokemon.attack ? (error.attack = "Campo requerido") : "";
  !pokemon.defense ? (error.defense = "Campo requerido") : "";
  !pokemon.speed ? (error.speed = "Cmpo requerido") : "";
  !pokemon.height ? (error.height = "Campo requerido") : "";
  !pokemon.weight ? (error.weight = "Campo requrido") : "";
  !pokemon.type.length >= 0 ? (error.type = "Tambien es opcional") : "";
  return error;
};
export default validation;

// name: "",
//     img: "",
//     hp: "",
//     attack: "",
//     defense: "",
//     speed: "",
//     height: "",
//     weight: "",
//     type: [],
