import { FaShippingFast, FaShieldAlt, FaHeadset } from "react-icons/fa";
import { MdOutlineWorkspacePremium } from "react-icons/md";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}{" "}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        {" "}
        <div className="grid lg:grid-cols-2 gap-4 items-center">
          {" "}
          <div>
            {" "}
            <span className="inline-block px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
              Welcome to Ahmad Fayyaz Store{" "}
            </span>
            <h1 className="mt-6 text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
              Shop Smarter.
              <br />
              Shop Better.
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Discover premium electronics, fashion, accessories and everyday
              essentials carefully selected to deliver quality, value and style.
            </p>
            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <h3 className="text-3xl font-bold text-slate-900">500+</h3>
                <p className="text-slate-500">Products</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900">10k+</h3>
                <p className="text-slate-500">Customers</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900">99%</h3>
                <p className="text-slate-500">Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-200 to-slate-300 rounded-3xl blur-3xl opacity-40"></div>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900">
            Why Shop With Us?
          </h2>

          <p className="text-slate-600 mt-4">
            Everything you need for a premium shopping experience.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
            <FaShippingFast size={32} className="text-slate-800 mb-4" />

            <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>

            <p className="text-slate-600">
              Reliable shipping with quick delivery times.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
            <FaShieldAlt size={32} className="text-slate-800 mb-4" />

            <h3 className="font-semibold text-lg mb-2">Secure Payments</h3>

            <p className="text-slate-600">
              Protected and trusted payment processing.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
            <FaHeadset size={32} className="text-slate-800 mb-4" />

            <h3 className="font-semibold text-lg mb-2">Customer Support</h3>

            <p className="text-slate-600">
              Dedicated assistance whenever you need it.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
            <MdOutlineWorkspacePremium
              size={32}
              className="text-slate-800 mb-4"
            />

            <h3 className="font-semibold text-lg mb-2">Premium Quality</h3>

            <p className="text-slate-600">
              Carefully curated products with high standards.
            </p>
          </div>
        </div>
      </section>
      {/* Featured Banner */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="rounded-3xl bg-slate-900 text-white p-10 md:p-16">
          <h2 className="text-4xl md:text-5xl font-bold">Ahmad Fayyaz Store</h2>

          <p className="mt-4 text-slate-300 max-w-2xl">
            A modern e-commerce experience built with React, Tailwind CSS, React
            Router and real-world API integration.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
