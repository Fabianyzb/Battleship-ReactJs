// src/components/CoordinateLabels.jsx

import React from 'react';

function CoordinateLabels() {
    return (
        <div className="coordinates">
            <div className="col-coordinates">
                {Array.from({ length: 10 }, (_, i) => String.fromCharCode(65 + i)).map(char => (
                    <div key={char}>{char}</div>
                ))}
            </div>
            <div className="row-coordinates">
                {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
                    <div key={num}>{num}</div>
                ))}
            </div>
        </div>
    );
}

export default CoordinateLabels;
