import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "@/app/_libs/data-service";

async function CabinList() {
  const cabins = await getCabins();
  if (!cabins.length) return null;
  return (
    <div className="py-2 grid grid-cols-2 gap-12">
      {cabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
