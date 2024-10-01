"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
function DateSelector() {
  const [selected, setSelected] = useState();

  return (
    <DayPicker
      mode="double"
      selected={selected}
      onSelect={setSelected}
      footer={
        selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
      }
    />
  );
}

export default DateSelector;
