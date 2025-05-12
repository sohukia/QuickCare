// src/components/HospitalListTileSkeleton.tsx
export default function HospitalListTileSkeleton() {
    return (
        <div className="flex flex-col m-2 p-4 border border-gray-300 rounded-lg shadow-md animate-pulse">
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
    );
}
