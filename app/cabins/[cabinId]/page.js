import CabinDetails from "@/app/_components/CabinDetails";
import { getCabin, getCabinIds } from "@/app/_libs/data-service";

export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinId);
  return { title: `Cabin ${name}` };
}

export async function generateStaticParams() {
  const ids = await getCabinIds();
  const cabinIds = ids.map((id) => ({
    cabinId: String(id.id),
  }));
  return cabinIds;
}
function page({ params }) {
  return <CabinDetails cabinId={params.cabinId} />;
}

export default page;
