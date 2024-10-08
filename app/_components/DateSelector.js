"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { useReservation } from "@/app/_components/ReservationContext";
import { differenceInDays } from "date-fns";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
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
    reservedCabinId,
    setReservedCabinId,
    reservedDate,
    reservationPrice,
    totalDays,
    setReservedDate,
    clearDateSelection,
    setReservedCabin,
    setReservationPrice,
    setReservedCabinImage,
    setTotalDays,
  } = useReservation();

  const handleSelect = (range) => {
    setTotalDays(differenceInDays(range.to, range.from) + 1);
    setReservedDate(range);
    setReservedCabin(name);
    setReservationPrice(
      (differenceInDays(range.to, range.from) + 1) * (regularPrice - discount)
    );
    setReservedCabinId(cabinId);
    setReservedCabinImage(image);
  };
  const pathname = usePathname();

  return (
    <div className="flex flex-col">
      <DayPicker
        mode="range"
        max={maxBookingLength}
        numberOfMonths={2}
        disabled={bookedDates}
        selected={pathname.includes(reservedCabinId) && reservedDate}
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
      <div className="bg-accent-500 flex-1 px-8 flex items-center text-primary-800 justify-between min-h-16">
        <div className="flex gap-5 items-center">
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
          {pathname.includes(reservedCabinId) && reservedDate?.from && (
            <div className="flex bg-accent-600 px-3 py-2 font-bold text-xl">
              <XMarkIcon className="w-5 " />
              {totalDays}
            </div>
          )}
        </div>
        {pathname.includes(reservedCabinId) && reservedDate?.from && (
          <div className="flex gap-5 items-center">
            <div className="font-bold text-lg">TOTAL ${reservationPrice}</div>
            <button
              className="border border-primary-700 px-3 py-1"
              onClick={clearDateSelection}
            >
              Clear
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default DateSelector;
