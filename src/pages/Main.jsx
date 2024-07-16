import React from "react";
import * as M from "./Main.style";
import MyCalendar from "../components/MyCalendar";

const Main = () => {
  const today = new Date();

  return (
    <M.Wrapper>
      <M.Header>
        <M.Title>My Calendar</M.Title>

      </M.Header>
      <M.CalendarWrapper>
        <MyCalendar />
      </M.CalendarWrapper>
    </M.Wrapper>
  );
};

export default Main;
