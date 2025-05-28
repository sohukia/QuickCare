import React from "react";

export interface LocationDisplayProps {
  lat: number;
  lng: number;
}

const LocationDisplay: React.FC<LocationDisplayProps> = ({ lat, lng }) => (
  <div className="mb-6 flex items-center gap-4 text-[#f3f4f6]">
    <span className="inline-flex items-center gap-1 bg-[#3c8a6b] px-3 py-1 rounded-full text-sm font-medium">
      <svg
        width="18"
        height="18"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
          fill="#f3f4f6"
        />
      </svg>
      {lat.toFixed(4)}, {lng.toFixed(4)}
    </span>
    <span className="text-xs text-[#377f62]">Votre position actuelle</span>
  </div>
);

export default LocationDisplay;
