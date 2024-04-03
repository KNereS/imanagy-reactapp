import Form from "../../components/Form/Form.jsx";
import Details from "../../components/Details/Details.jsx";

import "./Login.css";

const registered = true;

const Login = () => {

    return (

        <div className="pageContainer">
            <Details userIsRegistered={registered} />
            <Form userIsRegistered={registered} />
        </div>

    );

}

export default Login;