import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AppDirectory from "@/components/AppDirectory";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AppDirectory />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
