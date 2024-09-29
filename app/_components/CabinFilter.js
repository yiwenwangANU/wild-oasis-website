"use client";
import { useSearchParams } from "next/navigation";

const filterValue = [
  { name: "All cabins", filter: "all" },
  { name: "2-3 guests", filter: "small" },
  { name: "4-7 guests", filter: "medium" },
  { name: "8-13 guests", filter: "large" },
];

function CabinFilter() {
  const searchParams = useSearchParams();
  console.log(searchParams);
  const handleClick = (filter) => {
    console.log(filter);
  };
  return (
    <div className="ml-auto w-fit flex gap-2 items-center my-4 border-primary-800 border">
      {filterValue.map((item) => (
        <button
          className="px-5 py-2 hover:bg-primary-700 active:bg-primary-700"
          key={item.name}
          onClick={() => handleClick(item.filter)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CabinFilter;
