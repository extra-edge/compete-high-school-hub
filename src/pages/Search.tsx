
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ExternalLink, Search as SearchIcon, Trophy } from "lucide-react";
import { useState } from "react";
import AuthenticatedLayout from "@/components/AuthenticatedLayout";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Sample competition data
  const competitions = [
    {
      id: 1,
      name: "International Mathematical Olympiad",
      category: "Math",
      description: "The world's most prestigious mathematics competition for high school students.",
      deadline: "March 15, 2024",
      website: "https://imo-official.org",
      difficulty: "Advanced"
    },
    {
      id: 2,
      name: "Science Bowl National Tournament",
      category: "Science",
      description: "Fast-paced academic competition testing knowledge in biology, chemistry, physics, and more.",
      deadline: "February 20, 2024",
      website: "https://science.osti.gov/wdts/nsb",
      difficulty: "Intermediate"
    },
    {
      id: 3,
      name: "National Speech & Debate Tournament",
      category: "Debate",
      description: "Premier competition for high school speech and debate activities.",
      deadline: "April 10, 2024",
      website: "https://speechanddebate.org",
      difficulty: "All Levels"
    },
    {
      id: 4,
      name: "USA Computing Olympiad",
      category: "Programming",
      description: "Programming competition designed to challenge and develop problem-solving skills.",
      deadline: "Rolling",
      website: "http://usaco.org",
      difficulty: "Beginner to Advanced"
    },
    {
      id: 5,
      name: "National History Day Contest",
      category: "History",
      description: "Year-long academic program focused on historical research and presentation.",
      deadline: "March 1, 2024",
      website: "https://nhd.org",
      difficulty: "All Levels"
    }
  ];

  const categories = ["all", "Math", "Science", "Debate", "Programming", "History"];

  const filteredCompetitions = competitions.filter(comp => {
    const matchesSearch = comp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         comp.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || comp.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Math": "bg-blue-100 text-blue-800",
      "Science": "bg-green-100 text-green-800",
      "Debate": "bg-purple-100 text-purple-800",
      "Programming": "bg-orange-100 text-orange-800",
      "History": "bg-amber-100 text-amber-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <AuthenticatedLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Competition Search</h1>
          <p className="text-muted-foreground">
            Discover and explore extracurricular competitions
          </p>
        </div>

        {/* Search and Filter */}
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search competitions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="w-full md:w-48">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Competition Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompetitions.map((competition) => (
            <Card key={competition.id} className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-lg">{competition.name}</CardTitle>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(competition.category)}`}>
                        {competition.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {competition.difficulty}
                      </span>
                    </div>
                  </div>
                  <Trophy className="h-5 w-5 text-primary" />
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-sm leading-relaxed">
                  {competition.description}
                </CardDescription>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Deadline:</span>
                    <span className="font-medium">{competition.deadline}</span>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open(competition.website, '_blank')}
                >
                  Learn More
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCompetitions.length === 0 && (
          <Card className="shadow-lg">
            <CardContent className="text-center py-12">
              <SearchIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No competitions found matching your search.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </AuthenticatedLayout>
  );
};

export default Search;
