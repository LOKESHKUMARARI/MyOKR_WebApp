import { useMemo } from 'react';

export default function TopPerformers({ okrs }) {
  // Group personal OKRs by user
  const top = useMemo(() => {
    const userScores = {};

    okrs
      .filter((okr) => okr.type === 'personal')
      .forEach((okr) => {
        const name = okr.owner || 'Unknown';
        const avg =
          okr.keyResults.reduce((s, kr) => s + kr.progress, 0) /
          okr.keyResults.length;

        if (!userScores[name]) userScores[name] = [];
        userScores[name].push(avg);
      });

    return Object.entries(userScores)
      .map(([name, scores]) => ({
        name,
        avg: Math.round(scores.reduce((a, b) => a + b, 0) / scores.length),
      }))
      .sort((a, b) => b.avg - a.avg)
      .slice(0, 5); // Top 5
  }, [okrs]);

  return (
    <div>
      {top.length === 0 ? (
        <p className="text-sm text-gray-500">No personal OKRs yet.</p>
      ) : (
        <ul className="space-y-2 text-sm">
          {top.map((user, index) => (
            <li key={user.name} className="flex justify-between">
              <span>
                #{index + 1} {user.name}
              </span>
              <span className="text-blue-600 font-semibold">{user.avg}%</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
