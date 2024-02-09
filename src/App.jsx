import React from 'react';
import './App.css';
import Board from './components/Board';
import ComputerBoard from './components/ComputerBoard';
import { GameProvider } from './services/Context'; // Importar GameProvider entre llaves

function App() {
  return (
    <div className="App">
      <h1 className='title'>BATTLESHIP</h1>
      <GameProvider>
        <div className="board-container">
          <Board />
        </div>
        <div className="board-container">
          <ComputerBoard />
        </div>
      </GameProvider>
    </div>
  );
}

export default App;
