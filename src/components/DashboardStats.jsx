import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DashboardStats({ okrs }) {
  const [data, setData] = useState({ company: 0, team: 0, personal: 0 });

  useEffect(() => {
    const types = ['company', 'team', 'personal'];
    const results = types.reduce((acc, type) => {
      const list = okrs.filter((o) => o.type === type);
      const avg = list.length
        ? Math.round(
            list.reduce(
              (sum, o) =>
                sum + o.keyResults.reduce((s, kr) => s + kr.progress, 0) / o.keyResults.length,
              0
            ) / list.length
          )
        : 0;
      return { ...acc, [type]: avg };
    }, {});
    setData(results);
  }, [okrs]);

  const chart = (value, color) => ({
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        data: [value, 100 - value],
        backgroundColor: [color, '#E5E7EB'],
        borderWidth: 0,
      },
    ],
  });

  const opts = {
    cutout: '70%',
    plugins: {
      legend: { display: false },
    },
    maintainAspectRatio: false,
  };

  const colors = {
    company: '#3B82F6',
    team: '#10B981',
    personal: '#8B5CF6',
  };

  return (
    <div className="grid grid-cols-3 gap-6">
      {['company', 'team', 'personal'].map((type) => (
        <div key={type} className="text-center space-y-2">
          <h3 className="text-sm font-semibold text-gray-700 capitalize">{type} OKRs</h3>
          <div className="h-[140px] w-[140px] mx-auto">
            <Doughnut data={chart(data[type], colors[type])} options={opts} />
          </div>
          <p className="text-sm text-gray-600">{data[type]}% complete</p>
        </div>
      ))}
    </div>
  );
}
