import { useEffect, useState } from 'react';

const labelStyles = {
  company: {
    color: 'text-blue-800',
    bg: 'bg-blue-100',
    icon: '🏢',
  },
  team: {
    color: 'text-green-800',
    bg: 'bg-green-100',
    icon: '🧑‍🤝‍🧑',
  },
  personal: {
    color: 'text-purple-800',
    bg: 'bg-purple-100',
    icon: '👤',
  },
};

const TypeLabel = ({ type }) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const { icon, bg, color } = labelStyles[type] || {
    icon: '❓',
    bg: 'bg-gray-100',
    color: 'text-gray-800',
  };

  return (
    <span
      className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full transition-opacity duration-500 ${
        fadeIn ? 'opacity-100' : 'opacity-0'
      } ${bg} ${color}`}
    >
      <span className="text-sm">{icon}</span>
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </span>
  );
};

export default TypeLabel;
