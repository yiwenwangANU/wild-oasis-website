"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
function DateSelector() {
  const [selected, setSelected] = useState();

  return (
    <DayPicker
      mode="range"
      numberOfMonths={2}
      selected={selected}
      onSelect={setSelected}
      classNames={{
        today: `text-accent-0`,
        chevron: `fill-accent-500`,
        selected: `border-none`,
        range_start: `bg-accent-500 rounded-l-3xl`,
        range_middle: `bg-accent-500 `,
        range_end: `bg-accent-500 rounded-r-3xl`,
      }}
    />
  );
}

export default DateSelector;
