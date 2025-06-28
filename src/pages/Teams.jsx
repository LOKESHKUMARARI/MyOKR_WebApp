import DashboardLayout from '../components/DashboardLayout';

const mockTeams = [
  {
    name: 'Frontend Team',
    members: ['Alice', 'Bob', 'Charlie'],
    okrs: [
      { objective: 'Improve UI responsiveness', progress: '75%' },
      { objective: 'Refactor component structure', progress: '60%' },
    ],
  },
  {
    name: 'Backend Team',
    members: ['David', 'Eve'],
    okrs: [
      { objective: 'Optimize API performance', progress: '80%' },
      { objective: 'Implement logging system', progress: '50%' },
    ],
  },
];

export default function Teams() {
  return (
    <DashboardLayout title="Teams Overview">
      <div className="bg-gray-50 min-h-screen p-6 rounded-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Project Teams & OKRs</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {mockTeams.map((team, index) => (
            <div key={index} className="bg-white p-5 rounded shadow">
              <h2 className="text-xl font-semibold text-blue-700 mb-2">{team.name}</h2>
              <p className="text-sm text-gray-500 mb-1">Team Members:</p>
              <ul className="list-disc list-inside text-sm mb-3 text-gray-700">
                {team.members.map((member, i) => (
                  <li key={i}>{member}</li>
                ))}
              </ul>

              <p className="text-sm text-gray-500 mb-1">OKRs:</p>
              <ul className="space-y-2">
                {team.okrs.map((okr, j) => (
                  <li key={j} className="bg-gray-100 p-2 rounded text-sm">
                    <strong>{okr.objective}</strong>
                    <span className="float-right text-green-600 font-medium">{okr.progress}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
