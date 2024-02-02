import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import styles from './LandingPage.module.css'
import { Link } from 'react-router-dom'
import landingbanner from "../../images/widepokepicture.jpeg"
import teamOfPokemon from "../../images/teamofPokemon.webp"
import landingPageTitle from "../../images/landingpagetitle.png"
import teamOfPokemon2 from "../../images/team2.png"
function LandingPage() {
    return (
        <div className={styles.color}>
            {/* <Navbar title = {<h1>Welcome To FantasyPokeFight</h1>}/> */}
            <Navbar
                title={"Welcome To FantasyPokeFight"}
            />
            {/* making the title prop color dynamic */}
            <div className={`${styles.flex} ${styles.topBox}`}>
                <div className={styles.createBoxText}>
                    <p className={styles.innerCreateBoxText}><strong>FantasyPokeFight</strong> allows you to <strong>create</strong> a team consisting of 5 pokemon of your choosing. Use your team to <strong>challenge</strong> various gym leaders from the Kanto Region or test your team versus rival trainers.</p>
                </div>
                <div className={styles.createTeamButton}>
                    <img src={teamOfPokemon} alt="" className={styles.teamOfPokemon}/>
                    <hr className={styles.hrtag}/>
                    <Link to={'/createTeam'} className={styles.actualCreateTeamButton}><strong>Create Team</strong></Link>
                </div>
            </div>
            <img src="https://images.squarespace-cdn.com/content/v1/58864532db29d605b31aeeb5/1617242762662-IHX1EZKF9Z7JDOZLCII9/68747470733a2f2f6372797374616c2d63646e322e6372797374616c636f6d6d657263652e636f6d2f70686f746f732f363333303536352f73706c61736842616e6e65725f706f6b656d6f6e2e6a7067.jpeg?format=1500w" alt="" className={styles.landingbanner}/>
            <div className={`${styles.flex} ${styles.topBox}`}>
                <div className={styles.createTeamButton}>
                    <img src={teamOfPokemon2} alt="" className={styles.teamOfPokemon}/>
                    <hr className={styles.hrtag}/>
                    <Link to={'/createTeam'} className={styles.actualCreateTeamButton}><strong>Campaign Mode</strong></Link>
                </div>
                <div className={styles.createBoxText}>
                    <p className={styles.innerCreateBoxText}><strong>FantasyPokeFight</strong> is a place for trainers to test their skills in team building. Now try <strong>challenging</strong> the Kanto region Gym Leaders and make it to the finish.</p>
                </div>
            </div>
        </div>
    )
}

export default LandingPage