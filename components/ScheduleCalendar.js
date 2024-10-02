import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const ScheduleCalendar = ({ schedules }) => {
  const [value, setValue] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={setValue}
        value={value}
        tileContent={({ date }) => {
          const daySchedules = schedules.filter(
            (schedule) => new Date(schedule.date).toDateString() === date.toDateString()
          );
          return (
            <ul>
              {daySchedules.map((schedule) => (
                <li key={schedule.id}>{schedule.title}</li>
              ))}
            </ul>
          );
        }}
      />
    </div>
  );
};

export default ScheduleCalendar;
