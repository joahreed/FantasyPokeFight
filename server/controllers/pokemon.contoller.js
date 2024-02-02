import Pokemon from '../models/pokemon.models.js';
// create new
async function createPokemon(req, res) {
    // create runs runValidators:true as a default
    try {
        const newPokemon = await Pokemon.create(req.body);
        // the javascript object we are sendng is essentially req.body
        res.json(newPokemon);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}
async function getAllPokemon(req, res) {
    try {
        const allPokemon = await Pokemon.find(); 
        res.json(allMeals);
    } catch (error) {
        console.log(error);
        res.status(400).json(error); 
    }
}
async function getOnePokemon(req, res) {
    try {
        const findPokemon = await Pokemon.findById(req.params.id);
        res.json(findPokemon);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}
async function updateOnePokemon(req, res) {
    const options = {
        new: true,
        runValidators: true,
    };
    try {
        const updatedPokemon = await Pokemon.findByIdAndUpdate(req.params.id, req.body, options);
        res.json(updatedPokemon);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}
async function deleteOnePokemon(req, res) {
    // console.log("test")
    try {
        const deletedPokemon = await Pokemon.findByIdAndDelete(req.params.id);
        res.json(deletedPokemon);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}





export {
    createPokemon, getAllPokemon, getOnePokemon, updateOnePokemon, deleteOnePokemon
};