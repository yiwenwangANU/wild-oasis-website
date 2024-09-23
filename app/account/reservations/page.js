import Link from "next/link";
export const metadata = { title: "Reservations" };
function page() {
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
