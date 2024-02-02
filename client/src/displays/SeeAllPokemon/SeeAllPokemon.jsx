import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from './SeeAllPokemon.module.css';
import axios from 'axios';
import { Link } from "react-router-dom";

function SeeAllPokemon(props) {
    // const {id} = useParams();
    const [pokeData, setPokeData] = useState([]);
    // setPokeData should now be a list of objects with the pokemon data


    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=16')
        // &offset=15
            .then(show => {
                const pokeList = show.data.results
                // show is the response of the list of objects
                return Promise.all(pokeList.map(poke => axios.get(poke.url)))
                // Promise.all is making sure you get everything from the api before continuing
            })
            .then(res => {
                setPokeData(res.map(poke => poke.data))
            })
            // console.log(setPokeData(show.data.results))
            .catch()
    }, []);
    // WHILE TESTING LIMIT IT TO 20 POKEMON AND CHANGE IT LATER WHEN IT WORKS
    if (!pokeData) return <h1>Loading...</h1>
    // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png
    return (
        <div className={styles.color}>
            <Navbar
                title={"See All The Pokemon"}
                color="#FFDE00"
            />
            <ul className={styles.list}>
                {
                    pokeData.map(poke => (
                        <li key={poke.name}>
                            <div className={styles.allPokemon}>
                                <img src={poke.sprites.front_default} alt={poke.name} className={styles.spriteSize} />
                                <div className={styles.allStats}>
                                    <h3>{poke.name}</h3>
                                    {poke?.stats?.map((eachStat, idx) => {
                                        return <p key={idx} className={styles.eachStat}>
                                            {`${eachStat.stat.name} : ${eachStat.base_stat}`}
                                        </p>
                                    })}
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
            {/* <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="" /> */}
            <div className={`${styles.pagination}`}>
                <a href="#">&laquo;</a>
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#">&raquo;</a>
            </div>
        </div>
    )
}

export default SeeAllPokemon