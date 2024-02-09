// Context.jsx

import React, { createContext, useContext, useState } from 'react';

export const GameContext = createContext();

// Funcion para inicializar el tablero con barcos en posiciones aleatorias
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
    const [cpuMoves, setCpuMoves] = useState(new Set()); // Inicializar un conjunto para almacenar los movimientos de la CPU

    // Verificar si todos los barcos de un jugador han sido golpeados
    const checkWin = (board) => {
        for (let row of board) {
            for (let cell of row) {
                // Si hay algún barco (representado por el número 1) que no ha sido golpeado, el juego aún no ha terminado
                if (cell === 1) {
                    return false;
                }
            }
        }
        // Si todos los barcos han sido golpeados, el juego ha terminado
        return true;
    };

    const handleFireSubmit = (row, col) => {
        //Ataque del Jugador al tablero de la CPU
        // Copiar el tablero del oponente para no modificar directa% el estado de computerBoard
        const newBoard = [...computerBoard];

        // Comprobar si hay un barco en la celda objetivo
        if (newBoard[row][col] === 1) {
            // Si hay un barco, marcar la celda como 'hit'
            newBoard[row][col] = 2;
        } else {
            // Si no hay un barco, marcar la celda como 'fallado'
            newBoard[row][col] = 3;
        }

        // Actualizar el tablero del oponente
        setComputerBoard(newBoard);

        //Check si la cpu gano
        if (checkWin(playerBoard)) {
            alert('¡La CPU ha ganado!');
        }
    };


    const handleCPUClick = (row, col) => {
        // Aqui se define lo que sucede cuando se hace clic en una celda del tablero de la computadora
        // Se cambia el estado de la celda del lado del jugador. Es como si la cpu estuviera jugando
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

        //Checkea si el juego ha terminado 
        if (checkWin(computerBoard)) {
            alert('¡El jugador humano ha ganado!');
        }
    };

    const cpuMove = () => {
        let row, col;
        do {
            // Generar coordenadas aleatorias para el tablero del jugador
            row = Math.floor(Math.random() * 10);
            col = Math.floor(Math.random() * 10);
        } while (cpuMoves.has(`${row},${col}`)); // Repetir hasta que se encuentre un espacio que no haya sido atacado

        // Añadir el nuevo movimiento al conjunto de movimientos de la CPU
        setCpuMoves(prevMoves => new Set([...prevMoves, `${row},${col}`]));

        // Llamar a handleCPUClick con las coordenadas aleatorias
        handleCPUClick(row, col);
    };

    return (
        <GameContext.Provider value={{
            playerBoard, setPlayerBoard, computerBoard, setComputerBoard, handleFireSubmit, handleCPUClick,
            cpuMove, cpuMoves, setCpuMoves
        }}>
            {children}
        </GameContext.Provider>
    );
};

export const useGameContext = () => useContext(GameContext);
