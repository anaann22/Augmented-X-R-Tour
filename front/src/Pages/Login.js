import React, { useState } from 'react';
import '../css/Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import login from '../Poze/login.jpg';
import social from '../Poze/social.png';

const Login = () => {
    const navigate = useNavigate();

    const [data, setData] = useState({
        email: '',
        password: ''
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email: data.email,
            password: data.password
        };

        axios.post("https://localhost:8080/auth/login", userData)
            .then((response) => {
                console.log(response.status, response.data.token);
                navigateTo('/Art');
            })
            .catch((error) => {
                console.error('Error during login:', error.response.data.message);
            });
    };

    const navigateTo = (route) => {
        navigate(route);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='login-container'>
                <div className='dreptunghi'>
                    <img src={login} alt="Imagine login" />
                    <div className="input-container">
                        <input type="text" name="email" value={data.email} onChange={handleChange} className="but1" placeholder="Introduceți email ul..." />
                    </div>
                    <div className="input-container">
                        <input type="password" name="password" value={data.password} onChange={handleChange} className="but2" placeholder="Introduceți parola..." />
                    </div>
                </div>
                <div className='connect-container'>
                    <p className="text1">Ai uitat parola?</p>
                    <button className='buttonAuth' type="submit">Conectare</button>
                    <p className="text1">Nu ai încă cont?</p>
                    <button className='buttonLog' type="submit" onClick={() => navigateTo("/Auth")}>Autentificare</button>
                    <button className="buttonGoogle">
                        <img src={social} alt="Iconita" />
                        Google
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Login;
