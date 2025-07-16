
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Heart, Activity, Moon, Brain } from 'lucide-react';

interface HealthRecommendationsProps {
  recommendations: string[];
}

const HealthRecommendations = ({ recommendations }: HealthRecommendationsProps) => {
  const getRecommendationIcon = (recommendation: string) => {
    if (recommendation.includes('heart') || recommendation.includes('cardio')) {
      return <Heart className="h-4 w-4 text-red-500" />;
    }
    if (recommendation.includes('exercise') || recommendation.includes('walk')) {
      return <Activity className="h-4 w-4 text-green-500" />;
    }
    if (recommendation.includes('sleep') || recommendation.includes('rest')) {
      return <Moon className="h-4 w-4 text-blue-500" />;
    }
    if (recommendation.includes('stress') || recommendation.includes('relax')) {
      return <Brain className="h-4 w-4 text-purple-500" />;
    }
    return <Lightbulb className="h-4 w-4 text-yellow-500" />;
  };

  const getRecommendationCategory = (recommendation: string) => {
    if (recommendation.includes('heart') || recommendation.includes('cardio')) {
      return { category: 'Cardiovascular', color: 'bg-red-100 text-red-700' };
    }
    if (recommendation.includes('exercise') || recommendation.includes('walk')) {
      return { category: 'Activity', color: 'bg-green-100 text-green-700' };
    }
    if (recommendation.includes('sleep') || recommendation.includes('rest')) {
      return { category: 'Recovery', color: 'bg-blue-100 text-blue-700' };
    }
    if (recommendation.includes('stress') || recommendation.includes('relax')) {
      return { category: 'Mental Health', color: 'bg-purple-100 text-purple-700' };
    }
    return { category: 'General', color: 'bg-gray-100 text-gray-700' };
  };

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-yellow-600" />
          AI Health Recommendations
        </CardTitle>
        <CardDescription>
          Personalized insights based on your health data and patterns
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.length === 0 ? (
            <div className="text-center py-6">
              <Lightbulb className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <p className="text-gray-600 font-medium">Great job!</p>
              <p className="text-sm text-gray-500">Keep maintaining your healthy lifestyle</p>
            </div>
          ) : (
            recommendations.map((recommendation, index) => {
              const categoryInfo = getRecommendationCategory(recommendation);
              return (
                <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="mt-0.5">
                    {getRecommendationIcon(recommendation)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className={`text-xs ${categoryInfo.color} border-0`}>
                        {categoryInfo.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-700">{recommendation}</p>
                  </div>
                </div>
              );
            })
          )}
        </div>
        
        <div className="mt-6 pt-4 border-t">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Powered by Machine Learning</span>
            <span>Updated every 5 minutes</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthRecommendations;
