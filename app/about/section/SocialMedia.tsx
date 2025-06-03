import { Button } from "@/components/ui/button";
import Image from "next/image";
import Linkedin from "@/public/linkedin.svg";
import Github from "@/public/logo github.svg";
import Behance from "@/public/behance.svg";
import X from "@/public/x.svg";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/romaricngolle/",
  },
  {
    name: "Github",
    icon: Github,
    url: "https://github.com/NgolleRomaric",
  },
  {
    name: "Behance",
    icon: Behance,
    url: "https://www.behance.net/romaricngolle",
  },
  {
    name: "Twitter",
    icon: X,
    url: "https://x.com/leo_ngolle",
  },
];

export default function SocialMedia() {
  return (
    <section className="py-20 px-2">
      <div className="flex flex-col items-center justify-center mx-auto">
        <div className="text-center text-white text-md font-medium bg-primary rounded-md px-2.5 py-2 mx-auto w-fit">
          Let&apos;s Connect Online
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
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full px-6 py-5 text-md text-black font-medium border bg-white hover:bg-white hover:opacity-50 transition-opacity">
                  {social.name}
                  <Image
                    src={social.icon}
                    alt={social.name}
                    className={`ml-1 brightness-0 ${
                      social.name === "Github" ? "w-6 h-6" : "w-5 h-5"
                    }`}
                  />
                </Button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
