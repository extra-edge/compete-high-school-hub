
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Trophy, Calendar, TrendingUp } from "lucide-react";
import AuthenticatedLayout from "@/components/AuthenticatedLayout";

const Dashboard = () => {
  // Sample data for weekly sign-ups
  const weeklyData = [
    { week: "Week 1", signups: 3 },
    { week: "Week 2", signups: 7 },
    { week: "Week 3", signups: 2 },
    { week: "Week 4", signups: 5 }
  ];

  // Sample data for category distribution
  const categoryData = [
    { name: "Math", value: 35, color: "#3b82f6" },
    { name: "Science", value: 25, color: "#10b981" },
    { name: "Debate", value: 20, color: "#8b5cf6" },
    { name: "Programming", value: 15, color: "#f59e0b" },
    { name: "Other", value: 5, color: "#6b7280" }
  ];

  // Sample recent activities
  const recentActivities = [
    { name: "Math Olympiad", category: "Math", date: "2 days ago" },
    { name: "Science Bowl", category: "Science", date: "4 days ago" },
    { name: "Debate Tournament", category: "Debate", date: "6 days ago" }
  ];

  return (
    <AuthenticatedLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Track your competition journey and progress
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Weekly Sign-ups Chart */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5" />
                <span>Weekly Sign-ups</span>
              </CardTitle>
              <CardDescription>
                Number of competitions signed up for each week this month
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis domain={[0, 10]} />
                  <Tooltip />
                  <Bar dataKey="signups" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Category Distribution */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="h-5 w-5" />
                <span>Competition Categories</span>
              </CardTitle>
              <CardDescription>
                Distribution of competitions by category
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activities */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Recent Activities (Last 7 Days)</span>
            </CardTitle>
            <CardDescription>
              Competitions you've signed up for recently
            </CardDescription>
          </CardHeader>
          <CardContent>
            {recentActivities.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No recent activities
              </div>
            ) : (
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                    <div className="space-y-1">
                      <h3 className="font-semibold">{activity.name}</h3>
                      <p className="text-sm text-muted-foreground">{activity.category}</p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {activity.date}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AuthenticatedLayout>
  );
};

export default Dashboard;
