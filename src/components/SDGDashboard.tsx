
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Heart, Users, Globe, Target, Award, TrendingUp } from 'lucide-react';

const SDGDashboard = () => {
  const sdgGoals = [
    {
      number: 3,
      title: "Good Health and Well-being",
      description: "Ensure healthy lives and promote well-being for all at all ages",
      progress: 78,
      icon: <Heart className="h-5 w-5 text-red-500" />,
      ourContribution: "AI-powered health monitoring for early disease detection",
      metrics: ["1,247 users monitored", "89% early detection rate", "45% reduction in hospital visits"]
    },
    {
      number: 9,
      title: "Industry, Innovation and Infrastructure",
      description: "Build resilient infrastructure, promote inclusive and sustainable industrialization",
      progress: 65,
      icon: <Target className="h-5 w-5 text-blue-500" />,
      ourContribution: "Advanced ML algorithms for healthcare innovation",
      metrics: ["94.2% AI accuracy", "24/7 monitoring capability", "HIPAA compliant infrastructure"]
    },
    {
      number: 10,
      title: "Reduced Inequalities",
      description: "Reduce inequality within and among countries",
      progress: 72,
      icon: <Users className="h-5 w-5 text-purple-500" />,
      ourContribution: "Accessible healthcare monitoring for all communities",
      metrics: ["Available in 12 languages", "Mobile-first design", "Low-cost monitoring solutions"]
    },
    {
      number: 17,
      title: "Partnerships for the Goals",
      description: "Strengthen the means of implementation and revitalize global partnerships",
      progress: 58,
      icon: <Globe className="h-5 w-5 text-green-500" />,
      ourContribution: "Open-source health data standards and APIs",
      metrics: ["5 healthcare partnerships", "Open API for researchers", "Community-driven development"]
    }
  ];

  const impactMetrics = [
    { label: "Lives Impacted", value: "12,547", change: "+23%" },
    { label: "Healthcare Costs Saved", value: "$2.3M", change: "+18%" },
    { label: "Carbon Footprint Reduced", value: "45%", change: "+12%" },
    { label: "Data Privacy Score", value: "99.8%", change: "+0.2%" }
  ];

  return (
    <div className="space-y-6">
      {/* Impact Overview */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-green-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-6 w-6 text-blue-600" />
            SDG Impact Overview
          </CardTitle>
          <CardDescription>
            Our contribution to the United Nations Sustainable Development Goals
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
                <Badge className="bg-green-100 text-green-700 border-0">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {metric.change}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* SDG Goals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {sdgGoals.map((goal) => (
          <Card key={goal.number} className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  {goal.icon}
                  <div>
                    <CardTitle className="text-lg">SDG {goal.number}: {goal.title}</CardTitle>
                    <CardDescription className="text-sm mt-1">
                      {goal.description}
                    </CardDescription>
                  </div>
                </div>
                <Badge className="bg-blue-100 text-blue-700 border-0">
                  {goal.progress}%
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Progress towards goal</span>
                    <span className="font-medium">{goal.progress}%</span>
                  </div>
                  <Progress value={goal.progress} className="h-2" />
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Our Contribution</h4>
                  <p className="text-sm text-gray-600 mb-3">{goal.ourContribution}</p>
                  
                  <div className="space-y-1">
                    {goal.metrics.map((metric, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs text-gray-500">
                        <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SDGDashboard;
