import { auth } from "@/app/_libs/auth";

export const metadata = {
  title: "Account",
};
async function page() {
  const session = await auth();

  return (
    <>
      <h1 className="px-12 py-4 text-2xl text-accent-400 font-semibold">
        Welcome, {session.user?.name?.split(" ")[0]}
      </h1>
    </>
  );
}

export default page;
