"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const filterValue = [
  { name: "All cabins", filter: "all" },
  { name: "2-3 guests", filter: "small" },
  { name: "4-7 guests", filter: "medium" },
  { name: "8-13 guests", filter: "large" },
];

function CabinFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeFilter = searchParams.get("capacity");

  const handleClick = (filter) => {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };
  return (
    <div className="ml-auto w-fit flex items-center my-4 border-primary-800 border">
      {filterValue.map((item) => (
        <button
          className={`px-5 py-2 hover:bg-primary-700  hover:text-primary-50 ${
            item.filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
          }`}
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
