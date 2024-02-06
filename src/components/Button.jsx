// src/components/Button.jsx

import React from 'react';

// Definir un componente funcional de React llamado Button
function Button({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
