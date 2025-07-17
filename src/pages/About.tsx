
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Trophy } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-primary/5 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">About Extra Edge</h1>
          <p className="text-xl text-muted-foreground">
            Passionate about transforming the extracurricular scene
          </p>
        </div>

        {/* Mission Section */}
        <Card className="shadow-lg border-0 bg-background/50 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary/80 rounded-lg flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                At Extra Edge, we believe that every student deserves the opportunity to excel in competitive extracurricular activities. 
                Our platform was born from a passion to revolutionize how high school students discover, participate in, and track their 
                competitive journey across various academic and creative disciplines.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                We understand that the extracurricular landscape can be overwhelming and fragmented. That's why we've created a 
                centralized hub where students can explore opportunities, connect with like-minded peers, and showcase their achievements. 
                Our goal is to make competitive excellence accessible to all students, regardless of their background or starting point.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                Through innovative technology and a deep understanding of student needs, we're building the future of competitive 
                education. We envision a world where every talented student can find their niche, push their boundaries, and achieve 
                their full potential in the activities they're passionate about.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Team Section */}
        <Card className="shadow-lg border-0 bg-background/50 backdrop-blur-sm">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Meet Our Team</h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full mx-auto md:mx-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">AE</span>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-semibold">Alex Johnson</h3>
                  <p className="text-muted-foreground mb-3">Founder & CEO</p>
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">alex.johnson@extraedge.com</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Alex is a former competitive debater and math olympiad participant who experienced firsthand the challenges 
                  of navigating the extracurricular landscape. After competing in over 50 competitions during high school and 
                  college, Alex founded Extra Edge to help other students find and excel in their competitive passions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With a background in computer science and education technology, Alex brings both technical expertise and 
                  deep understanding of student needs to create a platform that truly serves the competitive community.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Values Section */}
        <Card className="shadow-lg border-0 bg-background/50 backdrop-blur-sm">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Our Values</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  We strive for excellence in everything we do and inspire students to reach their highest potential.
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Accessibility</h3>
                <p className="text-sm text-muted-foreground">
                  We believe competitive opportunities should be accessible to all students, regardless of background.
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  We continuously innovate to provide the best tools and experiences for competitive students.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
