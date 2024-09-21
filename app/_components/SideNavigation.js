import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import SignoutButton from "@/app/_components/SignoutButton";
const navLinks = [
  { name: "Home", href: "/account", icon: <HomeIcon className="w-5" /> },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="w-5" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="w-5" />,
  },
];

function SideNavigation() {
  return (
    <nav className="border-r border-primary-900 flex flex-col justify-between">
      <ul>
        {navLinks.map((item) => (
          <li key={item.name}>
            <Link
              className="flex gap-4 hover:bg-primary-900 px-5 py-5"
              href={item.href}
            >
              {item.icon}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <SignoutButton />
    </nav>
  );
}

export default SideNavigation;
