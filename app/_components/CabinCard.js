import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;
  return (
    <div className="border border-primary-800 flex">
      <div className="relative h-52 basis-1/3">
        <Image src={image} alt="cabin image" fill />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="basis-1/4 text-2xl px-6 py-4 text-accent-500">
          Cabin 001
        </div>
        <div className="basis-1/4 px-6 flex gap-2">
          <UsersIcon className="h-5 w-5 text-primary-600" />
          For up to 2 guests
        </div>
        <div className="flex justify-end">
          <div className="text-3xl font-sm">$400</div>
          <div className="p-3">/ night</div>
        </div>
        <div className="flex ">
          <div className="basis-1/2"></div>
          <div className="p-3 flex-1 border-t border-l border-primary-800 place-items-center hover:bg-accent-600 hover:text-primary-950 transition-colors duration-300">
            Details & Reservation &rarr;
          </div>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
