// src/app/hospitals/page.tsx
import HospitalsPageClient from "./HospitalsPageClient";
import type { Hospital } from "@/types/hospital";

// Server component (default export)
export default async function HospitalsPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const latitude = parseFloat(((await searchParams).latitude as string) || "0");
  const longitude = parseFloat(((await searchParams).longitude as string) || "0");
  const transport = ((await searchParams).profile as string) || "vehiculePersonnel";
  const emergency = ((await searchParams).speciality as string) || "adulte";
  // Build query string for internal API
  const params = new URLSearchParams({
    profile: transport,
    speciality: emergency,
    latitude: latitude.toString(),
    longitude: longitude.toString(),
    page: "0",
    limit: "50",
  });
  let hospitals: Hospital[] = [];
  let error: string | null = null;
  try {
    // Use relative URL to internal API route
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/hospitals?${params.toString()}`, {
      cache: "no-store",
    });
    if (res.ok) {
      const data = await res.json();
      hospitals = data.hospitals || [];
    } else {
      error = "Failed to fetch hospitals";
    }
  } catch (err) {
    error = err instanceof Error ? err.message : "Erreur inconnue.";
  }
  const myPosition = { latitude, longitude };

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-full space-y-4 p-4 bg-[#3c8a6b]/30 rounded-xl shadow max-w-2xl mx-auto mt-8">
        <span className="text-red-500 text-lg font-medium">{error}</span>
      </div>
    );
  }

  return <HospitalsPageClient hospitals={hospitals} myPosition={myPosition} />;
}
