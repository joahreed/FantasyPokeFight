import Navbar from "../../components/Navbar/Navbar"
import Form from "../../components/Form/Form"

function CreateTeam() {
    return (
        <div>
            <Navbar
                title={"Create Your Team"}
            />
            <Form
                createButton ={"Create Team"}
            />
            {/* <p>CreateTeam</p> */}
        </div>
    )
}

export default CreateTeam