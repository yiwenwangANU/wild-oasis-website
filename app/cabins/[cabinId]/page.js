import CabinDetails from "@/app/_components/CabinDetails";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_libs/data-service";
import { Suspense } from "react";

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
        <Suspense fallback={<Spinner />}>
          <Reservation cabinId={params.cabinId} />
        </Suspense>
      </div>
    </>
  );
}

export default page;
