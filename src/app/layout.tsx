// src/app/layout.tsx
import './globals.css';
import Navbar from '@/components/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-neutral-100 text-neutral-800 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
