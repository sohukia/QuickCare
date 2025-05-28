// Spinner.tsx
import React from "react";

interface SpinnerProps {
  text?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ text = "Recherche en cours..." }) => (
  <div className="flex items-center gap-2 mt-6">
    <svg className="animate-spin h-6 w-6 text-[#32745a]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-label="Chargement" role="img">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
    </svg>
    <span className="text-[#317359] font-medium text-base">{text}</span>
  </div>
);

export default Spinner;