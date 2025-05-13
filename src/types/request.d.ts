export type TransportMode = "vehiculePersonnel" | "transportCommun" | "aPied";

export type EmergencyType =
    | "general"
    | "cardiac"
    | "trauma"
    | "neurology"
    | "pediatrics"
    | "orthopedics";

export interface SearchFormData {
    position: {
        latitude: number;
        longitude: number;
    };
    transportMode: TransportMode;
    emergencyType: EmergencyType;
}

export interface DisplayTransportMode {
    vehiculePersonnel: string;
    transportCommun: string;
    aPied: string;
}
