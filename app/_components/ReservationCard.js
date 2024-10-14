import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { differenceInDays, format } from "date-fns";
import Image from "next/image";
import { formatDaysDifference } from "@/app/_libs/helper";

function ReservationCard({ booking }) {
  const {
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    cabins: { name, image },
  } = booking;

  const daysDifference = differenceInDays(startDate, new Date());
  return (
    <div className="border border-primary-800 flex  my-6">
      <div className="relative h-28 aspect-square">
        <Image src={image} fill alt="cabin image" />
      </div>
      <div className="flex-1 flex flex-col relative justify-between">
        <div className="px-3 py-2">
          <div className="text-primary-50 text-lg">
            {numNights} {numNights > 1 ? "nights" : "night"} in Cabin {name}
          </div>
          <div className="text-primary-300">
            {format(startDate, "EEEE, MMM d yyyy")}(
            {formatDaysDifference(daysDifference)}) &mdash;{" "}
            {format(endDate, "EEEE, MMM d yyyy")}
          </div>
          {daysDifference >= 0 ? (
            <div className="bg-green-900 absolute top-3 right-5 px-2 py-1 rounded-sm text-sm">
              UPCOMING
            </div>
          ) : (
            <div className="bg-accent-700 absolute top-3 right-5 px-2 py-1 rounded-sm text-sm">
              PAST
            </div>
          )}
        </div>
        <div className="flex justify-between items-center px-3 py-2">
          <div className="flex gap-6">
            <div className="text-lg text-accent-400">${totalPrice}</div>
            <div className="text-primary-300">
              {numGuests} {numGuests > 1 ? "guests" : "guest"}
            </div>
          </div>
          <div className="text-primary-300">
            Booked at {format(created_at, "EEEE, MMM d yyyy, hh:mm:ss a")}
          </div>
        </div>
      </div>
      <div className="flex-none flex flex-col border-l font-semibold border-primary-800 text-sm text-primary-300">
        <button className="flex gap-3 items-center px-4 py-4 basis-1/2 transition-colors duration-200 hover:bg-accent-700 hover:text-primary-950">
          <PencilIcon width={14} />
          EDIT
        </button>

        <button className="border-t border-primary-800 flex gap-3 items-center px-4 py-4 basis-1/2 transition-colors duration-200 hover:bg-accent-700 hover:text-primary-950">
          <TrashIcon width={14} />
          DELETE
        </button>
      </div>
    </div>
  );
}

export default ReservationCard;
