"use client";

import { useState } from "react";
import LocationPopup from "@/components/LocationPopup";
import HospitalList from "@/components/hospitals/HospitalList";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLocationRequest = (getLocation: () => void) => {
    setIsLoading(true);
    getLocation();
  };

  const hospitals = [
    {
      name: "Hôpital de la Pitié-Salpêtrière",
      address: "47-83 Boulevard de l'Hôpital, 75013 Paris",
    },
    {
      name: "Hôpital Bichat-Claude Bernard",
      address: "46 Rue Henri Huchard, 75018 Paris",
    },
    {
      name: "Hôpital Saint-Louis",
      address: "1 Avenue Claude Vellefaux, 75010 Paris",
    },
  ];

  return (
    <div className="items-center justify-center w-screen h-screen flex flex-col">
      <div>
        {/* <LocationPopup onRequestLocation={handleLocationRequest} />
        {isLoading && <p>Chargement de votre position...</p>} */}
        <HospitalList hospitals={hospitals} />
      </div>
    </div>
  );
}
