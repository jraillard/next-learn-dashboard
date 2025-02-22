import { inter } from "@/app/ui/fonts";
import "@/app/ui/global.css";
import { Metadata } from "next";

/** On peut faire cela sur n'importe quel layout ou page pour ajouter des infos supplémentaires
 *  L'héritage de metadata est possible MAIS on vient écraser la valeur de le composant enfant
 * OU alors : on peut utiliser des templates , exemple : {title} | Acme Dashboard (genre pour mettre un nom de compagnie ou autre)
 */
export const metadata: Metadata = {
  title: {
    template: "%s | Acme Dashboard", // pour les enfants
    default: "Acme Dashboard", // pour la route actuelle et ceux qui redéfinissent pas
  },
  description: "The official Next.js Course Dashboard, built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

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
