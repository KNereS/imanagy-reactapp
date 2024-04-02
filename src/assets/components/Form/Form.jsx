import './Form.css';

import email from '../../svg/email.svg';
import username from '../../svg/username.svg';
import password from '../../svg/password.svg';

import facebook from '../../svg/fb.svg';
import apple from '../../svg/apple.svg';
import google from '../../svg/google.svg';
import logo from '../../svg/logo.svg';

const handleSubmit = (e) => {
    e.preventDefault();
}

const FormTitle = ({ userIsRegistered }) => {

    const href = userIsRegistered ? "https://imanagy-reactapp.vercel.app/register" : "https://imanagy-reactapp.vercel.app/";

    return (

        <div className="formTitle">

            <img src={logo} width="32px" className='logoTop'/>

            <h1>
                { userIsRegistered ? "Sign in" : "Sign up" }
            </h1>

            <p>

                { userIsRegistered ? "If you don’t have an account register" : "If you already have an account register" } <br />

                You can <a href={ href } >{ userIsRegistered ? "Register Here!" : "Login Here!"}</a>

            </p>

        </div>

    );

}

const FormBody = ({ userIsRegistered }) => {

    if (userIsRegistered) {

        return (

            <>

            <form onSubmit={handleSubmit}>

                <div className="formInput">
                    <label>E-Mail</label>
                    <input type="email" placeholder="Enter your E-Mail Address" id="email"/>
                    <img className="formInputIcon" src={email} />
                </div>

                <div className="formInput">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your Password" id="password"/>
                    <img className="formInputIcon" src={password} />
                </div>

                <div className="formExtras">

                    <div className="formCheckbox">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </div>

                    <a href="#">Forgot Password?</a>

                </div>

                <button>
                    Login!
                </button>

            </form>

            <p className='or'>
                or continue with
            </p>

            <div className="continueWith">
                <img src={facebook} />
                <img src={apple} />
                <img src={google} />
            </div>

            </>

        );

    } else {

        return (

            <>

            <form onSubmit={handleSubmit}>

                <div className="formInput">
                    <label>E-Mail</label>
                    <input type="email" placeholder="Enter your E-Mail Address"  id="email"/>
                    <img className="formInputIcon" src={email} />
                </div>

                <div className="formInput">
                    <label>Username</label>
                    <input type="text" placeholder="Enter your Username" id="username"/>
                    <img className="formInputIcon" src={username} />
                </div>

                <div className="formInput">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your Password" id="password"/>
                    <img className="formInputIcon" src={password} />
                </div>

                <div className="formInput">
                    <label>Confirm Password</label>
                    <input type="password" placeholder="Enter your Password" id="password"/>
                    <img className="formInputIcon" src={password} />
                </div>

                <button>
                    Register!
                </button>

            </form>

            </>

        );

    }

}

const Form = ({ userIsRegistered }) => {

    return (
        <div className="Form">
            <FormTitle userIsRegistered={userIsRegistered} />
            <FormBody userIsRegistered={userIsRegistered} />
        </div>
    );

}

export default Form;