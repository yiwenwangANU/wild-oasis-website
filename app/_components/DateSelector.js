"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { useReservation } from "@/app/_components/ReservationContext";
import { differenceInDays } from "date-fns";
function DateSelector({
  cabinId,
  name,
  maxBookingLength,
  regularPrice,
  discount,
  bookedDates,
  image,
}) {
  const {
    setReservedCabinId,
    reservedDate,
    setReservedDate,
    clearReservation,
    setReservedCabin,
    setReservationPrice,
    setReservedCabinImage,
  } = useReservation();
  const handleSelect = (range) => {
    const totalDays = differenceInDays(range.to, range.from) + 1;
    const totalPrice = totalDays * (regularPrice - discount);
    setReservedDate(range);
    setReservedCabin(name);
    setReservationPrice(totalPrice);
    setReservedCabinId(cabinId);
    setReservedCabinImage(image);
  };
  return (
    <div className="flex flex-col">
      <DayPicker
        mode="range"
        max={maxBookingLength}
        numberOfMonths={2}
        disabled={bookedDates}
        selected={reservedDate}
        onSelect={handleSelect}
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
      <div className="bg-accent-500 flex-1 px-8 flex items-center text-primary-800 justify-between">
        <div>
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
        {reservedDate?.from && (
          <button
            className="border border-primary-700 px-3 py-1"
            onClick={clearReservation}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}

export default DateSelector;
