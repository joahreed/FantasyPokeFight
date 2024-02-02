import {model, Schema} from 'mongoose';
const PokemonSchema = new Schema(
    {
        trainerName: {
            type: String,
            required: [true, "Trainer name is required!"],
            minlength: [3, "Trainer name must be at least 3 characters long!"],
            maxlength: [20, "Trainer name must be less than 255 characters long!"]
        },
        Pokemon1: {
            type: String,
            required: [true, "Pokemon name is required!"],
            minlength: [3, "Pokemon name must be at least 3 characters long!"],
            maxlength: [20, "Pokemon name must be less than 255 characters long!"]
        },

    },
    { timestamps: true }
);
const Pokemon = model("Pokemon", PokemonSchema);
export default Pokemon;