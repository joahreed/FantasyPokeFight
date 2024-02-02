import Navbar from "../../components/Navbar/Navbar"
import styles from "./CampaignMode.module.css"
import brock from "../../images/brock.png"
import misty from "../../images/misty.png"
import ltSurge from "../../images/ltSurge.png"
import erika from "../../images/erika.png"
import koga from "../../images/koga.png"
import sabrina from "../../images/sabrina.png"
import blaine from "../../images/blaine.png"
import giovanni from "../../images/giovanni.png"
import trainerjosh from "../../images/trainerJosh.png"
import { Link } from "react-router-dom"

function CampaignMode() {
    return (
        <div>
            <Navbar
                title={"Campaign Mode"}
            />
            <div className={styles.content}>
                <div className={styles.allGymLeaders}>
                    <div className={styles.eachTrainer}>
                        <p className={styles.leaderName}>Brock</p>
                        <img src={brock} alt="" className={styles.gymLeaders} />
                        <p>Team :</p>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png" alt="" className={styles.sprite} />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png" alt="" className={styles.sprite} />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png" alt="" className={styles.sprite} />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png" alt="" className={styles.sprite} />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png" alt="" className={styles.sprite} />
                        <Link to={`/confirmPvEBattle/brock`}><button className={styles.button}>FIGHT</button></Link>
                    </div>
                    <hr/>
                    <div className={styles.eachTrainer}>
                        <p className={styles.leaderName}>Misty</p>
                        <img src={misty} alt="" className={styles.gymLeaders} />
                        <p>Team :</p>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png" alt="" className={styles.sprite} />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png" alt="" className={styles.sprite} />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png" alt="" className={styles.sprite} />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png" alt="" className={styles.sprite} />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png" alt="" className={styles.sprite} />
                        <Link to={`/confirmPvEBattle/misty`}><button className={styles.button}>FIGHT</button></Link>
                    </div>
                    <hr/>
                    <div className={styles.eachTrainer}>
                        <p className={styles.leaderName}>Lt. Surge</p>
                        <img src={ltSurge} alt="" className={styles.gymLeaders} />
                        <p>Team :</p>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png" alt="" className={styles.sprite} />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png" alt="" className={styles.sprite} />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="" className={styles.sprite} />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png" alt="" className={styles.sprite} />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png" alt="" className={styles.sprite} />
                        <Link to={`/confirmPvEBattle/ltsurge`}><button className={styles.button}>FIGHT</button></Link>
                    </div>
                    <hr/>
                    <div className={styles.eachTrainer}>
                        <p className={styles.leaderName}>Erika</p>
                        <img src={erika} alt="" className={styles.gymLeaders} />
                        <p>Team :</p>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png" alt="" className={styles.sprite} />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png" alt="" className={styles.sprite} />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png" alt="" className={styles.sprite} />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" alt="" className={styles.sprite} />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png" alt="" className={styles.sprite} />
                        <Link to={`/confirmPvEBattle/erika`}><button className={styles.button}>FIGHT</button></Link>
                    </div>
                    <hr/>
                    <div className={styles.eachTrainer}>
                        <p className={styles.leaderName}>Koga</p>
                        <img src={koga} alt="" className={styles.gymLeaders} />
                        <p>Team :</p>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png" alt="" className={styles.sprite} />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png" alt="" className={styles.sprite} />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png" alt="" className={styles.sprite} />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png" alt="" className={styles.sprite} />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png" alt="" className={styles.sprite} />
                        <Link to={`/confirmPvEBattle/koga`}><button className={styles.button}>FIGHT</button></Link>
                    </div>
                    <hr/>
                    <div className={styles.eachTrainer}>
                        <p className={styles.leaderName}>Sabrina</p>
                        <img src={sabrina} alt="" className={styles.gymLeaders} />
                        <p>Team :</p>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png" alt="" className={styles.sprite} />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png" alt="" className={styles.sprite} />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png" alt="" className={styles.sprite} />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png" alt="" className={styles.sprite} />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png" alt="" className={styles.sprite} />
                        <Link to={`/confirmPvEBattle/sabrina`}><button className={styles.button}>FIGHT</button></Link>
                    </div>
                    <hr/>
                    <div className={styles.eachTrainer}>
                        <p className={styles.leaderName}>Blaine</p>
                        <img src={blaine} alt="" className={styles.gymLeaders} />
                        <p>Team :</p>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png" alt="" className={styles.sprite} />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png" alt="" className={styles.sprite} />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png" alt="" className={styles.sprite} />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png" alt="" className={styles.sprite} />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png" alt="" className={styles.sprite} />
                        <Link to={`/confirmPvEBattle/blaine`}><button className={styles.button}>FIGHT</button></Link>
                    </div>
                    <hr/>
                    <div className={styles.eachTrainer}>
                        <p className={styles.leaderName}>Giovanni</p>
                        <img src={giovanni} alt="" className={styles.gymLeaders} />
                        <p>Team :</p>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png" alt="" className={styles.sprite} />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png" alt="" className={styles.sprite} />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png" alt="" className={styles.sprite} />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png" alt="" className={styles.sprite} />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png" alt="" className={styles.sprite} />
                        <Link to={`/confirmPvEBattle/giovanni`}><button className={styles.button}>FIGHT</button></Link>
                    </div>
                    <hr/>
                    <div className={styles.eachTrainer}>
                        <p className={styles.leaderName}>Trainer Joah</p>
                        <img src={trainerjosh} alt="" className={styles.gymLeaders} />
                        <p>Team :</p>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png" alt="" className={styles.sprite} />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png" alt="" className={styles.sprite} />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png" alt="" className={styles.sprite} />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png" alt="" className={styles.sprite} />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png" alt="" className={styles.sprite} />
                        <Link to={`/confirmPvEBattle/trainerjoah`}><button className={styles.button}>FIGHT</button></Link>
                    </div>
                    <hr/>
                </div>
            </div>
        </div>
    )
}

export default CampaignMode