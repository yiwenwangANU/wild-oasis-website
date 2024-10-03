import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "@/app/_libs/data-service";
import { unstable_noStore } from "next/cache";

async function CabinList({ filter }) {
  // unstable_noStore();
  const cabins = await getCabins();

  if (!cabins.length) return null;
  const filterValue = filter?.capacity;
  let displayedCabins;
  if (filterValue === "small")
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity < 4);
  else if (filterValue === "medium")
    displayedCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity < 8
    );
  else if (filterValue === "large")
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);
  else displayedCabins = cabins;
  return (
    <div className="py-2 grid grid-cols-2 gap-12">
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
