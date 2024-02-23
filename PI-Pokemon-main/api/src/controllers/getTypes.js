const { Type } = require("../db");
const urlApi = "https://pokeapi.co/api/v2/type";

const dataApi = async (data) => {
  // console.log("estoy en la funcion de recolectar datso", data.results);
  const types = await data.results.map((type) => {
    return { name: type.name };
  });
  return types;
};
const loadTypesDb = async () => {
  try {
    const response = await fetch(urlApi);
    const data = await response.json();
    const typesData = await dataApi(data);
    // console.log("estoy viendo que info me llega aca", typesData);
    const typesDbTrue = await Type.findAll();
    console.log("que tipo de dato es: ", typeof typesDbTrue);
    if (typesDbTrue.length <= 0) {
      await Type.bulkCreate(typesData);
      return console.log("Datos cargados");
    } else {
      return console.log("Los datos ya estan cargados");
    }
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

const getTypes = async (req, res) => {
  try {
    const types = await Type.findAll();
    // if (types.length === 0) {
    //   const response = await fetch("https://pokeapi.co/api/v2/type");
    //   const data = await response.json();
    //   const type = data.results.map((t) => {
    //     return { id: t.id, name: t.name };
    //   });
    //   res.json(type);
    // }
    res.status(200).json(types);
  } catch (error) {
    return "ERROR: " + error;
  }
};

module.exports = { getTypes, loadTypesDb };
