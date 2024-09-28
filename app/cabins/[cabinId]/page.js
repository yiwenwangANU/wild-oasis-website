import CabinDetails from "@/app/_components/CabinDetails";
import { getCabin, getCabins } from "@/app/_libs/data-service";

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
  return <CabinDetails cabinId={params.cabinId} />;
}

export default page;
