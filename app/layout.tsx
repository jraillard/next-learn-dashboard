import { inter } from "@/app/ui/fonts";
import "@/app/ui/global.css";

/**
 * Root layout for the entire application
 * A tout intérêt à être static pour éviter les re-renders inutiles
 * Principale utilitée : injecter des styles globaux, des providers, html / body tags et autres metadatas / analytics
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
