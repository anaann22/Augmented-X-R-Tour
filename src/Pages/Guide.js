import React from 'react';
import '../css/Guide.css'; 
import guide from '../Poze/guide.jpg';
import { useNavigate } from 'react-router-dom';

const Guide = () => {

    const navigate = useNavigate();

    const navigateTo = (route) => {
      navigate(route);
    };

    return (
        <div className='guide-container'>
            <div className='dreptunghi'>
                <div className="poza">
                    <img src={guide} alt="Imagine intro" />
                </div>
                <div className='text'>
                  <p class="line1">1. Rotirea în jurul obiectului:</p>
                  <p class="line2">- Mouse-ul: Când vrei să rotești vizualizarea în jurul unui obiect 3D,</p>
                  <p class="line2">apasă și ține apăsat butonul stâng al mouse-ului. Apoi</p>
                  <p class="line2">mișcă mouse-ul în sus, jos, la stânga sau la dreapta.</p>
                  <p class="line2">   </p>
                  <p class="line2"> - Rotire: Imaginează-ți că tragi și rotești mediul 3D sub</p>
                  <p class="line2">forma unei sfere în jurul obiectului.</p>
                  <p class="line1">2. Deplasarea în spațiu:</p>
                  <p class="line2">- Pentru a te deplasa în spațiu, utilizează roata de scroll pentru</p>
                  <p class="line2">a face zoom în interiorul sau în afara scenei.</p>
                  <p class="line2">Pentru deplasare laterală, apasă butonul roții și mișcă mouse-ul în</p>
                  <p class="line2">sus, jos, la stânga sau la dreapta.</p>
                  <p class="line2"> - Zoom: Rotează roata de scroll înainte și înapoi pentru a face zoom.</p>
                  <p class="line2"> - Deplasare laterală: Apasă butonul roții și mișcă mouse-ul în direcțiile dorite.</p>
                </div>
                <button className='button' onClick={() => navigateTo("/")}>Am înțeles</button>
            </div>
        </div>
    );
};

export default Guide;
