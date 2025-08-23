import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import FluidGradient from "./FluidGradient";
import ThreeJSBackground from "./ThreeJSBackground";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { animateIn, staggerIn, textReveal, floatingAnimation } = useGSAP();

  useEffect(() => {
    if (heroRef.current) {
      textReveal(heroRef.current.querySelector('h1'));
      animateIn(heroRef.current.querySelector('p'), { 
        from: { opacity: 0, y: 30 },
        to: { delay: 0.3 }
      });
      staggerIn('.hero-button', { 
        from: { opacity: 0, y: 40, scale: 0.8 },
        to: { delay: 0.6 }
      }, 0.2);
      staggerIn('.stat-card', {
        from: { opacity: 0, y: 50, scale: 0.9 },
        to: { delay: 1 }
      }, 0.15);
      
      // Floating animations for stat icons
      floatingAnimation('.stat-icon', 15, 4);
    }
  }, [animateIn, staggerIn, textReveal, floatingAnimation]);

  return (
    <section ref={heroRef} className="relative overflow-hidden bg-gradient-hero min-h-screen flex items-center">
      {/* Animated Background Layers */}
      <FluidGradient />
      <ThreeJSBackground />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-glow/5" />
      
      <div className="container relative px-4 z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 flex justify-center"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center rounded-full bg-secondary/50 px-4 py-2 text-sm backdrop-blur-sm border border-caldera-border glass-effect"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="mr-2 h-4 w-4 text-primary" />
              </motion.div>
              <span className="text-caldera-text-secondary">Launch your app to thousands of users</span>
            </motion.div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 font-montserrat text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl overflow-hidden"
          >
            <motion.span
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-block"
            >
              Showcase Your App.{" "}
            </motion.span>
            <motion.span
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="gradient-text inline-block"
            >
              Get Discovered
            </motion.span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mx-auto mb-8 max-w-2xl text-lg text-caldera-text-secondary sm:text-xl"
          >
            The premier platform where developers showcase their innovative apps and connect with users worldwide. 
            Join thousands of creators building the future.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 103, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="hero-button"
            >
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-all duration-300 hover:shadow-glow relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  Submit Your App
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.6 }}
                />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hero-button"
            >
              <Button 
                variant="outline" 
                size="lg"
                className="border-caldera-border bg-secondary/20 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300 glass-effect"
              >
                Browse Apps
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3"
          >
            <motion.div 
              whileHover={{ y: -10, scale: 1.05 }}
              className="stat-card flex flex-col items-center group cursor-pointer"
            >
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="stat-icon mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300"
              >
                <Users className="h-6 w-6 text-primary" />
              </motion.div>
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="font-semibold text-xl"
              >
                10k+ Users
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="text-sm text-caldera-text-secondary"
              >
                Active community
              </motion.p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10, scale: 1.05 }}
              className="stat-card flex flex-col items-center group cursor-pointer"
            >
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="stat-icon mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300"
              >
                <Trophy className="h-6 w-6 text-primary" />
              </motion.div>
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="font-semibold text-xl"
              >
                500+ Apps
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="text-sm text-caldera-text-secondary"
              >
                Successfully launched
              </motion.p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10, scale: 1.05 }}
              className="stat-card flex flex-col items-center group cursor-pointer"
            >
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="stat-icon mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300"
              >
                <Sparkles className="h-6 w-6 text-primary" />
              </motion.div>
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="font-semibold text-xl"
              >
                Featured Daily
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="text-sm text-caldera-text-secondary"
              >
                Best apps promoted
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
