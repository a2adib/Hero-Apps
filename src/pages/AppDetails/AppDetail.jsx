import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useApps from '../../hooks/useApps';
import downloadIcon from "../../assets/icon-downloads.png"
import starIcon from "../../assets/icon-ratings.png"
import reviweIcon from "../../assets/icon-review.png"
import toast from 'react-hot-toast';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getInstalledApps, addInstalledApp } from '../../utils/localStorage';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const AppDetail = () => {
    const { id } = useParams();
    const { apps, loading, error } = useApps();
    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        const installedApps = getInstalledApps();
        setIsInstalled(installedApps.includes(parseInt(id)));
    }, [id]);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <div className="min-h-screen flex items-center justify-center text-red-500">Error loading app details.</div>;
    }

    const app = apps.find(app => app.id === parseInt(id));

    if (!app) {
        return <div className="min-h-screen flex items-center justify-center text-gray-600">App not found.</div>;
    }

    const totalRatings = app.ratings.reduce((acc, rating) => acc + rating.count, 0);

    const handleInstall = () => {
        addInstalledApp(app.id);
        setIsInstalled(true);
        toast.success('App installed successfully!');
    };

    return (
        <div className="p-4 md:p-8 font-sans bg-[#F5F5F5]">
            <div className="max-w-4xl mx-auto overflow-hidden">
                <div className="flex flex-col sm:flex-row items-start space-y-6 sm:space-y-0 sm:space-x-6 p-6 border-b">
                    
                    <div className=" w-20 h-20 rounded-2xl bg-blue-50 shadow-md flex items-center justify-center border border-blue-200">
                        <img src={app.image} alt={`${app.title} icon`} className="w-12 h-12 object-contain" />
                    </div>

                    <div className="flex-grow">
                        
                        <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
                            {app.title}
                        </h1>
                        <p className="text-sm text-gray-500 mt-0.5">
                            Developed by <strong className="text-blue-600 font-medium">{app.companyName}</strong>
                        </p>

                        
                        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 sm:space-x-4">
                            
                            <div className="flex space-x-4 justify-between w-full sm:w-auto sm:space-x-8">
                                <div className="flex flex-col items-center">
                                    <div className="p-2 rounded-xl bg-green-100 text-green-600">
                                        <img src={downloadIcon} alt="Downloads" className="w-5 h-5" />
                                    </div>
                                    <p className="font-bold text-lg mt-1 text-gray-800">{(app.downloads / 1000000).toFixed(1)}M</p>
                                    <p className="text-xs text-gray-500 -mt-0.5 whitespace-nowrap">Downloads</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="p-2 rounded-xl bg-yellow-100 text-yellow-600">
                                        <img src={starIcon} alt="Ratings" className="w-5 h-5" />
                                    </div>
                                    <p className="font-bold text-lg mt-1 text-gray-800">{app.ratingAvg}</p>
                                    <p className="text-xs text-gray-500 -mt-0.5 whitespace-nowrap">Rating</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="p-2 rounded-xl bg-purple-100 text-purple-600">
                                        <img src={reviweIcon} alt="Reviews" className="w-5 h-5" />
                                    </div>
                                    <p className="font-bold text-lg mt-1 text-gray-800">{(app.reviews / 1000).toFixed(0)}k</p>
                                    <p className="text-xs text-gray-500 -mt-0.5 whitespace-nowrap">Reviews</p>
                                </div>
                            </div>

                            
                            <button
                                onClick={handleInstall}
                                disabled={isInstalled}
                                className={`w-full sm:w-auto px-6 py-2.5 font-bold text-sm rounded-xl shadow-lg transition duration-150 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] ${isInstalled ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700'}`}
                            >
                                {isInstalled ? 'Installed' : `Install Now (${app.size} MB)`}
                            </button>
                        </div>
                    </div>
                </div>

                
                <div className="p-6 border-b">
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Ratings</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        
                        <div className="space-y-3">
                            {app.ratings.map((rating) => (
                                <div key={rating.name} className="flex items-center space-x-3">
                                    <span className="text-sm font-medium text-gray-600 w-12  whitespace-nowrap">
                                        {rating.name}
                                    </span>
                                    <div className="w-full bg-gray-200 rounded-full h-3">
                                        <div
                                            className="bg-yellow-400 h-full rounded-full transition-all duration-500"
                                            style={{ width: `${(rating.count / totalRatings) * 100}%` }}
                                            title={`${rating.count} ratings`}
                                        ></div>
                                    </div>
                                    <span className="text-xs font-medium text-gray-400 w-12  text-right">
                                        {(rating.count / 1000).toFixed(0)}k
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="h-64 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={app.ratings}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="count" fill="#8884d8" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                
                <div className="p-6">
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Description</h2>

                    <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                        <p>
                            {app.description}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AppDetail;