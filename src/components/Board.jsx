// src/components/Board.jsx

import React, { useState } from 'react';
import './Board.css';
import Button from './Button';
import CoordinateLabels from './CoordinateLabels';
import FireInput from './FireInput';
import ShipToggle from './ShipToggle';

function Board() {
    const [gameBoard, setGameBoard] = useState([
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    ]);
    const [shipsVisible, setShipsVisible] = useState(true);
    const [fireInputVisible, setFireInputVisible] = useState(false);

    const toggleShipsVisibility = () => {
        setShipsVisible(!shipsVisible);
    };

    const handleFireClick = () => {
        setFireInputVisible(true);
    };

    const handleFireSubmit = (coordinateInput) => {
        // Obtener las coordenadas de fila y columna
        const rowChar = coordinateInput.charAt(0);
        const colNum = parseInt(coordinateInput.substring(1)) - 1; // Restar 1 para obtener el índice base cero

        // Convertir la letra de fila a un índice numérico (A=0, B=1, etc.)
        const row = rowChar.charCodeAt(0) - "A".charCodeAt(0);

        // Validar las coordenadas
        if (row >= 0 && row < 10 && colNum >= 0 && colNum < 10) {
            fireTorpedo(row, colNum);
        } else {
            console.log("Coordenadas inválidas");
        }

        setFireInputVisible(false);
    };

    const fireTorpedo = (row, col) => {
        const newGameBoard = [...gameBoard];
        const cellValue = newGameBoard[row][col];

        if (cellValue === 1) {
            newGameBoard[row][col] = 2; // Kaboom!
        } else if (cellValue === 0) {
            newGameBoard[row][col] = 3; // Missed!
        }

        setGameBoard(newGameBoard);
    };

    return (
        <div id="game-container">
            <h1 className="title">Battleship</h1>
            <CoordinateLabels />
            <div id="game-board" className="flex-container">
                {gameBoard.map((row, rowIndex) => (
                    row.map((cell, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className={`cell ${cell === 1 && shipsVisible ? 'ship' : ''} ${cell === 2 ? 'hit' : ''} ${cell === 3 ? 'miss' : ''}`}
                            onClick={() => fireTorpedo(rowIndex, colIndex)}
                        >
                            {String.fromCharCode(65 + rowIndex) + (colIndex + 1)}
                        </div>
                    ))
                ))}
            </div>
            <div id="footer">
                <ShipToggle onClick={toggleShipsVisibility} />
                <Button onClick={handleFireClick}>Fire</Button>
                {fireInputVisible && <FireInput onSubmit={handleFireSubmit} />}
            </div>
        </div>
    );
}

export default Board;
