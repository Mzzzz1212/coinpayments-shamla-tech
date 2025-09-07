export default function Banner() {
  return (
    <section className="py-24 bg-[#080e1b]">
      <div className="container mx-auto">
        <h3 className="font-semibold uppercase text-center xl:text-7xl md:text-5xl text-3xl">
          <span className="text-blue-500 md:text-8xl text-7xl ">
            40 + <br className="block xl:hidden" />
          </span>{" "}
          Cryptocurrencies
        </h3>
        <p className="text-center font-light uppercase xl:text-6xl md:text-5xl text-3xl">
          Accepted for <br className="block xl:hidden" /> Payments
        </p>
      </div>
    </section>
  );
}
