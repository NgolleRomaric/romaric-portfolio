import Illustrator from "@/public/logo illustrator.svg";
import Figma from "@/public/logo figma.svg";
import Photoshop from "@/public/logo photoshop.svg";
import ChatGpt from "@/public/logo chatgpt.svg";
import Claude from "@/public/logo claudeai.svg";
import Gemini from "@/public/logo gemini.svg";
import Notion from "@/public/logo notion.svg";
import Meet from "@/public/logo meet.svg";
import GitHub from "@/public/logo github.svg";
import Vscode from "@/public/logo vscode.svg";
import NextJs from "@/public/logo nextjs.svg";
import Tailwind from "@/public/logo tailwind.svg";
import Motion from "@/public/logo motion.svg";
import Image from "next/image";

const logos = [
  { name: "Photoshop", image: Photoshop },
  { name: "Illustrator", image: Illustrator },
  { name: "Figma", image: Figma },
];

const logos2 = [
  { name: "ChatGpt", image: ChatGpt },
  { name: "Claude", image: Claude },
  { name: "Gemini", image: Gemini },
];

const logos3 = [
  { name: "Notion", image: Notion },
  { name: "Meet", image: Meet },
];

const logos4 = [
  { name: "GitHub", image: GitHub },
  { name: "Vscode", image: Vscode },
  { name: "NextJs", image: NextJs },
  { name: "Tailwind", image: Tailwind },
  { name: "Motion", image: Motion },
];

export default function Tools() {
  return (
    <section className="py-20 px-2">
      <div className="flex flex-col items-center justify-center mx-auto">
        <div className="text-center text-white text-md font-medium bg-primary rounded-md px-2.5 py-2 mx-auto w-fit">
          Tools I Use
        </div>
        <h2 className="text-center font-medium text-3xl mt-8 max-w-sm md:max-w-xl mx-auto">
          The best tools for creating impactful designs, seamless development,
          and efficient workflows.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-2.5 mt-10 max-w-sm md:max-w-xl lg:max-w-5xl mx-auto">
          <div className="lg:col-span-2 bg-card rounded-3xl py-10 px-14">
            <div className="flex flex-col items-center justify-center">
              <h3 className="font-medium text-[20px] text-center">
                Graphic Design & UI/UX
              </h3>
              <p className="text-[13px] text-center text-black/70 dark:text-white/70 max-w-[250px] mt-3">
                Essential tools for designing stunning visuals and intuitive
                user interfaces.
              </p>
            </div>
            <div className="flex justify-center items-center gap-3 mt-8">
              {logos.map((logo) => (
                <Image
                  src={logo.image}
                  key={logo.name}
                  alt={logo.name}
                  className="w-16 h-auto"
                />
              ))}
            </div>
          </div>

          <div className="lg:col-start-3 bg-card rounded-3xl py-10 px-14">
            <div className="flex flex-col items-center justify-center">
              <h3 className="font-medium text-[20px] text-center">AI Tools</h3>
              <p className="text-[13px] text-center text-black/70 dark:text-white/70 max-w-[250px] mt-3">
                Leveraging artificial intelligence to boost creativity and
                productivity.
              </p>
            </div>
            <div className="flex justify-center items-center gap-3 mt-8">
              {logos2.map((logo) => (
                <Image
                  src={logo.image}
                  key={logo.name}
                  alt={logo.name}
                  className={`w-16 h-auto ${
                    logo.name === "ChatGpt"
                      ? "dark:brightness-0 dark:invert"
                      : ""
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="lg:row-start-2 bg-card rounded-3xl py-10 px-14">
            <div className="flex flex-col items-center justify-center">
              <h3 className="font-medium text-[20px] text-center">
                Others Tools
              </h3>
              <p className="text-[13px] text-center text-black/70 dark:text-white/70 max-w-[250px] mt-3">
                Tools that help manage tasks, organize work, and streamline
                client communication.
              </p>
            </div>
            <div className="flex justify-center items-center gap-3 mt-8">
              {logos3.map((logo) => (
                <Image
                  src={logo.image}
                  key={logo.name}
                  alt={logo.name}
                  className="w-16 h-auto"
                />
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 lg:row-start-2 bg-card rounded-3xl py-10 px-14">
            <div className="flex flex-col items-center justify-center">
              <h3 className="font-medium text-[20px] text-center">
                Front-End Development
              </h3>
              <p className="text-[13px] text-center text-black/70 dark:text-white/70 max-w-[250px] mt-3">
                Tools for building fast, responsive, and interactive web
                experiences.
              </p>
            </div>
            <div className="flex justify-center items-center gap-2 mt-8">
              {logos4.map((logo) => (
                <Image
                  src={logo.image}
                  key={logo.name}
                  alt={logo.name}
                  className={`w-16 h-auto ${
                    logo.name === "GitHub"
                      ? "dark:brightness-0 dark:invert"
                      : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
