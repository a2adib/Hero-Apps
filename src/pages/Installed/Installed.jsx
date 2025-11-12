import React, { useState, useEffect } from "react";
import useApps from "../../hooks/useApps";
import { getInstalledApps, removeInstalledApp } from "../../utils/localStorage";
import toast from "react-hot-toast";
import AppCard from "../../components/AppCard/AppCard";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const Installed = () => {
    const { apps, loading } = useApps();
    const [installedApps, setInstalledApps] = useState([]);
    const [sortOrder, setSortOrder] = useState('');

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
        setInstalledApps(sortedApps);
    }, [sortOrder]);

    const handleUninstall = (appId) => {
        if (window.confirm('Are you sure you want to uninstall this app?')) {
            removeInstalledApp(appId);
            setInstalledApps(installedApps.filter(app => app.id !== appId));
            toast.success('App uninstalled successfully!');
        }
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };
    
    const handleClearSort = () => {
        setSortOrder('');
        const installedAppIds = getInstalledApps();
        const installed = apps.filter(app => installedAppIds.includes(app.id));
        setInstalledApps(installed);
        toast.success('Sorting cleared!');
    };

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <div className="p-4 md:p-8 font-sans">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white border-4 border-dashed border-blue-100 p-8 rounded-2xl text-center shadow-lg mb-8">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
                        Your Installed Apps
                    </h1>
                    <p className="text-gray-500 mt-2 text-base sm:text-lg">
                        Explore All Trending Apps on the Market developed by us
                    </p>
                </div>

                {installedApps.length > 0 ? (
                    <div>
                        <div className="flex justify-end mb-4">
                            <select onChange={handleSortChange} value={sortOrder} className="p-2 border rounded-lg">
                                <option value="" disabled>Sort by Downloads</option>
                                <option value="high-low">High-Low</option>
                                <option value="low-high">Low-High</option>
                            </select>
                            <button onClick={handleClearSort} className="ml-2 px-3 py-1 bg-gray-500 text-white font-semibold text-xs rounded-lg shadow-md hover:bg-gray-600 transition duration-150 active:scale-95">Clear Sort</button>
                        </div>
                        {installedApps.map((app) => (
                            <div key={app.id} className="relative">
                                <Link to={`/apps/${app.id}`}>
                                    <AppCard app={app} />
                                </Link>
                                <button
                                    onClick={() => handleUninstall(app.id)}
                                    className="absolute top-2 right-2 px-3 py-1 bg-red-500 text-white font-semibold text-xs rounded-lg shadow-md hover:bg-red-600 transition duration-150 active:scale-95"
                                >
                                    Uninstall
                                </button>
                            </div>
                        ))}
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
