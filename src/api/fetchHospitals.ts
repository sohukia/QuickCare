// src/api/fetchHospitals.ts
import { Hospital } from "@/types/hospital";

export const fetchHospitals = async (page: number, limit: number): Promise<Hospital[]> => {
    const response = await fetch(`http://localhost:5000/api/hospitals?page=${page}&limit=${limit}`);
    if (!response.ok) throw new Error("Failed to fetch hospitals");
    const data = await response.json();
    return data.hospitals;
};
