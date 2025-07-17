
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Trophy, Users, TrendingUp, Star, CheckCircle, Menu, X, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-lg flex items-center justify-center">
                <Trophy className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Extra Edge
              </span>
              <span className="hidden md:block text-sm text-muted-foreground ml-4 italic">
                Always Two Steps Ahead
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="https://forms.google.com/feedback" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                Feedback <ExternalLink className="h-3 w-3" />
              </a>
              <Link to="/register">
                <Button className="shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border/50">
            <div className="px-4 py-2 space-y-1">
              <div className="px-3 py-2 text-sm text-muted-foreground italic">
                Always Two Steps Ahead
              </div>
              <a href="#features" className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#about" className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="https://forms.google.com/feedback" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors">Feedback</a>
              <div className="pt-2">
                <Link to="/register">
                  <Button className="w-full shadow-lg shadow-primary/25">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-lg text-primary font-medium tracking-wide uppercase">Always Two Steps Ahead</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
                Compete with
                <span className="block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Extra Edge
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                The ultimate platform for high school competitive clubs. Track progress, organize competitions, and achieve excellence together.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/register">
                <Button size="lg" className="shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105">
                  Start Competing Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Extra Edge?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to excel in competitive high school clubs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Trophy,
                title: "Competition Tracking",
                description: "Monitor your team's performance across all competitions with detailed analytics and insights."
              },
              {
                icon: Users,
                title: "Team Management",
                description: "Organize your club members, assign roles, and coordinate team activities seamlessly."
              },
              {
                icon: TrendingUp,
                title: "Progress Analytics",
                description: "Visualize your improvement with comprehensive charts and performance metrics."
              },
              {
                icon: Star,
                title: "Achievement System",
                description: "Celebrate milestones and recognize outstanding performances with our reward system."
              },
              {
                icon: CheckCircle,
                title: "Goal Setting",
                description: "Set and track personal and team goals to maintain focus and motivation."
              },
              {
                icon: Users,
                title: "Community",
                description: "Connect with other competitive clubs and share strategies for success."
              }
            ].map((feature, index) => (
              <Card key={index} className="group shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-background/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/80 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Your Extra Edge?</h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of competitive students already using our platform to achieve their goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105">
                Create Free Account
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-lg flex items-center justify-center">
                  <Trophy className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">Extra Edge</span>
              </div>
              <p className="text-muted-foreground">
                Empowering high school competitive clubs to reach their full potential.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Features</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Extra Edge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
