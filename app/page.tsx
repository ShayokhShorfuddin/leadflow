import Companies from "@/components/Companies";
import Header from "../components/Header";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BottomCard from "@/components/BottomCard";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <main>
      <Header />
      <Companies />
      <Services />
      <Team />
      <Testimonial />
      <FAQ />
      <BottomCard />
      <Footer />
    </main>
  );
}
