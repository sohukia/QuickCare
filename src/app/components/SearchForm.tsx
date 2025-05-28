// SearchForm.tsx
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Spinner from "./Spinner";

const TRANSPORT_OPTIONS = [
  { value: "aPied", label: "À pied" },
  { value: "vehiculePersonnel", label: "Véhicule personnel" },
  { value: "transportEnCommun", label: "Transport en commun" },
];

const EMERGENCY_OPTIONS = [
  { value: "adulte", label: "Adulte" },
  { value: "enfant", label: "Enfant" },
  { value: "ophthalmologie", label: "Ophthalmologie" },
  { value: "autre", label: "Autre" },
];

const SearchForm: React.FC = () => {
  const [transport, setTransport] = useState(TRANSPORT_OPTIONS[0].value);
  const [emergency, setEmergency] = useState(EMERGENCY_OPTIONS[0].value);
  const [loading, setLoading] = useState(true);
  const [geoError, setGeoError] = useState<string | null>(null);
  const [position, setPosition] = useState<{ latitude: number; longitude: number } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
      if (!navigator.geolocation) {
        setGeoError("La géolocalisation n'est pas supportée par votre navigateur.");
        setLoading(false);
        return;
      }
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition({ latitude: pos.coords.latitude, longitude: pos.coords.longitude });
          setLoading(false);
        },
        (err) => {
          setGeoError("Impossible d'obtenir votre position : " + err.message);
          setLoading(false);
        }
      );
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!position) return;
    setSubmitting(true);
    const params = new URLSearchParams({
      transport,
      emergency,
      latitude: position.latitude.toString(),
      longitude: position.longitude.toString(),
    });
    router.push(`/hospitals?${params.toString()}`);
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full space-y-4">
        <Spinner text="Chargement de votre position..."/>
      </div>
    );
  }
  if (geoError) {
    return (
      <div className="flex flex-col items-center justify-center h-full space-y-4">
        <span className="text-red-500">{geoError}</span>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-6 w-full max-w-md bg-white rounded-xl shadow p-6 border border-[#3c8a6b]" onSubmit={handleSubmit}>
      <label className="flex flex-col gap-2 text-[#317359] font-medium">
        <span className="mb-1">Type de transport</span>
        <select
          name="transport"
          className="border border-[#3c8a6b] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#32745a] bg-[#3c8a6b]/10"
          value={transport}
          onChange={e => setTransport(e.target.value)}
          disabled={submitting}
        >
          {TRANSPORT_OPTIONS.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-2 text-[#317359] font-medium">
        <span className="mb-1">Type d'urgence</span>
        <select
          name="emergency"
          className="border border-[#3c8a6b] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#32745a] bg-[#3c8a6b]/10"
          value={emergency}
          onChange={e => setEmergency(e.target.value)}
          disabled={submitting}
        >
          {EMERGENCY_OPTIONS.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </label>
      <button
        type="submit"
        className="bg-[#32745a] text-white rounded-lg py-2 font-semibold text-lg shadow hover:bg-[#317359] transition-colors disabled:opacity-60"
        disabled={submitting}
      >
        {submitting ? "Recherche..." : "Rechercher"}
      </button>
    </form>
  );
};

export default SearchForm;