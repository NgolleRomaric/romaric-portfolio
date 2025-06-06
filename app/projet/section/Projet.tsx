import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ImageZenya from "@/public/zenya.jpg";
import ImageMobiverse from "@/public/mobiverse.jpg";
import ImageHillaz from "@/public/hillaz.jpg";
import ImageReina from "@/public/Reinas Touch.jpg";
import ImageKask from "@/public/kask.jpg";
import ImageKamtresses from "@/public/Kamtresses.jpg";
import ImageMakedecine from "@/public/make.jpg";
import ImageJerseys from "@/public/jersey day.jpg";
import ImageBCQ from "@/public/tablier BCQ.jpg";
import ImageSam from "@/public/cup sam shooping.jpg";
import ImageOrni from "@/public/PAQUET ORNI CRACK.jpg";
import ImageParoisse from "@/public/visuels paroisse.jpg";
import ImageChevent from "@/public/ch event card.jpg";
import ImageSV from "@/public/logo 3.jpg";
import FictifProject from "@/public/fictif project.jpg";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Projet() {
  return (
    <section className="mt-30 lg:mt-34 mb-30 px-2">
      <div className="flex flex-col items-center justify-center mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 max-w-sm md:max-w-2xl lg:max-w-5xl mx-auto">
          {/* Zenya */}
          <Link
            href="https://www.behance.net/gallery/221622889/Identit-visuelle-Zenya-spa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="flex flex-rows bg-card lg:border-white dark:border-white/10 lg:dark:border-card lg:dark:hover:border-white/10 lg:hover:border-black/10 transition-all duration-300 items-center justify-center rounded-2xl p-3">
              <div>
                <Image
                  src={ImageZenya}
                  alt="alt"
                  className="w-[350px] h-[289px] lg:w-[539px] rounded-2xl object-cover"
                />
              </div>
              <div className="ml-2.5">
                <div>
                  <h3 className="text-xl font-medium">Zenya - Wellness Spa</h3>
                  <Badge className="text-sm bg-white dark:bg-white/70 text-black/70 font-normal px-3 py-1.5 mt-2">
                    Graphic Design
                  </Badge>
                </div>
                <div className="flex items-center justify-center gap-4 mt-3 mb-3">
                  <p className="text-black/70 dark:text-white/70 lg:max-w-xl">
                    A calming and luxurious brand identity for a modern spa
                    experience.
                  </p>
                  <div className="p-1.5 bg-primary rounded-full mr-2 hover:opacity-50 transition-opacity">
                    <ArrowUpRight
                      size={32}
                      strokeWidth={2}
                      className="text-white"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </Link>

          {/* Fictif Project */}
          <Link
            href="https://www.behance.net/gallery/221618321/Identit-visuelle-Fictif-Project"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="flex flex-rows bg-card lg:border-white dark:border-white/10 lg:dark:border-card lg:dark:hover:border-white/10 lg:hover:border-black/10 transition-all duration-300 items-center justify-center rounded-2xl p-3">
              <div>
                <Image
                  src={FictifProject}
                  alt="alt"
                  className="w-[350px] h-[289px] lg:w-[539px] rounded-2xl object-cover"
                />
              </div>
              <div className="ml-2.5">
                <div>
                  <h3 className="text-xl font-medium">
                    Fictif Project – Creative Brief Generator
                  </h3>
                  <div className="flex items-center gap-2">
                    <Badge className="text-sm bg-white dark:bg-white/70 text-black/70 font-normal px-3 py-1.5 mt-2">
                      Graphic Design
                    </Badge>
                    <Badge className="text-sm bg-white dark:bg-white/70 text-black/70 font-normal px-3 py-1.5 mt-2">
                      UI/UX Design
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 mt-3 mb-3">
                  <p className="text-black/70 dark:text-white/70 lg:max-w-xl">
                    Creative challenge platform for designers and developers.
                  </p>
                  <div className="p-1.5 bg-primary rounded-full mr-2 hover:opacity-50 transition-opacity">
                    <ArrowUpRight
                      size={32}
                      strokeWidth={2}
                      className="text-white"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </Link>

          {/* Mobiverse */}
          <Link
            href="https://www.behance.net/gallery/227398793/Mobiverse"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="flex flex-rows bg-card lg:border-white dark:border-white/10 lg:dark:border-card lg:dark:hover:border-white/10 lg:hover:border-black/10 transition-all duration-300 items-center justify-center rounded-2xl p-3">
              <div>
                <Image
                  src={ImageMobiverse}
                  alt="alt"
                  className="w-[350px] h-[289px] lg:w-[539px] rounded-2xl object-cover"
                />
              </div>
              <div className="ml-2.5">
                <div>
                  <h3 className="text-xl font-medium">
                    Mobiverse - App e-commerce
                  </h3>
                  <Badge className="text-sm bg-white dark:bg-white/70 text-black/70 font-normal px-3 py-1.5 mt-2">
                    UI/UX Design
                  </Badge>
                </div>
                <div className="flex items-center justify-center gap-4 mt-3 mb-3">
                  <p className="text-black/70 dark:text-white/70 lg:max-w-xl">
                    Mobiverse is an e-commerce application for selling phones
                  </p>
                  <div className="p-1.5 bg-primary rounded-full mr-2 hover:opacity-50 transition-opacity">
                    <ArrowUpRight
                      size={32}
                      strokeWidth={2}
                      className="text-white"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </Link>

          {/* Hillaz Burgers */}
          <Link
            href="https://www.behance.net/gallery/221619075/Identit-Visuelle-Hillaz-Burgers"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="flex flex-rows bg-card lg:border-white dark:border-white/10 lg:dark:border-card lg:dark:hover:border-white/10 lg:hover:border-black/10 transition-all duration-300 items-center justify-center rounded-2xl p-3">
              <div>
                <Image
                  src={ImageHillaz}
                  alt="alt"
                  className="w-[350px] h-[289px] lg:w-[539px] rounded-2xl object-cover"
                />
              </div>
              <div className="ml-2.5">
                <div>
                  <h3 className="text-xl font-medium">Hillaz Burgers</h3>
                  <Badge className="text-sm bg-white dark:bg-white/70 text-black/70 font-normal px-3 py-1.5 mt-2">
                    Graphic Design
                  </Badge>
                </div>
                <div className="flex items-center justify-center gap-4 mt-3 mb-3">
                  <p className="text-black/70 dark:text-white/70 lg:max-w-xl">
                    Fast food offering delicious burgers and refreshing drinks.
                  </p>
                  <div className="p-1.5 bg-primary rounded-full mr-2 hover:opacity-50 transition-opacity">
                    <ArrowUpRight
                      size={32}
                      strokeWidth={2}
                      className="text-white"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </Link>

          {/* Reina's Touch */}
          <Link
            href="https://www.behance.net/gallery/227109471/Reinas-Touch"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="flex flex-rows bg-card lg:border-white dark:border-white/10 lg:dark:border-card lg:dark:hover:border-white/10 lg:hover:border-black/10 transition-all duration-300 items-center justify-center rounded-2xl p-3">
              <div>
                <Image
                  src={ImageReina}
                  alt="alt"
                  className="w-[350px] h-[289px] lg:w-[539px] rounded-2xl object-cover"
                />
              </div>
              <div className="ml-2.5">
                <div>
                  <h3 className="text-xl font-medium">Reina&apos;s Touch</h3>
                  <Badge className="text-sm bg-white dark:bg-white/70 text-black/70 font-normal px-3 py-1.5 mt-2">
                    Graphic Design
                  </Badge>
                </div>
                <div className="flex items-center justify-center gap-4 mt-3 mb-3">
                  <p className="text-black/70 dark:text-white/70 lg:max-w-xl">
                    Store offering a trendy selection of women&apos;s clothing
                    and accessories.
                  </p>
                  <div className="p-1.5 bg-primary rounded-full mr-2 hover:opacity-50 transition-opacity">
                    <ArrowUpRight
                      size={32}
                      strokeWidth={2}
                      className="text-white"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </Link>

          {/* Kask */}
          <Link
            href="https://www.behance.net/gallery/221574275/Identit-visuelle-KASK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="flex flex-rows bg-card lg:border-white dark:border-white/10 lg:dark:border-card lg:dark:hover:border-white/10 lg:hover:border-black/10 transition-all duration-300 items-center justify-center rounded-2xl p-3">
              <div>
                <Image
                  src={ImageKask}
                  alt="alt"
                  className="w-[350px] h-[289px] lg:w-[539px] rounded-2xl object-cover"
                />
              </div>
              <div className="ml-2.5">
                <div>
                  <h3 className="text-xl font-medium">Kask</h3>
                  <div className="flex items-center gap-2">
                    <Badge className="text-sm bg-white dark:bg-white/70 text-black/70 font-normal px-3 py-1.5 mt-2">
                      Graphic Design
                    </Badge>
                    <Badge className="text-sm bg-white dark:bg-white/70 text-black/70 font-normal px-3 py-1.5 mt-2">
                      UI/UX Design
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 mt-3 mb-3">
                  <p className="text-black/70 dark:text-white/70 lg:max-w-xl">
                    Store specializing in modern, high-performance audio
                    headphones.
                  </p>
                  <div className="p-1.5 bg-primary rounded-full mr-2 hover:opacity-50 transition-opacity">
                    <ArrowUpRight
                      size={32}
                      strokeWidth={2}
                      className="text-white"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </Link>

          {/* Kamtresses */}
          <Link
            href="https://www.behance.net/gallery/221616847/Identit-visuelle-KAMTRESSE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="flex flex-rows bg-card lg:border-white dark:border-white/10 lg:dark:border-card lg:dark:hover:border-white/10 lg:hover:border-black/10 transition-all duration-300 items-center justify-center rounded-2xl p-3">
              <div>
                <Image
                  src={ImageKamtresses}
                  alt="alt"
                  className="w-[350px] h-[289px] lg:w-[539px] rounded-2xl object-cover"
                />
              </div>
              <div className="ml-2.5">
                <div>
                  <h3 className="text-xl font-medium">Kamtresses</h3>
                  <Badge className="text-sm bg-white dark:bg-white/70 text-black/70 font-normal px-3 py-1.5 mt-2">
                    Graphic Design
                  </Badge>
                </div>
                <div className="flex items-center justify-center gap-4 mt-3 mb-3">
                  <p className="text-black/70 dark:text-white/70 lg:max-w-xl">
                    Creative hair salon for all your hair styling needs.
                  </p>
                  <div className="p-1.5 bg-primary rounded-full mr-2 hover:opacity-50 transition-opacity">
                    <ArrowUpRight
                      size={32}
                      strokeWidth={2}
                      className="text-white"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </Link>

          {/* Smart vaccin */}
          <Link
            href="https://www.behance.net/gallery/221571699/Smart-vaccin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="flex flex-rows bg-card lg:border-white dark:border-white/10 lg:dark:border-card lg:dark:hover:border-white/10 lg:hover:border-black/10 transition-all duration-300 items-center justify-center rounded-2xl p-3">
              <div>
                <Image
                  src={ImageSV}
                  alt="alt"
                  className="w-[350px] h-[289px] lg:w-[539px] rounded-2xl object-cover"
                />
              </div>
              <div className="ml-2.5">
                <div>
                  <h3 className="text-xl font-medium">Smart vaccin</h3>
                  <Badge className="text-sm bg-white dark:bg-white/70 text-black/70 font-normal px-3 py-1.5 mt-2">
                    Graphic Design
                  </Badge>
                </div>
                <div className="flex items-center justify-center gap-4 mt-3 mb-3">
                  <p className="text-black/70 dark:text-white/70 lg:max-w-xl">
                    Convenient app to book and manage your vaccination
                    appointments easily.
                  </p>
                  <div className="p-1.5 bg-primary rounded-full mr-2 hover:opacity-50 transition-opacity">
                    <ArrowUpRight
                      size={32}
                      strokeWidth={2}
                      className="text-white"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </Link>

          {/* Makedecine */}
          <Link
            href="https://www.behance.net/gallery/227360949/MAKEDECINCE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="flex flex-rows bg-card lg:border-white dark:border-white/10 lg:dark:border-card lg:dark:hover:border-white/10 lg:hover:border-black/10 transition-all duration-300 items-center justify-center rounded-2xl p-3">
              <div>
                <Image
                  src={ImageMakedecine}
                  alt="alt"
                  className="w-[350px] h-[289px] lg:w-[539px] rounded-2xl object-cover"
                />
              </div>
              <div className="ml-2.5">
                <div>
                  <h3 className="text-xl font-medium">Makedecine</h3>
                  <Badge className="text-sm bg-white dark:bg-white/70 text-black/70 font-normal px-3 py-1.5 mt-2">
                    Graphic Design
                  </Badge>
                </div>
                <div className="flex items-center justify-center gap-4 mt-3 mb-3">
                  <p className="text-black/70 dark:text-white/70 lg:max-w-xl">
                    Beauty salon dedicated to enhancing and caring for clients.
                  </p>
                  <div className="p-1.5 bg-primary rounded-full mr-2 hover:opacity-50 transition-opacity">
                    <ArrowUpRight
                      size={32}
                      strokeWidth={2}
                      className="text-white"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </Link>

          {/* CH event */}
          <Link
            href="https://www.behance.net/gallery/227362875/CH-event"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="flex flex-rows bg-card lg:border-white dark:border-white/10 lg:dark:border-card lg:dark:hover:border-white/10 lg:hover:border-black/10 transition-all duration-300 items-center justify-center rounded-2xl p-3">
              <div>
                <Image
                  src={ImageChevent}
                  alt="alt"
                  className="w-[350px] h-[289px] lg:w-[539px] rounded-2xl object-cover"
                />
              </div>
              <div className="ml-2.5">
                <div>
                  <h3 className="text-xl font-medium">CH event</h3>
                  <Badge className="text-sm bg-white dark:bg-white/70 text-black/70 font-normal px-3 py-1.5 mt-2">
                    Graphic Design
                  </Badge>
                </div>
                <div className="flex items-center justify-center gap-4 mt-3 mb-3">
                  <p className="text-black/70 dark:text-white/70 lg:max-w-xl">
                    Event management and organization services for individuals
                    and businesses.
                  </p>
                  <div className="p-1.5 bg-primary rounded-full mr-2 hover:opacity-50 transition-opacity">
                    <ArrowUpRight
                      size={32}
                      strokeWidth={2}
                      className="text-white"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </Link>

          {/* Sam shopping */}
          <Link
            href="https://www.behance.net/gallery/221617149/Logo-design-Sam-shopping"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="flex flex-rows bg-card lg:border-white dark:border-white/10 lg:dark:border-card lg:dark:hover:border-white/10 lg:hover:border-black/10 transition-all duration-300 items-center justify-center rounded-2xl p-3">
              <div>
                <Image
                  src={ImageSam}
                  alt="alt"
                  className="w-[350px] h-[289px] lg:w-[539px] rounded-2xl object-cover"
                />
              </div>
              <div className="ml-2.5">
                <div>
                  <h3 className="text-xl font-medium">Sam shopping</h3>
                  <Badge className="text-sm bg-white dark:bg-white/70 text-black/70 font-normal px-3 py-1.5 mt-2">
                    Graphic Design
                  </Badge>
                </div>
                <div className="flex items-center justify-center gap-4 mt-3 mb-3">
                  <p className="text-black/70 dark:text-white/70 lg:max-w-xl">
                    Store offering a trendy selection of women&apos;s and
                    men&apos;s clothing, shoes and accessories.
                  </p>
                  <div className="p-1.5 bg-primary rounded-full mr-2 hover:opacity-50 transition-opacity">
                    <ArrowUpRight
                      size={32}
                      strokeWidth={2}
                      className="text-white"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </Link>

          {/* Jersey's day */}
          <Link
            href="https://www.behance.net/gallery/221622285/Social-Media-Event"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="flex flex-rows bg-card lg:border-white dark:border-white/10 lg:dark:border-card lg:dark:hover:border-white/10 lg:hover:border-black/10 transition-all duration-300 items-center justify-center rounded-2xl p-3">
              <div>
                <Image
                  src={ImageJerseys}
                  alt="alt"
                  className="w-[350px] h-[289px] lg:w-[539px] rounded-2xl object-cover"
                />
              </div>
              <div className="ml-2.5">
                <div>
                  <h3 className="text-xl font-medium">Jersey&apos;s Day</h3>
                  <Badge className="text-sm bg-white dark:bg-white/70 text-black/70 font-normal px-3 py-1.5 mt-2">
                    Graphic Design
                  </Badge>
                </div>
                <div className="flex items-center justify-center gap-4 mt-3 mb-3">
                  <p className="text-black/70 dark:text-white/70 lg:max-w-xl">
                    Event celebrating retro football jerseys and their history.
                  </p>
                  <div className="p-1.5 bg-primary rounded-full mr-2 hover:opacity-50 transition-opacity">
                    <ArrowUpRight
                      size={32}
                      strokeWidth={2}
                      className="text-white"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </Link>

          {/* Paroisse de Nkolmbong */}
          <Link
            href="https://www.behance.net/gallery/221617739/Social-media-Paroisse-de-Nkolmbong"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="flex flex-rows bg-card lg:border-white dark:border-white/10 lg:dark:border-card lg:dark:hover:border-white/10 lg:hover:border-black/10 transition-all duration-300 items-center justify-center rounded-2xl p-3">
              <div>
                <Image
                  src={ImageParoisse}
                  alt="alt"
                  className="w-[350px] h-[289px] lg:w-[539px] rounded-2xl object-cover"
                />
              </div>
              <div className="ml-2.5">
                <div>
                  <h3 className="text-xl font-medium">
                    Paroisse de Nkolmbong DLA
                  </h3>
                  <Badge className="text-sm bg-white dark:bg-white/70 text-black/70 font-normal px-3 py-1.5 mt-2">
                    Graphic Design
                  </Badge>
                </div>
                <div className="flex items-center justify-center gap-4 mt-3 mb-3">
                  <p className="text-black/70 dark:text-white/70 lg:max-w-xl">
                    Visuals to communicate events and movements in the church.
                  </p>
                  <div className="p-1.5 bg-primary rounded-full mr-2 hover:opacity-50 transition-opacity">
                    <ArrowUpRight
                      size={32}
                      strokeWidth={2}
                      className="text-white"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </Link>

          {/* Burger Kmer queen */}
          <Link
            href="https://www.behance.net/gallery/217149491/Identit-visuelle-Burger-Kamer-Queen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="flex flex-rows bg-card lg:border-white dark:border-white/10 lg:dark:border-card lg:dark:hover:border-white/10 lg:hover:border-black/10 transition-all duration-300 items-center justify-center rounded-2xl p-3">
              <div>
                <Image
                  src={ImageBCQ}
                  alt="alt"
                  className="w-[350px] h-[289px] lg:w-[539px] rounded-2xl object-cover"
                />
              </div>
              <div className="ml-2.5">
                <div>
                  <h3 className="text-xl font-medium">Burger Camer Queen</h3>
                  <Badge className="text-sm bg-white dark:bg-white/70 text-black/70 font-normal px-3 py-1.5 mt-2">
                    Graphic Design
                  </Badge>
                </div>
                <div className="flex items-center justify-center gap-4 mt-3 mb-3">
                  <p className="text-black/70 dark:text-white/70 lg:max-w-xl">
                    Fast food offering delicious burgers and refreshing drinks.
                  </p>
                  <div className="p-1.5 bg-primary rounded-full mr-2 hover:opacity-50 transition-opacity">
                    <ArrowUpRight
                      size={32}
                      strokeWidth={2}
                      className="text-white"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </Link>

          {/* Orni crack */}
          <Link
            href="https://www.behance.net/gallery/227359949/Orni-Crack"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="flex flex-rows bg-card lg:border-white dark:border-white/10 lg:dark:border-card lg:dark:hover:border-white/10 lg:hover:border-black/10 transition-all duration-300 items-center justify-center rounded-2xl p-3">
              <div>
                <Image
                  src={ImageOrni}
                  alt="alt"
                  className="w-[350px] h-[289px] lg:w-[539px] rounded-2xl object-cover"
                />
              </div>
              <div className="ml-2.5">
                <div>
                  <h3 className="text-xl font-medium">Orni Crack</h3>
                  <Badge className="text-sm bg-white dark:bg-white/70 text-black/70 font-normal px-3 py-1.5 mt-2">
                    Graphic Design
                  </Badge>
                </div>
                <div className="flex items-center justify-center gap-4 mt-3 mb-3">
                  <p className="text-black/70 dark:text-white/70 lg:max-w-xl">
                    Crunchy and tasty plantain chips, perfect for sharing.
                  </p>
                  <div className="p-1.5 bg-primary rounded-full mr-2 hover:opacity-50 transition-opacity">
                    <ArrowUpRight
                      size={32}
                      strokeWidth={2}
                      className="text-white"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
}
