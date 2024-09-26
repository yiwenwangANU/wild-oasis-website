import CabinCard from "@/app/_components/CabinCard";
import CabinFilter from "@/app/_components/CabinFilter";
import { getCabins } from "@/app/_libs/data-service";
import Loading from "../loading";

export const metadata = {
  title: "Cabins",
};

async function page() {
  const cabins = await getCabins();
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
      <Loading />
    </>
  );
}

export default page;
