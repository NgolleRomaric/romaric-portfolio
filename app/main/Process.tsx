import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import IconCall from "@/public/call icon.svg";
import {
  Phone,
  StickyNote,
  CalendarCheck2,
  MonitorCog,
  FileCheck2,
  MailCheck,
} from "lucide-react";

export default function Process() {
  return (
    <section className="py-20">
      <div className="flex flex-col items-center justify-center mx-auto">
        <div className="text-center text-white text-md font-medium bg-primary rounded-md px-2.5 py-2 mx-auto w-fit">
          Process
        </div>
        <h2 className="text-center font-medium text-3xl mt-8 max-w-sm md:max-w-xl lg:max-w-xl mx-auto">
          A clear and simple process, built to turn your ideas into real,
          functional design solutions.
        </h2>
        <div className="grid grid-cols-2 mt-12 md:grid-cols-3 gap-2.5  md:max-w-2xl lg:max-w-5xl mx-auto">
          <Card className="flex flex-col items-center border-none gap-4 justify-between rounded-2xl p-5 max-w-[180px]">
            <div className="p-4 bg-primary rounded-full">
              <Phone size={24} strokeWidth={1.5} />
            </div>
            <h4 className="text-xm font-medium">Discovery Call</h4>
            <p className="text-black/70 text-center text-sm">
              We discuss your project idea.
            </p>
          </Card>
          <Card className="flex flex-col items-center border-none gap-4 justify-between rounded-2xl px-2.5 py-7 max-w-[180px]">
            <div className="p-4 bg-primary rounded-full">
              <StickyNote size={24} strokeWidth={1.5} />
            </div>
            <h4 className="text-xm font-medium">Brief & Objectives</h4>
            <p className="text-black/70 text-center text-sm">
              You share your needs and vision.
            </p>
          </Card>
          <Card className="flex flex-col items-center border-none gap-4 justify-between rounded-2xl px-2.5 py-7 max-w-[180px]">
            <div className="p-4 bg-primary rounded-full">
              <CalendarCheck2 size={24} strokeWidth={1.5} />
            </div>
            <h4 className="text-xm font-medium">Planning</h4>
            <p className="text-black/70 text-center text-sm">
              I define the steps and timeline.
            </p>
          </Card>
          <Card className="flex flex-col items-center border-none gap-4 justify-between rounded-2xl px-2.5 py-7 max-w-[180px]">
            <div className="p-4 bg-primary rounded-full">
              <MonitorCog size={24} strokeWidth={1.5} />
            </div>
            <h4 className="text-xm font-medium">Design & Creation</h4>
            <p className="text-black/70 text-center text-sm">
              I create the visuals or start coding.
            </p>
          </Card>
          <Card className="flex flex-col items-center border-none gap-4 justify-between rounded-2xl px-2.5 py-7 max-w-[180px]">
            <div className="p-4 bg-primary rounded-full">
              <FileCheck2 size={24} strokeWidth={1.5} />
            </div>
            <h4 className="text-xm font-medium">Revisions & Approval</h4>
            <p className="text-black/70 text-center text-sm">
              You review and I will adjust accordingly.
            </p>
          </Card>
          <Card className="flex flex-col items-center border-none gap-4 justify-between rounded-2xl px-2.5 py-7 max-w-[180px]">
            <div className="p-4 bg-primary rounded-full">
              <MailCheck size={24} strokeWidth={1.5} />
            </div>
            <h4 className="text-xm font-medium">Delivery & Support</h4>
            <p className="text-black/70 text-center text-sm">
              You get the final files and support.
            </p>
          </Card>
        </div>
        <Button className="px-6 py-5 text-md text-white font-medium mt-8 bg-gradient-to-r from-black from-[65%] to-[#666666] to-[100%] border-0 hover:opacity-80 transition-opacity">
          Book a call
          <span>
            <Image src={IconCall} alt="IconCall" />
          </span>
        </Button>
      </div>
    </section>
  );
}
