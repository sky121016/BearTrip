import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const localizer = momentLocalizer(moment);

const MyCalendar = (props) => {
  const myEventsList = [
    {
      id: 0,
      title: "All Day Event very long title",
      allDay: true,
      start: new Date("2024-7-15"),
      end: new Date("2024-7-18"),
    },
  ];
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{width:800, height: 600 }}
      />
    </div>
  );
};

export default MyCalendar;
