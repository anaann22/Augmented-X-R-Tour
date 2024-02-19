import React from 'react';
import '../css/Intro.css'; 
import intro from '../Poze/intro.jpg';
import { useNavigate } from 'react-router-dom';

const Intro = () => {

    const navigate = useNavigate();

    const navigateTo = (route) => {
      navigate(route);
    };

    return (
        <div className='intro-container'>
            <div className='dreptunghi'>
                <div className="pozaIntro">
                    <img src={intro} alt="Imagine intro" />
                </div>
                <div className='textIntro'>
                  <p class="line1">Bine ai venit!</p>
                  <p class="line2">Această aplicație urmărește introducerea în</p>
                  <p class="line2">curentele artistice utilizând drept mijloc</p>
                  <p class="line2">vizualuizarea 3D.</p>
                </div>
                <button className='buttonIntro' onClick={() => navigateTo("/Guide")}>Urmărește ghidul de utilizare</button>
                <button className='button2'>Conectare</button>
                <button className='button3'>Autentificare</button>
            </div>
        </div>
    );
};

export default Intro;
