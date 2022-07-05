import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const DatePickerOne = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    return (
        <div>
            <h3>대여 시작일</h3>
            <ReactDatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              />
              <h3>대여 종료일</h3>
            <ReactDatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
            />
        </div>
    );
  };
export default DatePickerOne