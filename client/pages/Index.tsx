import { ShoppingCart, Zap, Award, Truck } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">StoreName</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-slate-600 hover:text-slate-900 font-medium"
            >
              Categories
            </a>
            <a
              href="#"
              className="text-slate-600 hover:text-slate-900 font-medium"
            >
              New Arrivals
            </a>
            <a
              href="#"
              className="text-slate-600 hover:text-slate-900 font-medium"
            >
              Best Sellers
            </a>
          </nav>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-medium">
            Cart
          </button>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-8 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Discover Tomorrow's Tech Today
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-lg">
                Explore our curated collection of cutting-edge electronics and
                devices. Premium quality at incredible prices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-blue-50 transition font-bold text-lg">
                  Shop Now
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition font-bold text-lg">
                  Explore Categories
                </button>
              </div>
            </div>
            <div className="relative h-96 hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop"
                alt="Featured tech products"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured/Recommendations Banner */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Featured Recommendations
            </h2>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              View All →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Wireless Headphones",
                price: "$199",
                image:
                  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
              },
              {
                name: "Smart Watch",
                price: "$299",
                image:
                  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
              },
              {
                name: "4K Camera",
                price: "$899",
                image:
                  "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300&h=300&fit=crop",
              },
              {
                name: "Gaming Laptop",
                price: "$1,299",
                image:
                  "https://images.unsplash.com/photo-1588872657840-218e412ee5ff?w=300&h=300&fit=crop",
              },
            ].map((product, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl mb-4 h-64 bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition">
                  {product.name}
                </h3>
                <p className="text-xl font-bold text-slate-700 mt-2">
                  {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Browse our extensive selection of premium electronics and devices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Laptops",
                description: "High-performance laptops for work and gaming",
                color: "from-blue-500 to-blue-600",
                icon: "💻",
                image:
                  "https://images.unsplash.com/photo-1588872657840-218e412ee5ff?w=500&h=400&fit=crop",
              },
              {
                name: "Televisions",
                description: "4K and 8K displays with stunning picture quality",
                color: "from-purple-500 to-purple-600",
                icon: "📺",
                image:
                  "https://images.unsplash.com/photo-1593642632459-44953f545f96?w=500&h=400&fit=crop",
              },
              {
                name: "Smartphones",
                description:
                  "Latest flagship models with cutting-edge features",
                color: "from-pink-500 to-pink-600",
                icon: "📱",
                image:
                  "https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=400&fit=crop",
              },
              {
                name: "Wearables",
                description:
                  "Smartwatches and fitness trackers for your lifestyle",
                color: "from-green-500 to-green-600",
                icon: "⌚",
                image:
                  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=400&fit=crop",
              },
            ].map((category, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl cursor-pointer h-80 md:h-96"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300"></div>

                <div className="relative h-full flex flex-col justify-end p-8 text-white">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="text-3xl font-bold mb-2">{category.name}</h3>
                  <p className="text-lg text-white/90 mb-6">
                    {category.description}
                  </p>
                  <button className="self-start bg-white text-slate-900 px-6 py-2 rounded-lg font-bold hover:bg-blue-50 transition">
                    Browse {category.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Truck,
                label: "Free Shipping",
                desc: "On orders over $100",
              },
              {
                icon: Award,
                label: "2-Year Warranty",
                desc: "Comprehensive coverage",
              },
              {
                icon: Zap,
                label: "Fast Delivery",
                desc: "24/48 hour delivery",
              },
              {
                icon: ShoppingCart,
                label: "Easy Returns",
                desc: "30-day return policy",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-4">
                  <item.icon className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.label}
                </h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">About</h4>
              <p className="text-sm">
                Your trusted source for premium electronics and gadgets.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Categories</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Laptops
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Phones
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Accessories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Shipping Info
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Returns
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-sm">
            <p>&copy; 2024 StoreName. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
