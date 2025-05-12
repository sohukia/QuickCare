// src/components/HospitalList.tsx
import { useEffect, useState, useRef, useCallback } from "react";
import { Hospital } from "@/types/hospital";
import HospitalListTile from "./HospitalListTile";
import HospitalListTileSkeleton from "@/components/hospitals/HospitalListTileSkeleton"; 
import { fetchHospitals } from "@/api/fetchHospitals";

export default function HospitalList() {
    const [hospitals, setHospitals] = useState<Hospital[]>([]);
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const observer = useRef<IntersectionObserver | null>(null);

    // Limit per page (can be adjusted)
    const LIMIT = 10;

    // Fetch data when the page number changes
    useEffect(() => {
        const loadHospitals = async () => {
            setIsLoading(true);
            try {
                const newHospitals = await fetchHospitals(page, LIMIT);
                setHospitals((prev) => [...prev, ...newHospitals]);
                setHasMore(newHospitals.length === LIMIT);
            } catch (error) {
                console.error("Failed to fetch hospitals:", error);
            } finally {
                setIsLoading(false);
            }
        };

        loadHospitals();
    }, [page]);

    // Infinite Scroll Observer
    const lastHospitalRef = useCallback((node: HTMLDivElement) => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                setPage((prevPage) => prevPage + 1);
            }
        });
        if (node) observer.current.observe(node);
    }, [isLoading, hasMore]);

    return (
        <div className="flex flex-col space-y-4">
            {hospitals.map((hospital, index) => {
                if (hospitals.length === index + 1) {
                    return (
                        <div ref={lastHospitalRef} key={hospital.name}>
                            <HospitalListTile hospital={hospital} />
                        </div>
                    );
                } else {
                    return (
                        <HospitalListTile key={hospital.name} hospital={hospital} />
                    );
                }
            })}
            {isLoading && (
                <div className="flex flex-col space-y-4">
                    {Array.from({ length: LIMIT }).map((_, index) => (
                        <HospitalListTileSkeleton key={index} />
                    ))}
                </div>
            )}
        </div>
    );
}
