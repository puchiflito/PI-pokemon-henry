const { Router } = require("express");
const {
  getPokemon,
  getId,
  getName,
  getTypes,
  postPokemon,
} = require("../controllers/index.controllers");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/pokemon/n", getName);
router.get("/pokemon", getPokemon);
router.get("/pokemon/:id", getId);
router.get("/type", getTypes);
router.post("/pokemon", postPokemon);
module.exports = router;
