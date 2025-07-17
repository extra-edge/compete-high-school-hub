
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ExternalLink, Search as SearchIcon, Calendar, Users, Trophy, MapPin } from "lucide-react";
import { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample competition data
  const competitions = [
    {
      id: 1,
      name: "Math Olympiad",
      category: "Math",
      description: "National mathematics competition for high school students",
      deadline: "March 15, 2024",
      participants: "500+",
      location: "National",
      website: "https://matholympiad.org",
      difficulty: "Advanced"
    },
    {
      id: 2,
      name: "Science Bowl",
      category: "Science",
      description: "Fast-paced academic competition testing science knowledge",
      deadline: "February 28, 2024",
      participants: "300+",
      location: "Regional",
      website: "https://sciencebowl.org",
      difficulty: "Intermediate"
    },
    {
      id: 3,
      name: "Debate Championship",
      category: "Debate",
      description: "Competitive debate tournament covering current events",
      deadline: "April 10, 2024",
      participants: "200+",
      location: "State",
      website: "https://debatechamp.org",
      difficulty: "Advanced"
    },
    {
      id: 4,
      name: "Programming Contest",
      category: "Programming",
      description: "Algorithmic programming competition for students",
      deadline: "March 30, 2024",
      participants: "400+",
      location: "Online",
      website: "https://programmingcontest.org",
      difficulty: "Advanced"
    },
    {
      id: 5,
      name: "History Bowl",
      category: "History",
      description: "Academic competition testing historical knowledge",
      deadline: "February 20, 2024",
      participants: "150+",
      location: "Regional",
      website: "https://historybowl.org",
      difficulty: "Intermediate"
    },
    // Add more competitions to reach 20
    {
      id: 6,
      name: "Chemistry Olympiad",
      category: "Science",
      description: "Chemistry competition for aspiring scientists",
      deadline: "March 25, 2024",
      participants: "250+",
      location: "National",
      website: "https://chemolympiad.org",
      difficulty: "Advanced"
    },
    {
      id: 7,
      name: "Model UN",
      category: "Politics",
      description: "Simulate United Nations diplomatic discussions",
      deadline: "April 5, 2024",
      participants: "300+",
      location: "International",
      website: "https://modelun.org",
      difficulty: "Intermediate"
    },
    {
      id: 8,
      name: "Physics Competition",
      category: "Science",
      description: "Problem-solving competition in physics",
      deadline: "February 15, 2024",
      participants: "180+",
      location: "National",
      website: "https://physicscomp.org",
      difficulty: "Advanced"
    },
    {
      id: 9,
      name: "Quiz Bowl",
      category: "General Knowledge",
      description: "Fast-paced trivia competition across all subjects",
      deadline: "March 20, 2024",
      participants: "400+",
      location: "Regional",
      website: "https://quizbowl.org",
      difficulty: "Intermediate"
    },
    {
      id: 10,
      name: "Mock Trial",
      category: "Law",
      description: "Simulate court proceedings and legal arguments",
      deadline: "April 15, 2024",
      participants: "200+",
      location: "State",
      website: "https://mocktrial.org",
      difficulty: "Advanced"
    },
    {
      id: 11,
      name: "Business Plan Competition",
      category: "Business",
      description: "Entrepreneurship competition for young innovators",
      deadline: "May 1, 2024",
      participants: "150+",
      location: "National",
      website: "https://bizplan.org",
      difficulty: "Intermediate"
    },
    {
      id: 12,
      name: "Poetry Contest",
      category: "Literature",
      description: "Creative writing competition for poets",
      deadline: "March 10, 2024",
      participants: "100+",
      location: "National",
      website: "https://poetrycontest.org",
      difficulty: "Beginner"
    },
    {
      id: 13,
      name: "Robotics Championship",
      category: "Engineering",
      description: "Design and build robots for competitive challenges",
      deadline: "April 20, 2024",
      participants: "350+",
      location: "International",
      website: "https://robotics.org",
      difficulty: "Advanced"
    },
    {
      id: 14,
      name: "Geography Bee",
      category: "Geography",
      description: "Test your knowledge of world geography",
      deadline: "February 25, 2024",
      participants: "250+",
      location: "National",
      website: "https://geobee.org",
      difficulty: "Intermediate"
    },
    {
      id: 15,
      name: "Art Competition",
      category: "Art",
      description: "Showcase your artistic talents and creativity",
      deadline: "March 31, 2024",
      participants: "200+",
      location: "Regional",
      website: "https://artcomp.org",
      difficulty: "Beginner"
    },
    {
      id: 16,
      name: "Music Festival",
      category: "Music",
      description: "Solo and ensemble musical performances",
      deadline: "April 12, 2024",
      participants: "300+",
      location: "State",
      website: "https://musicfest.org",
      difficulty: "Intermediate"
    },
    {
      id: 17,
      name: "Language Olympics",
      category: "Language",
      description: "Foreign language proficiency competition",
      deadline: "March 18, 2024",
      participants: "180+",
      location: "Regional",
      website: "https://langolympics.org",
      difficulty: "Advanced"
    },
    {
      id: 18,
      name: "Environmental Challenge",
      category: "Environmental Science",
      description: "Solutions for environmental sustainability",
      deadline: "April 25, 2024",
      participants: "120+",
      location: "National",
      website: "https://envchallenge.org",
      difficulty: "Intermediate"
    },
    {
      id: 19,
      name: "Theater Competition",
      category: "Drama",
      description: "Acting and theatrical performance competition",
      deadline: "March 5, 2024",
      participants: "150+",
      location: "State",
      website: "https://theatercomp.org",
      difficulty: "Intermediate"
    },
    {
      id: 20,
      name: "Journalism Contest",
      category: "Journalism",
      description: "News writing and reporting competition",
      deadline: "April 8, 2024",
      participants: "100+",
      location: "Regional",
      website: "https://journalismcontest.org",
      difficulty: "Beginner"
    }
  ];

  const filteredCompetitions = competitions.filter(comp =>
    comp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    comp.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    comp.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Math": "bg-blue-100 text-blue-800",
      "Science": "bg-green-100 text-green-800",
      "Debate": "bg-purple-100 text-purple-800",
      "Programming": "bg-orange-100 text-orange-800",
      "History": "bg-amber-100 text-amber-800",
      "Politics": "bg-red-100 text-red-800",
      "General Knowledge": "bg-gray-100 text-gray-800",
      "Law": "bg-indigo-100 text-indigo-800",
      "Business": "bg-emerald-100 text-emerald-800",
      "Literature": "bg-pink-100 text-pink-800",
      "Engineering": "bg-cyan-100 text-cyan-800",
      "Geography": "bg-teal-100 text-teal-800",
      "Art": "bg-rose-100 text-rose-800",
      "Music": "bg-violet-100 text-violet-800",
      "Language": "bg-lime-100 text-lime-800",
      "Environmental Science": "bg-green-100 text-green-800",
      "Drama": "bg-fuchsia-100 text-fuchsia-800",
      "Journalism": "bg-slate-100 text-slate-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-primary/5 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Discover Competitions</h1>
          <p className="text-muted-foreground">
            Explore extracurricular competitions and find your next challenge
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-md">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search competitions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompetitions.map((competition) => (
            <Card key={competition.id} className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{competition.name}</CardTitle>
                    <Badge className={getCategoryColor(competition.category)}>
                      {competition.category}
                    </Badge>
                  </div>
                  <Badge variant="outline">{competition.difficulty}</Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-sm leading-relaxed">
                  {competition.description}
                </CardDescription>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Deadline: {competition.deadline}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{competition.participants} participants</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{competition.location}</span>
                  </div>
                </div>
                
                <div className="flex space-x-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(competition.website, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Learn More
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1"
                  >
                    <Trophy className="h-4 w-4 mr-2" />
                    Sign Up
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCompetitions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No competitions found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
