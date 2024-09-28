import Image from "next/image";
import about_1 from "@/public/about-1.jpg";
import about_2 from "@/public/about-2.jpg";
import Link from "next/link";
import { getCabins } from "@/app/_libs/data-service";
export const metadata = {
  title: "About",
};

export const revalidate = 86400;

async function page() {
  const cabins = await getCabins();
  return (
    <div className="grid grid-cols-6 gap-x-20 gap-y-32">
      <div className="col-span-4">
        <h1 className="text-4xl text-accent-400 py-7">
          Welcome to The Wild Oasis
        </h1>
        <p className="text-primary-200 text-lg md-10">
          Where nature&apos;s beauty and comfortable living blend seamlessly.
          Hidden away in the heart of the Italian Dolomites, this is your
          paradise away from home. But it&apos;s not just about the luxury
          cabins. It&apos;s about the experience of reconnecting with nature and
          enjoying simple pleasures with family. <br />
          <br />
          Our {cabins.length} luxury cabins provide a cozy base, but the real
          freedom and peace you&apos;ll find in the surrounding mountains.
          Wander through lush forests, breathe in the fresh air, and watch the
          stars twinkle above from the warmth of a campfire or your hot tub.{" "}
          <br />
          <br />
          This is where memorable moments are made, surrounded by nature&apos;s
          splendor. It&apos;s a place to slow down, relax, and feel the joy of
          being together in a beautiful setting.
        </p>
      </div>
      <div className="relative aspect-square col-span-2">
        <Image
          className="object-cover"
          placeholder="blur"
          fill
          src={about_1}
          alt="cabin image"
        />
      </div>

      <Image
        className="inline-block col-span-2"
        src={about_2}
        placeholder="blur"
        alt="cabin image"
      />
      <div className="col-span-4">
        <h1 className="text-4xl text-accent-400">
          Managed by our family since 1962
        </h1>
        <p className="text-primary-200 text-lg md-10 py-7">
          Since 1962, The Wild Oasis has been a cherished family-run retreat.
          Started by our grandparents, this haven has been nurtured with love
          and care, passing down through our family as a testament to our
          dedication to creating a warm, welcoming environment. <br /> <br />
          Over the years, we&apos;ve maintained the essence of The Wild Oasis,
          blending the timeless beauty of the mountains with the personal touch
          only a family business can offer. Here, you&apos;re not just a guest;
          you&apos;re part of our extended family. So join us at The Wild Oasis
          soon, where tradition meets tranquility, and every visit is like
          coming home.
        </p>
        <Link
          className=" text-primary-900  text-center text-lg font-semibold bg-accent-500 inline-block px-9 py-6 hover:bg-accent-600 transition-colors "
          href="/cabins"
        >
          Explore luxury cabins
        </Link>
      </div>
    </div>
  );
}

export default page;
