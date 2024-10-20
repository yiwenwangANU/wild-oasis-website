import EditReservation from "@/app/_components/EditReservation";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { supabase } from "@/app/_libs/supabase";
import { Suspense } from "react";

async function page({ params }) {
  const bookingId = params.bookingId;

  return (
    <div className="px-12 py-4 ">
      <h1 className="text-2xl text-accent-400 font-semibold">
        Edit Reservation #{bookingId}
      </h1>
      <Suspense fallback={<Spinner />}>
        <EditReservation bookingId={bookingId} />
      </Suspense>
    </div>
  );
}

export default page;
