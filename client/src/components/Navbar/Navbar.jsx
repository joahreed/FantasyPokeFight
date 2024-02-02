import pokemonLogo from "../../images/pokemonLogo.png"
import styles from "./Navbar.module.css"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Navbar(props) {
    const {title} = props

    const navigate = useNavigate()

    return (
        <div className={`${styles.flex} ${styles.backgroundColor} ${styles.color} ${styles.spacing} ${styles.roundedcorners}`} >
            <img src={pokemonLogo} alt="pokemonLogo" className={styles.logo} />
            {/* {title} */}
            <h1 className={styles.title}>{title}</h1>
            {/* how to change props color */}
            {/* <img src={title} alt="" className={styles.landingPageTitle}/> */}
            <div>
                <Link to={`/`} className={`${styles.color} ${styles.link} ${styles.button}`}>Home</Link>
                {/* come back and style it as a button instead of making it a button */}
                <select onChange={e => navigate(e.target.value)} className={styles.button}>
                    <option hidden>-- Options --</option>
                    <option value="/pokemon">View Pokemon</option>
                    <option value="/createTeam">Create Team</option>
                    {/* <option value="/editTeam">Edit Team</option> */}
                    <option value="/campaign">Campaign Mode</option>
                    <option hidden value="/pvp">PvP</option>
                </select>
            </div>
        </div>
    )
}

export default Navbar