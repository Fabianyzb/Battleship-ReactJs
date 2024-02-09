//PlayerBoard.js

import React, { useContext, useState } from 'react';
import '../styles/GameBoard.css';
import Button from './Button';
import CoordinateLabels from './CoordinateLabels';
import ShipToggle from './ShipToggle';
import { GameContext } from '../services/Context'; // Importar el contexto

function PlayerBoard() {
    const { playerBoard } = useContext(GameContext); // Obtener el estado del juego desde el contexto
    const [shipsVisible, setShipsVisible] = useState(false);

    const toggleShipsVisibility = () => {
        setShipsVisible(!shipsVisible);
    };

    return (
        <div id="game-container">
            <h1 className="title">Human</h1>
            <CoordinateLabels />
            <div id="game-board" className="flex-container">
                {playerBoard.map((row, rowIndex) => (
                    row.map((cell, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className={`cell ${cell === 1 && shipsVisible ? 'ship' : ''} ${cell === 2 ? 'hit' : ''} ${cell === 3 ? 'miss' : ''}`}
                        >
                            {String.fromCharCode(65 + rowIndex) + (colIndex + 1)}
                        </div>
                    ))
                ))}
            </div>
            <div id="footer">
                <ShipToggle onClick={toggleShipsVisibility} />
            </div>
        </div>
    );
}

export default PlayerBoard;
