import Form from "../../components/Form/Form.jsx";
import Details from "../../components/Details/Details.jsx";

import "./Register.css";

const registered = false;

const Register = () => {

    return (

        <div className="pageContainer">
            <Details userIsRegistered={registered} />
            <Form userIsRegistered={registered} />
        </div>

    );

}

export default Register;