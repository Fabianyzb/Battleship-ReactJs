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
                position: "relative", // Especifica la posición relativa para poder usar z-index
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
            <div
                style={{
                    position: "absolute", // Posiciona absolutamente para controlar su ubicación
                    top: "30%", // Mueve la imagen hacia arriba
                    left: "54%", // Centra horizontalmente
                    transform: "translate(-50%, -50%)", // Ajusta la posición para centrarla correctamente
                    zIndex: 1, // Asegura que la imagen esté encima de la imagen de fondo
                }}
            >
                <img src="/battleshipLogo.png" alt="Nueva Imagen" style={{ maxWidth: '80%', maxHeight: '80%' }} />
            </div>
            <button
                className="play-button"
                onClick={handlePlayClick}
                style={{
                    fontSize: "2em",
                    padding: "10px 20px",
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    borderRadius: "5px",
                    position: "absolute", // Posiciona absolutamente para controlar su ubicación
                    top: "50%", // Ajusta la posición para colocarlo encima de la nueva imagen y centrado
                    left: "50%",
                    transform: "translateX(-50%)" // Ajusta la posición para centrarlo horizontalmente
                }}
            >
                Play
            </button>
        </div>
    );
};

export default Inicio;
