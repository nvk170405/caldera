import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Crown, Star, Zap } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for getting started",
      features: [
        "Standard app listing",
        "Basic analytics",
        "Community support",
        "App submission"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Premium",
      price: "$29/month",
      description: "For serious app developers",
      features: [
        "Featured badge & priority placement",
        "Advanced analytics & insights",
        "Priority support",
        "Boost your app visibility",
        "Contact owner button",
        "Custom app themes"
      ],
      buttonText: "Choose Premium",
      buttonVariant: "default" as const,
      popular: true
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <div className="mb-4 flex justify-center">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm">
              <Crown className="mr-2 h-4 w-4 text-primary" />
              <span className="text-primary">Pricing Plans</span>
            </div>
          </div>
          
          <h2 className="mb-4 font-inter text-3xl font-bold sm:text-4xl">
            Choose Your Plan
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-caldera-text-secondary">
            Start free and upgrade when you're ready to boost your app's visibility.
            All payments processed securely through PayPal.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {plans.map((plan, index) => (
              <Card 
                key={plan.name}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-elevated transform hover:-translate-y-1 ${
                  plan.popular 
                    ? "border-primary/50 bg-gradient-card shadow-glow" 
                    : "border-caldera-border bg-gradient-card"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="mb-4 flex justify-center">
                    <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${
                      plan.popular ? "bg-gradient-primary" : "bg-secondary"
                    }`}>
                      {plan.popular ? (
                        <Crown className="h-6 w-6 text-primary-foreground" />
                      ) : (
                        <Zap className="h-6 w-6 text-primary" />
                      )}
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl font-inter">{plan.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                  </div>
                  <p className="text-caldera-text-secondary">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? "bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow" 
                        : ""
                    }`}
                    variant={plan.buttonVariant}
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
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