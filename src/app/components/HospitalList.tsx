import React from "react";
import type { Hospital } from "@/types/hospital";
import HospitalListTile from "./HospitalListTile";
import HospitalListTileSkeleton from "./HospitalListTileSkeleton";

export interface HospitalListProps {
  hospitals: Hospital[];
  loading?: boolean;
  myPosition?: { latitude: number; longitude: number };
}

const HospitalList: React.FC<HospitalListProps> = ({ hospitals, loading = false, myPosition }) => {
  if (loading) {
    // Show 5 skeletons while loading
    return (
      <ul className="flex flex-col gap-4 mt-6 w-full max-w-2xl">
        {[...Array(5)].map((_, i) => (
          <li key={i}><HospitalListTileSkeleton /></li>
        ))}
      </ul>
    );
  }
  if (!hospitals.length) {
    return (
      <div className="text-[#377f62] bg-white/80 border border-[#3c8a6b] rounded p-4 text-center font-medium mt-6">
        Aucun hôpital trouvé pour ces critères.
      </div>
    );
  }
  return (
    <ul className="flex flex-col gap-4 mt-6 w-full max-w-2xl">
      {hospitals.map((hospital) => (
        <li key={hospital.id}>
          <HospitalListTile hospital={hospital} myPosition={myPosition} />
        </li>
      ))}
    </ul>
  );
};

export default HospitalList;
