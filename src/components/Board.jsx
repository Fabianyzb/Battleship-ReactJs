import React, { useContext, useState } from 'react';
import '../styles/GameBoard.css';
import Button from './Button';
import CoordinateLabels from './CoordinateLabels';
import FireInput from './FireInput';
import ShipToggle from './ShipToggle';
import { GameContext } from '../services/Context'; // Importar el contexto

function Board() {
    const { computerBoard, handleFireSubmit } = useContext(GameContext); // Obtener el estado del juego desde el contexto
    const [shipsVisible, setShipsVisible] = useState(true);
    const [fireInputVisible, setFireInputVisible] = useState(false);

    const toggleShipsVisibility = () => {
        setShipsVisible(!shipsVisible);
    };

    const handleFireClick = () => {
        setFireInputVisible(true);
    };

    return (
        <div id="game-container">
            <h1 className="title">Human</h1>
            <CoordinateLabels />
            <div id="game-board" className="flex-container">
                {computerBoard.map((row, rowIndex) => (
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
                <Button onClick={handleFireClick}>Fire</Button>
                {fireInputVisible && <FireInput onSubmit={handleFireSubmit} />}
            </div>
        </div>
    );
}

export default Board;
