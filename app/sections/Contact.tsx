import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section className="py-24 bg-[#080e1b]">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center gap-6">
          <h3 className="xl:text-6xl md:text-5xl text-3xl font-light uppercase text-center">
            Ready to speak
          </h3>
          <span className="xl:text-7xl md:text-5xl text-3xl -mt-4 uppercase text-center font-semibold">
            To the experts?
          </span>
          <p className="text-center text-lg md:px-0 px-10 mt-6">
            Connect with our team to explore how crypto payments can expand your
            business.
          </p>
          <Button className="bg-blue-500 hover:bg-blue-600 transition-colors py-6 px-12 font-semibold text-xl mt-4 rounded-full">
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
