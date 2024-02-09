// src/components/ShipToggle.jsx

import React from 'react';
import '../styles/ShipToggle.css'

function ShipToggle({ onClick }) {
    return (
        <button className='button-32' onClick={onClick}>Toggle Ships</button>
    );
}

export default ShipToggle;
