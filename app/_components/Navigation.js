import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "../_libs/auth";
async function Navigation() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="z-10 text-xl">
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
            <div className="flex items-center gap-2">
              <img
                className="rounded-2xl w-8"
                src={session.user?.image}
                alt="user aveta"
              />
              <span>{session.user?.name}</span>
            </div>
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
