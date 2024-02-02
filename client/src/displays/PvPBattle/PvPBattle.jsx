import Navbar from "../../components/Navbar/Navbar"
import DisplayBattle from "../../components/DisplayBattle/DisplayBattle"

function PvPBattle() {
    return (
        <div>
            <Navbar
            title = {"PvP Battle"}
            />
            <DisplayBattle/>
        </div>
    )
}

export default PvPBattle