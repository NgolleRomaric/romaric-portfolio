import { Card } from "@/components/ui/card";
import ImageGraphicDesign from "@/public/Graphic design.png";
import ImageGraphicDesign2 from "@/public/Graphic design 2.png";
import ImageUIUXDesign from "@/public/UIUX Design.png";
import ImageFrontEnd from "@/public/Front end.png";
import Illustrator from "@/public/logo illustrator.svg";
import Figma from "@/public/logo figma.svg";
import VSCode from "@/public/logo vscode.svg";
import Image from "next/image";

const logos = [
  { name: "Illustrator", image: Illustrator },
  { name: "Figma", image: Figma },
  { name: "VSCode", image: VSCode },
];

export default function Services() {
  return (
    <section className="py-20 px-2" id="services">
      <div className="container mx-auto">
        <div className="text-center text-white text-md font-medium bg-primary rounded-md px-2.5 py-2 mx-auto w-fit">
          Services
        </div>
        <h2 className="text-center font-medium text-3xl mt-8 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto">
          From idea to interface, I help brands look sharp and work beautifully
        </h2>
        <div className="container md:hidden lg:hidden">
          <Card className="rounded-2xl border-border p-8 bg-card relative overflow-hidden max-w-sm mx-auto mt-12 dark:border">
            <div>
              <h3 className="font-semibold text-2xl mb-2">Graphic Design</h3>
              <h4 className="text-gray-500 text-xm">
                Visual identities / flyers / posters / packaging...
              </h4>
              <p className="text-gray-400 text-sm mb-6">
                Build a strong and memorable brand image.
              </p>
              <Image
                src={ImageGraphicDesign}
                alt="ipsum"
                width={334}
                height={142.91}
              />
            </div>
          </Card>
          <Card className="rounded-2xl border-border p-8 bg-card relative overflow-hidden max-w-sm mx-auto mt-2.5 dark:border">
            <Image
              src={ImageUIUXDesign}
              alt="ipsum"
              width={334}
              height={142.91}
            />
            <div className="mt-1">
              <h3 className="font-semibold text-2xl mb-2">UI/UX Design</h3>
              <h4 className="text-gray-500 text-xm">
                Interface design / web & mobile mockups / prototypes
              </h4>
              <p className="text-gray-400 text-sm">
                Deliver smooth, intuitive, and enjoyable user experiences.
              </p>
            </div>
          </Card>
          <Card className="rounded-2xl border-border p-8 bg-card relative overflow-hidden max-w-sm mx-auto mt-2.5 dark:border">
            <Image
              src={ImageFrontEnd}
              alt="ipsum"
              width={334}
              height={142.91}
            />
            <div className="mt-1">
              <h3 className="font-semibold text-2xl mb-2">UI/UX Design</h3>
              <h4 className="text-gray-500 text-xm">
                Interface design / web & mobile mockups / prototypes
              </h4>
              <p className="text-gray-400 text-sm">
                Deliver smooth, intuitive, and enjoyable user experiences.
              </p>
            </div>
          </Card>
          <Card className="rounded-2xl border-border p-8 bg-card relative overflow-hidden max-w-sm mx-auto mt-2.5 dark:border">
            <div className="container">
              <h3 className="font-semibold text-2xl mb-2">Full Package</h3>
              <h4 className="text-gray-500 text-xm">
                Graphic Design + UI/UX + Front-End Dev
              </h4>
              <p className="text-gray-400 text-sm mb-6">
                From concept to launch — a complete solution for your digital
                project.
              </p>
              <div className="flex justify-center items-center gap-3">
                {logos.map((logo) => (
                  <Image src={logo.image} key={logo.name} alt={logo.name} />
                ))}
              </div>
            </div>
          </Card>
        </div>
        <div className="flex items-center justify-center mt-12 hidden lg:max-w-5xl md:max-w-2xl mx-auto md:block lg:block">
          <div className="grid grid-cols-3 grid-rows-4 gap-2.5">
            <Card className="col-span-2 row-span-3 items-center justify-center rounded-2xl bg-card p-5 border-card hover:border hover:border-border transition-all duration-300">
              <div className="container">
                <div className="mb-5">
                  <h3 className="font-semibold text-xl ml-4">Graphic Design</h3>
                  <h4 className="text-gray-500 text-[15px] ml-4">
                    Visual identities / flyers / posters / packaging...
                  </h4>
                  <p className="text-gray-400 text-[12px] mb-6 ml-4">
                    Build a strong and memorable brand image.
                  </p>
                </div>
                <Image
                  src={ImageGraphicDesign2}
                  alt="ipsum"
                  width={640.23}
                  height={276.79}
                />
              </div>
            </Card>
            <Card className="col-span-1 row-span-2 items-center justify-center rounded-2xl bg-card p-5 border-card hover:border hover:border-border transition-all duration-300">
              <Image
                src={ImageUIUXDesign}
                alt="ipsum"
                width={334}
                height={142.91}
              />
              <div className="container">
                <h3 className="font-semibold text-xl">UI/UX Design</h3>
                <h4 className="text-gray-500 text-[15px]">
                  Interface design / web & mobile mockups / prototypes
                </h4>
                <p className="text-gray-400 text-[12px]">
                  Deliver smooth, intuitive, and enjoyable user experiences.
                </p>
              </div>
            </Card>
            <Card className="col-span-1 row-span-3 items-center justify-center rounded-2xl bg-card p-5 border-card hover:border hover:border-border transition-all duration-300">
              <Image
                src={ImageFrontEnd}
                alt="ipsum"
                width={334}
                height={142.91}
              />
              <div className="container">
                <h3 className="font-semibold text-xl">Front-End Development</h3>
                <h4 className="text-gray-500 text-[15px]">
                  Showcase websites / landing pages / web integration
                </h4>
                <p className="text-gray-400 text-[12px]">
                  Bring your designs to life with clean, responsive code.
                </p>
              </div>
            </Card>
            <Card className="col-span-2 row-span-2 items-center justify-center rounded-2xl bg-card p-5 border-card hover:border hover:border-border transition-all duration-300">
              <div className="flex items-center justify-between lg:gap-12 md:gap-6">
                <div className="max-w-sm md:max-w-xm">
                  <h3 className="font-semibold text-xl mb-2">Full Package</h3>
                  <h4 className="text-gray-500 text-[15px]">
                    Graphic Design + UI/UX + Front-End Dev
                  </h4>
                  <p className="text-gray-400 text-[12px] ">
                    From concept to launch — a complete <br /> solution for your
                    digital project.
                  </p>
                </div>
                <div className="flex justify-center items-center gap-3">
                  {logos.map((logo) => (
                    <Image
                      src={logo.image}
                      key={logo.name}
                      alt={logo.name}
                      className="md:w-12 md:h-12 lg:w-20 lg:h-20"
                    />
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
