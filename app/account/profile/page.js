import GuestForm from "@/app/_components/GuestForm";
export const metadata = { title: "Update Profile" };
function page() {
  return (
    <div className="px-12 py-4 ">
      <h1 className="text-2xl text-accent-400 font-semibold">
        Update your guest profile
      </h1>
      <p className="pt-6">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>
      <GuestForm />
    </div>
  );
}

export default page;
