import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-40">
      <div className="container relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
        <div className="flex flex-col gap-[565px] justify-between items-center">
          <div>
            <h1 className="lg:text-8xl md:text-6xl text-4xl uppercase font-extralight">
              Bank <span className="font-semibold">Yourself</span>
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            <p className="lg:text-xl text-sm text-center">
              Instant and reliable payments for businesses and individuals,
              built on Multi-Party Computation (MPC) custody.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <Button className="bg-blue-500 hover:bg-blue-600 transition-colors text-white rounded-full leading-tight font-semibold md:py-7 md:px-14 py-5 px-12 text-lg">
                Get Started Now
              </Button>
              <Button
                className="bg-white hover:bg-white/90 transition-colors text-black rounded-full leading-tight font-semibold md:py-7 md:px-14 py-5 px-12 text-lg"
                size="lg"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
