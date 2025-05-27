import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";
import IconCall from "@/public/call icon.svg";
import Image from "next/image";
import Link from "next/link";

export default function Offers() {
  return (
    <section className="py-20 px-2" id="offers">
      <div className="flex flex-col items-center justify-center mx-auto">
        <div className="text-center text-white text-md font-medium bg-primary rounded-md px-2.5 py-2 mx-auto w-fit">
          My offers
        </div>
        <h2 className="text-center font-medium text-3xl mt-8 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto">
          Services made to fit your needs — whether it’s just a logo or a
          complete digital identity.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-2.5 mt-12">
          <div className="flex flex-col bg-card border border-black/20 dark:border-white/20 rounded-2xl py-5 w-[270px] mx-auto">
            <div className="border-b border-black/20 dark:border-white/20 pb-2 ">
              <div className="flex flex-col items-center justify-center px-6">
                <div className="text-center text-xl font-medium bg-white dark:bg-white/20 rounded-md px-8 py-2 mx-auto w-fit">
                  Graphic Design
                </div>
                <div className="flex items-center justify-between gap-16 mt-6 w-fit mx-auto">
                  <p className="text-black/70 dark:text-white/70">
                    Starting at
                  </p>
                  <span className="text-center text-xl font-bold dark:text-black bg-primary rounded-xl px-1.5 py-1.5 mx-auto w-fit">
                    $ 250
                  </span>
                </div>
                <p className="text-black/70 dark:text-white/70 mt-6 mb-6">
                  Ideal for: Logos, brand identity, marketing visuals
                </p>
              </div>
            </div>
            <div className="mt-8">
              <div className="flex flex-col items-start justify-center px-6">
                <p className="text-black/70 dark:text-white/70 font-medium">
                  Includes :
                </p>
                <div className="flex flex-col items-start justify-between gap-4 mt-6">
                  <div className="flex space-x-3 items-center">
                    <CircleCheck
                      size={20}
                      strokeWidth={2}
                      className="text-primary"
                    />
                    <p className="text-sm">2 initial design concepts</p>
                  </div>
                  <div className="flex space-x-3 items-center">
                    <CircleCheck
                      size={20}
                      strokeWidth={2}
                      className="text-primary"
                    />
                    <p className="text-sm">Up to 3 revisions</p>
                  </div>
                  <div className="flex space-x-3 items-start">
                    <CircleCheck
                      size={28}
                      strokeWidth={2}
                      className="text-primary"
                    />
                    <p className="text-sm">
                      Delivery of source files (PDF, PNG, SVG...)
                    </p>
                  </div>
                  <div className="flex space-x-3 items-center">
                    <CircleCheck
                      size={20}
                      strokeWidth={2}
                      className="text-primary"
                    />
                    <p className="text-sm">Brand usage guide</p>
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="https://cal.com/romaric-ngolle-edqtc3/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto"
            >
              <Button className="px-6 py-5 text-md text-white font-medium mt-16 mx-6 bg-gradient-to-r from-black from-[65%] to-[#666666] to-[100%] border-0 hover:opacity-80 transition-opacity">
                Request a quote
                <span>
                  <Image src={IconCall} alt="IconCall" />
                </span>
              </Button>
            </Link>
          </div>
          <div className="flex flex-col bg-card border border-black/20 dark:border-white/20 rounded-2xl py-5 w-[270px] mx-auto">
            <div className="border-b border-black/20 dark:border-white/20 pb-2 ">
              <div className="flex flex-col items-center justify-center px-6">
                <div className="text-center text-xl font-medium bg-white dark:bg-white/20 rounded-md px-8 py-2 mx-auto w-fit">
                  UI/UX Design
                </div>
                <div className="flex items-center justify-between gap-16 mt-6 w-fit mx-auto">
                  <p className="text-black/70 dark:text-white/70">
                    Starting at
                  </p>
                  <span className="text-center text-xl font-bold dark:text-black bg-primary rounded-xl px-1.5 py-1.5 mx-auto w-fit">
                    $ 500
                  </span>
                </div>
                <p className="text-black/70 dark:text-white/70 mt-6 mb-6">
                  Ideal for: Website or app UI, dashboards
                </p>
              </div>
            </div>
            <div className="mt-8">
              <div className="flex flex-col items-start justify-center px-6">
                <p className="text-black/70 dark:text-white/70 font-medium">
                  Includes :
                </p>
                <div className="flex flex-col items-start justify-between gap-4 mt-6">
                  <div className="flex space-x-3 items-start">
                    <CircleCheck
                      size={28}
                      strokeWidth={2}
                      className="text-primary"
                    />
                    <p className="text-sm">
                      Wireframes + final mockups (Figma)
                    </p>
                  </div>
                  <div className="flex space-x-3 items-start">
                    <CircleCheck
                      size={28}
                      strokeWidth={2}
                      className="text-primary"
                    />
                    <p className="text-sm">
                      Responsive design (desktop/mobile)
                    </p>
                  </div>
                  <div className="flex space-x-3 items-center">
                    <CircleCheck
                      size={20}
                      strokeWidth={2}
                      className="text-primary"
                    />
                    <p className="text-sm">Up to 2 revisions</p>
                  </div>
                  <div className="flex space-x-3 items-center">
                    <CircleCheck
                      size={20}
                      strokeWidth={2}
                      className="text-primary"
                    />
                    <p className="text-sm">Interactive prototype</p>
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="https://cal.com/romaric-ngolle-edqtc3/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto"
            >
              <Button className="px-6 py-5 text-md text-white font-medium mt-11 mx-6 bg-gradient-to-r from-black from-[65%] to-[#666666] to-[100%] border-0 hover:opacity-80 transition-opacity">
                Request a quote
                <span>
                  <Image src={IconCall} alt="IconCall" />
                </span>
              </Button>
            </Link>
          </div>
          <div className="flex flex-col bg-card border border-black/20 dark:border-white/20 rounded-2xl py-5 w-[270px] mx-auto">
            <div className="border-b border-black/20 dark:border-white/20 pb-2 ">
              <div className="flex flex-col items-center justify-center px-6">
                <div className="text-center text-xl font-medium bg-white dark:bg-white/20 rounded-md px-8 py-2 mx-auto w-fit">
                  Front-End Dev
                </div>
                <div className="flex items-center justify-between gap-16 mt-6 w-fit mx-auto">
                  <p className="text-black/70 dark:text-white/70">
                    Starting at
                  </p>
                  <span className="text-center text-xl font-bold dark:text-black bg-primary rounded-xl px-1.5 py-1.5 mx-auto w-fit">
                    $ 600
                  </span>
                </div>
                <p className="text-black/70 dark:text-white/70 mt-6 mb-6">
                  Ideal for: Landing pages, portfolios, small websites
                </p>
              </div>
            </div>
            <div className="mt-8">
              <div className="flex flex-col items-start justify-center px-6">
                <p className="text-black/70 dark:text-white/70 font-medium">
                  Includes :
                </p>
                <div className="flex flex-col items-start justify-between gap-4 mt-6">
                  <div className="flex space-x-3 items-start">
                    <CircleCheck
                      size={35}
                      strokeWidth={2}
                      className="text-primary"
                    />
                    <p className="text-sm">
                      Responsive integration (React/Next.js/Tailwind)
                    </p>
                  </div>
                  <div className="flex space-x-3 items-center">
                    <CircleCheck
                      size={20}
                      strokeWidth={2}
                      className="text-primary"
                    />
                    <p className="text-sm">Basic animations</p>
                  </div>
                  <div className="flex space-x-3 items-center">
                    <CircleCheck
                      size={20}
                      strokeWidth={2}
                      className="text-primary"
                    />
                    <p className="text-sm">Deployment</p>
                  </div>
                  <div className="flex space-x-3 items-center">
                    <CircleCheck
                      size={20}
                      strokeWidth={2}
                      className="text-primary"
                    />
                    <p className="text-sm">well-documented code</p>
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="https://cal.com/romaric-ngolle-edqtc3/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto"
            >
              <Button className="px-6 py-5 text-md text-white font-medium mt-16 mx-6 bg-gradient-to-r from-black from-[65%] to-[#666666] to-[100%] border-0 hover:opacity-80 transition-opacity">
                Request a quote
                <span>
                  <Image src={IconCall} alt="IconCall" />
                </span>
              </Button>
            </Link>
          </div>
          <div className="flex flex-col bg-primary border border-black/20 rounded-2xl py-5 w-[270px] mx-auto">
            <div className="border-b border-black/20 pb-2 ">
              <div className="flex flex-col items-center justify-center px-6">
                <div className="text-center dark:text-black text-xl font-medium bg-white rounded-md px-16 py-2 mx-auto w-fit">
                  Full Pack
                </div>
                <div className="flex items-center justify-between gap-14 mt-6 w-fit mx-auto">
                  <p className="text-black/70">Starting at</p>
                  <span className="text-center text-xl dark:text-black font-bold bg-white rounded-xl px-1.5 py-1.5 mx-auto w-fit">
                    $ 1000
                  </span>
                </div>
                <p className="text-black/70 mt-6 mb-6">
                  Ideal for: Complete branding and website projects
                </p>
              </div>
            </div>
            <div className="mt-8">
              <div className="flex flex-col items-start justify-center px-6">
                <p className="text-black/70 font-medium">Includes :</p>
                <div className="flex flex-col items-start dark:text-black justify-between gap-4 mt-6">
                  <div className="flex space-x-3 items-start">
                    <CircleCheck
                      size={22}
                      strokeWidth={2}
                      className="text-black"
                    />
                    <p className="text-sm">Visual identity + UI/UX design</p>
                  </div>
                  <div className="flex space-x-3 items-center">
                    <CircleCheck
                      size={20}
                      strokeWidth={2}
                      className="text-black"
                    />
                    <p className="text-sm">Front-end development</p>
                  </div>
                  <div className="flex space-x-3 items-center">
                    <CircleCheck
                      size={20}
                      strokeWidth={2}
                      className="text-black"
                    />
                    <p className="text-sm">3 feedback rounds</p>
                  </div>
                  <div className="flex space-x-3 items-start">
                    <CircleCheck
                      size={22}
                      strokeWidth={2}
                      className="text-black"
                    />
                    <p className="text-sm">7-day support after delivery</p>
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="https://cal.com/romaric-ngolle-edqtc3/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto"
            >
              <Button className="px-6 py-5 text-md text-white font-medium mt-11 mx-6 bg-gradient-to-r from-black from-[65%] to-[#666666] to-[100%] border-0 hover:opacity-80 transition-opacity">
                Request a quote
                <span>
                  <Image src={IconCall} alt="IconCall" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
