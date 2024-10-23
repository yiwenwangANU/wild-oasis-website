"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { useReservation } from "@/app/_components/ReservationContext";
import { differenceInDays } from "date-fns";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getNearestDateOnLeft, getNearestDateOnRight } from "../_libs/helper";

function DateSelector({
  cabinId,
  name,
  regularPrice,
  discount,
  bookedDates,
  image,
  reservedRange,
  isEdit,
  tomorrow,
  today,
}) {
  const pathname = usePathname();
  const [rsrange, setRsrange] = useState(reservedRange);
  const [bookedDateBefore, setBookedDateBefore] = useState("");
  const [bookedDateAfter, setBookedDateAfter] = useState("");
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

  // if in edit mode, get reserved date from reserved range, and calculate total days and price
  useEffect(() => {
    if (reservedRange && isEdit) {
      setReservedDate(reservedRange);
      setTotalDays(differenceInDays(reservedRange.to, reservedRange.from) + 1);
      setReservationPrice(
        (differenceInDays(reservedRange.to, reservedRange.from) + 1) *
          (regularPrice - discount)
      );
    }
  }, [
    reservedRange,
    setReservedDate,
    isEdit,
    setTotalDays,
    setReservationPrice,
    discount,
    regularPrice,
  ]);

  const handleSelect = (range) => {
    if (!range) return;

    // disable the date from selection that will includes booked dates
    setBookedDateBefore(getNearestDateOnLeft(range.from, bookedDates));
    setBookedDateAfter(getNearestDateOnRight(range.from, bookedDates));

    setTotalDays(differenceInDays(range.to, range.from) + 1);
    setReservedDate(range);
    setReservedCabin(name);
    setReservationPrice(
      (differenceInDays(range.to, range.from) + 1) * (regularPrice - discount)
    );
    setReservedCabinId(cabinId);
    setReservedCabinImage(image);

    // clear the reservation range if in edit mode
    setRsrange(null);
  };

  const handleClear = () => {
    clearDateSelection();
    setRsrange(null);
    setBookedDateBefore("");
    setBookedDateAfter("");
  };
  return (
    <div className="flex flex-col">
      <DayPicker
        mode="range"
        numberOfMonths={2}
        disabled={
          rsrange
            ? [{ before: tomorrow }, { after: today }]
            : [
                { before: tomorrow },
                { before: bookedDateBefore },
                { after: bookedDateAfter },
                ...bookedDates,
              ]
        }
        selected={
          (pathname.includes(`/cabins/${reservedCabinId}`) || isEdit) &&
          reservedDate
        }
        onSelect={(range) => {
          handleSelect(range);
        }}
        className="scale-75 mx-auto"
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
          {((pathname.includes(`/cabins/${reservedCabinId}`) &&
            reservedDate?.from) ||
            (isEdit && reservedDate?.from) ||
            rsrange) && (
            <div className="flex bg-accent-600 px-3 py-2 font-bold text-xl">
              <XMarkIcon className="w-5 " />
              {totalDays}
            </div>
          )}
        </div>
        {((pathname.includes(`/cabins/${reservedCabinId}`) &&
          reservedDate?.from) ||
          (isEdit && reservedDate?.from) ||
          rsrange) && (
          <div className="flex gap-5 items-center">
            <div className="font-bold text-lg">TOTAL ${reservationPrice}</div>
            <button
              className="border border-primary-700 px-3 py-1"
              onClick={handleClear}
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
