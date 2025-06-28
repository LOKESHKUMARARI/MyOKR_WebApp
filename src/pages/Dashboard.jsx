import { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import Card from '../components/Card';
import DashboardStats from '../components/DashboardStats';  // contains mini-donut charts
import OKRCalendar from '../components/OKRCalendar';
import TopPerformers from '../components/TopPerformers';
import UpcomingCheckIns from '../components/UpcomingCheckIns';
import { initialOKRs } from '../features/okrs/okrSlice';

const mockUser = {
  name: 'Jane Smith',
  role: 'Team Lead',
  avatar: '/default-avatar.png',
};

export default function Dashboard() {
  const [okrs] = useState(initialOKRs);

  return (
    <DashboardLayout title="Dashboard Overview">
      <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen p-6">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-extrabold text-blue-900">MyOKR Dashboard</h1>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="font-bold text-gray-900">{mockUser.name}</div>
              <div className="text-sm font-medium text-blue-600">{mockUser.role}</div>
            </div>
            <img
              src={mockUser.avatar}
              alt="avatar"
              className="w-10 h-10 rounded-full border-2 border-blue-300 shadow-inner"
            />
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* 🛠️ Progress Overview – taller to fit donuts */}
          <Card title="Progress Overview" color="indigo" className="h-[360px] p-5 shadow-lg">
            <DashboardStats okrs={okrs} />
          </Card>

          {/* Upcoming Check‑Ins */}
          <Card title="Upcoming Check-Ins" color="yellow" className="h-[140px] p-4 shadow-md">
            <div className="text-sm text-gray-700 overflow-y-auto max-h-[100px]">
              <UpcomingCheckIns okrs={okrs} />
            </div>
          </Card>

          {/* Top Performers */}
          <Card title="Top Performers" color="green" className="h-[140px] p-4 shadow-md">
            <div className="text-sm text-gray-700 overflow-y-auto max-h-[100px]">
              <TopPerformers okrs={okrs} />
            </div>
          </Card>

          {/* Calendar View */}
          <Card title="Calendar View" color="blue" className="h-[250px] p-4 shadow-lg">
            <OKRCalendar okrs={okrs} compact />
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
