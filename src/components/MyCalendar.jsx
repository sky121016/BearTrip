import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

const localizer = momentLocalizer(moment);

const MyCalendar = (props) => {
  const DragAndDropCalendar = withDragAndDrop(Calendar);

  const myEventsList = [
    {
      id: 0,
      title: "All Day Event very long title",
      allDay: true,
      start: new Date("2024-7-15"),
      end: new Date("2024-7-18"),
    },
  ];

  const navigate = useNavigate();

  const goSlot = (e) => {
    console.log(e);
    // navigate("/list")
  };

  const moveEvent = () => {
    console.log("move");
  };
  
  const resizeEvent = () => {
    console.log("resize");
  };

  const handleSelectEvent = (e)=>{
    console.log("select event");
    console.log(e);

    // show update event modal
  }

  return (
    <div>
      <DragAndDropCalendar
        localizer={localizer}
        events={myEventsList}
        onEventDrop={moveEvent}
        onEventResize={resizeEvent}
        onSelectSlot={goSlot}
        onSelectEvent={handleSelectEvent}
        selectable
        resizable
        style={{ width: 800, height: 600 }}
      />
    </div>
  );
};

export default MyCalendar;
