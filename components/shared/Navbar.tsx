export default function Navbar() {
    return (
        <nav className="bg-white border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex items-center justify-between h-20">

      {/* Left Logo Section */}
      <div className="flex items-center gap-6">
        <img
          src="/logo.png"
          alt="Alliance Sourcing"
          className="h-10 object-contain"
        />
        <h1 className="text-2xl font-bold text-gray-800">Alliance Sourcing BD</h1>

        <div className="w-px h-8 bg-gray-300"></div>

        <img
          src="/image.png"
          alt="Alliance Apparels"
          className="h-10 object-contain"
        />
        <h1 className="text-2xl font-bold text-gray-800">Alliance ApparelsLTD</h1>        
      </div>

      {/* Center Menu */}
      <div className="hidden lg:flex items-center gap-8">
        <a href="http://localhost:5173/" className="text-gray-800 font-medium hover:text-blue-600 transition">
          Home
        </a>

        <a href="/about" className="text-gray-800 font-medium hover:text-blue-600 transition">
          About Us
        </a>

        <a href="#" className="text-gray-800 font-medium hover:text-blue-600 transition">
          Buying House
        </a>

        <a href="#" className="text-gray-800 font-medium hover:text-blue-600 transition">
          Factory & Machinery
        </a>

        <a href="#" className="text-gray-800 font-medium hover:text-blue-600 transition">
          Global Partners
        </a>
      </div>

      {/* Right Button */}
      <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
        Speak With Us
      </button>

    </div>
  </div>
</nav>
    );
}