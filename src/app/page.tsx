"use client";
import { useEffect, useState } from "react";
import LocationDisplay from "@/components/LocationDisplay";
import SearchForm from "@/components/SearchForm";
import ErrorMessage from "@/components/ErrorMessage";

export default function HomePage() {
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setError(null);
      },
      (err) => {
        if (err.code === 1) {
          setError("Permission denied. Please allow location access.");
        } else {
          setError("Failed to retrieve location.");
        }
      }
    );
    // for testing purposes, you can set default coordinates
    setCoords({ lat: 48.8566, lng: 2.3522 }); // Paris coordinates

  }, []);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-full space-y-4 p-4 bg-white/90 rounded-xl shadow max-w-2xl mx-auto mt-8">
        <ErrorMessage message={error} />
      </div>
    );
  }
  if (coords) {
    return (
      <div className="p-4 bg-white/90 rounded-xl shadow max-w-2xl mx-auto mt-8">
        <LocationDisplay lat={coords.lat} lng={coords.lng} />
        <SearchForm />
        {error && <ErrorMessage message={error} />}
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4 p-4 bg-white/90 rounded-xl shadow max-w-2xl mx-auto mt-8">
      <span className="text-[#317359]">Requesting location permission...</span>
    </div>
  );
}
