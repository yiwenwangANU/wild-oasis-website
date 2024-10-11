import GuestForm from "@/app/_components/GuestForm";
import SelectCountry from "@/app/_components/SelectCountry";
import { auth } from "@/app/_libs/auth";
import { getGuest } from "@/app/_libs/data-service";
export const metadata = { title: "Update Profile" };
async function page() {
  const session = await auth();
  const guest = await getGuest(session.user.email);
  return (
    <div className="px-12 py-4 ">
      <h1 className="text-2xl text-accent-400 font-semibold">
        Update your guest profile
      </h1>
      <p className="pt-6">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>
      <GuestForm guest={guest}>
        <SelectCountry />
      </GuestForm>
    </div>
  );
}

export default page;
