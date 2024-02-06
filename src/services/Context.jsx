// Context.jsx

import React, { createContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
    const [userBoard, setUserBoard] = useState(/* estado inicial del tablero del usuario */);
    const [cpuBoard, setCpuBoard] = useState(/* estado inicial del tablero de la CPU */);

    // Función para actualizar el tablero del usuario en función de un clic aleatorio de la CPU
    const handleCPUClick = () => {
        // Lógica para generar un clic aleatorio en el tablero del usuario
    };

    return (
        <GameContext.Provider value={{ userBoard, cpuBoard, handleCPUClick }}>
            {children}
        </GameContext.Provider>
    );
};

export { GameProvider, GameContext };
