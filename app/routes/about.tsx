export default function About() {
  return (
    <main className="bg-[#f5f5f5]">

      {/* Hero Section */}
      <section className="relative w-full h-[480px] overflow-hidden">

  <img
    src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1800"
    alt="Fashion Collection"
    className="w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

</section>
<section className="bg-[#f5f5f5] py-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-24 items-center">

      {/* Left Image */}
      <div>
        <img
  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80"
  alt="Buying House"
  className="w-full h-[760px] object-cover rounded-2xl"
/>
      </div>

      {/* Right Content */}
      <div>

        <p className=" text-black text-[18px] font-semibold mb-10">
          Established Excellence
        </p>

        <h2 className="text-black text-[78px] leading-[92px] font-light mb-12">
          Professional buying
          <br />
          house services
        </h2>

        <p className="text-[22px] leading-[48px] text-gray-800 mb-14">
          Founded with a vision to revolutionize the apparel
          industry, Alliance Sourcing BD has grown into a global
          leader in garment sourcing. With decades of collective
          expertise, we bridge the gap between world-class brands
          and high-quality manufacturing units in Bangladesh and
          beyond.
        </p>

        <p className="text-[22px] leading-[48px] text-gray-800">
          Our journey is defined by a relentless pursuit of
          excellence, ethical practices, and a deep understanding
          of the fast-evolving fashion landscape. We started as a
          small team with a big ambition: to make international
          sourcing transparent, efficient, and sustainable.
        </p>

      </div>

    </div>

  </div>
</section>
    <section className="bg-[#f5f5f5] py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-20">
      <p className="text-xl font-semibold text-black mb-4">
        Why
      </p>

      <h2 className="text-7xl md:text-7xl font-light text-black mb-8">
        What sets us apart
      </h2>

      <p className="text-2xl text-gray-700">
        We stand behind every garment
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Card 1 */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition duration-300">
        <div className="text-5xl text-orange-500 mb-20">
          🏷️
        </div>

        <h3 className="text-3xl font-medium text-black leading-tight mb-6">
          Quality <br /> assurance
        </h3>

        <p className="text-gray-700 text-xl leading-relaxed">
          Rigorous testing at every production stage
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition duration-300">
        <div className="text-5xl text-blue-600 mb-20">
          ≋
        </div>

        <h3 className="text-3xl font-medium text-black leading-tight mb-6">
          Ethical <br /> sourcing
        </h3>

        <p className="text-gray-700 text-xl leading-relaxed">
          Fair wages and safe working conditions
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition duration-300">
        <div className="text-5xl text-green-600 mb-20">
          💵
        </div>

        <h3 className="text-3xl font-medium text-black leading-tight mb-6">
          On-time <br /> delivery
        </h3>

        <p className="text-gray-700 text-xl leading-relaxed">
          Your deadlines are our commitments
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition duration-300">
        <div className="text-5xl text-blue-600 mb-20">
          🌍
        </div>

        <h3 className="text-3xl font-medium text-black leading-tight mb-6">
          Global <br /> network
        </h3>

        <p className="text-gray-700 text-xl leading-relaxed">
          Connected across Bangladesh and beyond
        </p>
      </div>

    </div>
  </div>
</section>
<section className="bg-[#f5f5f5] py-20 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-[45%_55%] gap-20">

      {/* Left Side */}
      <div>
        <p className="text-sm font-semibold text-black mb-8">
          Process
        </p>

        <h2 className="text-[72px] leading-[80px] font-light text-black mb-16">
          How we work
        </h2>

        <button className="px-8 py-4 bg-gray-900 border border-black-300 rounded-xl text-2xl font-medium hover:bg-black hover:text-white duration-300">
          Discuss
        </button>
      </div>

      {/* Right Side */}
      <div className="relative">

        {/* Vertical Line */}
        <div className="absolute left-[28px] top-8 bottom-8 w-[2px] bg-gray-300"></div>

        {/* Item */}
        <div className="relative flex items-start gap-10 pb-24">
          <div className="w-14 h-14 bg-[#f5f5f5] flex justify-center items-center z-10">
            <img
              src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
              className="w-12"
              alt=""
            />
          </div>

          <div>
            <h3 className="text-3xl font-light mb-5">
              Consultation
            </h3>

            <p className="text-xl text-gray-800 max-w-xl leading-relaxed">
              We listen to your needs and understand your specifications
            </p>
          </div>
        </div>

        {/* Item */}
        <div className="relative flex items-start gap-10 pb-24">
          <div className="w-14 h-14 bg-[#f5f5f5] flex justify-center items-center z-10">
            <img
              src="https://cdn-icons-png.flaticon.com/512/945/945949.png"
              className="w-12"
              alt=""
            />
          </div>

          <div>
            <h3 className="text-3xl font-light mb-5">
              Supplier match
            </h3>

            <p className="text-xl text-gray-800 max-w-xl leading-relaxed">
              We match you with manufacturers who meet your standards
            </p>
          </div>
        </div>

        {/* Item */}
        <div className="relative flex items-start gap-10 pb-24">
          <div className="w-14 h-14 bg-[#f5f5f5] flex justify-center items-center z-10">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
              className="w-12"
              alt=""
            />
          </div>

          <div>
            <h3 className="text-3xl font-light mb-5">
              Order management
            </h3>

            <p className="text-xl text-gray-800 max-w-xl leading-relaxed">
              We negotiate terms and oversee production from start to finish
            </p>
          </div>
        </div>

        {/* Item */}
        <div className="relative flex items-start gap-10">
          <div className="w-14 h-14 bg-[#f5f5f5] flex justify-center items-center z-10">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
              className="w-12"
              alt=""
            />
          </div>

          <div>
            <h3 className="text-3xl font-light mb-5">
              Quality check
            </h3>

            <p className="text-xl text-gray-800 max-w-xl leading-relaxed">
              Every batch is tested against your specifications and quality standards
            </p>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>

    </main>
  );
}