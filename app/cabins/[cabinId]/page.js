import CabinDetails from "@/app/_components/CabinDetails";
import DateSelector from "@/app/_components/DateSelector";
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
      <div className="flex border border-primary-800 mx-auto max-w-6xl my-10">
        <div className="flex flex-col relative">
          <DateSelector />
          <div className="bg-accent-500 h-16 px-8 flex items-center text-primary-800">
            <span className="text-2xl">$400 </span>
            <span>&nbsp;/night</span>
          </div>
        </div>
        <div className="flex-1 bg-primary-800 text-center text-xl flex items-center justify-center">
          <div className="w-1/2">
            Please&nbsp;
            <Link href="/login" className="underline text-accent-500 ">
              login
            </Link>
            &nbsp;to reserve this cabin right now
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
