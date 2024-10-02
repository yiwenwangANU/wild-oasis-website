import CabinDetails from "@/app/_components/CabinDetails";
import DateSelector from "@/app/_components/DateSelector";
import { getCabin, getCabins } from "@/app/_libs/data-service";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinId);
  return { title: `Cabin ${name}` };
}

export async function generateStaticParams() {
  const cabins = await getCabins();
  const cabinIds = cabins.map((cabin) => ({
    cabinId: String(cabin.id),
  }));
  return cabinIds;
}

function page({ params }) {
  return (
    <>
      <CabinDetails cabinId={params.cabinId} />
      <div className="text-center text-accent-400 text-5xl pt-16">
        Reserve today. Pay on arrival.
      </div>
      <div className="flex border border-primary-800 mx-auto max-w-6xl mt-10">
        <div className="flex flex-col relative">
          <DateSelector />
          <div className="bg-accent-500 flex-1 px-8 flex items-center text-primary-800">
            <span className="text-2xl">$400 </span>
            <span>&nbsp;/night</span>
          </div>
        </div>
        <div className="flex flex-col bg-primary-900 flex-1">
          <div className="bg-primary-800 flex justify-between h-10 text-primary-300 px-12 py-3 items-center">
            <div>Loggedin in as</div>
            <div>Username</div>
          </div>
          <form className="px-12 py-7">
            <div className="flex flex-col gap-4">
              <div>How many guests?</div>
              <select
                defaultValue=""
                className="bg-primary-200 text-primary-900 w-full h-10 px-4 rounded-sm"
              >
                <option value="" disabled>
                  Select number of guest...
                </option>
                <option>option1</option>
                <option>option2</option>
              </select>
              <div>Anything we should know about your stay?</div>
              <textarea
                className="h-20 bg-primary-200 px-4 rounded-sm py-4 text-primary-900"
                placeholder="Any pets, allergies, special requirements, etc.?"
              ></textarea>
            </div>
            <div className="flex-1 flex justify-end text-primary-200  pt-9">
              <p>Start by selecting dates</p>
            </div>
          </form>
        </div>
        {/* <div className="flex-1 bg-primary-800 text-center text-xl flex items-center justify-center">
          <div className="w-1/2">
            Please&nbsp;
            <Link href="/login" className="underline text-accent-500 ">
              login
            </Link>
            &nbsp;to reserve this cabin right now
          </div>
        </div> */}
      </div>
    </>
  );
}

export default page;
