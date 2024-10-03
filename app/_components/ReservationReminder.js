"use client";

import { useReservation } from "@/app/_components/ReservationContext";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function ReservationReminder() {
  const {
    reservedCabinId,
    reservedDate,
    reservedCabin,
    reservationPrice,
    reservedCabinImage,
  } = useReservation();

  const pathname = usePathname();
  if (!reservedCabinId) return;
  if (pathname.includes(`cabins/${reservedCabinId}`)) return;
  return (
    <Link
      href={`/cabins/${reservedCabinId}`}
      className="bg-primary-800 bg-opacity-70 w-30 fixed right-4 top-6 py-3 px-4 flex flex-col rounded-sm border border-transparent hover:border hover:border-primary-700"
    >
      <div className="flex">
        <p className="text-sm font-bold text-primary-200">
          Finish your booking!{" "}
        </p>
        <ChevronRightIcon className="w-6 font-bold translate-y-7 translate-x-3" />
      </div>
      <div className="flex gap-2">
        <div>
          <p className="text-xs font-normal text-primary-200">
            Cabin {reservedCabin} for
          </p>
          <p className="text-2xl text-primary-50">${reservationPrice}</p>
        </div>
        <div className="flex-1 ">
          <Image
            width={60}
            height={60}
            src={reservedCabinImage}
            alt="cabin image"
            quality={20}
          />
        </div>
      </div>
      <p className="text-xs text-primary-200">
        from {reservedDate?.from?.toLocaleDateString("en-US")} to{" "}
        {reservedDate?.to?.toLocaleDateString("en-US")}
      </p>
    </Link>
  );
}

export default ReservationReminder;
