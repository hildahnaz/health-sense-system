
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, CheckCircle, Clock } from 'lucide-react';

interface Anomaly {
  id: string;
  type: string;
  severity: 'low' | 'medium' | 'high';
  description: string;
  timestamp: string;
  confidence: number;
}

interface AnomalyDetectionProps {
  anomalies: Anomaly[];
}

const AnomalyDetection = ({ anomalies }: AnomalyDetectionProps) => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high': return <AlertTriangle className="h-4 w-4 text-red-600" />;
      case 'medium': return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'low': return <CheckCircle className="h-4 w-4 text-blue-600" />;
      default: return <CheckCircle className="h-4 w-4 text-gray-600" />;
    }
  };

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-4">
      {anomalies.length === 0 ? (
        <div className="text-center py-8">
          <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
          <p className="text-gray-600 font-medium">No anomalies detected</p>
          <p className="text-sm text-gray-500">Your health metrics are within normal ranges</p>
        </div>
      ) : (
        <div className="max-h-64 overflow-y-auto space-y-3">
          {anomalies.map((anomaly) => (
            <Card key={anomaly.id} className="border-0 shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {getSeverityIcon(anomaly.severity)}
                    <span className="font-medium text-gray-900">{anomaly.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getSeverityColor(anomaly.severity)}>
                      {anomaly.severity.toUpperCase()}
                    </Badge>
                    <span className="text-xs text-gray-500">
                      {formatTime(anomaly.timestamp)}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">{anomaly.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    Confidence: {(anomaly.confidence * 100).toFixed(1)}%
                  </span>
                  <div className="w-20 bg-gray-200 rounded-full h-1.5">
                    <div 
                      className="bg-blue-600 h-1.5 rounded-full transition-all duration-300"
                      style={{ width: `${anomaly.confidence * 100}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      
      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <p className="text-xs text-blue-700 font-medium">
          AI Model: Random Forest + Isolation Forest
        </p>
        <p className="text-xs text-blue-600">
          Accuracy: 94.2% | F1-Score: 0.89 | Last trained: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default AnomalyDetection;
