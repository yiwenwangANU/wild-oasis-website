import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Page() {
  return (
    <>
      <Navigation />
      <h1>Hello world</h1>
      <Link href="/cabins">Explore the cabins</Link>
    </>
  );
}
