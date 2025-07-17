
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import AuthenticatedLayout from "@/components/AuthenticatedLayout";

const About = () => {
  return (
    <AuthenticatedLayout>
      <div className="p-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">About</h1>
          </div>

          {/* About Section */}
          <Card className="shadow-lg border-0 bg-background/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full mx-auto md:mx-0 flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop&crop=face" 
                      alt="Profile" 
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start space-x-2 mt-3">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">aarav.agarwal0610</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    I am a motivated boy who likes making apps to help people.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default About;
