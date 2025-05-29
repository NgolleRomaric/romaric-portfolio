import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ImageZenya from "@/public/zenya.jpg";
import ImageMobiverse from "@/public/mobiverse.jpg";
import ImageHillaz from "@/public/hillaz.jpg";
import FictifProject from "@/public/fictif project.jpg";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="py-20 px-2">
      <div className="flex flex-col items-center justify-center mx-auto">
        <div className="text-center text-white text-md font-medium bg-primary rounded-md px-2.5 py-2 mx-auto w-fit">
          Projects
        </div>
        <h2 className="text-center font-medium text-3xl mt-8 max-w-sm md:max-w-xl lg:max-w-xl mx-auto">
          A showcase of real-world projects where design meets code and vision
          becomes experience.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mt-12 max-w-sm md:max-w-2xl lg:max-w-5xl mx-auto">
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
                <h3 className="text-xl font-medium">Zenya - Wellness Spa</h3>
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
        </div>
        <Link href="/project">
          <Button className="px-6 py-5 text-md mt-10 bg-white hover:bg-white text-black font-medium border dark:text-white dark:border-white/70 dark:bg-background hover:opacity-50 transition-opacity">
            View my work <ArrowRight className="ml-1" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
