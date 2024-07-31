import Hero from "./Hero";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <section className="lg:h-screen bg-gradient-to-t from-pink-50 to-pink-100">
      <Navbar />
      <Hero />
    </section>
  );
}
