
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
    title: "Second Young Investors Competition",
    description: "Business and finance competition for students in Dubai, with top 10 presenting for prizes.",
    category: "Finance",
    grades: [9, 10, 11, 12],
    deadline: "March 9, 2025",
    prize: "Top 10 present + prizes",
    difficulty: "Intermediate",
    website: "https://www.secondyounginvestors.com",
    participants: "Teams of 2-4"
  },
  {
    id: 2,
    title: "Eurasian Schools Debating Championships",
    description: "Premier international debating competition held in Istanbul for high school students.",
    category: "Debate",
    grades: [9, 10, 11, 12],
    deadline: "January 31, 2025",
    prize: "Championship titles",
    difficulty: "Advanced",
    website: "https://www.eurasianschoolsdebate.org",
    participants: "Teams of 3-5"
  },
  {
    id: 3,
    title: "World Individual Debating & Public Speaking",
    description: "Global championship for individual debating and public speaking excellence.",
    category: "Debate",
    grades: [9, 10, 11, 12],
    deadline: "April 15, 2025",
    prize: "World champion titles",
    difficulty: "Advanced",
    website: "https://www.widpsc.com",
    participants: "Individual"
  },
  {
    id: 4,
    title: "Global Voices Debate",
    description: "International Schools Network debate competition with British Parliamentary and Lincoln-Douglas formats.",
    category: "Debate",
    grades: [10, 11, 12],
    deadline: "June 30, 2025",
    prize: "Global finals certificates",
    difficulty: "Advanced",
    website: "https://www.isn-qatar.org",
    participants: "Teams of 2 or Individual"
  },
  {
    id: 5,
    title: "Sorbonne Abu Dhabi Model UN",
    description: "Model United Nations conference hosted by Sorbonne University Abu Dhabi.",
    category: "Debate",
    grades: [9, 10, 11, 12],
    deadline: "May 15, 2025",
    prize: "FWWMUN participation certificates",
    difficulty: "Intermediate",
    website: "https://www.sorbonne.ae",
    participants: "Delegations of 3-5"
  },
  {
    id: 6,
    title: "GEMS School MUN Events",
    description: "Regional Model United Nations conferences organized by GEMS Education schools.",
    category: "Debate",
    grades: [9, 10, 11, 12],
    deadline: "Check school calendar",
    prize: "Certificates and awards",
    difficulty: "Intermediate",
    website: "https://www.gemseducation.com",
    participants: "Delegations of 3-5"
  },
  {
    id: 7,
    title: "SEAMC - Southeast Asia Math Competition",
    description: "Regional mathematics competition leading to World Mathematics Championships invitation.",
    category: "Math",
    grades: [9, 10, 11, 12],
    deadline: "November 30, 2024",
    prize: "Medals + WMC invitation",
    difficulty: "Advanced",
    website: "https://www.seamc.org",
    participants: "Teams of 3"
  },
  {
    id: 8,
    title: "MathWorks Math Modeling Challenge",
    description: "Prestigious mathematical modeling competition with substantial scholarship prizes.",
    category: "Math",
    grades: [11, 12],
    deadline: "March 15, 2025",
    prize: "$100,000+ in scholarships",
    difficulty: "Advanced",
    website: "https://www.mathworks.com/academia/student-competitions/mathworks-math-modeling-challenge.html",
    participants: "Teams of 3"
  },
  {
    id: 9,
    title: "Technothlon",
    description: "Multi-disciplinary technology and mathematics olympiad by IIT Guwahati.",
    category: "Math",
    grades: [9, 10, 11, 12],
    deadline: "July 31, 2024",
    prize: "Top 50 invited to IIT + medals",
    difficulty: "Advanced",
    website: "https://technothlon.techniche.org",
    participants: "Teams of 2"
  },
  {
    id: 10,
    title: "National Science Bowl",
    description: "Fast-paced academic competition with significant cash prizes and recognition.",
    category: "STEM",
    grades: [9, 10, 11, 12],
    deadline: "Early academic year registration",
    prize: "$1,000+ cash prizes + trips",
    difficulty: "Advanced",
    website: "https://science.osti.gov/wdts/nsb",
    participants: "Teams of 4"
  },
  {
    id: 11,
    title: "International Schools Cup (Football, Dubai)",
    description: "Premier football tournament for international schools in Dubai with travel packages.",
    category: "Sports",
    grades: [10, 11, 12],
    deadline: "Register by space fills (early 2026)",
    prize: "Trophies + 4★ trip package",
    difficulty: "Intermediate",
    website: "https://www.internationalschoolscup.com",
    participants: "Squads of 14-18"
  },
  {
    id: 12,
    title: "Mina Cup (UAE Football)",
    description: "Annual football competition for U12/U16 teams with scouts exposure.",
    category: "Sports",
    grades: [6, 7, 8, 9, 10],
    deadline: "March/April annually",
    prize: "Medals + scouts exposure",
    difficulty: "Beginner",
    website: "https://www.minacup.ae",
    participants: "Team"
  },
  {
    id: 13,
    title: "Global Student Competition (ISN, Dubai)",
    description: "Multidisciplinary STEAM competition with global finals in Dubai.",
    category: "STEM",
    grades: [10, 11, 12],
    deadline: "June 2025",
    prize: "Global final certificates",
    difficulty: "Intermediate",
    website: "https://www.isn-qatar.org",
    participants: "Individual (nomination)"
  },
  {
    id: 14,
    title: "UAE National Biology Olympiad",
    description: "National biology competition qualifying students for International Biology Olympiad.",
    category: "STEM",
    grades: [9, 10, 11, 12],
    deadline: "Annual (check MoE)",
    prize: "IBO qualification",
    difficulty: "Advanced",
    website: "https://www.moe.gov.ae",
    participants: "Individual"
  },
  {
    id: 15,
    title: "F1 in Schools UAE",
    description: "Engineering challenge designing and racing F1 model cars with world finals entry.",
    category: "STEM",
    grades: [9, 10, 11, 12],
    deadline: "June national finals",
    prize: "World finals entry + trophies",
    difficulty: "Advanced",
    website: "https://www.f1inschools.ae",
    participants: "Teams of 4-6"
  },
  {
    id: 16,
    title: "Curtin University STEM Competition",
    description: "University-level STEM competition with partnership opportunities.",
    category: "STEM",
    grades: [10, 11, 12],
    deadline: "Check university website",
    prize: "University partnerships",
    difficulty: "Intermediate",
    website: "https://www.curtin.edu.ae",
    participants: "Team/Individual"
  },
  {
    id: 17,
    title: "Emirates Young Scientist Competition",
    description: "Annual science competition hosted in Sharjah with prestigious science prizes.",
    category: "STEM",
    grades: [9, 10, 11, 12],
    deadline: "Annual (Sharjah)",
    prize: "Science prizes",
    difficulty: "Advanced",
    website: "https://www.sharjah.ae",
    participants: "Individual"
  },
  {
    id: 18,
    title: "FUNtastic FZX (Australian Physics Fair)",
    description: "Physics competition with exciting tech gadget prizes including iPads.",
    category: "STEM",
    grades: [9, 10, 11, 12],
    deadline: "February 2025",
    prize: "Tech gadgets (iPad etc)",
    difficulty: "Intermediate",
    website: "https://www.physicsfair.com.au",
    participants: "Individual/Teams"
  },
  {
    id: 19,
    title: "Future City Competition",
    description: "Engineering challenge to design sustainable cities of the future.",
    category: "STEM",
    grades: [9, 10, 11, 12],
    deadline: "September intake",
    prize: "Regional & national awards",
    difficulty: "Advanced",
    website: "https://www.futurecity.org",
    participants: "Teams of 5 + mentor"
  },
  {
    id: 20,
    title: "ACSC - Australian School Computing Competition",
    description: "Computing competition for Dubai region with medals and recognition.",
    category: "STEM",
    grades: [7, 8, 9, 10, 11, 12],
    deadline: "February 2025",
    prize: "Medals and recognition",
    difficulty: "Intermediate",
    website: "https://www.acsc.edu.au",
    participants: "Team"
  },
  {
    id: 21,
    title: "CyberPatriot International",
    description: "Cybersecurity competition with scholarships and recognition opportunities.",
    category: "STEM",
    grades: [8, 9, 10, 11, 12],
    deadline: "September - January",
    prize: "Scholarships + recognition",
    difficulty: "Advanced",
    website: "https://www.uscyberpatriot.org",
    participants: "Teams up to 6"
  },
  {
    id: 22,
    title: "ACSL - American Computer Science League",
    description: "Year-round computer science competition with trophies and advancement opportunities.",
    category: "STEM",
    grades: [9, 10, 11, 12],
    deadline: "Year-round rounds",
    prize: "Trophies & advancement",
    difficulty: "Advanced",
    website: "https://www.acsl.org",
    participants: "Teams of 3-5"
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
            <h1 className="text-3xl font-bold text-gray-900">ExtraEdge</h1>
          </div>
          <p className="text-gray-600 text-lg">Excel in Math, Finance & Debate competitions</p>
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
