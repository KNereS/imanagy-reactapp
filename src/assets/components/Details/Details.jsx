import './Details.css'

import img from '../../img/hero.png';
import { FaPhoneAlt } from "react-icons/fa";

const Details = ({ userIsRegistered }) => {

    return (

        <div className='DetailsContainer'>

            <p className='phoneNumber'>
                <FaPhoneAlt />
                +55 73 9-8252-4811
            </p>

            <img src={img} />

            <div className='text'>

                <h2>

                    {userIsRegistered ? "Sign in" : "Sign up"} to iManagy

                </h2>

                <p>
                    Lorem Ipsum is simply!
                </p>

            </div>

        </div>

    );

}

export default Details;