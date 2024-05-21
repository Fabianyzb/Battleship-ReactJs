import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inicio = () => {
    const navigate = useNavigate();

    const handlePlayClick = () => {
        navigate('/juego');
    };

    return (
        <div
            className="inicio"
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundImage: "url('/battleship.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <button
                className="play-button"
                onClick={handlePlayClick}
                style={{
                    fontSize: "2em",
                    padding: "10px 20px",
                    backgroundColor: "rgba(255, 255, 255, 0.7)", // Ajusta el color y la transparencia según sea necesario
                    borderRadius: "5px"
                }}
            >
                Play
            </button>
        </div>
    );
};

export default Inicio;
