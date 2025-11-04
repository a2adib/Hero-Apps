import React from "react";
import useApps from "../../hooks/useApps";
import AppCard from "../AppCard/AppCard";
import { Link } from "react-router-dom";

const TrendingApps = () => {
  const { apps } = useApps()
  const trendingApps = apps.slice(0, 8)
  return (
    <section className="py-10">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Trending Apps
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Explore All Trending Apps on the
          Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-5 gap-5">
        {
          trendingApps.map(app => (
            <AppCard key={app.id} app={app}/>
          ))
        }
      </div>
      <div className="mt-4">
        <Link
        to="/Apps"
      className="px-6 py-2 rounded-md text-white font-medium 
                 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] 
                 shadow-sm"
    >
      Show All
    </Link>
      </div>
    </section>
  );
};

export default TrendingApps;
