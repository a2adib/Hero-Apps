import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../components/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const Root = () => {
    const navigation = useNavigation();

    return (
        <div className="flex flex-col min-h-screen">
            {navigation.state === 'loading' && <LoadingSpinner />}
            <Navbar/>
            <div className="flex-grow">
                <Outlet/>
            </div>
            <Footer/>
            <Toaster/>
        </div>
    );
};

export default Root;