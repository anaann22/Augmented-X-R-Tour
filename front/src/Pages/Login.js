import React from 'react';
import '../css/Login.css'
import { useNavigate } from 'react-router-dom';
import login from '../Poze/login.jpg';
import social from '../Poze/social.png';



const Login = () => {
    const navigate = useNavigate();

    const navigateTo = (route) => {
        navigate(route);
      };

    return (
        <div className='login-container'>
    <div className='dreptunghi'>
        <img src={login} alt="Imagine login" />
        <div className="input-container">
            <input type="text" className="but1" placeholder="Introduceți email ul..." />
        </div>
        <div className="input-container">
            <input type="password" className="but2" placeholder="Introduceți parola..." />
        </div>
    </div>
    <div className='connect-container'>
        <p className="text1">Ai uitat parola?</p>
        <button className='buttonAuth' onClick = {() => navigateTo("/Art")}>Conectare</button>
        <p className="text1">Nu ai încă cont?</p>
        <button className='buttonLog' onClick = {() => navigateTo("/Auth")}>Autentificare</button>
        <button className="buttonGoogle">
            <img src={social} alt="Iconita" />
            Google
        </button>
    </div>
</div>
    )
}

export default Login;