const filterValue = ["All cabins", "2-3 guests", "4-7 guests", "8-13 guests"];

function CabinFilter() {
  return (
    <div className="ml-auto w-fit flex gap-2 items-center my-4 border-primary-800 border">
      {filterValue.map((item) => (
        <button
          className="px-5 py-2 hover:bg-primary-700 active:bg-primary-700"
          key={item}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default CabinFilter;
