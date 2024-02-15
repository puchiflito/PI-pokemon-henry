const { Router } = require("express");
const {
  getDB,
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
router.get("/pokemon", getDB);
router.get("/pokemon/", getName);
router.get("/pokemon/:id", getId);
router.get("/type", getTypes);
router.post("/pokemon", postPokemon);
module.exports = router;
