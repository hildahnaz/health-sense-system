
// Simulate health data generation
export const generateHealthData = (hours: number) => {
  const data = [];
  const now = new Date();
  
  for (let i = 0; i < hours; i++) {
    const timestamp = new Date(now.getTime() - (hours - i - 1) * 60 * 60 * 1000);
    
    // Generate realistic health metrics with some variation
    const baseHeartRate = 72;
    const baseBloodOxygen = 98;
    const baseActivity = 20;
    
    // Add time-of-day variations
    const hourOfDay = timestamp.getHours();
    const timeMultiplier = hourOfDay >= 6 && hourOfDay <= 22 ? 1.1 : 0.8; // Higher during day
    
    data.push({
      timestamp: timestamp.toISOString(),
      heartRate: baseHeartRate + (Math.random() - 0.5) * 20 * timeMultiplier,
      bloodOxygen: baseBloodOxygen + (Math.random() - 0.5) * 3,
      activity: baseActivity + Math.random() * 40 * timeMultiplier,
      stress: Math.random() * 60,
      sleep: hourOfDay >= 23 || hourOfDay <= 6 ? Math.random() * 8 : 0
    });
  }
  
  return data;
};

// Simple anomaly detection algorithm (Random Forest simulation)
export const detectAnomalies = (data: any[]) => {
  const anomalies = [];
  
  for (let i = 1; i < data.length; i++) {
    const current = data[i];
    const previous = data[i - 1];
    
    // Heart rate anomalies
    if (Math.abs(current.heartRate - previous.heartRate) > 20) {
      anomalies.push({
        id: `hr-${i}`,
        type: 'Heart Rate Spike',
        severity: current.heartRate > 100 ? 'high' : 'medium',
        description: `Sudden heart rate change from ${previous.heartRate.toFixed(0)} to ${current.heartRate.toFixed(0)} bpm`,
        timestamp: current.timestamp,
        confidence: 0.85 + Math.random() * 0.1
      });
    }
    
    // Blood oxygen anomalies
    if (current.bloodOxygen < 95) {
      anomalies.push({
        id: `o2-${i}`,
        type: 'Low Blood Oxygen',
        severity: current.bloodOxygen < 90 ? 'high' : 'medium',
        description: `Blood oxygen level dropped to ${current.bloodOxygen.toFixed(1)}%`,
        timestamp: current.timestamp,
        confidence: 0.92 + Math.random() * 0.05
      });
    }
    
    // Activity anomalies (very low activity for extended periods)
    if (current.activity < 5 && previous.activity < 5) {
      const hourOfDay = new Date(current.timestamp).getHours();
      if (hourOfDay >= 9 && hourOfDay <= 17) { // During typical active hours
        anomalies.push({
          id: `activity-${i}`,
          type: 'Low Activity Alert',
          severity: 'low',
          description: 'Extended period of inactivity detected during active hours',
          timestamp: current.timestamp,
          confidence: 0.78 + Math.random() * 0.1
        });
      }
    }
  }
  
  // Limit to last 5 anomalies to avoid overwhelming the user
  return anomalies.slice(-5);
};

// Generate personalized health recommendations
export const generateRecommendations = (currentMetrics: any, anomalies: any[]) => {
  const recommendations = [];
  
  // Heart rate based recommendations
  if (currentMetrics.heartRate > 90) {
    recommendations.push("Consider doing some deep breathing exercises to help lower your heart rate.");
    recommendations.push("Try meditation or gentle yoga to reduce cardiovascular stress.");
  } else if (currentMetrics.heartRate < 60) {
    recommendations.push("Your resting heart rate is quite low. Consider light cardio exercise to improve circulation.");
  }
  
  // Blood oxygen recommendations
  if (currentMetrics.bloodOxygen < 97) {
    recommendations.push("Take some deep breaths and ensure good ventilation in your environment.");
    recommendations.push("Consider stepping outside for fresh air if you're indoors.");
  }
  
  // Activity recommendations
  if (currentMetrics.steps < 5000) {
    recommendations.push("You're below your daily step goal. Try taking a 10-minute walk to boost your activity.");
    recommendations.push("Consider taking the stairs instead of elevators when possible.");
  } else if (currentMetrics.steps > 12000) {
    recommendations.push("Great job on staying active! Remember to hydrate well after exercise.");
  }
  
  // Stress recommendations
  if (currentMetrics.stress > 60) {
    recommendations.push("Your stress levels seem elevated. Try a 5-minute mindfulness session.");
    recommendations.push("Consider reducing caffeine intake and practicing progressive muscle relaxation.");
  }
  
  // Sleep recommendations
  if (currentMetrics.sleep < 6) {
    recommendations.push("Aim for 7-9 hours of sleep tonight for optimal health and recovery.");
    recommendations.push("Try establishing a consistent bedtime routine to improve sleep quality.");
  }
  
  // Anomaly-based recommendations
  anomalies.forEach(anomaly => {
    if (anomaly.type.includes('Heart Rate')) {
      recommendations.push("Recent heart rate fluctuations detected. Consider consulting your healthcare provider if this continues.");
    }
    if (anomaly.type.includes('Blood Oxygen')) {
      recommendations.push("Low blood oxygen detected. Ensure you're in a well-ventilated area and consider consulting a doctor.");
    }
  });
  
  // Remove duplicates and limit to top 4 recommendations
  const uniqueRecommendations = [...new Set(recommendations)];
  return uniqueRecommendations.slice(0, 4);
};

// Simulate ML model evaluation metrics
export const getModelPerformance = () => {
  return {
    accuracy: 0.942,
    f1Score: 0.89,
    precision: 0.91,
    recall: 0.87,
    lastTrained: new Date().toISOString(),
    modelType: 'Random Forest + Isolation Forest Ensemble'
  };
};
