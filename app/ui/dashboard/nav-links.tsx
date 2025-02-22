"use client";
import { usePathname } from "next/navigation";

import {
  DocumentDuplicateIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  { name: "Customers", href: "/dashboard/customers", icon: UserGroupIcon },
];

export default function NavLinks() {
  /** Permet de récupérer la page active
   * Attention oblige à passer en ClientSide MAIS ! le layout (parent) est server side donc le premier état sera deja rendu côté serveur
   * On a donc tout les avantages de SSR + les avantages du client side pour la navigation
   * Attention : L'effet c que au clic sur un lien, la navbar s'actualise automatiquement mais la page associée doit d'abord être rendue côté serveur (voir plus tard pour mettre un loading spinner)
   */
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        /** BAD WAY
         * La page se recharge complètement à chaque clic sur un lien (même probleme avec react-router)
         */
        /**
         * return (
          <a
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </a>
        );
         */

        /** GOOD WAY
         * Utiliser Link qui fait une redirection client side (équivalent history.push / pushstate en JS natif)
         * Petit plus : en prod (après next build), next va précharger les pages référencées en cache pour une navigation plus rapide
         */
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
