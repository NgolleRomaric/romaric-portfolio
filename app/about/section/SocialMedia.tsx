import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

export default function SocialMedia() {
  return (
    <section className="py-20 px-2">
      <div className="flex flex-col items-center justify-center mx-auto">
        <div className="text-center text-white text-md font-medium bg-primary rounded-md px-2.5 py-2 mx-auto w-fit">
          Let’s Connect Online
        </div>
        <div className="grid grid-col-1 lg:grid-cols-2 items-center mt-20 justify-between gap-10 lg:gap-16 max-w-sm md:max-w-xl lg:max-w-5xl mx-auto">
          <div className="flex flex-col items-center lg:items-start justify-center gap-4 mx-2">
            <h2 className="font-medium text-3xl">
              Because great projects start with a simple hello.
            </h2>
            <p className="mt-4">
              I share my work, thoughts, and a glimpse of my process on my
              favorite platforms. Feel free to check them out or say hi 👋
            </p>
          </div>
          <div className="col-span-1 grid grid-cols-2 gap-4 mx-auto">
            <Button className="px-6 py-5 text-md text-black font-medium border bg-white hover:bg-white hover:opacity-50 transition-opacity">
              LinkedIn <FileDown className="ml-1" />
            </Button>
            <Button className="px-6 py-5 text-md text-black font-medium border bg-white hover:bg-white hover:opacity-50 transition-opacity">
              Github <FileDown className="ml-1" />
            </Button>
            <Button className="px-6 py-5 text-md text-black font-medium border bg-white hover:bg-white hover:opacity-50 transition-opacity">
              Behance <FileDown className="ml-1" />
            </Button>
            <Button className="px-6 py-5 text-md text-black font-medium border bg-white hover:bg-white hover:opacity-50 transition-opacity">
              Twitter <FileDown className="ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
