import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white relative">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Logo />
          <Navigation />
        </nav>
      </div>
    </header>
  );
}

