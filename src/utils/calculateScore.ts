import { Hospital } from "@/types/hospital";

export const calculateScore = (hospital: Hospital): number => {
    const { currentWaitTime, travelTime, specialties, public: isPublic } = hospital;
    const publicBonus = isPublic ? 0.2 : 0;
    const specialtyBonus = specialties.length * 0.05;
    
    // Main formula
    return (1 / (currentWaitTime + travelTime)) * (1 + publicBonus + specialtyBonus);
};
