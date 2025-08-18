import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Trophy } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-glow/5" />
      
      <div className="container relative px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center rounded-full bg-secondary/50 px-4 py-2 text-sm backdrop-blur-sm border border-caldera-border">
              <Sparkles className="mr-2 h-4 w-4 text-primary" />
              <span className="text-caldera-text-secondary">Launch your app to thousands of users</span>
            </div>
          </div>

          <h1 className="mb-6 font-inter text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Showcase Your App.{" "}
            <span className="gradient-text">Get Discovered</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-caldera-text-secondary sm:text-xl">
            The premier platform where developers showcase their innovative apps and connect with users worldwide. 
            Join thousands of creators building the future.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300 hover:shadow-glow transform hover:scale-105"
            >
              Submit Your App
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-caldera-border bg-secondary/20 backdrop-blur-sm hover:bg-secondary/40 transition-all duration-300"
            >
              Browse Apps
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">10k+ Users</h3>
              <p className="text-sm text-caldera-text-secondary">Active community</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">500+ Apps</h3>
              <p className="text-sm text-caldera-text-secondary">Successfully launched</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Featured Daily</h3>
              <p className="text-sm text-caldera-text-secondary">Best apps promoted</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;