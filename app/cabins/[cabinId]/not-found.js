"use client";

import Link from "next/link";

function NotFound() {
  return (
    <main className="flex flex-col items-center gap-6">
      <div className="text-4xl">Cabin could not be found :(</div>

      <Link href="/cabins" className="bg-accent-500 text-primary-800 px-6 py-3">
        Back to all cabins
      </Link>
    </main>
  );
}

export default NotFound;
