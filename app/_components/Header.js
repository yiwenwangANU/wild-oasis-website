import Navigation from "@/starter/components/Navigation";
import Logo from "./Logo";

function Header() {
  return (
    <header className="flex place-items-center justify-between px-8 py-5 border-b border-primary-900 max-w-7xl mx-auto">
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;
