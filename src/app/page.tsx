"use client";

import { useState } from "react";
import LocationPopup from "@/components/LocationPopup";
import SearchBar from "@/components/SearchBar";
import SearchForm from "@/components/request/RequestForm";

export default function Home() {
  const handleSearchSubmit = (formData: {
        position: { latitude: number; longitude: number };
        transportMode: "vehiculePersonnel" | "transportCommun" | "aPied";
        emergencyType: "general" | "cardiac" | "trauma" | "neurology" | "pediatrics" | "orthopedics";
    }) => {
        console.log("Search Request Sent:", formData);
        // Here, you can call your API with formData
    };

  return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Rechercher un Hôpital</h1>
            <SearchForm onSubmit={handleSearchSubmit} />
        </div>
    );
}
