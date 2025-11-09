export default function Header() {
  return (
    <header className="w-full bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">MyShop</h1>
      <nav className="flex gap-6 text-lg">
        <a href="#" className="hover:text-gray-600">Home</a>
        <a href="#" className="hover:text-gray-600">Products</a>
        <a href="#" className="hover:text-gray-600">Contact</a>
      </nav>
    </header>
  );
}
