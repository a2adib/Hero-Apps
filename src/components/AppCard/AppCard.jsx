import React from 'react';

const AppCard = ({app}) => {
    const { image, title, companyName, downloads, ratingAvg: rating } = app;
    return (
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">

      <div className="p-3">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full rounded-lg object-cover"
          />
        ) : (
          <div className="w-full rounded-lg bg-gray-200" />
        )}
      </div>

      <div className="px-3 pb-3">
        <h3 className="text-sm font-semibold text-slate-800 leading-snug">
          {title}
        </h3>
        <p className="text-xs text-slate-500">{companyName}</p>


        <div className="mt-3 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-600">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 3v12" />
              <path d="m7 10 5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
            {downloads}
          </span>

          <span className="inline-flex items-center gap-1 rounded-md bg-amber-50 px-2 py-1 text-xs font-semibold text-amber-600">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-current"
              aria-hidden="true"
            >
              <path d="M12 17.3 6.9 20l1-5.9-4.3-4.2 6-0.9L12 3l2.4 5 6 .9-4.3 4.2 1 5.9z" />
            </svg>
            {rating}
          </span>
        </div>
      </div>
    </div>
    );
};

export default AppCard;