// src/components/Card.jsx
export default function Card({ title, children, color = 'gray', Icon }) {
  const bgMap = {
    blue: 'bg-blue-50 border-blue-300',
    indigo: 'bg-indigo-50 border-indigo-300',
    yellow: 'bg-yellow-50 border-yellow-300',
    green: 'bg-green-50 border-green-300',
    gray: 'bg-white border-gray-200',
  };

  return (
    <div className={`border shadow rounded-lg p-6 h-full flex flex-col ${bgMap[color]} transition transform hover:-translate-y-1`}>
      <div className="flex items-center mb-4">
        {Icon && <Icon className="h-6 w-6 text-gray-500 mr-2" />}
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
