import CabinDetails from "@/app/_components/CabinDetails";

function page({ params }) {
  console.log(params);
  return <CabinDetails cabinId={params.cabinId} />;
}

export default page;
