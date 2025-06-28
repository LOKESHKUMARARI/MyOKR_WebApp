import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function DashboardStats({ okrs }) {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const types = ['company', 'team', 'personal'];
    const data = types.map((type) => {
      const filtered = okrs.filter((o) => o.type === type);
      const total = filtered.length;
      const avg =
        total > 0
          ? Math.round(
              filtered.reduce((sum, o) => {
                const avgKR =
                  o.keyResults.reduce((s, kr) => s + kr.progress, 0) /
                  o.keyResults.length;
                return sum + avgKR;
              }, 0) / total
            )
          : 0;
      return avg;
    });

    setChartData({
      labels: ['Company', 'Team', 'Personal'],
      datasets: [
        {
          label: 'Average Progress (%)',
          data,
          backgroundColor: ['#3B82F6', '#10B981', '#8B5CF6'],
        },
      ],
    });
  }, [okrs]);

  if (!chartData) return <p>Loading chart...</p>;

  return (
    <div className="w-full">
      <Bar
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
            },
          },
        }}
      />
    </div>
  );
}
