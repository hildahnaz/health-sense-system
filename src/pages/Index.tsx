import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Activity, Droplet, Shield, Brain, TrendingUp, AlertTriangle, Globe, Leaf, Eye } from 'lucide-react';
import HealthMetricsChart from '@/components/HealthMetricsChart';
import AnomalyDetection from '@/components/AnomalyDetection';
import HealthRecommendations from '@/components/HealthRecommendations';
import DataPrivacy from '@/components/DataPrivacy';
import SDGDashboard from '@/components/SDGDashboard';
import AccessibilityFeatures from '@/components/AccessibilityFeatures';
import SustainabilityReport from '@/components/SustainabilityReport';
import { generateHealthData, detectAnomalies, generateRecommendations } from '@/utils/healthAnalytics';

const Index = () => {
  const [healthData, setHealthData] = useState<any[]>([]);
  const [currentMetrics, setCurrentMetrics] = useState({
    heartRate: 72,
    bloodOxygen: 98,
    steps: 8500,
    sleep: 7.5,
    stress: 23
  });
  const [anomalies, setAnomalies] = useState<any[]>([]);
  const [recommendations, setRecommendations] = useState<string[]>([]);

  useEffect(() => {
    // Generate initial data
    const data = generateHealthData(24); // Last 24 hours
    setHealthData(data);
    
    // Detect anomalies
    const detectedAnomalies = detectAnomalies(data);
    setAnomalies(detectedAnomalies);
    
    // Generate recommendations
    const personalizedRecs = generateRecommendations(currentMetrics, detectedAnomalies);
    setRecommendations(personalizedRecs);
    
    // Simulate real-time updates
    const interval = setInterval(() => {
      const newData = generateHealthData(1);
      setHealthData(prev => [...prev.slice(-23), ...newData]);
      
      // Update current metrics with slight variations
      setCurrentMetrics(prev => ({
        heartRate: Math.max(60, Math.min(100, prev.heartRate + (Math.random() - 0.5) * 4)),
        bloodOxygen: Math.max(95, Math.min(100, prev.bloodOxygen + (Math.random() - 0.5) * 0.5)),
        steps: prev.steps + Math.floor(Math.random() * 50),
        sleep: prev.sleep,
        stress: Math.max(0, Math.min(100, prev.stress + (Math.random() - 0.5) * 10))
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getHeartRateStatus = (hr: number) => {
    if (hr < 60) return { status: 'Low', color: 'text-blue-600', bg: 'bg-blue-50' };
    if (hr > 90) return { status: 'High', color: 'text-red-600', bg: 'bg-red-50' };
    return { status: 'Normal', color: 'text-green-600', bg: 'bg-green-50' };
  };

  const getOxygenStatus = (o2: number) => {
    if (o2 < 95) return { status: 'Low', color: 'text-red-600', bg: 'bg-red-50' };
    if (o2 >= 98) return { status: 'Excellent', color: 'text-green-600', bg: 'bg-green-50' };
    return { status: 'Good', color: 'text-blue-600', bg: 'bg-blue-50' };
  };

  const hrStatus = getHeartRateStatus(currentMetrics.heartRate);
  const o2Status = getOxygenStatus(currentMetrics.bloodOxygen);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">HealthAI Monitor</h1>
                <p className="text-sm text-gray-600">AI-Powered Health Analytics for Sustainable Development</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="text-green-600 border-green-600">
                <Shield className="h-3 w-3 mr-1" />
                HIPAA Compliant
              </Badge>
              <Badge variant="outline" className="text-blue-600 border-blue-600">
                <Globe className="h-3 w-3 mr-1" />
                UN SDG Aligned
              </Badge>
              <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">Live Monitoring</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              Health Dashboard
            </TabsTrigger>
            <TabsTrigger value="sdg" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              SDG Impact
            </TabsTrigger>
            <TabsTrigger value="accessibility" className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              Accessibility
            </TabsTrigger>
            <TabsTrigger value="sustainability" className="flex items-center gap-2">
              <Leaf className="h-4 w-4" />
              Sustainability
            </TabsTrigger>
            <TabsTrigger value="privacy" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Privacy & Ethics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-8">
            {/* Real-time Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-red-50 to-pink-50">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-gray-700">Heart Rate</CardTitle>
                    <Heart className="h-5 w-5 text-red-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-gray-900">
                      {Math.round(currentMetrics.heartRate)}
                    </span>
                    <span className="text-lg text-gray-600">bpm</span>
                  </div>
                  <Badge className={`mt-2 ${hrStatus.bg} ${hrStatus.color} border-0`}>
                    {hrStatus.status}
                  </Badge>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-cyan-50">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-gray-700">Blood Oxygen</CardTitle>
                    <Droplet className="h-5 w-5 text-blue-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-gray-900">
                      {currentMetrics.bloodOxygen.toFixed(1)}
                    </span>
                    <span className="text-lg text-gray-600">%</span>
                  </div>
                  <Badge className={`mt-2 ${o2Status.bg} ${o2Status.color} border-0`}>
                    {o2Status.status}
                  </Badge>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-gray-700">Daily Steps</CardTitle>
                    <Activity className="h-5 w-5 text-green-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-gray-900">
                      {currentMetrics.steps.toLocaleString()}
                    </span>
                  </div>
                  <Progress value={(currentMetrics.steps / 10000) * 100} className="mt-3" />
                  <p className="text-xs text-gray-600 mt-1">Goal: 10,000 steps</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-violet-50">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-gray-700">Stress Level</CardTitle>
                    <Brain className="h-5 w-5 text-purple-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-gray-900">
                      {Math.round(currentMetrics.stress)}
                    </span>
                    <span className="text-lg text-gray-600">%</span>
                  </div>
                  <Progress 
                    value={currentMetrics.stress} 
                    className="mt-3"
                  />
                  <p className="text-xs text-gray-600 mt-1">
                    {currentMetrics.stress < 30 ? 'Low stress' : currentMetrics.stress < 60 ? 'Moderate stress' : 'High stress'}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Charts and Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    Health Trends (24h)
                  </CardTitle>
                  <CardDescription>
                    Real-time monitoring of vital signs and activity
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <HealthMetricsChart data={healthData} />
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                    AI Anomaly Detection
                  </CardTitle>
                  <CardDescription>
                    Machine learning powered health anomaly analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <AnomalyDetection anomalies={anomalies} />
                </CardContent>
              </Card>
            </div>

            {/* Recommendations */}
            <HealthRecommendations recommendations={recommendations} />
          </TabsContent>

          <TabsContent value="sdg">
            <SDGDashboard />
          </TabsContent>

          <TabsContent value="accessibility">
            <AccessibilityFeatures />
          </TabsContent>

          <TabsContent value="sustainability">
            <SustainabilityReport />
          </TabsContent>

          <TabsContent value="privacy">
            <DataPrivacy />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
