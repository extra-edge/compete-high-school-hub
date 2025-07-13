
import { useState, useMemo } from 'react';
import { Search, Filter, Calendar, Trophy, Users, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Competition {
  id: number;
  title: string;
  description: string;
  category: string;
  grades: number[];
  deadline: string;
  prize: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  website: string;
  participants: string;
}

const competitions: Competition[] = [
  {
    id: 1,
    title: "Science Olympiad",
    description: "A national STEM competition covering 23 events in biology, chemistry, physics, and engineering.",
    category: "STEM",
    grades: [9, 10, 11, 12],
    deadline: "December 15, 2024",
    prize: "National Recognition + Scholarships",
    difficulty: "Advanced",
    website: "https://www.soinc.org",
    participants: "Teams of 15"
  },
  {
    id: 2,
    title: "DECA Competition",
    description: "Business and marketing competition with role-playing scenarios and written exams.",
    category: "Business",
    grades: [9, 10, 11, 12],
    deadline: "January 20, 2025",
    prize: "$5,000+ in scholarships",
    difficulty: "Intermediate",
    website: "https://www.deca.org",
    participants: "Individual/Team"
  },
  {
    id: 3,
    title: "National Art Honor Society",
    description: "Visual arts competition showcasing creativity and technical skill.",
    category: "Arts",
    grades: [10, 11, 12],
    deadline: "March 1, 2025",
    prize: "Portfolio Recognition",
    difficulty: "Beginner",
    website: "https://www.arteducators.org",
    participants: "Individual"
  },
  {
    id: 4,
    title: "Math Olympiad",
    description: "Challenging mathematical problem-solving competition for advanced students.",
    category: "STEM",
    grades: [9, 10, 11, 12],
    deadline: "February 10, 2025",
    prize: "Medals + College Recognition",
    difficulty: "Advanced",
    website: "https://www.moems.org",
    participants: "Teams of 5"
  },
  {
    id: 5,
    title: "Model United Nations",
    description: "Diplomatic simulation where students represent countries in UN committees.",
    category: "Social Studies",
    grades: [9, 10, 11, 12],
    deadline: "November 30, 2024",
    prize: "Awards + Leadership Recognition",
    difficulty: "Intermediate",
    website: "https://www.nmun.org",
    participants: "Delegations"
  },
  {
    id: 6,
    title: "Congressional Debate",
    description: "Speech and debate competition simulating legislative sessions.",
    category: "Speech & Debate",
    grades: [9, 10, 11, 12],
    deadline: "January 5, 2025",
    prize: "Tournament Trophies",
    difficulty: "Intermediate",
    website: "https://www.speechanddebate.org",
    participants: "Individual"
  },
  {
    id: 7,
    title: "Scholastic Bowl",
    description: "Academic quiz competition covering multiple subjects.",
    category: "Academic",
    grades: [9, 10, 11, 12],
    deadline: "December 1, 2024",
    prize: "Team Trophies + Scholarships",
    difficulty: "Beginner",
    website: "https://www.naqt.com",
    participants: "Teams of 4"
  },
  {
    id: 8,
    title: "Future Business Leaders",
    description: "Business competition with events in accounting, marketing, and entrepreneurship.",
    category: "Business",
    grades: [9, 10, 11, 12],
    deadline: "February 28, 2025",
    prize: "$10,000+ scholarships",
    difficulty: "Intermediate",
    website: "https://www.fbla.org",
    participants: "Individual/Team"
  },
  {
    id: 9,
    title: "Robotics Competition",
    description: "Design, build, and program robots to complete challenging tasks.",
    category: "STEM",
    grades: [9, 10, 11, 12],
    deadline: "January 15, 2025",
    prize: "Engineering Scholarships",
    difficulty: "Advanced",
    website: "https://www.firstinspires.org",
    participants: "Teams of 10-25"
  },
  {
    id: 10,
    title: "Creative Writing Contest",
    description: "Original poetry, short stories, and essays competition.",
    category: "Arts",
    grades: [9, 10, 11, 12],
    deadline: "April 1, 2025",
    prize: "Publication + $1,000",
    difficulty: "Beginner",
    website: "https://www.scholastic.com",
    participants: "Individual"
  }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrade, setSelectedGrade] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = Array.from(new Set(competitions.map(comp => comp.category)));

  const filteredCompetitions = useMemo(() => {
    return competitions.filter(competition => {
      const matchesSearch = competition.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          competition.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesGrade = selectedGrade === 'all' || 
                          competition.grades.includes(parseInt(selectedGrade));
      
      const matchesCategory = selectedCategory === 'all' || 
                             competition.category === selectedCategory;

      return matchesSearch && matchesGrade && matchesCategory;
    });
  }, [searchTerm, selectedGrade, selectedCategory]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">CompeteHub</h1>
          </div>
          <p className="text-gray-600 text-lg">Discover amazing competitions for high school students</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search competitions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedGrade} onValueChange={setSelectedGrade}>
              <SelectTrigger>
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by grade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Grades</SelectItem>
                <SelectItem value="9">9th Grade</SelectItem>
                <SelectItem value="10">10th Grade</SelectItem>
                <SelectItem value="11">11th Grade</SelectItem>
                <SelectItem value="12">12th Grade</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredCompetitions.length} competition{filteredCompetitions.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Competition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompetitions.map((competition) => (
            <Card key={competition.id} className="hover:shadow-lg transition-shadow duration-200 border-0 shadow-md">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="mb-2">
                    {competition.category}
                  </Badge>
                  <Badge className={getDifficultyColor(competition.difficulty)}>
                    {competition.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{competition.title}</CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  {competition.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>{competition.participants}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>Due: {competition.deadline}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                  <Trophy className="h-4 w-4" />
                  <span>{competition.prize}</span>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {competition.grades.map(grade => (
                    <Badge key={grade} variant="outline" className="text-xs">
                      Grade {grade}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open(competition.website, '_blank')}
                >
                  Learn More
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredCompetitions.length === 0 && (
          <div className="text-center py-12">
            <Trophy className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">No competitions found</h3>
            <p className="text-gray-600">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
