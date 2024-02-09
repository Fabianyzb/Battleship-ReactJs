// Context.jsx

import React, { createContext, useContext, useState } from 'react';

export const GameContext = createContext();

// Función para inicializar el tablero con barcos en posiciones aleatorias
const initializeBoardWithRandomShips = () => {
    const board = Array(10).fill().map(() => Array(10).fill(0));

    // Array de tamaños de los barcos
    const shipSizes = [5, 4, 3, 3, 2];

    // Colocar los barcos en el tablero
    shipSizes.forEach(shipSize => {
        let placed = false;
        while (!placed) {
            const orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';
            const row = Math.floor(Math.random() * 10);
            const col = Math.floor(Math.random() * 10);

            // Verificar si el barco cabe en esta posición
            if (orientation === 'horizontal' && col + shipSize <= 10) {
                let canPlace = true;
                for (let i = col; i < col + shipSize; i++) {
                    if (board[row][i] !== 0) {
                        canPlace = false;
                        break;
                    }
                }
                if (canPlace) {
                    for (let i = col; i < col + shipSize; i++) {
                        board[row][i] = 1; // Marcar el lugar del barco en el tablero
                    }
                    placed = true;
                }
            } else if (orientation === 'vertical' && row + shipSize <= 10) {
                let canPlace = true;
                for (let i = row; i < row + shipSize; i++) {
                    if (board[i][col] !== 0) {
                        canPlace = false;
                        break;
                    }
                }
                if (canPlace) {
                    for (let i = row; i < row + shipSize; i++) {
                        board[i][col] = 1; // Marcar el lugar del barco en el tablero
                    }
                    placed = true;
                }
            }
        }
    });

    return board;
};

export const GameProvider = ({ children }) => {
    // Inicializar el tablero con barcos en posiciones aleatorias
    const [playerBoard, setPlayerBoard] = useState(initializeBoardWithRandomShips());
    const [computerBoard, setComputerBoard] = useState(initializeBoardWithRandomShips());

    const handleFireSubmit = (row, col) => {
        // Copiar el tablero del oponente
        const newBoard = [...computerBoard];

        // Comprobar si hay un barco en la celda objetivo
        if (newBoard[row][col] === 1) {
            // Si hay un barco, marcar la celda como 'golpeado'
            newBoard[row][col] = 2;
        } else {
            // Si no hay un barco, marcar la celda como 'fallado'
            newBoard[row][col] = 3;
        }

        // Actualizar el tablero del oponente
        setComputerBoard(newBoard);
    };

    const handleCPUClick = (row, col) => {
        // Aquí puedes definir lo que sucede cuando se hace clic en una celda del tablero de la computadora
        // Por ejemplo, podrías cambiar el estado de la celda en el tablero del jugador
        const newBoard = [...playerBoard];

        // Comprobar si hay un barco en la celda objetivo
        if (newBoard[row][col] === 1) {
            // Si hay un barco, marcar la celda como 'golpeado'
            newBoard[row][col] = 2;
        } else {
            // Si no hay un barco, marcar la celda como 'fallado'
            newBoard[row][col] = 3;
        }

        // Actualizar el tablero del jugador
        setPlayerBoard(newBoard);
    };

    return (
        <GameContext.Provider value={{ playerBoard, setPlayerBoard, computerBoard, setComputerBoard, handleFireSubmit, handleCPUClick }}>
            {children}
        </GameContext.Provider>
    );
};

export const useGameContext = () => useContext(GameContext);
