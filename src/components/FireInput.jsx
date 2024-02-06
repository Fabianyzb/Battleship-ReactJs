// src/components/FireInput.jsx

import React, { useState } from 'react';

function FireInput({ onSubmit }) {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value); // Actualizar el valor del input
    };

    // Función para manejar el envío del formulario
    const handleSubmit = () => {
        onSubmit(inputValue);// Llamar a la función onSubmit pasando el valor del input
        setInputValue(''); // Reiniciar el valor del input a vacío después de enviar
    };

    return (
        <div>
            {/* Input para ingresar las coordenadas */}
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Enter coordinates (e.g., A1)"
            />
            {/* Botón para enviar las coordenadas */}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default FireInput;
