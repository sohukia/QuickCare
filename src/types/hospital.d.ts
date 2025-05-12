// src/types/hospital.d.ts
export type Position = {
    latitude: number;
    longitude: number;
};

export type Hospital = {
    name: string;
    position: Position;
    address: string;
    specialties: string[];
    public: boolean;
    currentWaitTime: number;
    travelTime: number;
    score: number;
};

export type Hospitals = {
    hospitals: Hospital[];
};
