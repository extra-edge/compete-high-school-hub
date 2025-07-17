
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Plus, Trophy } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import AuthenticatedLayout from "@/components/AuthenticatedLayout";

const Journal = () => {
  const [competitions, setCompetitions] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    signUpDate: undefined as Date | undefined
  });

  const categories = [
    "Math", "Science", "Debate", "Programming", "History", "Politics",
    "General Knowledge", "Law", "Business", "Literature", "Engineering",
    "Geography", "Art", "Music", "Language", "Environmental Science",
    "Drama", "Journalism"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.category && formData.signUpDate) {
      const newCompetition = {
        id: Date.now(),
        ...formData,
        signUpDate: formData.signUpDate
      };
      setCompetitions([...competitions, newCompetition]);
      setFormData({
        name: "",
        category: "",
        signUpDate: undefined
      });
    }
  };

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
    <AuthenticatedLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Competition Journal</h1>
          <p className="text-muted-foreground">
            Track the competitions you've signed up for
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Add Competition Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Plus className="h-5 w-5" />
                <span>Add Competition</span>
              </CardTitle>
              <CardDescription>
                Record a new competition sign-up
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Competition Name</Label>
                  <Input
                    id="name"
                    placeholder="e.g., Math Olympiad"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({...formData, category: value})}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Sign-up Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !formData.signUpDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.signUpDate ? format(formData.signUpDate, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={formData.signUpDate}
                        onSelect={(date) => setFormData({...formData, signUpDate: date})}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <Button type="submit" className="w-full">
                  Add Competition
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Competition List */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-semibold">Your Competitions</h2>
            
            {competitions.length === 0 ? (
              <Card className="shadow-lg">
                <CardContent className="text-center py-12">
                  <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No competitions recorded yet.</p>
                  <p className="text-sm text-muted-foreground">Add your first competition to get started!</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {competitions.map((competition) => (
                  <Card key={competition.id} className="shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold">{competition.name}</h3>
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(competition.category)}`}>
                              {competition.category}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              Signed up on {format(competition.signUpDate, "MMM d, yyyy")}
                            </span>
                          </div>
                        </div>
                        <Trophy className="h-5 w-5 text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Journal;
