const WellfieldHome = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-blue-900 py-4 text-white shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold">The Wellfield Corporation</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#home" className="hover:text-blue-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-300">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12">
        {/* Hero Section */}
        <section id="home" className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Welcome to The Wellfield Corporation
          </h2>
          <p className="text-lg">Your trusted partner in business solutions</p>
        </section>

        {/* About Us Section */}
        <section id="about" className="mb-12">
          <h2 className="mb-4 text-3xl font-bold">About Us</h2>
          <p className="text-lg">
            The Wellfield Corporation is dedicated to providing top-notch
            business solutions that empower companies to reach their full
            potential. Our team of experts is committed to excellence and
            innovation, ensuring that our clients achieve success in their
            respective fields.
          </p>
        </section>

        {/* Services Section */}
        <section id="services" className="mb-12">
          <h2 className="mb-4 text-3xl font-bold">Our Services</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-md bg-white p-6 shadow-md">
              <h3 className="mb-2 text-xl font-bold">Consulting</h3>
              <p className="text-gray-700">
                Our consulting services help businesses identify opportunities,
                streamline operations, and achieve their goals with tailored
                strategies.
              </p>
            </div>
            <div className="rounded-md bg-white p-6 shadow-md">
              <h3 className="mb-2 text-xl font-bold">Financial Advisory</h3>
              <p className="text-gray-700">
                We offer expert financial advisory services to help you navigate
                complex financial landscapes and make informed decisions.
              </p>
            </div>
            <div className="rounded-md bg-white p-6 shadow-md">
              <h3 className="mb-2 text-xl font-bold">Technology Solutions</h3>
              <p className="text-gray-700">
                Our technology solutions are designed to enhance your business
                operations, from software development to IT infrastructure
                management.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="mb-4 text-3xl font-bold">Contact Us</h2>
          <p className="mb-4 text-lg">
            Get in touch with us to learn more about how we can help your
            business grow.
          </p>
          <form className="rounded-md bg-white p-6 shadow-md">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="mb-2 block font-bold text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-2 block font-bold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="mb-2 block font-bold text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="rounded-md bg-blue-900 px-4 py-2 text-white hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 py-4 text-white">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 The Wellfield Corporation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default WellfieldHome;
