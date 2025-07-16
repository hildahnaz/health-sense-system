
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface HealthMetricsChartProps {
  data: any[];
}

const HealthMetricsChart = ({ data }: HealthMetricsChartProps) => {
  const formatTime = (time: string) => {
    const date = new Date(time);
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border">
          <p className="font-medium text-gray-700 mb-2">
            {formatTime(label)}
          </p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {entry.name}: {entry.value.toFixed(1)}
              {entry.name === 'Heart Rate' ? ' bpm' : 
               entry.name === 'Blood Oxygen' ? '%' : 
               entry.name === 'Activity' ? ' steps/min' : ''}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="timestamp" 
            tickFormatter={formatTime}
            stroke="#666"
            fontSize={12}
          />
          <YAxis stroke="#666" fontSize={12} />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="heartRate" 
            stroke="#ef4444" 
            strokeWidth={2}
            name="Heart Rate"
            dot={{ fill: '#ef4444', strokeWidth: 2, r: 3 }}
            activeDot={{ r: 5, stroke: '#ef4444', strokeWidth: 2 }}
          />
          <Line 
            type="monotone" 
            dataKey="bloodOxygen" 
            stroke="#3b82f6" 
            strokeWidth={2}
            name="Blood Oxygen"
            dot={{ fill: '#3b82f6', strokeWidth: 2, r: 3 }}
            activeDot={{ r: 5, stroke: '#3b82f6', strokeWidth: 2 }}
          />
          <Line 
            type="monotone" 
            dataKey="activity" 
            stroke="#10b981" 
            strokeWidth={2}
            name="Activity"
            dot={{ fill: '#10b981', strokeWidth: 2, r: 3 }}
            activeDot={{ r: 5, stroke: '#10b981', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HealthMetricsChart;
