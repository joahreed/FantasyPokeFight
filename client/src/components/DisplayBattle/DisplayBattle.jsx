import styles from './DisplayBattle.module.css'
import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import gymLeadersTeam from '../../data/GymLeaders';
import displayGymLeadersPokemon from '../../data/DisplayGymLeadersPokemon'
import axios from 'axios'

const randomizer = (list, amount) => {
    if (list.length == 0) {
        return []
    }
    const randomArray = []
    const chosenIdx = []
    while (amount > 0) {
        const randomIdx = Math.floor(Math.random() * list.length);
        if (!chosenIdx.includes(randomIdx)) {
            chosenIdx.push(randomIdx)
            amount--;
            randomArray.push(list[randomIdx])
        }
    }
    return randomArray
};
// needs a list and a amount for parameters
// cannot pop in jsx maybe splice?
// get random number from 0 to the end of the list excluding the 0th index
function DisplayBattle() {

    // use localStorage to grab the first pokemon to display its back_default sprite 
    // use state for the whole team
    // another state for the index of the currently active pokemon
    // state for the health of the currently active pokemon
    // use state for the moves and somehow make a random move generator pick random moves to display the moves from our localStorage 
    // for the currently active pokemon
    // back_default for back sprites
    // make a useEffect to display the pokemon of the enemy gymleader
    // iterate through each list and populate each one.
    const [wholeTeam, setWholeTeam] = useState(JSON.parse(localStorage.getItem("team")) ?? []);
    const [currentPokeIdx, setCurrentPokeIdx] = useState(0);
    const [health, setHealth] = useState(wholeTeam[currentPokeIdx].stats[0].base_stat);
    // const [randomMoves] = useState(randomizer(wholeTeam[currentPokeIdx].moves, 4));
    const randomMoves = useRef(randomizer(wholeTeam[currentPokeIdx].moves, 4))
    const { name } = useParams();
    const [gymLeaderTeam, setGymLeaderTeam] = useState([]);
    const [currentGymLeaderIdx, setCurrentGymLeaderIdx] = useState(0);
    const [gymLeaderHealth, setGymLeaderHealth] = useState(gymLeaderTeam[currentGymLeaderIdx]?.stats[0]?.base_stat);
    // derived state 
    // when the state changes the derived state changes
    const gymRandomMoves = useRef(randomizer(gymLeaderTeam[currentGymLeaderIdx]?.moves ?? [], 4));
    const [trainersTurn, setTrainersTurn] = useState(true);
    const [isGameOver, setIsGameOver] = useState(false)
    const modalRef = useRef(null)
    // maybe implement mvp2 add a component that adds all the states for one team and pass through props for refactoring

    const navigate = useNavigate()

    useEffect(() => {
        const gymLeadersPokemonList = displayGymLeadersPokemon[name]
        Promise.all(gymLeadersPokemonList.map(poke => axios.get('https://pokeapi.co/api/v2/pokemon/' + poke)))
            // promise.all is a function that takes in a array of promises
            // map is a array function 
            // poke is name because we set displayGymLeadersPokemon to be a array of names 
            .then(res => {
                setGymLeaderTeam(res.map(poke => poke.data))
                setGymLeaderHealth(res[0].data.stats[0].base_stat)
            })
            // console.log(setPokeData(show.data.results))
            .catch(err => {
                console.log(err)
            })
        // console.log(randomMoves.current)
        // Promise.all(randomMoves.current.map(move => axios.get(move.move.url)))
        //     .then(res => {
        //         console.log(res)
        //         randomMoves.current = res.map(move => move.data)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
        // current is our list of moves
        // move is each move at the index
        // each move object has a name and url, url is what we are targeting
    }, []);
    useEffect(() => {
        if (!trainersTurn) {
            battle(gymRandomMoves[0])
        }
    }, [trainersTurn])
    // useEffect(() => {
    //     if(currentGymLeaderIdx === gymLeaderTeam.length){

    //         alert("You have won. Try another battle")
    //     }
    // }, [currentGymLeaderIdx])
    // useEffect needs to take in a dependency array the value is what the useEffect relies on
    // maybe make another useEffect with the current teams index when it hits the last pokemon display a message on the dom?
    useEffect(() => {
        if (isGameOver && (health == 0 || gymLeaderHealth == 0)) {
            setTimeout(() => {
                // if (window.confirm(`You have ${trainersTurn ? "lost" : "won"} the game`)) {
                //     navigate("/")
                // }
                // else {
                //     navigate("/campaign")
                // }
                modalRef.current.showModal()
            }, 10)
            // waits 10 milliseconds 
            // setTimeout uses a argument which is time before it ends the function
        }
    }, [isGameOver])
    // console.log(gymLeaderHealth)

    const battle = (trainerMove) => {
        const dmg = 10
        // const dmg = trainerMove.power
        // console.log(trainerMove)
        // console.log(trainersTurn, health, gymLeaderHealth)
        if (trainersTurn == true) {
            setGymLeaderHealth((enemyPreviousHp) => {
                if (enemyPreviousHp - dmg <= 0) {
                    const randomIdx = currentGymLeaderIdx + 1;
                    if (randomIdx == gymLeaderTeam.length) {
                        setIsGameOver("won")
                        return 0
                    }
                    // setGymLeaderTeam((previousGymLeaderTeam) => {
                    //     const newGymLeaderTeam = structuredClone(previousGymLeaderTeam)
                    //     newGymLeaderTeam.splice(currentGymLeaderIdx, 1)
                    //     return newGymLeaderTeam
                    // })
                    setCurrentGymLeaderIdx(randomIdx)
                    gymRandomMoves.current = randomizer(gymLeaderTeam[randomIdx].moves, 4)
                    return gymLeaderTeam[randomIdx].stats[0].base_stat
                }
                return enemyPreviousHp - dmg
            })
        }
        else {
            setHealth((previousHp) => {
                if (previousHp - dmg <= 0) {
                    const randomIdx = currentPokeIdx + 1;
                    if (randomIdx == wholeTeam.length) {
                        setIsGameOver("lost")
                        return 0
                    }
                    setCurrentPokeIdx(randomIdx)
                    randomMoves.current = randomizer(wholeTeam[randomIdx].moves, 4)
                    return wholeTeam[randomIdx].stats[0].base_stat
                }
                return previousHp - dmg
            })
        }
        setTrainersTurn(currentTurn => !currentTurn)
        // flipping the boolean
    };
    const plzwork = () => battle(move)

    // Math.floor(Math.random() * (gymLeaderTeam.length -1))

    if (!gymLeaderTeam.length) {
        return <h1>Loading...</h1>
    }
    // useEffect runs on page load and the rest of the code happens before the axios fetch finishes
    // all the data we want to access doesnt load yet 
    // the if(! gymLeaderTeam.length) displays loading while the data is getting fetched until it loads
    // need that if statement anytime we use useEffect loaded into the dom 
    return (
        <div className={styles.content}>
            <div className={styles.topTrainer}>
                <div className={styles.info}>
                    <h1 className={styles.eachPokeName}>{gymLeaderTeam[currentGymLeaderIdx].name}</h1>
                    <div className='flex'>
                        <label htmlFor="EnemyHp">HP:</label>
                        <progress id="EnemyHp" max={gymLeaderTeam[currentGymLeaderIdx].stats[0].base_stat} value={gymLeaderHealth}></progress>
                    </div>
                    {/* {gymLeaderTeam[currentGymLeaderIdx].stats[0].base_stat}
                    <br/>
                    {gymLeaderHealth} */}
                </div>
                <img src={gymLeaderTeam[currentGymLeaderIdx].sprites.front_default} alt="" className={styles.topPokemon} />
            </div>
            <div className={styles.bottomTrainer}>
                <div className={styles.info}>
                    <h1 className={styles.eachPokeName}>{wholeTeam[currentPokeIdx].name}</h1>
                    <label htmlFor="HP">HP:</label>
                    <progress id="HP" max={wholeTeam[currentPokeIdx].stats[0].base_stat} value={health}>100%</progress>
                    {/* {wholeTeam[currentPokeIdx].stats[0].base_stat}
                    <br/>
                    {health} */}
                </div>
                {/* {wholeTeam.map((currentPokemon, idx) => ( */}
                <img src={wholeTeam[currentPokeIdx].sprites.back_default} alt="" className={styles.bottomPokemon} />
                {/* ))} */}
                {/* <div className={styles.clickables}> */}
                <div className={styles.moves}>
                    {
                        randomMoves.current.map((move, idx) => (
                            // refs work by accessing .current
                            <button key={idx} className={`${styles.button} ${styles.clickShrink}`} onClick={() => battle(move)}>{move?.move?.name}</button>
                        ))
                    }
                </div>
                {/* <div className={styles.options}>
                        <button className={`${styles.button} ${styles.clickShrink}`}>Choose Pokemon</button>
                        <button className={`${styles.button} ${styles.clickShrink}`}>Surrender</button>
                    </div> */}
                {/* </div> */}
            </div>
            <dialog ref={modalRef} className={styles.modal}>
                <button onClick={() => navigate('/campaign')} autoFocus className={styles.modalButton}>Try Again?</button>
                <button onClick={() => navigate('/')} className={styles.modalButton}>Go Back Home</button>
                <p className={styles.modalText}>You have {isGameOver} the game!</p>
                {/* you can only have auto focus on in the modal */}
            </dialog>
        </div>
    )
}

export default DisplayBattle