import { BookCallButton } from "@/components/ui/book-call-button";
import { Card } from "@/components/ui/card";

export default function CallToAction() {
  return (
    <section className="py-20 px-2">
      <Card className="flex flex-col items-center justify-center gap-6 rounded-2xl border border-black/20 p-12 bg-card max-w-sm md:max-w-xl lg:max-w-5xl mx-auto">
        <h2 className="text-center text-primary font-medium text-3xl mt-8 max-w-xs md:max-w-xl lg:max-w-2xl">
          Ready to bring your project to life?
        </h2>
        <h4 className="text-center mb-4 text-xl max-w-xs md:max-w-xl lg:max-w-2xl">
          Let&apos;s discuss your ideas and create something exceptional
          together.
        </h4>
        <BookCallButton />
      </Card>
    </section>
  );
}
