export default function Home() {
  return (
    <main className="w-full p-6">
      <section className="text-center py-10">
        <h2 className="text-4xl font-bold mb-4">Welcome to MyShop</h2>
        <p className="text-lg text-gray-700">
          Your one-stop shop for amazing products.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="border rounded-2xl p-4 shadow hover:shadow-lg transition-all"
          >
            <div className="h-40 bg-gray-200 rounded-xl mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Product {item}</h3>
            <p className="text-gray-600 mb-2">
              Short description of the product.
            </p>
            <button className="bg-black text-white px-4 py-2 rounded-xl">
              Buy Now
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}
