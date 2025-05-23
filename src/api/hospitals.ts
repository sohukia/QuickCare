// src/api/hospitals.ts
import { Hospital, Hospitals } from "@/types/hospital";
import { SearchFormData } from "@/types/request";

// Add pagination support
export const fetchHospitals = async (page = 0, limit = 10): Promise<Hospital[]> => {
    const response = await fetch(`http://localhost:5000/api/hospitals?page=${page}&limit=${limit}`);
    if (!response.ok) throw new Error("Failed to fetch hospitals");
    const data = await response.json();
    return data.hospitals;
};

export const searchHospitals = async (formData: SearchFormData): Promise<Hospitals> => {
    try {
        const response = await fetch("http://localhost:5000/api/hospitals/search", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) throw new Error("Failed to fetch hospitals");

        const data: Hospitals = await response.json();
        return data;
    } catch (error) {
        console.error("Error while searching for hospitals:", error);
        throw error;
    }
};
