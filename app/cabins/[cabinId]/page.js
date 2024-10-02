import CabinDetails from "@/app/_components/CabinDetails";
import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import { getCabin, getCabins } from "@/app/_libs/data-service";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinId);
  return { title: `Cabin ${name}` };
}

export async function generateStaticParams() {
  const cabins = await getCabins();
  const cabinIds = cabins.map((cabin) => ({
    cabinId: String(cabin.id),
  }));
  return cabinIds;
}

function page({ params }) {
  return (
    <>
      <CabinDetails cabinId={params.cabinId} />
      <div className="text-center text-accent-400 text-5xl pt-16">
        Reserve today. Pay on arrival.
      </div>
      <div className="flex border border-primary-800 mx-auto max-w-6xl mt-10">
        <DateSelector />
        <ReservationForm />
      </div>
    </>
  );
}

export default page;
