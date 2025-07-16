
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Lock, Eye, Server, CheckCircle } from 'lucide-react';

const DataPrivacy = () => {
  const privacyFeatures = [
    {
      icon: <Lock className="h-4 w-4 text-blue-600" />,
      title: "End-to-End Encryption",
      description: "All health data is encrypted using AES-256 encryption"
    },
    {
      icon: <Eye className="h-4 w-4 text-green-600" />,
      title: "Data Anonymization",
      description: "Personal identifiers are removed before ML processing"
    },
    {
      icon: <Server className="h-4 w-4 text-purple-600" />,
      title: "Secure Cloud Storage",
      description: "HIPAA-compliant cloud infrastructure with SOC 2 Type II"
    },
    {
      icon: <CheckCircle className="h-4 w-4 text-orange-600" />,
      title: "Consent Management",
      description: "Granular control over data usage and sharing preferences"
    }
  ];

  const complianceStandards = [
    { name: "HIPAA", status: "Compliant", color: "bg-green-100 text-green-700" },
    { name: "GDPR", status: "Compliant", color: "bg-green-100 text-green-700" },
    { name: "SOC 2", status: "Type II", color: "bg-blue-100 text-blue-700" },
    { name: "ISO 27001", status: "Certified", color: "bg-purple-100 text-purple-700" }
  ];

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-green-600" />
          Data Privacy & Security
        </CardTitle>
        <CardDescription>
          Your health data is protected with enterprise-grade security
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Privacy Features */}
          <div className="space-y-3">
            {privacyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="mt-0.5">{feature.icon}</div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">{feature.title}</p>
                  <p className="text-xs text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Compliance Standards */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Compliance Standards</h4>
            <div className="grid grid-cols-2 gap-2">
              {complianceStandards.map((standard, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-white border rounded-lg">
                  <span className="text-sm font-medium text-gray-700">{standard.name}</span>
                  <Badge className={`text-xs ${standard.color} border-0`}>
                    {standard.status}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Data Retention */}
          <div className="p-3 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-1">Data Retention Policy</h4>
            <p className="text-xs text-blue-700">
              Health data is retained for 7 years as per medical standards. 
              You can request data deletion at any time through your privacy settings.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t">
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">99.9%</div>
              <div className="text-xs text-gray-600">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-blue-600">256-bit</div>
              <div className="text-xs text-gray-600">Encryption</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DataPrivacy;
