// src/app/hospitals/page.tsx
"use client";
import { useSearchParams } from "next/navigation";
import { searchHospitals } from "@/api/hospitals";
import { useEffect, useState } from "react";
import HospitalList from "@/components/hospitals/HospitalList";
import { Hospital, Position } from "@/types/hospital";
import { SearchFormData } from "@/types/request";

export default function HospitalsPage() {
    const searchParams = useSearchParams();
    const position = {
        latitude: parseFloat(searchParams.get("latitude") || "0"),
        longitude: parseFloat(searchParams.get("longitude") || "0"),
    };
    const [hospitals, setHospitals] = useState<Hospital[]>([]);

    useEffect(() => {
        const fetchHospitals = async () => {
            const formData = {
                position: position,
                transportMode: searchParams.get("transportMode") || "vehiculePersonnel",
                emergencyType: searchParams.get("emergencyType") || "general",
            };

            const result = await searchHospitals(formData as SearchFormData);
            setHospitals(result.hospitals);
        };

        fetchHospitals();
    }, [searchParams]);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Hôpitaux trouvés :</h1>
            <HospitalList myPosition={position as Position}/>
        </div>
    );
}
