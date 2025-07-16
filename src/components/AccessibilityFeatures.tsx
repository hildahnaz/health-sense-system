
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Eye, 
  Ear, 
  MousePointer, 
  Keyboard, 
  Languages, 
  Volume2,
  PaletteIcon,
  Type,
  CheckCircle,
  Settings
} from 'lucide-react';
import { useState } from 'react';

const AccessibilityFeatures = () => {
  const [activeFeatures, setActiveFeatures] = useState<string[]>(['high-contrast', 'large-text']);

  const accessibilityFeatures = [
    {
      id: 'high-contrast',
      title: 'High Contrast Mode',
      description: 'Enhanced color contrast for better visibility',
      icon: <PaletteIcon className="h-4 w-4" />,
      category: 'Visual',
      enabled: true
    },
    {
      id: 'large-text',
      title: 'Large Text',
      description: 'Increased font size for better readability',
      icon: <Type className="h-4 w-4" />,
      category: 'Visual',
      enabled: true
    },
    {
      id: 'screen-reader',
      title: 'Screen Reader Support',
      description: 'Full ARIA labels and semantic HTML',
      icon: <Volume2 className="h-4 w-4" />,
      category: 'Audio',
      enabled: true
    },
    {
      id: 'keyboard-nav',
      title: 'Keyboard Navigation',
      description: 'Complete keyboard accessibility',
      icon: <Keyboard className="h-4 w-4" />,
      category: 'Motor',
      enabled: true
    },
    {
      id: 'voice-control',
      title: 'Voice Commands',
      description: 'Voice-activated health monitoring',
      icon: <Ear className="h-4 w-4" />,
      category: 'Audio',
      enabled: false
    },
    {
      id: 'reduced-motion',
      title: 'Reduced Motion',
      description: 'Minimized animations for motion sensitivity',
      icon: <MousePointer className="h-4 w-4" />,
      category: 'Motor',
      enabled: false
    }
  ];

  const languageSupport = [
    'English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 
    'Arabic', 'Portuguese', 'Russian', 'Hindi', 'Korean', 'Italian'
  ];

  const toggleFeature = (featureId: string) => {
    setActiveFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Visual': return 'bg-blue-100 text-blue-700';
      case 'Audio': return 'bg-green-100 text-green-700';
      case 'Motor': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Eye className="h-5 w-5 text-blue-600" />
          Accessibility & Inclusion Features
        </CardTitle>
        <CardDescription>
          Ensuring healthcare technology is accessible to everyone
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Accessibility Features */}
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Accessibility Features</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {accessibilityFeatures.map((feature) => (
                <div 
                  key={feature.id} 
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded">
                      {feature.icon}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{feature.title}</p>
                      <p className="text-xs text-gray-600">{feature.description}</p>
                      <Badge className={`mt-1 text-xs ${getCategoryColor(feature.category)} border-0`}>
                        {feature.category}
                      </Badge>
                    </div>
                  </div>
                  <Button
                    variant={activeFeatures.includes(feature.id) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleFeature(feature.id)}
                    className="ml-2"
                  >
                    {activeFeatures.includes(feature.id) ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <Settings className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Language Support */}
          <div>
            <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
              <Languages className="h-4 w-4" />
              Multi-language Support
            </h4>
            <div className="p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
              <p className="text-sm text-gray-700 mb-3">
                Available in {languageSupport.length} languages to serve diverse communities worldwide
              </p>
              <div className="flex flex-wrap gap-2">
                {languageSupport.map((language, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {language}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Accessibility Standards */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t">
            <div className="text-center">
              <div className="text-lg font-bold text-blue-600">WCAG 2.1</div>
              <div className="text-xs text-gray-600">AA Compliant</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">Section 508</div>
              <div className="text-xs text-gray-600">Certified</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccessibilityFeatures;
