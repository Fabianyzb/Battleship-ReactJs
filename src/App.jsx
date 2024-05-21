import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlayerBoard from './components/PlayerBoard';
import ComputerBoard from './components/ComputerBoard';
import { GameProvider } from './services/Context';
import Inicio from './components/Inicio'; // Asegúrate de importar el componente Inicio
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} /> {/* Ruta para la página de inicio */}
        <Route path="/juego" element={
          <div className="App">
            <GameProvider>
              <div className="board-container">
                <PlayerBoard />
              </div>
              <div className="board-container">
                <ComputerBoard />
              </div>
            </GameProvider>
          </div>
        } /> {/* Ruta para la página del juego */}
      </Routes>
    </Router>
  );
}

export default App;
