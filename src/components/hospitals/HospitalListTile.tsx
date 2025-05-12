import { Hospital } from "@/types/hospital";
import { MapPin, Timer, Navigation } from "lucide-react";

export default function HospitalListTile({ hospital }: { hospital: Hospital }) {
  const openInMaps = () => {
    const { latitude, longitude } = hospital.position;
    window.open(`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`, "_blank");
  };

  return (
    <div className="flex flex-col m-2 p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 bg-white">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold">{hospital.name}</h2>
        <span
          className={`px-3 py-1 text-xs font-medium rounded-full ${
            hospital.public ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {hospital.public ? "Public" : "Privé"}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center">
          <MapPin className="w-5 h-5 text-gray-500 mr-2" />
          <p className="text-sm">{hospital.address}</p>
        </div>

        <div className="flex items-center">
          <Navigation className="w-5 h-5 text-gray-500 mr-2" />
          <p className="text-sm">Position: {hospital.position.latitude}, {hospital.position.longitude}</p>
        </div>

        <div className="flex items-center">
          <Timer className="w-5 h-5 text-gray-500 mr-2" />
          <p className="text-sm">Temps d'attente: {hospital.currentWaitTime} min</p>
        </div>

        <div className="flex items-center">
          <Timer className="w-5 h-5 text-gray-500 mr-2" />
          <p className="text-sm">Temps de trajet: {hospital.travelTime} min</p>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-md font-semibold mb-1">Spécialités:</h3>
        <ul className="list-disc list-inside text-sm">
          {hospital.specialties.map((specialty, index) => (
            <li key={index}>{specialty}</li>
          ))}
        </ul>
      </div>

      <button
        onClick={openInMaps}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Sélectionner
      </button>
    </div>
  );
}
