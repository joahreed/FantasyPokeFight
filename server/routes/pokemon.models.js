import { Router } from "express";
import { createPokemon, getAllPokemon, getOnePokemon, updateOnePokemon, deleteOnePokemon } from "../controllers/pokemon.controller.js";
const router = Router();

router.route("/pokemon")
    .post(createPokemon)
    .get(getAllPokemon)

router.route("/pokemons/:id")
    .get(getOnePokemon)
    .put(updateOnePokemon)
    .delete(deleteOnePokemon)


export default router;