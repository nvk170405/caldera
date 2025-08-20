import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Crown, Star, Zap } from "lucide-react";

const PricingSection = () => {
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
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Simple{" "}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-caldera-text-secondary max-w-3xl mx-auto">
            Choose the perfect plan for your needs. Start free and upgrade as you grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:scale-105 ${
                plan.popular 
                  ? 'bg-gradient-to-b from-primary/10 to-primary-glow/5 border-primary/30 shadow-glow' 
                  : 'bg-card/50 border-caldera-border hover:border-primary/20'
              } glass-effect`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${plan.gradient} p-3 mb-6`}>
                <plan.icon className="w-full h-full text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-caldera-text-secondary mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-caldera-text-secondary">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-gradient-primary flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-caldera-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-primary hover:shadow-glow text-primary-foreground'
                    : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                }`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-caldera-text-secondary">
            Secure payments powered by{" "}
            <span className="font-semibold text-primary">PayPal</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;