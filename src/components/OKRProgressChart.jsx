// src/components/OKRProgressChart.jsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { quarter: 'Q1', progress: 25 },
  { quarter: 'Q2', progress: 50 },
  { quarter: 'Q3', progress: 75 },
  { quarter: 'Q4', progress: 90 },
];

export default function OKRProgressChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 20, right: 30, bottom: 20, left: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="quarter" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="progress" stroke="#3b82f6" strokeWidth={3} dot={{ r: 5 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
