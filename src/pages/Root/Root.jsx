import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../components/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const Root = () => {
    const navigation = useNavigation();

    return (
        <div>
            {navigation.state === 'loading' && <LoadingSpinner />}
            <Navbar/>
            <Outlet/>
            <Footer/>
            <Toaster/>
        </div>
    );
};

export default Root;