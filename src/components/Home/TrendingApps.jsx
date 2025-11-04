import React from "react";
import useApps from "../../hooks/useApps";
import AppCard from "../AppCard/AppCard";

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
    </section>
  );
};

export default TrendingApps;
