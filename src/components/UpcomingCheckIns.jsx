import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  formatDistanceToNowStrict,
  parseISO,
  isBefore,
  addDays,
} from 'date-fns';

export default function UpcomingCheckIns({ okrs }) {
  const [dueSoon, setDueSoon] = useState([]);

  useEffect(() => {
    const today = new Date();
    const upcoming = okrs
      .filter(
        (okr) =>
          okr.dueDate &&
          isBefore(parseISO(okr.dueDate), addDays(today, 7))
      )
      .map((okr) => ({
        ...okr,
        dueIn: formatDistanceToNowStrict(parseISO(okr.dueDate)),
      }));

    setDueSoon(upcoming);

    // 🔔 Trigger toast notifications
    upcoming.forEach((okr) => {
      toast.warn(
        `Reminder: "${okr.objective}" is due in ${okr.dueIn}`,
        {
          toastId: `okr-${okr.id}`, // prevents duplicate toasts
        }
      );
    });
  }, [okrs]);

  if (!dueSoon.length) {
    return <p className="text-gray-500 text-sm">No check-ins in the next 7 days.</p>;
  }

  return (
    <ul className="space-y-2">
      {dueSoon.map((okr) => (
        <li key={okr.id} className="text-sm">
          <span className="font-semibold">{okr.objective}</span> — due in{' '}
          <span className="text-red-600">{okr.dueIn}</span>
        </li>
      ))}
    </ul>
  );
}
