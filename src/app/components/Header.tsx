export default function Header() {
  return (
    <header className="w-full px-8 py-5 flex justify-between items-center bg-transparent fixed top-0 left-0 z-50">
      <h1 className="text-xl font-bold tracking-wide">TTM</h1>

      <nav className="hidden md:flex gap-8 text-sm text-gray-300">
        <a href="#" className="hover:text-white">Solutions</a>
        <a href="#" className="hover:text-white">Products</a>
        <a href="#" className="hover:text-white">Pricing</a>
        <a href="#" className="hover:text-white">Contact</a>
      </nav>

      <button className="bg-[#00C2FF] hover:bg-[#009FCF] text-black px-4 py-2 rounded-lg shadow-lg text-sm">
        Book Demo
      </button>
    </header>
  );
}
