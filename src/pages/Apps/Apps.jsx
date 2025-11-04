import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import AppCard from "../../components/AppCard/AppCard";
import useApps from "../../hooks/useApps";

const Apps = () => {
  const { apps = [] } = useApps();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return apps;
    return apps.filter((a) => a.title?.toLowerCase().includes(q));
  }, [apps, query]);

  return (
    <section className="py-12 max-w-7xl mx-auto px-4">
      <header className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Our All Applications
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Explore all trending apps on the market developed by us
        </p>
      </header>

      <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm font-medium text-slate-700">
          {filtered.length} Apps Found
        </p>

        <div className="relative w-full md:w-80">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search apps..."
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 pr-10 text-sm text-slate-800 placeholder-slate-400 shadow-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
            aria-label="Search apps by title"
          />
          <svg
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400"
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

      {filtered.length === 0 ? (
        <div className="mt-16 text-center">
          <p className="text-slate-500 font-medium">No App Found</p>
          <p className="text-slate-400 text-sm mt-1">
            Try a different keyword.
          </p>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {filtered.map((app) => (
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
