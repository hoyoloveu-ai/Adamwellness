import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Booking } from "@/components/Booking";
import { Results } from "@/components/Results";
import { About } from "@/components/About";
import { AppPreview } from "@/components/AppPreview";
import { DietPlan } from "@/components/DietPlan";
import { Pricing } from "@/components/Pricing";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Booking />
        <Results />
        <About />
        <AppPreview />
        <DietPlan />
        <Pricing />
        <Reviews />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
