// src/components/Card.jsx
export default function Card({
  title,
  children,
  color = 'gray',
  Icon,
  className = '',
}) {
  const bgMap = {
    blue: 'bg-blue-50 border-blue-300',
    indigo: 'bg-indigo-50 border-indigo-300',
    yellow: 'bg-yellow-50 border-yellow-300',
    green: 'bg-green-50 border-green-300',
    gray: 'bg-white border-gray-200',
  };

  return (
    <div
      className={`border rounded-lg shadow-sm h-full flex flex-col overflow-hidden ${bgMap[color]} ${className}`}
    >
      {title && (
        <div className="flex items-center px-4 py-2 border-b">
          {Icon && <Icon className="h-5 w-5 text-gray-500 mr-2" />}
          <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
        </div>
      )}
      <div className="p-2 flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
