import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Alliance Sourcing BD" },
    {
      name: "description",
      content:
        "Own factory solutions, sourcing expertise, and company policy information from Alliance Sourcing BD.",
    },
  ];
}

export default function Home() {
  return (
    <section className="bg-[#f5f5f5] py-24">
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
<section className="bg-[#efe1d3] py-20">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 items-center">

      {/* Left Side Image */}
      <div>
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900"
          alt=""
          className="w-full h-[760px] object-cover rounded-2xl"
        />
      </div>

      {/* Right Side Content */}
      <div className="bg-[#efe1d3] px-16 py-12">

        <p className="text-xl font-semibold text-black mb-10">
          Services
        </p>

        <h2 className="text-[72px] leading-[90px] font-light text-black mb-12">
          Professional buying
          <br />
          house services
        </h2>

        <p className="text-[22px] leading-[46px] text-gray-900 mb-14">
          We handle the complexity of sourcing so you can
          focus on your business. Our buying house team
          brings years of experience in connecting buyers
          with the right manufacturers.
        </p>

        {/* Features */}

        <div className="space-y-8 mb-14 text-black">

          <div className="flex items-center gap-5">
            <span className="text-3xl">👥</span>

            <p className="text-[20px]">
              Product development and sampling
            </p>
          </div>

          <div className="flex items-center gap-5">
            <span className="text-3xl">⬚</span>

            <p className="text-[20px]">
              Supplier selection and evaluation
            </p>
          </div>

          <div className="flex items-center gap-5">
            <span className="text-3xl">👜</span>

            <p className="text-[20px]">
              Price negotiation and order placement
            </p>
          </div>

        </div>

        {/* Button */}

        <button className="px-10 py-5 border bg-white text-black border-gray-400 rounded-xl text-2xl hover:bg-black hover:text-white duration-300">
          Explore
        </button>

      </div>

    </div>

  </div>
</section>
<section className="bg-[#f5f5f5] py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-20">
      <p className="text-xl font-semibold text-black mb-5">
        Services
      </p>

      <h2 className="text-[72px] leading-[82px] font-light text-black mb-8">
        Buying house services
      </h2>

      <p className="text-[22px] text-gray-800">
        We manage every step of your sourcing journey with precision.
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 gap-8">

      {/* Card 1 */}
      <div className="bg-[#1398d4] rounded-2xl p-8 h-[330px] flex flex-col justify-between">

        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828911.png"
            alt=""
            className="w-14 h-14 invert"
          />
        </div>

        <div>
          <h3 className="text-white text-[34px] leading-[46px] font-light mb-4">
            Product development and sampling
          </h3>

          <p className="text-white text-2xl opacity-90">
            We create samples that match your vision exactly.
          </p>
        </div>

      </div>

      {/* Card 2 */}
      <div className="border border-gray-300 rounded-2xl p-8 h-[330px] flex flex-col justify-between">

        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/32/32339.png"
            alt=""
            className="w-14 h-14"
          />
        </div>

        <div>
          <h3 className="text-black text-[34px] leading-[46px] font-light mb-4">
            Supplier selection and evaluation
          </h3>

          <p className="text-gray-800 text-2xl">
            We find manufacturers who meet your standards.
          </p>
        </div>

      </div>

      {/* Card 3 */}
      <div className="border border-gray-300 rounded-2xl p-8 h-[330px] flex flex-col justify-between">

        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/891/891419.png"
            alt=""
            className="w-14 h-14"
          />
        </div>

        <div>
          <h3 className="text-black text-[34px] leading-[46px] font-light mb-4">
            Price negotiation and order placement
          </h3>

          <p className="text-gray-800 text-2xl">
            We secure the best terms for your orders.
          </p>
        </div>

      </div>

      {/* Card 4 */}
      <div className="border border-gray-300 rounded-2xl p-8 h-[330px] flex flex-col justify-between">

        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1001/1001371.png"
            alt=""
            className="w-14 h-14"
          />
        </div>

        <div>
          <h3 className="text-black text-[34px] leading-[46px] font-light mb-4">
            Production follow-up and quality inspection
          </h3>

          <p className="text-gray-800 text-2xl">
            We monitor every batch from loom to shipment.
          </p>
        </div>

      </div>

    </div>

  </div>
</section>
<section className="bg-[#f5f5f5] py-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-24 items-center">

      {/* Left Image */}
      <div>
         <img
          src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=900"
          alt="Fashion"
          className="w-full h-[760px] object-cover rounded-xl"
        />
      </div>

      {/* Right Content */}

      <div>
        

        <p className="text-black text-sm font-semibold mb-8">
          Catalog
        </p>

        <h2 className="text-black text-[72px] leading-[88px] font-light mb-10">
          Products and
          <br />
          services
        </h2>

        <p className="text-black text-[22px] leading-[42px] text-gray-800 max-w-[700px] mb-16">
          We source and manage everything you need for apparel
          production. From raw materials to finished goods, we
          handle it all.
        </p>

        <div className="grid grid-cols-2 gap-x-16 gap-y-14">

          <div className="flex gap-5">
            <div className="text-blue-600 text-4xl mt-1">
              🛍
            </div>

            <div>
              <h4 className="text-[22px] font-medium mb-3">
                Knitwear
              </h4>

              <p className="text-[18px] leading-9 text-gray-500">
                Sweaters, t-shirts, and knit garments made to order.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="text-blue-600 text-4xl mt-1">
              ≋
            </div>

            <div>
              <h4 className="text-[22px] font-medium mb-3">
                Denim and heavy fabrics
              </h4>

              <p className="text-[18px] leading-9 text-gray-500">
                Durable denim and canvas for pants and jackets.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="text-blue-600 text-4xl mt-1">
              ▦
            </div>

            <div>
              <h4 className="text-[22px] font-medium mb-3">
                Woven fabrics
              </h4>

              <p className="text-[18px] leading-9 text-gray-500">
                Cotton, blends, and specialty woven materials in stock.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="text-blue-600 text-4xl mt-1">
              ▭
            </div>

            <div>
              <h4 className="text-[22px] font-medium mb-3">
                Accessories and trims
              </h4>

              <p className="text-[18px] leading-9 text-gray-500">
                Buttons, zippers, labels, and finishing materials available.
              </p>
            </div>
          </div>

        </div>

        <button className="mt-16 px-10 py-5 text-black border border-gray-300 rounded-xl text-2xl hover:bg-black hover:text-white duration-300">
          Browse
        </button>

      </div>

    </div>

  </div>
</section>
<section className="bg-[#f4e7da] py-16">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16">

      {/* Left Side */}
      <div>

        {/* Top Icon */}
        <div className="text-[#ff7a00] text-7xl mb-8">
          🏭
        </div>

        {/* Heading */}
        <h2 className="text-[78px] leading-[90px] font-light text-black mb-10">
          Factory and
          <br />
          machinery
          <br />
          capabilities
        </h2>

        {/* Paragraph */}
        <p className="text-[22px] leading-[44px] text-gray-900 mb-16">
          We work with modern facilities equipped for precision
          production. Our network includes mills and factories with the
          latest technology.
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-14">

          {/* Item 1 */}
          <div className="flex gap-4">

            <div className="text-[#ff7a00] text-3xl">
              ⚙
            </div>

            <div>
              <h3 className=" text-black text-[22px] font-medium mb-3">
                Garment production
                <br />
                support
              </h3>

              <p className="text-[18px] leading-9 text-gray-500">
                Full-scale manufacturing with
                quality control at each stage.
              </p>
            </div>

          </div>

          {/* Item 2 */}
          <div className="flex gap-4">

            <div className="text-[#ff7a00] text-3xl">
              🛟
            </div>

            <div>
              <h3 className=" text-black text-[22px] font-medium mb-3">
                Maintenance and
                technical support
              </h3>

              <p className="text-[18px] leading-9 text-gray-500">
                Our team keeps machines
                running smoothly year-round.
              </p>
            </div>

          </div>

          {/* Item 3 */}
          <div className="flex gap-4">

            <div className="text-[#ff7a00] text-3xl">
              🔧
            </div>

            <div>
              <h3 className=" text-black text-[22px] font-medium mb-3">
                Machinery supply and
                installation
              </h3>

              <p className="text-[18px] leading-9 text-gray-500">
                We source and install
                equipment tailored to your
                needs.
              </p>
            </div>

          </div>

          {/* Item 4 */}
          <div className="flex gap-4">

            <div className="text-[#ff7a00] text-3xl">
              👥
            </div>

            <div>
              <h3 className=" text-black text-[22px] font-medium mb-3">
                Production
                optimization
              </h3>

              <p className="text-[18px] leading-9 text-gray-500">
                We improve efficiency and
                reduce waste on every line.
              </p>
            </div>

          </div>

        </div>

        {/* Button */}
        <button className="mt-16 px-10 py-5 text-black bg-white border border-gray-300 rounded-xl text-2xl hover:bg-black hover:text-white duration-300">
          Details
        </button>

      </div>

      {/* Right Side */}

      <div>
        <img
          src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200"
          alt=""
          className="w-full h-[980px] object-cover rounded-2xl"
        />
      </div>

    </div>

  </div>
</section>
</section>
  );
}
