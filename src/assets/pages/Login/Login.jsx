import Form from "../../components/Form/Form.jsx";
import Details from "../../components/Details/Details.jsx";

import "./Login.css";

const isUserRegistered = true;

const Login = () => {

    return (

        <div className="pageContainer">
            <Details userIsRegistered={isUserRegistered} />
            <Form userIsRegistered={isUserRegistered} />
        </div>

    );

}

export default Login;