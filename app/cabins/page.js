import CabinFilter from "@/app/_components/CabinFilter";
import CabinList from "@/app/_components/CabinList";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";
import ReservationReminder from "@/app/_components/ReservationReminder";

export const revalidate = 3600; // in secs

export const metadata = {
  title: "Cabins",
};

function page({ searchParams }) {
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
      <ReservationReminder />
      <Suspense fallback={<Spinner />} key={searchParams}>
        <CabinFilter />
        <CabinList filter={searchParams} />
      </Suspense>
    </>
  );
}

export default page;
