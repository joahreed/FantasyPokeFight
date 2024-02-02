import Form from "../../components/Form/Form"
import Navbar from "../../components/Navbar/Navbar"

function EditTeam() {
    return (
        <div>
            <Navbar
                title={"Edit Your Team"}
            />
            <Form
                createButton = {"Edit Team"}
            />
        </div>
    )
}

export default EditTeam