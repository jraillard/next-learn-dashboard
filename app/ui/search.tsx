"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search({
  placeholder,
}: Readonly<{ placeholder: string }>) {
  // Pas de TypeSafety pour useSearchParams ni pour URLSearchParams :'(
  // TODO : autre option utiliser https://nuqs.47ng.com/docs/installation || https://medium.com/@Jaimayal/how-to-properly-manage-search-params-in-nextjs-app-router-leverage-the-power-of-nuqs-the-right-way-9f7238cff76a
  const searchParams = useSearchParams();

  // Attention version FULL CSR
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    console.log(`Searching... ${term}`);
    // Permet de manipuler les paramètres de l'URL
    // En l'occurence la on créer des query params se basant sur notre objet searchParams
    // Ici : ?query={value}
    const params = new URLSearchParams(searchParams);
    params.set("page", "1"); // Par défaut on sera toujours sur la page 1
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    // Ceci update l'url SANS recharger la page
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label
        htmlFor="search" // accessible label
        className="sr-only"
      >
        Search
      </label>
      <input
        id="search" // accessible label
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        /** Pas oublier de sync l'input avec l'URL updatée ;)
         * Si utilise la valeur via un state => value prop
         * Sinon defaultValue
         */
        defaultValue={searchParams.get("search") ?? ""}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
