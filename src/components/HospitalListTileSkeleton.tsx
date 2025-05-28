import React from "react";

const HospitalListTileSkeleton: React.FC = () => (
  <div className="border border-[#3c8a6b] rounded-xl p-5 shadow-sm bg-white flex flex-col gap-2 animate-pulse">
    <div className="flex items-center gap-3 mb-1">
      <div className="w-3 h-3 rounded-full bg-gray-300" />
      <div className="h-5 bg-gray-300 rounded w-1/3" />
      <div className="ml-auto h-4 w-16 bg-gray-200 rounded" />
    </div>
    <div className="h-4 bg-gray-200 rounded w-2/3 mb-1" />
    <div className="flex flex-wrap gap-4 mt-1">
      <div className="h-4 bg-gray-200 rounded w-24" />
      <div className="h-4 bg-gray-200 rounded w-20" />
    </div>
    <div className="mt-2 h-8 w-32 bg-gray-200 rounded self-end" />
  </div>
);

export default HospitalListTileSkeleton;
