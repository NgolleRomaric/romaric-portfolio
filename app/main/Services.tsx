import { Card } from "@/components/ui/card";
import ImageGraphicDesign from "@/public/Graphic design.png";
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
    <section className="py-20">
      <div className="container mx-auto">
        <div className="text-center text-white text-md font-medium bg-primary rounded-md px-2.5 py-2 mx-auto w-fit">
          Services
        </div>
        <h2 className="text-center font-medium text-3xl mt-8 max-w-sm md:max-w-xl lg:max-w-5xl mx-auto">
          From idea to interface, I help brands look sharp and work beautifully
        </h2>
        <div className="container">
          <Card className="rounded-2xl border border-gray-200 p-8 bg-card relative overflow-hidden max-w-sm mx-auto mt-12">
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
          <Card className="rounded-2xl border border-gray-200 p-8 bg-card relative overflow-hidden max-w-sm mx-auto mt-2.5">
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
          <Card className="rounded-2xl border border-gray-200 p-8 bg-card relative overflow-hidden max-w-sm mx-auto mt-2.5">
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
          <Card className="rounded-2xl border border-gray-200 p-8 bg-card relative overflow-hidden max-w-sm mx-auto mt-2.5">
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
      </div>
    </section>
  );
}
