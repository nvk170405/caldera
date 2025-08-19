import { motion } from "framer-motion";
import FloatingNavbar from "@/components/FloatingNavbar";
import Footer from "@/components/Footer";
import { 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Star, 
  Globe,
  Smartphone,
  BarChart3,
  Lock,
  Rocket
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get your app listed in minutes with our streamlined submission process.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Advanced security measures to protect your app and user data.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Analytics Dashboard",
      description: "Track your app's performance with detailed analytics and insights.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Connect with developers and users in our thriving community.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Star,
      title: "Featured Listings",
      description: "Get your app featured on our homepage for maximum visibility.",
      color: "from-amber-500 to-yellow-500"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Reach users worldwide with our international platform.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Perfect experience across all devices and screen sizes.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: BarChart3,
      title: "Performance Tracking",
      description: "Monitor downloads, ratings, and user engagement metrics.",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "GDPR compliant with advanced privacy protection features.",
      color: "from-gray-500 to-slate-500"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <FloatingNavbar />
      
      <main className="pt-32 pb-20">
        <div className="container px-4">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-bold mb-6"
            >
              Powerful{" "}
              <span className="gradient-text">Features</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-caldera-text-secondary max-w-3xl mx-auto"
            >
              Everything you need to showcase, promote, and grow your app in one comprehensive platform.
            </motion.p>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-caldera-border hover:border-primary/30 transition-all duration-300 glass-effect"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} p-3 mb-6 group-hover:shadow-lg transition-all duration-300`}
                >
                  <feature.icon className="w-full h-full text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-caldera-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-3xl p-12 border border-primary/20"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block mb-6"
            >
              <Rocket className="w-16 h-16 text-primary" />
            </motion.div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Launch?
            </h2>
            
            <p className="text-xl text-caldera-text-secondary mb-8 max-w-2xl mx-auto">
              Join thousands of developers who trust FinoraX to showcase their apps and reach new audiences.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 103, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-primary text-primary-foreground rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-glow"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default Features;