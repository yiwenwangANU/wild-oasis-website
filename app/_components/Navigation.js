import Link from "next/link";

function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/">Home Page</Link>
      </li>
      <li>
        <Link href="/account">Account Page</Link>
      </li>
      <li>
        <Link href="/cabins">Cabin Page</Link>
      </li>
      <li>
        <Link href="/about">About Page</Link>
      </li>
    </ul>
  );
}

export default Navigation;
