import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Playlist from "@/public/Music Image.png";
import Image from "next/image";
import Link from "next/link";

export default function Music() {
  return (
    <section className="py-20 mt-24 px-2">
      <div className="flex flex-col items-center justify-center mx-auto">
        <div className="text-center text-white text-md font-medium bg-primary rounded-md px-2.5 py-2 mx-auto w-fit">
          What I love
        </div>
        <div className="grid grid-col-1 lg:grid-cols-2 items-center mt-20 justify-between gap-10 lg:gap-16 max-w-sm md:max-w-xl lg:max-w-5xl mx-auto">
          <div className="flex flex-col items-center lg:items-start justify-center gap-4 mx-2">
            <h2 className="font-medium text-3xl">Music, my creative fuel</h2>
            <p className="mt-4">
              When I work, there’s almost always music playing. It helps me
              focus, stay in the flow, and sometimes even spark unexpected
              inspiration. Every design has its soundtrack.
            </p>
            <Link
              href="https://open.spotify.com/playlist/37i9dQZF1EIdNTvkcjcOzJ?si=590386082ef0449a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="px-6 py-5 text-md mt-4 text-black font-medium bg-primary hover:opacity-50 transition-opacity">
                Listen to my playlist <ArrowRight className="ml-1" />
              </Button>
            </Link>
          </div>
          <div className="col-span-1">
            <Image src={Playlist} alt="Playlist" className="w-150 h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
