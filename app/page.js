import Link from "next/link";
import Image from "next/image";
import bg from "@/public/bg.png";
export default function Page() {
  return (
    <>
      <Image
        className="object-cover object-top"
        placeholder="blur"
        src={bg}
        fill
        alt="mountains and forests with two cabins"
      />
      <div className="z-10 relative text-center">
        <h1 className="text-primary-50 text-center text-8xl py-32">
          Welcome to paradise
        </h1>
        <Link
          className=" text-primary-900  text-center text-lg font-semibold bg-accent-500 px-10 py-7 hover:bg-accent-600 transition-colors"
          href="/cabins"
        >
          Explore luxury cabins
        </Link>
      </div>
    </>
  );
}
