"use client";

import { useReservation } from "@/app/_components/ReservationContext";
import { usePathname } from "next/navigation";

function ReservationForm({ maxCapacity, username, userImg }) {
  const guestList = Array.from({ length: maxCapacity }, (_, i) => {
    return { name: `${i + 1} guest${i === 0 ? "" : "s"}`, value: i + 1 };
  });
  const {
    reservedCabinId,
    reservedDate,
    guestNum,
    setGuestNum,
    reservationMessage,
    setReservationMessage,
  } = useReservation();
  const pathname = usePathname();

  return (
    <div className="flex flex-col bg-primary-900 flex-1">
      <div className="bg-primary-800 flex justify-between h-10 text-primary-300 px-12 py-5 items-center">
        <div>Loggedin in as</div>
        <div className="flex items-center gap-4">
          <img className="rounded-2xl w-8" src={userImg} alt="" />
          <div>{username}</div>
        </div>
      </div>
      <form className="px-12 py-7">
        <div className="flex flex-col gap-4">
          <div>How many guests?</div>
          <select
            defaultValue={pathname.includes(reservedCabinId) ? guestNum : ""}
            onChange={(e) => setGuestNum(e.target.value)}
            className="bg-primary-200 text-primary-900 w-full h-10 px-4 rounded-sm"
          >
            <option value="" disabled>
              Select number of guest...
            </option>
            {guestList.map((g) => (
              <option value={g.value} key={g.value}>
                {g.name}
              </option>
            ))}
          </select>
          <div>Anything we should know about your stay?</div>
          <textarea
            defaultValue={
              pathname.includes(reservedCabinId) ? reservationMessage : ""
            }
            onChange={(e) => setReservationMessage(e.target.value)}
            className="h-20 bg-primary-200 px-4 rounded-sm py-4 text-primary-900"
            placeholder="Any pets, allergies, special requirements, etc.?"
          ></textarea>
        </div>
        {pathname.includes(reservedCabinId) &&
        reservedDate?.from &&
        guestNum ? (
          <div className="flex-1 flex justify-end pt-7 ">
            <button className="bg-accent-500 text-primary-800 text-lg px-5 py-1 rounded-sm hover:bg-accent-600">
              Reserve now
            </button>
          </div>
        ) : (
          <div className="flex-1 flex justify-end text-primary-200 pt-9">
            <p>Start by selecting dates and guest number.</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default ReservationForm;
