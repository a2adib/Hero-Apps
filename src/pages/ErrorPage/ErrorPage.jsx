import React from 'react';
import { Link } from 'react-router-dom';
import error404 from '../../assets/error-404.png';


const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-4">
            <img src={error404} alt="Error 404" className="max-w-md w-full mb-8" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
                Oops! Page Not Found
            </h1>
            <p className="text-lg text-center mb-8 max-w-prose">
                We can't seem to find the page you're looking for. It might have been removed,
                its name changed, or is temporarily unavailable.
            </p>
            <Link
                to="/"
                className="px-6 py-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-lg shadow-md
                           hover:from-[#531EC2] hover:to-[#8F52E1] transition duration-300 ease-in-out transform hover:scale-105"
            >
                Go to Homepage
            </Link>
        </div>
    );
};

export default ErrorPage;