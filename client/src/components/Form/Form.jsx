import { useEffect, useState, useRef } from "react";
import axios from "axios";
import styles from './Form.module.css'
import { useNavigate } from "react-router-dom";


const emptyPokemon = {
    name: "",
    sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png"
    },
    stats: [
        { base_stat: 0, stat: { name: "hp" } },
        { base_stat: 0, stat: { name: "attack" } },
        { base_stat: 0, stat: { name: "special-attack" } },
        { base_stat: 0, stat: { name: "defense" } },
        { base_stat: 0, stat: { name: "special-defense" } },
        { base_stat: 0, stat: { name: "speed" } },
    ],
};
function Form(props) {
    const { createButton } = props;
    const [trainerName, setTrainerName] = useState("");
    // const [pokemon, setPokemon ] = useState("");
    const [pokemonNames, setPokemonNames] = useState([]);
    const controller = useRef(new AbortController())
    const [team, setTeam] = useState([
        structuredClone(emptyPokemon),
        structuredClone(emptyPokemon),
        structuredClone(emptyPokemon),
        structuredClone(emptyPokemon),
        structuredClone(emptyPokemon),
    ]);
    // structuredClone() makes a deep copy of the object
    const navigate = useNavigate();

    const changeHandler = (e, i) => {
        console.log(e.target.value)
        if (e.target.value.length < 3) {
            setTeam((prevTeam) => {
                const newTeam = structuredClone(prevTeam)
                newTeam[i] = structuredClone(emptyPokemon)
                return newTeam
            })
            return
        }
        controller.current.abort()
        controller.current = new AbortController()
        axios.get("https://pokeapi.co/api/v2/pokemon/" + e.target.value, {signal: controller.current.signal})
            .then((res) => {
                console.log(res.data)
                setTeam((prevTeam) => {
                    const newTeam = structuredClone(prevTeam)
                    newTeam[i] = { name: res.data.name, sprites: res.data.sprites, stats: res.data.stats, moves: res.data.moves }
                    return newTeam
                })
            })
            .catch((err) => {
                console.log("XXXXXXXX", err)
                setTeam((prevTeam) => {
                    const newTeam = structuredClone(prevTeam)
                    newTeam[i] = structuredClone(emptyPokemon)
                    return newTeam
                })
            })
    };

    useEffect(() => {
        const storedTeam = localStorage.getItem("team")
        if (storedTeam) {
            setTeam(JSON.parse(storedTeam))
        }
        // axios.get("https://pokeapi.co/api/v2/pokemon/" + team[0].name)
        // .then((res) => {
        //     setTeam(res.data)
        // })  
        // .catch((err) => {
        //     axios.get("https://pokeapi.co/api/v2/pokemon/0")
        // })
    }, [])
    // localStorage can now be accessed in every page in my local browser
    const submitHandler = (e) => {
        e.preventDefault();
        localStorage.setItem("team", JSON.stringify(team));
    };

    // make a state to track value of each input
    // onChange for each input update each state and try to fetch pokemon from the api using axios. if it suceeds store the pokemon sprite and information in state. if it fails display a fallback pokemon object such as the questionmark.
    // onSubmit store the teams in local storage which should be a list of pokemon objects 
    // local storage for users to keep their created team
    // useEffect

    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <div>
                <label>Trainer Name:</label>
                <input type="text" data-name={trainerName} className={styles.inputBox} />
            </div>
            {team.map((eachPokemon, idx) => (
                <div className={`${styles.eachRow}`}>
                    <div className={styles.inputGroup}>
                        <label>Pokemon {idx + 1}:</label>
                        <input type="text" onChange={e => changeHandler(e, idx)} className={styles.inputBox} list="allPokemonNames" />
                    </div>
                    <img src={eachPokemon.sprites.front_default} alt={eachPokemon.name} className={styles.sprite} />
                    <div >
                        <p>{eachPokemon.name} </p>
                        {eachPokemon.stats.map((eachStat, idx) => {
                            return <p key={idx} className={styles.eachStat}>
                                {`${eachStat.stat.name} : ${eachStat.base_stat}`}
                            </p>
                        })}
                    </div>
                    {/* <button onClick={ {}}>Load</button> */}
                </div>
            ))}
            <datalist id="allPokemonNames">
                <option value={pokemonNames.name}></option>

            </datalist>
            <button className={`${styles.button} ${styles.clickShrink}`}>{createButton}</button>
        </form>
    )
}

export default Form