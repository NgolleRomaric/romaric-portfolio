import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="text-center text-white text-md font-medium bg-primary rounded-md px-2.5 py-2 mx-auto w-fit">
          Projects
        </div>
        <h2 className="text-center font-medium text-3xl mt-8 max-w-sm md:max-w-xl lg:max-w-xl mx-auto">
          A showcase of real-world projects where design meets code and vision
          becomes experience.
        </h2>
        <div className="flex flex-wrap mt-12 gap-2.5 md:max-w-3xl lg:max-w-5xl mx-auto">
          <Card className="flex flex-rows items-center justify-center rounded-2xl bg-card p-5 max-w-sm mx-auto">
            <div className="w-[350px] h-[289px] rounded-2xl"></div>
            <div className="ml-2.5">
              <div>
                <h3 className="text-xl font-medium">Zenya - Wellness Spa</h3>
                <Badge className="text-sm bg-white text-black/70 font-normal px-3 py-1.5 mt-2">
                  Graphic Design
                </Badge>
              </div>
              <div className="flex items-center justify-center gap-4 mt-3">
                <p className="text-black/70">
                  A calming and luxurious brand identity for a modern spa
                  experience.
                </p>
                <div className="p-1.5 bg-primary rounded-full mr-2">
                  <ArrowUpRight
                    size={32}
                    strokeWidth={2}
                    className="text-white"
                  />
                </div>
              </div>
            </div>
          </Card>
          <Card className="flex flex-rows items-center justify-center rounded-2xl bg-card p-5 max-w-sm mx-auto">
            <div className="w-[350px] h-[289px] rounded-2xl"></div>
            <div className="ml-2.5">
              <div>
                <h3 className="text-xl font-medium">Zenya - Wellness Spa</h3>
                <Badge className="text-sm bg-white text-black/70 font-normal px-3 py-1.5 mt-2">
                  Graphic Design
                </Badge>
              </div>
              <div className="flex items-center justify-center gap-4 mt-3">
                <p className="text-black/70">
                  A calming and luxurious brand identity for a modern spa
                  experience.
                </p>
                <div className="p-1.5 bg-primary rounded-full mr-2">
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
      </div>
    </section>
  );
}
