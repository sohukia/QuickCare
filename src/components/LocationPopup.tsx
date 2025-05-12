"use client";

import { useState, useEffect } from "react";

export default function LocationPopup({
    onRequestLocation,
}: {
    onRequestLocation: (getLocation: () => void) => void;
}) {
    const [showPopup, setShowPopup] = useState(false);
    const [location, setLocation] = useState<GeolocationPosition | null>(null);
    const [error, setError] = useState<GeolocationPositionError | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        navigator.permissions
            .query({ name: "geolocation" })
            .then((result) => {
                if (result.state === "granted") {
                    setShowPopup(false);
                    onRequestLocation(getLocation);
                } else if (result.state === "prompt") {
                    setShowPopup(true);
                }
            })
            .catch(() => setShowPopup(true)); // Fallback in case permissions API is not supported
    }, []);

    const getLocation = () => {
        setIsLoading(true);
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation(position);
                setIsLoading(false);
            },
            (error) => {
                setError(error);
                setIsLoading(false);
            }
        );
    };

    return (
        <div>
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded shadow-lg text-center">
                        <h2 className="text-lg font-semibold mb-4">Permission de localisation</h2>
                        <p className="mb-4">
                            Nous avons besoin de votre localisation pour vous fournir des services adaptés.
                        </p>
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            onClick={() => {
                                setShowPopup(false);
                                onRequestLocation(getLocation);
                            }}
                        >
                            J'accepte
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}