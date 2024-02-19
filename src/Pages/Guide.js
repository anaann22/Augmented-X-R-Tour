import React from 'react';
import { useNavigate } from 'react-router-dom';

const Guide = () => {

    const navigate = useNavigate();

    const navigateTo = (route) => {
      navigate(route);
    };

}


export default Guide;