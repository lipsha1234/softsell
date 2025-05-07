import React from "react";
import { useState } from "react";

export default function SoftSellLanding() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}
    >
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">SoftSell</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h2 className="text-4xl font-bold mb-4">
          Turn Your Unused Software Licenses Into Cash
        </h2>
        <p className="text-lg mb-6">
          Sell unused software licenses and unlock value instantly.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Sell My Licenses
        </button>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-gray-100 dark:bg-gray-800">
        <h3 className="text-3xl font-semibold text-center mb-8">
          How It Works
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl">📤</div>
            <h4 className="font-semibold mt-2">Upload License</h4>
            <p className="text-sm">Submit your license info securely.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl">💰</div>
            <h4 className="font-semibold mt-2">Get Valuation</h4>
            <p className="text-sm">We evaluate your software’s value.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl">🏦</div>
            <h4 className="font-semibold mt-2">Get Paid</h4>
            <p className="text-sm">Receive payment in your account.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6">
        <h3 className="text-3xl font-semibold text-center mb-8">
          Why Choose Us
        </h3>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl">⚡</div>
            <p className="mt-2">Fast Process</p>
          </div>
          <div>
            <div className="text-3xl">🔒</div>
            <p className="mt-2">Secure Transactions</p>
          </div>
          <div>
            <div className="text-3xl">💼</div>
            <p className="mt-2">Business Friendly</p>
          </div>
          <div>
            <div className="text-3xl">📞</div>
            <p className="mt-2">24/7 Support</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gray-100 dark:bg-gray-800">
        <h3 className="text-3xl font-semibold text-center mb-8">
          What Our Customers Say
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 border rounded">
            <p>
              "SoftSell made it incredibly easy to monetize our unused software.
              Great experience!"
            </p>
            <p className="mt-2 font-semibold">
              — Jane Doe, IT Manager, TechCorp
            </p>
          </div>
          <div className="p-6 border rounded">
            <p>
              "Highly recommend SoftSell! They are fast, transparent, and
              professional."
            </p>
            <p className="mt-2 font-semibold">— John Smith, CFO, BizGroup</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6">
        <h3 className="text-3xl font-semibold text-center mb-8">
          Get in Touch
        </h3>
        <form className="max-w-xl mx-auto grid gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-3 border rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Company"
            className="p-3 border rounded"
          />
          <select className="p-3 border rounded" required>
            <option value="">Select License Type</option>
            <option value="windows">Windows</option>
            <option value="office">Office</option>
            <option value="adobe">Adobe</option>
            <option value="other">Other</option>
          </select>
          <textarea
            placeholder="Message"
            className="p-3 border rounded"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </section>

      <footer className="text-center p-6 bg-gray-200 dark:bg-gray-900">
        <p>&copy; 2025 SoftSell. All rights reserved.</p>
      </footer>
    </div>
  );
}
