import Link from "next/link";

function Navigation() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            className="hover:text-accent-400 transition-colors"
            href="/account"
          >
            Account Page
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-accent-400 transition-colors"
            href="/cabins"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-accent-400 transition-colors"
            href="/about"
          >
            About Page
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
