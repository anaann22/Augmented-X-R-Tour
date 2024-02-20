import React from 'react';
import { useNavigate } from 'react-router-dom';
import login from '../Poze/login.jpg';
import '../css/Auth.css';
import social from '../Poze/social.png';

const Auth = () => {

    const navigate = useNavigate();

    const navigateTo = (route) => {
        navigate(route);
    }

    return (
        <div className='auth-container'>
    <div className='dreptunghiAuth'>
        <img src={login} alt="Imagine login" />
        <div className="input-container">
            <input type="text" className="but1Auth" placeholder="Introduceți numele..." />
        </div>
        <div className="input-container">
            <input type="text" className="but2Auth" placeholder="Introduceți email ul..." />
        </div>
        <div className="input-container">
            <input type="password" className="but3Auth" placeholder="Introduceți parola..." />
        </div>
    </div>
    <div className='connect-container-auth'>
        <button className='buttonAuth' onClick = {() => navigateTo("/Art")}>Autentificare</button>
        <p className="text1">Ai deja un cont?</p>
        <button className='buttonLog' onClick = {() => navigateTo("/Login")}>Conectare</button>
        <button className="buttonGoogleAuth">
            <img src={social} alt="Iconita" />
            Google
        </button>
    </div>
</div>
    )

}

export default Auth;