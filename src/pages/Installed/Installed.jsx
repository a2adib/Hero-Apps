import React, { useState, useEffect } from "react";
import useApps from "../../hooks/useApps";
import { getInstalledApps, removeInstalledApp } from "../../utils/localStorage";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const Installed = () => {
    const { apps, loading } = useApps();
    const [installedApps, setInstalledApps] = useState([]);
    const [sortOrder, setSortOrder] = useState('');
    const [displayedApps, setDisplayedApps] = useState([]);

    useEffect(() => {
        if (!loading) {
            const installedAppIds = getInstalledApps();
            const installed = apps.filter(app => installedAppIds.includes(app.id));
            setInstalledApps(installed);
        }
    }, [apps, loading]);

    useEffect(() => {
        let sortedApps = [...installedApps];
        if (sortOrder === 'high-low') {
            sortedApps.sort((a, b) => b.downloads - a.downloads);
        } else if (sortOrder === 'low-high') {
            sortedApps.sort((a, b) => a.downloads - b.downloads);
        }
        setDisplayedApps(sortedApps);
    }, [sortOrder, installedApps]);

    const handleUninstall = (appId) => {
        removeInstalledApp(appId);
        setInstalledApps(installedApps.filter(app => app.id !== appId));
        toast.success('App uninstalled successfully!');
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };
    
    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <div className="min-h-[1020] p-4 md:p-8 font-sans">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
                        Your Installed Apps
                    </h1>
                    <p className="text-gray-500 mt-2 text-base sm:text-lg">
                        Here are all the apps you have installed.
                    </p>
                </div>

                {displayedApps.length > 0 ? (
                    <div>
                        <div className="flex justify-end mb-4">
                            <select onChange={handleSortChange} value={sortOrder} className="p-2 border rounded-lg">
                                <option value="" disabled>Sort by Downloads</option>
                                <option value="high-low">High-Low</option>
                                <option value="low-high">Low-High</option>
                            </select>
                        </div>
                        <div className="grid grid-cols-1 gap-5">
                            {displayedApps.map((app) => (
                                <div key={app.id} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md w-full">
                                    <Link to={`/apps/${app.id}`} className="flex items-center space-x-4 flex-grow">
                                        <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                                            <img src={app.image} alt={`${app.title} icon`} className="w-12 h-12 object-contain" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-800">
                                                {app.title}
                                            </h3>
                                            <div className="flex items-center text-sm text-gray-500 space-x-3">
                                                <div className="flex items-center">
                                                    <span className="text-green-500 mr-1">↓</span>
                                                    <span>{(app.downloads / 1000000).toFixed(1)}M</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <span className="text-yellow-400 mr-1">★</span>
                                                    <span>{app.ratingAvg}</span>
                                                </div>
                                                <span>{app.size} MB</span>
                                            </div>
                                        </div>
                                    </Link>
                                    <button
                                        onClick={() => handleUninstall(app.id)}
                                        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-md transition duration-150 ease-in-out"
                                    >
                                        Uninstall
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-xl text-gray-500">You haven't installed any apps yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Installed;
