import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { parseISO, isSameDay } from 'date-fns';


export default function OKRCalendar({ okrs }) {
  const [value, setValue] = useState(new Date());

  // Dates with OKRs
  const dueDates = okrs
    .filter((okr) => okr.dueDate)
    .map((okr) => parseISO(okr.dueDate));

  // Highlight tiles with due OKRs
  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const hasOKR = dueDates.some((d) => isSameDay(d, date));
      if (hasOKR) {
        return 'bg-blue-200 rounded-full font-semibold text-blue-800';
      }
    }
    return null;
  };

  const okrsOnDate = okrs.filter(
    (okr) => okr.dueDate && isSameDay(parseISO(okr.dueDate), value)
  );

  return (
    <div className="space-y-4">
      <Calendar
        onChange={setValue}
        value={value}
        tileClassName={tileClassName}
        className="w-full max-w-lg mx-auto border rounded-md shadow"
      />

      <div className="bg-gray-50 p-4 rounded shadow">
        <h3 className="text-lg font-semibold">
          OKRs due on {value.toDateString()}
        </h3>
        {okrsOnDate.length ? (
          <ul className="list-disc pl-5 mt-2 text-sm">
            {okrsOnDate.map((okr) => (
              <li key={okr.id}>
                <span className="font-medium">{okr.objective}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500 mt-2">
            No OKRs due on this date.
          </p>
        )}
      </div>
    </div>
  );
}
