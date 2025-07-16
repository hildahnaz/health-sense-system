
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Leaf, 
  Zap, 
  CloudSnow, 
  Recycle, 
  TreePine, 
  BarChart3,
  Target,
  Calendar
} from 'lucide-react';

const SustainabilityReport = () => {
  const sustainabilityMetrics = [
    {
      title: "Carbon Footprint",
      value: "2.1 tons CO₂",
      reduction: "45%",
      target: "Carbon Neutral by 2025",
      icon: <CloudSnow className="h-5 w-5 text-blue-500" />,
      progress: 68
    },
    {
      title: "Energy Efficiency",
      value: "92%",
      reduction: "12%",
      target: "95% Renewable Energy",
      icon: <Zap className="h-5 w-5 text-yellow-500" />,
      progress: 92
    },
    {
      title: "Digital Waste",
      value: "0.3 GB",
      reduction: "78%",
      target: "Zero Digital Waste",
      icon: <Recycle className="h-5 w-5 text-green-500" />,
      progress: 85
    },
    {
      title: "Green Infrastructure",
      value: "100%",
      reduction: "N/A",
      target: "Fully Green Hosting",
      icon: <Leaf className="h-5 w-5 text-green-600" />,
      progress: 100
    }
  ];

  const greenInitiatives = [
    {
      title: "Green Cloud Computing",
      description: "Powered by 100% renewable energy data centers",
      impact: "Reduced CO₂ emissions by 1.2 tons annually",
      status: "Active"
    },
    {
      title: "Paperless Operations",
      description: "Digital-first approach to all health records and reports",
      impact: "Saved 2,500 sheets of paper this year",
      status: "Active"
    },
    {
      title: "Efficient Algorithms",
      description: "Optimized ML models to reduce computational power",
      impact: "30% reduction in processing energy",
      status: "Active"
    },
    {
      title: "Carbon Offset Program",
      description: "Partnering with reforestation projects",
      impact: "100 trees planted this quarter",
      status: "Planned"
    }
  ];

  const environmentalGoals = [
    { goal: "Achieve Carbon Neutrality", deadline: "2025", progress: 68 },
    { goal: "100% Renewable Energy", deadline: "2024", progress: 92 },
    { goal: "Zero Digital Waste", deadline: "2026", progress: 85 },
    { goal: "Paperless Operations", deadline: "2023", progress: 100 }
  ];

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Leaf className="h-5 w-5 text-green-600" />
          Sustainability & Environmental Impact
        </CardTitle>
        <CardDescription>
          Our commitment to environmental responsibility and sustainable healthcare technology
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Sustainability Metrics */}
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Environmental Metrics</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sustainabilityMetrics.map((metric, index) => (
                <div key={index} className="p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {metric.icon}
                      <span className="font-medium text-gray-900">{metric.title}</span>
                    </div>
                    <Badge className="bg-green-100 text-green-700 border-0">
                      -{metric.reduction}
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-600 mb-3">{metric.target}</div>
                  <Progress value={metric.progress} className="h-2" />
                  <div className="text-xs text-gray-500 mt-1">{metric.progress}% complete</div>
                </div>
              ))}
            </div>
          </div>

          {/* Green Initiatives */}
          <div>
            <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
              <TreePine className="h-4 w-4" />
              Green Initiatives
            </h4>
            <div className="space-y-3">
              {greenInitiatives.map((initiative, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="mt-1">
                    <div className={`w-2 h-2 rounded-full ${
                      initiative.status === 'Active' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-gray-900">{initiative.title}</span>
                      <Badge 
                        className={`text-xs border-0 ${
                          initiative.status === 'Active' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {initiative.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{initiative.description}</p>
                    <p className="text-xs text-green-600 font-medium">{initiative.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Environmental Goals */}
          <div>
            <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
              <Target className="h-4 w-4" />
              Environmental Goals & Timeline
            </h4>
            <div className="space-y-3">
              {environmentalGoals.map((goal, index) => (
                <div key={index} className="p-3 bg-white border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{goal.goal}</span>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{goal.deadline}</span>
                    </div>
                  </div>
                  <Progress value={goal.progress} className="h-2 mb-1" />
                  <div className="text-xs text-gray-500">{goal.progress}% complete</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t">
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">100%</div>
              <div className="text-xs text-gray-600">Green Hosting</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-blue-600">-45%</div>
              <div className="text-xs text-gray-600">Carbon Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-purple-600">B Corp</div>
              <div className="text-xs text-gray-600">Certified</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SustainabilityReport;
