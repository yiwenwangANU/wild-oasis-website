import { auth } from "@/app/_libs/auth";
import Link from "next/link";
async function Navigation() {
  const session = await auth();

  return (
    <nav className="text-xl relative z-10">
      <ul className="flex gap-16 items-center">
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
        <li>
          {session ? (
            <Link href="/account" className="flex items-center gap-2">
              <img
                className="rounded-2xl w-8"
                src={session.user?.image}
                alt="user aveta"
              />
              <span>{session.user?.name}</span>
            </Link>
          ) : (
            <Link
              className="hover:text-accent-400 transition-colors"
              href="/account"
            >
              Guest Area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
