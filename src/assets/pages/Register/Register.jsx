import Form from "../../components/Form/Form.jsx";
import Details from "../../components/Details/Details.jsx";

import "./Register.css";

const isUserRegistered = false;

const Register = () => {

    return (

        <div className="pageContainer">
            <Details userIsRegistered={isUserRegistered} />
            <Form userIsRegistered={isUserRegistered} />
        </div>

    );

}

export default Register;