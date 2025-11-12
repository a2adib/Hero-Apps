import React from 'react';
import Loading from "../../assets/logo.png"

const LoadingSpinner = () => {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <img src={Loading} alt="Loading..." className="animate-spin h-32 w-32" />
        </div>
    );
};

export default LoadingSpinner;
