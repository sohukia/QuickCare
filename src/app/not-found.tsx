import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-brand-light text-brand-dark px-6 text-center">
      <div className="max-w-md">
        <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6">404</h1>
        <p className="text-xl md:text-2xl font-sans mb-4">
          Oups ! On dirait que cette page s&apos;est égarée...
        </p>
        <p className="text-sm text-brand-dark/70 mb-8">
          Peut-être qu&apos;elle s&apos;est perdue sur le chemin de l&apos;hôpital.
        </p>
        <Link href="/">
          <span className="inline-block bg-[#377f62] text-white px-6 py-3 rounded-xl font-medium cursor-pointer">
            Page d&apos;accueil
          </span>
        </Link>
        <div className="mt-10 text-xs text-black/50">
          Si cela continue, blâmez le stagiaire. On fait toujours ça.
        </div>
      </div>
    </div>
  );
}
