"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
function DateSelector({
  maxBookingLength,
  regularPrice,
  discount,
  bookedDates,
}) {
  const [selected, setSelected] = useState();

  const dates = [
    new Date(2024, 10, 15), // October 15, 2023
    new Date(2024, 10, 18), // October 18, 2023
    new Date(2024, 10, 22), // October 22, 2023
    // Add more booked dates as needed
  ];

  return (
    <div className="flex flex-col">
      <DayPicker
        mode="range"
        max={maxBookingLength}
        numberOfMonths={2}
        disabled={bookedDates}
        selected={selected}
        onSelect={setSelected}
        className="scale-75 -mx-10"
        classNames={{
          today: `text-accent-0`,
          week: `text-xl`,
          weekdays: `text-xl font-semibold uppercase`,
          chevron: `fill-accent-500`,
          selected: `border-none`,
          range_start: `bg-accent-500 rounded-l-3xl`,
          range_middle: `bg-accent-500 `,
          range_end: `bg-accent-500 rounded-r-3xl`,
        }}
      />
      <div className="bg-accent-500 flex-1 px-8 flex items-center text-primary-800">
        <span className="text-2xl">${regularPrice - discount} </span>
        <span>
          &nbsp;
          {discount ? (
            <span className="line-through text-primary-700 font-semibold">
              ${regularPrice}&nbsp;
            </span>
          ) : (
            ""
          )}
          /night
        </span>
      </div>
    </div>
  );
}

export default DateSelector;
