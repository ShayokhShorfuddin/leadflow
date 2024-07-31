import CompanyCarousel from "./CompanyCarousel";

export default function Companies() {
  return (
    <section className="flex flex-col items-center bg-gradient-to-b from-pink-50 to-background pt-28">
      <h1 className="text-lg md:text-2xl font-ubuntu text-center font-medium leading-snug">
        Trusted by
        <br />
        <span className="text-2xl md:text-4xl">Leading Brands</span>
      </h1>

      <CompanyCarousel />
    </section>
  );
}
