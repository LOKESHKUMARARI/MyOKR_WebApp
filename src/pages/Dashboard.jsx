import { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import Card from '../components/Card';
import DashboardStats from '../components/DashboardStats';
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
      <div className="bg-gray-50 min-h-screen p-6 rounded-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">MyOKR Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 text-sm">{mockUser.role}</span>
            <img
              src={mockUser.avatar}
              alt="avatar"
              className="w-9 h-9 rounded-full border"
            />
          </div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Team Progress */}
          <div className="lg:col-span-8">
            <Card title="Team Progress">
              <DashboardStats okrs={okrs} />
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            {/* Upcoming Check-Ins */}
            <Card title="Upcoming Check-Ins">
              <UpcomingCheckIns okrs={okrs} />
            </Card>

            {/* Calendar */}
            <Card title="Calendar View">
              <OKRCalendar okrs={okrs} compact />
            </Card>

            {/* Top Performers */}
            <Card title="Top Performers">
              <TopPerformers okrs={okrs} />
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
