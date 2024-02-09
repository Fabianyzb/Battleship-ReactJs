//ComputerBoard.jsx

import React, { useContext, useState } from 'react';
import '../styles/GameBoard.css';
import CoordinateLabels from './CoordinateLabels';
import ShipToggle from './ShipToggle';
import { GameContext } from '../services/Context'; // Importar el contexto

function ComputerBoard() {
    const { computerBoard, handleFireSubmit, cpuMove } = useContext(GameContext); // Obtener el estado del juego desde el contexto
    const [shipsVisible, setShipsVisible] = useState(false);

    const toggleShipsVisibility = () => {
        setShipsVisible(!shipsVisible);
    };

    const handleCellClick = (rowIndex, colIndex) => {
        handleFireSubmit(rowIndex, colIndex); // Llamar a handleFireSubmit en lugar de handleCPUClick
        cpuMove(); // Simular un movimiento de la CPU
    };



    return (
        <div id="game-container">
            <h1 className="title">CPU</h1>
            <CoordinateLabels />
            <div id="game-board" className="flex-container">
                {computerBoard.map((row, rowIndex) => (
                    row.map((cell, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className={`cell ${cell === 1 && shipsVisible ? 'ship' : ''} ${cell === 2 ? 'hit' : ''} ${cell === 3 ? 'miss' : ''}`}
                            onClick={() => handleCellClick(rowIndex, colIndex)} // Manejar clic en la celda
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

export default ComputerBoard;
