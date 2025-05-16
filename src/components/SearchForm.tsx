// src/components/SearchForm.tsx
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
    TransportMode,
    EmergencyType,
    SearchFormData,
    DisplayTransportMode,
} from "@/types/request";
import SpinnerLoader from "./SpinnerLoader";

const DISPLAY_TRANSPORT_MODE: DisplayTransportMode = {
    vehiculePersonnel: "Véhicule personnel",
    transportCommun: "Transport en commun",
    aPied: "À pied",
};

const EMERGENCY_TYPES: EmergencyType[] = [
    "general",
    "cardiac",
    "trauma",
    "neurology",
    "pediatrics",
    "orthopedics",
];

export default function SearchForm() {
    const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
    const [transportMode, setTransportMode] = useState<TransportMode>("vehiculePersonnel");
    const [emergencyType, setEmergencyType] = useState<EmergencyType>("general");
    const [loading, setLoading] = useState(true);
    const [requestLoading, setRequestLoading] = useState(false);

    const router = useRouter();

    // Fetch user's current position
    useEffect(() => {
        // navigator.geolocation.getCurrentPosition(
        //     (pos) => {
        //         setPosition({
        //             latitude: pos.coords.latitude,
        //             longitude: pos.coords.longitude,
        //         });
        //         setLoading(false);
        //     },
        //     (err) => {
        //         console.error("Failed to get position:", err.message);
        //         setLoading(false);
        //     }
        // );
        setPosition({
            latitude: 48.8566, // Example latitude (Paris)
            longitude: 2.3522, // Example longitude (Paris)
        });
        setLoading(false);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setRequestLoading(true);
        // Navigate to the hospitals page with query parameters
        router.push(`/hospitals?page=1&latitude=${position.latitude}&longitude=${position.longitude}&transportMode=${transportMode}&emergencyType=${emergencyType}`);
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-full space-y-4">
                <p className="text-gray-500">Chargement de votre position...</p>
                <SpinnerLoader />
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="p-4 border border-gray-300 rounded-lg shadow-md space-y-6">
            <div className="space-y-2">
                <h3 className="text-lg font-semibold">Mode de Transport</h3>
                <div className="flex gap-4">
                    {Object.entries(DISPLAY_TRANSPORT_MODE).map(([mode, label]) => (
                        <label key={mode} className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="transportMode"
                                value={mode}
                                checked={transportMode === mode}
                                onChange={() => setTransportMode(mode as TransportMode)}
                            />
                            <span>{label}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="space-y-2">
                <h3 className="text-lg font-semibold">Type d'Urgence</h3>
                <select
                    value={emergencyType}
                    onChange={(e) => setEmergencyType(e.target.value as EmergencyType)}
                    className="p-2 border border-gray-300 rounded-lg w-full"
                >
                    {EMERGENCY_TYPES.map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </div>

            <button
                type="submit"
                className={requestLoading ? "w-full px-4 py-2 bg-white text-blue font-semibold rounded hover:bg-blue-600" : "w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"}
            >
                {requestLoading ? (
                    <SpinnerLoader />
                ) : (
                    "Rechercher"
                )}
            </button>
        </form>
    );
}
