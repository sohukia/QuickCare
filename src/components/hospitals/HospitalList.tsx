// src/components/HospitalList.tsx
import { useEffect, useState, useRef, useCallback } from "react";
import { Hospital, Position } from "@/types/hospital";
import HospitalListTile from "./HospitalListTile";
import HospitalListTileSkeleton from "@/components/hospitals/HospitalListTileSkeleton"; 
import { fetchHospitals } from "@/api/hospitals";

export default function HospitalList({ myPosition } : { myPosition: Position} ) {
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
                const uniqueKey = `${hospital.id}-${index}`;
                if (hospitals.length === index + 1) {
                    return (
                        <div ref={lastHospitalRef} key={uniqueKey}>
                            <HospitalListTile hospital={hospital} myPosition={myPosition}/>
                        </div>
                    );
                } else {
                    return (
                        <HospitalListTile key={uniqueKey} hospital={hospital}  myPosition={myPosition}/>
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
