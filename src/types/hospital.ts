export interface HospitalPosition {
    latitude: number;
    longitude: number;
}

export interface Hospital {
    id: number;
    name: string;
    address: string;
    speciality: string;
    public: boolean;
    position: HospitalPosition;
    currentWaitTime?: number;
    nextWaitTime?: number;
    travelTime?: number;
    score?: number | null;
}
