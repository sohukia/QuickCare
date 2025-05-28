import React from "react";
import type { Hospital } from "@/types/hospital";

export interface HospitalListTileProps {
    hospital: Hospital;
    myPosition?: { latitude: number; longitude: number };
}

const getGoogleMapsDirectionsUrl = (
    from: { latitude: number; longitude: number },
    to: { latitude: number; longitude: number },
    mode: "vehiculePersonnel" | "transportCommun" | "aPied" = "vehiculePersonnel"
) =>
    `https://www.google.com/maps/dir/${from.latitude},${from.longitude}/${to.latitude},${to.longitude}/data=!3m1!4b1!4m2!4m1!3e${mode === "vehiculePersonnel" ? "0" : mode === "aPied" ? "2" : "3"}`;

const HospitalListTile: React.FC<HospitalListTileProps> = ({ hospital, myPosition }) => {
    const openInMaps = () => {
        if (!myPosition) return;
        const { latitude, longitude } = hospital.position || { latitude: 0, longitude: 0 };
        window.open(getGoogleMapsDirectionsUrl(myPosition, { latitude, longitude }), "_blank");
    };
    
    return (
        <div className="border border-[#3c8a6b] rounded-xl p-5 shadow-sm bg-white flex flex-col gap-2">
            <div className="flex items-center gap-3 mb-1">
                <span className="font-semibold text-lg text-[#317359]">{hospital.name}</span>
                <span className="ml-auto text-xs px-2 py-0.5 rounded bg-[#3c8a6b] text-white font-medium">
                {hospital.speciality}
                </span>
            </div>
            <div className="text-sm text-[#377f62] mb-1 whitespace-pre-line flex items-center gap-2">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                    <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
                    fill="#32745a"
                    />
                </svg>
                {hospital.address}
            </div>
        <div className="flex flex-wrap gap-4 mt-1 text-sm">
            <span className="flex items-center gap-1">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                    <rect x="4" y="11" width="16" height="2" rx="1" fill="#22c55e" />
                    <rect x="11" y="4" width="2" height="16" rx="1" fill="#32745a" />
                </svg>{" "}
                Attente :{" "}
                {hospital.currentWaitTime !== undefined
                    ? `${Math.round(hospital.currentWaitTime * 60)} min`
                    : "N/A"}
            </span>
            <span className="flex items-center gap-1">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                    <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
                    fill="#32745a"
                    />
                </svg>{" "}
                Trajet :{" "}
                {hospital.travelTime ? `${Math.round(hospital.travelTime / 60)} min` : "N/A"}
            </span>
            </div>
            {myPosition && (
                <div className="flex items-center justify-end mt-2">
                    <button
                        onClick={openInMaps}
                        className="px-4 py-2 bg-[#32745a] text-white rounded-lg font-semibold text-sm shadow hover:bg-[#317359] transition-colors w-fit"
                    >
                        Itinéraire Google Maps
                    </button>
                </div>
            )}
        </div>
    );
};

export default HospitalListTile;
