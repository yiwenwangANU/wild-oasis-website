import CabinCard from "../_components/CabinCard";
import CabinFilter from "../_components/CabinFilter";
import { getCabins } from "../_libs/data-service";

export const metadata = {
  title: "Cabins",
};

async function page() {
  const cabins = await getCabins();
  console.log(cabins);
  return (
    <>
      <h1 className="text-4xl text-accent-400 py-2">Our Luxury Cabins</h1>
      <p className="text-primary-200 text-lg md-10 py-2">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <CabinFilter />
      <div className="py-2 grid grid-cols-2 gap-12">
        {cabins.map((cabin) => (
          <CabinCard cabin={cabin} key={cabin.id} />
        ))}
      </div>
    </>
  );
}

export default page;
