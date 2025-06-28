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

  // Add circle style to tiles with OKRs
  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const hasOKR = dueDates.some((d) => isSameDay(d, date));
      if (hasOKR) {
        return 'okr-highlight';
      }
    }
    return null;
  };

  const okrsOnDate = okrs.filter(
    (okr) => okr.dueDate && isSameDay(parseISO(okr.dueDate), value)
  );

  return (
    <div className="space-y-3">
      <Calendar
        onChange={setValue}
        value={value}
        tileClassName={tileClassName}
        className="w-full border-none shadow-none calendar-custom text-sm"
      />

      <div className="bg-blue-50 p-2 rounded-md text-sm">
        <h3 className="font-semibold text-gray-800">
          OKRs on {value.toDateString()}
        </h3>
        {okrsOnDate.length ? (
          <ul className="list-disc pl-5 mt-1">
            {okrsOnDate.map((okr) => (
              <li key={okr.id}>{okr.objective}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 mt-1">No OKRs for this date.</p>
        )}
      </div>

      <style>{`
        .okr-highlight {
          background: #bfdbfe !important;
          color: #1e3a8a !important;
          border-radius: 9999px;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
