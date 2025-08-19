import { motion } from "framer-motion";
import FloatingNavbar from "@/components/FloatingNavbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Crown } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Perfect for getting started",
      icon: Star,
      popular: false,
      features: [
        "List up to 1 app",
        "Basic analytics",
        "Community support",
        "Standard listing",
        "Basic app page"
      ],
      buttonText: "Get Started",
      gradient: "from-slate-500 to-gray-500"
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      description: "For serious developers",
      icon: Zap,
      popular: true,
      features: [
        "List up to 10 apps",
        "Advanced analytics",
        "Priority support",
        "Featured listings",
        "Custom app pages",
        "Social media integration",
        "Performance insights"
      ],
      buttonText: "Start Free Trial",
      gradient: "from-primary to-primary-glow"
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For teams and agencies",
      icon: Crown,
      popular: false,
      features: [
        "Unlimited apps",
        "Full analytics suite",
        "Dedicated support",
        "Premium placement",
        "White-label options",
        "API access",
        "Custom integrations",
        "Team collaboration",
        "Advanced reporting"
      ],
      buttonText: "Contact Sales",
      gradient: "from-purple-500 to-pink-500"
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
              Simple{" "}
              <span className="gradient-text">Pricing</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-caldera-text-secondary max-w-3xl mx-auto"
            >
              Choose the perfect plan for your needs. Start free and upgrade as you grow.
            </motion.p>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-primary/10 to-primary-glow/5 border-primary/30 shadow-glow' 
                    : 'bg-card/50 border-caldera-border hover:border-primary/20'
                } glass-effect`}
              >
                {plan.popular && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                  >
                    <div className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </motion.div>
                )}

                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${plan.gradient} p-3 mb-6`}
                >
                  <plan.icon className="w-full h-full text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-caldera-text-secondary mb-6">{plan.description}</p>

                <div className="mb-8">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-caldera-text-secondary">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * featureIndex + 0.5 }}
                      className="flex items-center"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-5 h-5 rounded-full bg-gradient-primary flex items-center justify-center mr-3 flex-shrink-0"
                      >
                        <Check className="w-3 h-3 text-white" />
                      </motion.div>
                      <span className="text-caldera-text-secondary">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-primary hover:shadow-glow text-primary-foreground'
                        : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-caldera-border"
              >
                <h3 className="font-semibold mb-3 text-left">Can I change plans anytime?</h3>
                <p className="text-caldera-text-secondary text-left">
                  Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-caldera-border"
              >
                <h3 className="font-semibold mb-3 text-left">Is there a free trial?</h3>
                <p className="text-caldera-text-secondary text-left">
                  Yes! The Pro plan includes a 14-day free trial with full access to all features.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default Pricing;