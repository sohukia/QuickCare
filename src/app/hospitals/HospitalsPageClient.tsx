"use client";
import React from "react";
import HospitalList from "@/components/HospitalList";
import type { Hospital } from "@/types/hospital";

export default function HospitalsPageClient({ hospitals, myPosition }: { hospitals: Hospital[]; myPosition: { latitude: number; longitude: number } }) {
  return (
    <div className="p-4 bg-white/90 rounded-xl shadow max-w-2xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4 text-[#317359]">Hôpitaux trouvés :</h1>
      <HospitalList hospitals={hospitals} loading={false} myPosition={myPosition} />
    </div>
  );
}
