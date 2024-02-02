import horizontalBanner from '../../images/horizontalpokemonlogo.png'
import styles from './ConfirmBattle.module.css'
import { Link, useParams } from "react-router-dom"
import vs from '../../images/vs.png'
import { useEffect, useState } from 'react'
import gymLeadersTeam from '../../data/GymLeaders'

// create a object of list for the gymleaders teams
// bring in useParams and use the key of the object to access the list of objects and display their sprites



function ConfirmBattle() {

    const [storedTeam, setStoredTeam] = useState(JSON.parse(localStorage.getItem("team")) ?? [])
    const { name } = useParams()
    const gymLeaderTeam = gymLeadersTeam[name]

    return (
        <div className={styles.content}>
            <div className={styles.eachTeam}>
                <h4>Trainer Josh :</h4>
                {storedTeam.map((pokemon, idx) => (
                    <img key={idx} src={pokemon.sprites.front_default} alt="" className={styles.sprites} />
                ))}
            </div>
            <img src={vs} alt="" className={styles.horizontalBanner} />
            <div className={styles.eachTeam}>
                <h4 className={styles.enemyTrainerName}>{name} :</h4>
                {gymLeaderTeam.map((eachImage, idx) => (
                    <img src={eachImage} alt="" className={styles.sprites} />
                ))}
            </div>
            {/* <br/>
            <br/> */}
            <Link to={`/PvEBattle/${name}`} className={styles.button}>FIGHT</Link>
        </div>
    )
}

export default ConfirmBattle