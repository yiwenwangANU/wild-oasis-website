import CabinDetails from "@/app/_components/CabinDetails";
import { getCabin } from "@/app/_libs/data-service";

export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinId);
  return { title: `Cabin ${name}` };
}

function page({ params }) {
  console.log(params);
  return <CabinDetails cabinId={params.cabinId} />;
}

export default page;
