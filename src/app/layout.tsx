import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "QuickCare",
  description: "Accéder rapidement aux urgences médicales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="bg-[#f3f4f6] min-h-screen font-sans text-[#222]">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 flex flex-col items-center px-2 py-6 bg-[#f3f4f6] w-full">
            {children}
          </main>
          <footer className="w-full text-center py-4 text-xs text-[#f3f4f6] border-t bg-[#317359]">
            © {new Date().getFullYear()} QuickCare. Pour votre santé, chaque minute compte.
          </footer>
        </div>
      </body>
    </html>
  );
}
