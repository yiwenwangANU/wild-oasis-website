import Image from "next/image";
import cabin01 from "@/public/cabin-001.jpg";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
function CabinDetails() {
  return (
    <div className="border-primary-700 border mx-auto max-w-6xl flex gap-6 py-10">
      <Image
        src={cabin01}
        alt={`cabin image`}
        className="object-cover max-w-xl -translate-x-2 scale-y-125"
      />
      <div className="flex-1 flex flex-col items-start">
        <div className="text-6xl font-bold -translate-x-60 bg-primary-950 px-2 pt-4 pb-4 my-2">
          Cabin 001
        </div>
        <div className="text-primary-300 p-4">
          Discover the ultimate luxury getaway for couples in the cozy wooden
          cabin 001. Nestled in a picturesque forest, this stunning cabin offers
          a secluded and intimate retreat. Inside, enjoy modern high-quality
          wood interiors, a comfortable seating area, a fireplace and a
          fully-equipped kitchen. The plush king-size bed, dressed in fine
          linens guarantees a peaceful nights sleep. Relax in the spa-like
          shower and unwind on the private deck with hot tub.
        </div>
        <ul className="flex flex-col gap-4 p-5 ">
          <li className="flex gap-3 items-center">
            <UsersIcon className="w-4 h-4 text-primary-600" />
            For up to 2 guests
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
