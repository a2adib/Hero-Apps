import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppCard from "../../components/AppCard/AppCard";
import useApps from "../../hooks/useApps";
import appError from "../../assets/App-Error.png";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const Apps = () => {
  const { apps = [], loading } = useApps();
  const [query, setQuery] = useState("");

  
  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <section className="py-12 max-w-7xl mx-auto px-4">
      
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Our All Applications
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Explore all trending apps on the market developed by us
        </p>
      </div>

      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-8">
        <p className="text-sm font-medium text-gray-700">
          {filteredApps.length} Apps Found
        </p>

        <div className="flex items-center gap-4">
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search apps..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2 pr-10 text-sm text-gray-800 placeholder-gray-400 shadow-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
            />
            <svg
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          
        </div>
      </div>

      
      {filteredApps.length === 0 ? (
        <div className="text-center mt-16">
          <img
            src={appError}
            alt="Not Found"
            className="mx-auto w-64 md:w-80"
          />
          <h2 className="mt-6 text-xl md:text-2xl font-bold text-gray-800">
            OOPS!! APP NOT FOUND
          </h2>
          <p className="mt-2 text-gray-500 text-sm max-w-md mx-auto">
            The app you are requesting is not found on our system. Please try
            another app.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {filteredApps.map((app) => (
            <Link key={app.id} to={`/apps/${app.id}`} className="block">
              <AppCard app={app} />
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default Apps;
