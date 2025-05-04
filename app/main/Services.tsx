import { Card } from "@/components/ui/card";
import Color from "@/public/img color.png";
import LogoIpsum from "@/public/img logo ipsum.png";
import Typo from "@/public/img typo.png";
import Mockup from "@/public/img mockup.png";
import Visual from "@/public/img visual.png";
import Image from "next/image";

export default function Services() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center text-white text-md font-medium bg-primary rounded-md px-2.5 py-2 mx-auto w-fit">
          Services
        </div>
        <h2 className="text-center font-medium text-3xl mt-8 max-w-sm mx-auto">
          From idea to interface, I help brands look sharp and work beautifully.
        </h2>
        <Card className="rounded-2xl border border-gray-200 p-8 bg-white relative overflow-hidden max-w-sm mx-auto mt-12">
          <div>
            <h3 className="font-semibold text-2xl mb-2">Graphic Design</h3>
            <h4 className="text-gray-500 text-xm">
              Visual identities / flyers / posters / packaging...
            </h4>
            <p className="text-gray-400 text-sm mb-6">
              Build a strong and memorable brand image.
            </p>
            <div>
              <div className="flex items-end space-x-[-32px] mt-8 relative z-10">
                <Image
                  src={Color}
                  alt="Color palette design"
                  className="relative z-10"
                />
                <Image
                  src={LogoIpsum}
                  alt="Logo design example"
                  className="z-30"
                />
                <Image
                  src={Typo}
                  alt="Typography design"
                  className="relative z-20"
                />
                <Image
                  src={Mockup}
                  alt="Design mockup"
                  className="relative z-0"
                />
                <Image
                  src={Visual}
                  alt="Visual design"
                  className="relative z-10"
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
