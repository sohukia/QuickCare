// src/app/page.tsx
import SearchForm from "@/components/SearchForm";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-6">Recherche d'Hôpitaux</h1>
            <SearchForm />
        </div>
    );
}
