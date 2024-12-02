import React, { useEffect, useState } from 'react';
import './ProgressBar.css';

function ProgressBar({ speed = 100, increment = 5 }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setProgress(prev => Math.min(prev + increment, 100));
        }, speed);

        return () => clearInterval(intervalId);
    }, [speed, increment]);

    return (
        <div className="container">
            <div 
                className="progress" 
                style={{ transform: `translateX(${progress - 100}%)` }}
            >
                <span className="progress-text">{progress}%</span>
            </div>
        </div>
    );
}

export default ProgressBar;
