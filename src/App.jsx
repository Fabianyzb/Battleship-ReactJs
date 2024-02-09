import React from 'react';
import './App.css';
import PlayerBoard from './components/PlayerBoard';
import ComputerBoard from './components/ComputerBoard';
import { GameProvider } from './services/Context'; // Importar GameProvider entre llaves

function App() {
  return (
    <div className="App">
      <h1 className='title'>BATTLESHIP</h1>
      <GameProvider>
        <div className="board-container">
          <PlayerBoard />
        </div>
        <div className="board-container">
          <ComputerBoard />
        </div>
      </GameProvider>
    </div>
  );
}

export default App;
