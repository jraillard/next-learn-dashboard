import DashboardSkeleton from "@/app/ui/skeletons";

/**
 * Ce composant loading met un gros suspense autour de toute la page => il apparaîtra le temps que le server fasse le premier rendu de la page (statique & CSR)
 * Si la page contient ELLE AUSSI des suspenses sur des portions, on peut appliquer un Suspense en + sur ces portions aync
 *
 * * On appelle ça le Page Streaming
 *
 * ATTENTION : cela ralenti le chargement de la page forcément ..
 *
 * NOTE :
 *  on le met dans un route group pour qu'il soit juste appliqué à dashboard pas les nested routes
 *  on pourra alors faire un skeleton pour chaque nested page
 */
export default function Loading() {
  return <DashboardSkeleton />;
}
