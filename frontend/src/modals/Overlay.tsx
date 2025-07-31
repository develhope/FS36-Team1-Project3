import { useState, useEffect } from 'react';

const Overlay = ({ onClose }: { onClose: () => void }) => {
    const [isAnimating, setIsAnimating] = useState(true);
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        setShouldRender(true);
        setTimeout(() => setIsAnimating(true), 10);
    }, []);

    if (!shouldRender) {
        return null;
    }

    return (
        <div 
            className={`fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity duration-300 ${
                isAnimating ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={onClose}
            style={{ pointerEvents: isAnimating ? 'auto' : 'none' }}
        />
    );
};

export default Overlay