"use client";

import Meyie from "@/public/img clients/Jores Monthe.jpg";
import Hillary from "@/public/img clients/Hillaz Joyce.jpeg";
import Duplex from "@/public/img clients/DUPLEX POUNDE.jpeg";
import MC from "@/public/img clients/Sorelle Fosso.jpg";
import Parish from "@/public/img clients/DARRYL NOUBISSI.jpeg";
import Priscille from "@/public/img clients/Priscille Kamdom.jpeg";
import Sasha from "@/public/img clients/Leanne sasha Fokam.jpeg";
import Wilfried from "@/public/img clients/Wilfried Prombo.jpg";
import { motion } from "motion/react";
import { Fragment } from "react";
import Image from "next/image";

// Type pour les témoignages
const testimonials = [
  {
    name: "MEYIE Jores",
    photo: Meyie,
    role: "IT technician",
    message:
      "Les connaissances transversales et multiformes de Romaric font de lui une ressource efficace que tout le monde aimerait avoir dans son équipe. Son sens du détail et son souci du travail bien fait le démarquent toujours au sein de l'équipe.",
  },
  {
    name: "Hillary Fono",
    photo: Hillary,
    role: "CEO of Hillaz Burger",
    message:
      "Un travail exceptionnel et un professionnalisme remarquable. Votre dévouement et votre talent vous mèneront sans aucun doute vers de grands succès. Je vous souhaite de continuer sur cette belle lancée.",
  },
  {
    name: "Duplex POUNDE",
    photo: Duplex,
    role: "Resp. Automatisation Sérigraphie | ETS YLCER",
    message:
      "Je recommande vivement Romaric Ngolle. Il a une façon unique de concevoir les sites : créative, originale et toujours adaptée à ce qu’on recherche. Grâce à lui, j’ai un site qui se démarque vraiment, tant sur le fond que sur la forme.",
  },
  {
    name: "Marie Claire",
    photo: MC,
    role: "Web Design Student",
    message:
      "A great and rewarding experience that helped me develop my skills and gain confidence.",
  },
  {
    name: "Germann Pessidjo",
    photo: "",
    role: "Developpeur",
    message:
      "J'ai eu à travailler sur plusieurs projets avec Léo. Je le reconnais comme une personne très professionnelle et créative. C'est un réel plaisir de collaborer avec lui.",
  },
  {
    name: "Mr Parish",
    photo: Parish,
    role: "Chef d’entreprise",
    message:
      "Travailler avec Léo etait vraiment un soulagement pour moi…. J’ai parcouru beaucoup de graphistes designer qui m’ont déçus… alors quand je suis tomber sur lui le résultat etait impactant tellement ses affiches me parlaient ainsi qu’à mes clients que j’ai gagné en visibilité seulement grâce à la beauté de mes visuels Grand merci Mr Leo vous êtes un professionnel parce que vous aimez dabord votre métier. Vous avez de l’avenir. Dieu vous bénisse !!",
  },
  {
    name: "Samira Reina",
    photo: "",
    role: "Propriétaire de Reina's Touch",
    message:
      "Quand je travaille avec Romaric je ne parle pas beaucoup 😂il lit dans mes pensées et le travail est impeccable ✨",
  },
  {
    name: "Priscille Kamdom",
    photo: Priscille,
    role: "Propriétaire de Kamtresses",
    message:
      "J’ai eu le plaisir de collaborer avec Romaric pour la création du logo de Kamtresses et je ne peux que saluer son professionnalisme et son incroyable sens du détail. Il a su comprendre ma vision dès le départ et la traduire parfaitement en image. Créatif, réactif et très compétent, Romaric est un vrai passionné qui maîtrise son domaine. Je le recommande vivement à toute personne ou entreprise à la recherche d’un travail de qualité ! :)",
  },
  {
    name: "Fokam Leanne Sasha",
    photo: Sasha,
    role: "Responsable de BURGER CAMER QUEEN",
    message:
      "J’ai vraiment été très satisfaite par tes services en tant qu’informaticien pour la réalisation de mon entreprise Romaric c’était vraiment très bien fait 👌",
  },
  {
    name: "Wilfried Prombo",
    photo: Wilfried,
    role: "Full-stack developer | React | Next.js",
    message:
      "Romaric was able to turn our ideas into clear, effective mock-ups. His attention to detail and responsiveness made all the difference. A smooth and pleasant collaboration.",
  },
  {
    name: "Sephora Fouagou",
    photo: "",
    role: "Banquière",
    message:
      "Disponible, à l’écoute et très réactif, Romaric a su parfaitement répondre à mes attentes avec professionnalisme sur la réalisation des supports visuels pour mon événement, un véritable designer.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="flex flex-col items-center justify-center px-2 mx-auto">
        <div className="text-center text-white text-md font-medium bg-primary rounded-md px-2.5 py-2 mx-auto w-fit">
          Testimonials
        </div>
        <h2 className="text-center font-medium text-3xl mt-8 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto">
          They Trusted Me to Bring Their Ideas to Life
        </h2>
      </div>
      <div className="container mt-12">
        <div className="flex overflow-hidden mt-20 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <motion.div
            animate={{ x: "-50%" }}
            transition={{
              duration: 120,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-none gap-6 pr-24"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <Fragment key={i}>
                {testimonials.map((testimonial, index) => (
                  <div
                    key={`${i}-${index}`}
                    className="max-w-[300px] lg:max-w-[540px] bg-card rounded-2xl px-12 py-8 flex-shrink-0"
                  >
                    <div className="flex items-center gap-4 mb-2">
                      {testimonial.photo ? (
                        <Image
                          src={testimonial.photo}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-primary" />
                      )}
                      <div>
                        <h4 className="text-lg font-semibold">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-black/70 dark:text-white/70">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm mt-4 leading-relaxed">
                      &quot;{testimonial.message}&quot;
                    </p>
                  </div>
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
