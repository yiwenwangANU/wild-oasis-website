"use client";

function error({ error, reset }) {
  return (
    <main className="flex flex-col items-center gap-6">
      <div className="text-4xl">Something went wrong!</div>
      <p className="">{error.message}</p>
      <button
        className="bg-accent-500 text-primary-800 px-6 py-3"
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
}

export default error;
