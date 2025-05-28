// src/app/hospitals/page.tsx
"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import HospitalList from "../components/HospitalList";
import type { Hospital } from "@/types/hospital";

async function fetchHospitals({
  transport,
  emergency,
  latitude,
  longitude,
  page = 0,
  limit = 50,
}: {
  transport: string;
  emergency: string;
  latitude: number;
  longitude: number;
  page?: number;
  limit?: number;
}): Promise<Hospital[]> {
  const params = new URLSearchParams({
    profile: transport,
    speciality: emergency,
    latitude: latitude.toString(),
    longitude: longitude.toString(),
    page: page.toString(),
    limit: limit.toString(),
  });
  const url = `http://127.0.0.1:5000/api/hospitals?${params.toString()}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch hospitals");
  const data = await response.json();
  return data.hospitals || [];
}

export default function HospitalsPage() {
  const searchParams = useSearchParams();
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const latitude = parseFloat(searchParams.get("latitude") || "0");
        const longitude = parseFloat(searchParams.get("longitude") || "0");
        const transport = searchParams.get("profile") || "vehiculePersonnel";
        const emergency = searchParams.get("speciality") || "adulte";
        const hospitals = await fetchHospitals({
          transport,
          emergency,
          latitude,
          longitude,
        });
        setHospitals(hospitals);
      } catch (err: any) {
        setError(err.message || "Erreur inconnue.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, [searchParams]);

  // Get myPosition for directions
  const latitude = parseFloat(searchParams.get("latitude") || "0");
  const longitude = parseFloat(searchParams.get("longitude") || "0");
  const myPosition = { latitude, longitude };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-full space-y-4 p-4 bg-[#3c8a6b]/30 rounded-xl shadow max-w-2xl mx-auto mt-8">
        <span className="text-[#317359] text-lg font-medium">Chargement des hôpitaux...</span>
        <HospitalList hospitals={[]} loading={true} myPosition={myPosition} />
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-full space-y-4 p-4 bg-[#3c8a6b]/30 rounded-xl shadow max-w-2xl mx-auto mt-8">
        <span className="text-red-500 text-lg font-medium">{error}</span>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white/90 rounded-xl shadow max-w-2xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4 text-[#317359]">Hôpitaux trouvés :</h1>
      <HospitalList hospitals={hospitals} loading={loading} myPosition={myPosition} />
    </div>
  );
}
