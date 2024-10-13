import { auth } from "@/app/_libs/auth";
import { getBookings } from "@/app/_libs/data-service";
import Link from "next/link";
export const metadata = { title: "Reservations" };
async function page() {
  const session = await auth();
  const bookings = await getBookings(session.user.guestId);
  console.log(bookings);
  return (
    <div className="px-12 py-4 ">
      <h1 className="text-2xl text-accent-400 font-semibold">
        Your reservations
      </h1>
      <p className="pt-6">
        You have no reservations yet. Check out our{" "}
        <Link href="/cabins" className="underline text-accent-400">
          luxury cabins →
        </Link>
      </p>
    </div>
  );
}

export default page;
