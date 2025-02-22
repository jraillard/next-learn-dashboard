import AcmeLogo from "@/app/ui/acme-logo";
import { lusitana } from "@/app/ui/fonts";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div
            id="toto"
            className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black"
          />
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Acme.</strong> This is the example for the{" "}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>{" "}
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          { /* BAD WAY */ }
          {/* next-js-learning-way
            => Ici le problème est double : la taille est fixe ET  Next va tout le temps charger l'image en taille réelle et la redimensionner en CSS.
            => Preuve = si on change la taille de la page puis "Ouvrir dans un nouvel onglet", on verra que l'image est chargée en taille réelle à chaque fois.
            ==> Chrome affiche un message d'avertissement : 
            Image with src "/hero-desktop.png" has either width or height modified, but not the other. If you use CSS to change the size of your image, also include the styles 'width: "auto"' or 'height: "auto"' to maintain the aspect ratio.
           */}           
          {/* <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          /> */}

          {/* BEST WAY */}
          {/*  next-js-best-way
              Pour solutionner : 
                - Taille est pas responsive => Utilisation de prop "fill" pour que l'image soit responsive. 
                  => cela oblige à mettre l'image dans un wrapper spécifique (cf erreur chrome => Image with src "/hero-desktop.png" has "fill" and parent element with invalid "position". Provided "static" should be one of absolute,fixed,relative.)
                - Next charge tjs la même taille => sizes prop permettant de définir les tailles d'image à charger en fonction de la taille de l'écran.
                 => ex : sizes="(max-width: 720px) 100vw, 700px"
                AU PASSAGE cela évite d'utiliser deux images différentes avec des media queries. comme proposé dans le cours ...

                NOTE : en web par défaut utiliser le mode responsive de chrome c'est plus simple
           */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "1000px",
              maxHeight: "760px",
              aspectRatio: "70 / 45",
            }}
          >
            <Image
              src="/hero-desktop.png"
              fill
              sizes="(max-width: 720px) 100vw, 700px"
              alt="Screenshots of the dashboard project showing desktop version"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
