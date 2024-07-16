import React from "react";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { forwardRef } from "react";
import * as W from "./WriteComponent.style";

const WriteDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <W.DateInput className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </W.DateInput>
  ));

  return (
    <W.DatePickerContainer>
      <DatePicker
        dateFormat="yyyy/MM/dd"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        customInput={<CustomInput />}
      />
    </W.DatePickerContainer>
  );
};

export default WriteDatePicker;
