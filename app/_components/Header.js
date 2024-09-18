import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-5 border-b border-primary-900 max-w-7xl mx-auto">
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;
