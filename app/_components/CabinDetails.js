import Image from "next/image";
import cabin01 from "@/public/cabin-001.jpg";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import { getCabin } from "../_libs/data-service";
import ShowMore from "./ShowMore";

async function CabinDetails({ cabinId }) {
  const { name, maxCapacity, description, image } = await getCabin(cabinId);

  return (
    <div className="border-primary-700 border mx-auto max-w-6xl flex gap-6 py-10">
      <Image
        src={image}
        alt={`cabin image`}
        width={500}
        height={500}
        className="object-cover max-w-xl -translate-x-2 scale-y-125"
      />
      <div className="flex-1 flex flex-col items-start">
        <div className="text-6xl font-bold -translate-x-60 bg-primary-950 px-2 pt-4 pb-4 my-2">
          Cabin {name}
        </div>
        <div className="text-primary-300 p-4">
          <ShowMore>{description}</ShowMore>
        </div>
        <ul className="flex flex-col gap-4 p-5 ">
          <li className="flex gap-3 items-center">
            <UsersIcon className="w-4 h-4 text-primary-600" />
            For up to {maxCapacity} guests
          </li>
          <li className="flex gap-3 items-center">
            <MapPinIcon className="w-4 h-4 text-primary-600" />
            Located in the heart of the Dolomites (Italy)
          </li>
          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="w-4 h-4 text-primary-600" />
            Privacy 100% guaranteed
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CabinDetails;
