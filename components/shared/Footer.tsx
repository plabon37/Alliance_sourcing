export default function Footer() {
    return (
<footer className="bg-black text-white">
  <div className="max-w-7xl mx-auto px-8 lg:px-12 py-16">

    {/* Top Section */}
    <div className="flex flex-col lg:flex-row justify-between gap-16">

      {/* Left */}
      <div className="max-w-md">
        <img
          src="/logo.png"
          alt="Alliance Sourcing"
          className="h-14 mb-8"
        />
        <h1 className="text-2xl font-bold text-white">Alliance Sourcing BD</h1>

        <h4 className="font-semibold mb-2">Address</h4>
        <p className="text-gray-300 leading-7">
          Asha Plaza (2nd floor), Hemayetpur,
          Savar, Dhaka, Bangladesh.
        </p>

        <h4 className="font-semibold mt-8 mb-2">
          Contact
        </h4>

        <div className="space-y-1 text-gray-300">
          <p>01716054044</p>
          <p>faroque71@gmail.com</p>
        </div>

        <div className="flex items-center gap-5 mt-8 text-xl">
          <i className="fa-brands fa-facebook-f hover:text-blue-500 cursor-pointer transition"></i>
          <i className="fa-brands fa-instagram hover:text-pink-500 cursor-pointer transition"></i>
          <i className="fa-brands fa-x-twitter hover:text-gray-400 cursor-pointer transition"></i>
          <i className="fa-brands fa-linkedin-in hover:text-blue-400 cursor-pointer transition"></i>
          <i className="fa-brands fa-youtube hover:text-red-500 cursor-pointer transition"></i>
        </div>
      </div>

      {/* Right */}
      <div>
        <h3 className="text-3xl font-light mb-10">
          Quick Links
        </h3>

        <ul className="space-y-5 text-right">
          <li>
            <a href="/about" className="hover:text-gray-300">
              About us
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-gray-300">
              Our services
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-gray-300">
              Factory network
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-gray-300">
              Quality control
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-gray-300">
              Contact us
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-gray-800 mt-16 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-5">

        <p className="text-gray-400">
          © 2026 Alliance Sourcing BD
        </p>

        <div className="flex gap-8 text-gray-400">
          <a href="#" className="hover:text-white">
            Privacy policy
          </a>

          <a href="#" className="hover:text-white">
            Terms of service
          </a>

          <a href="#" className="hover:text-white">
            Cookie settings
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
    );
}