import FloatingNavbar from "@/components/FloatingNavbar";
import Hero from "@/components/Hero";
import AppDirectory from "@/components/AppDirectory";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <FloatingNavbar />
      <main className="pt-20">
        <Hero />
        <AppDirectory />
        <PricingSection />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
