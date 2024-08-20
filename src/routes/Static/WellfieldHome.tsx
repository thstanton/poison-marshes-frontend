import WEWordmark from "../../assets/wellfield/WE_wordmark.svg";
import WEStacked from "../../assets/wellfield/WE_stacked.svg";
import WETag from "../../assets/wellfield/WE_tag.svg";
import { cld } from "../../main";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";

const WellfieldHome = () => {
  const orwell = cld.image("PM_WF_orwell");
  orwell.resize(fill().width(300).height(200));
  return (
    <div className="min-h-screen bg-gray-50 font-serif text-gray-800">
      {/* Header */}
      <header className="bg-[#62AE9E] px-2 py-8 text-white shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <img src={WEWordmark} alt="Wellfield Wordmark" className="h-8" />
          <nav>
            <ul className="flex space-x-4">
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
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto">
        {/* Hero Section */}
        <section
          id="home"
          className="flex min-h-96 flex-col items-center justify-center gap-4 bg-wf-hero-bg bg-cover bg-center text-center"
        >
          <img src={WEStacked} alt="Wellfield Energy" className="w-44" />
          <img
            src={WETag}
            alt="A Wellfield Corporation Company"
            className="w-64"
          />
        </section>

        {/* About Us Section */}
        <section id="about" className="mb-12 bg-sky-200 p-6">
          <div className="mb-4 flex flex-row items-end gap-2">
            <WELogo className="h-10 w-10" />
            <h2 className="text-3xl font-bold">About Us</h2>
          </div>
          <p>
            Wellfield Energy was borne out of a single mission. Produce the
            cleanest, cheapest energy and bring a sense of{" "}
            <span className="font-bold">WellfieldBeing</span> to all of our
            customers. Part of the trusted Wellfield Corporation, founded by
            Orwell Wellfield, you can have the utmost confident that we have
            your best interests at heart.
          </p>
          <div className="mt-4 flex flex-col items-center gap-2 md:flex-row">
            <AdvancedImage cldImg={orwell} />
            <div>
              <p className="mb-2">
                "What I love the most about Wellfield Energy is how we fuse
                cutting edge technology with sustainability, creating the
                perfect blend of value for money, and a clear conscience -
                knowing that we're leaving the planet a better place for my
                children. That, to me, is the essence of WellfieldBeing."
              </p>
              <h2 className="font-bold">Orwell Wellfield</h2>
              <h3 className="italic">Founder and CEO</h3>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="mb-12 px-4">
          <div className="mb-4 flex flex-row items-end gap-2">
            <WELogo className="h-10 w-10" />
            <h2 className="text-3xl font-bold">What We Do</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-md bg-white p-6 shadow-md">
              <h3 className="mb-2 text-xl font-bold">Eco-Conscious Energy</h3>
              <p className="text-gray-700">
                At Wellfield Energy, we believe in powering the future
                sustainably. Our commitment to green energy sets us apart,
                offering eco-conscious solutions that are as kind to the planet
                as they are powerful. We harness the cleanest, most reliable
                renewable energy sources, from solar to wind, ensuring your home
                or business operates on 100% green power. By choosing Wellfield
                Energy, you’re not just reducing your carbon footprint—you’re
                supporting a brighter, more sustainable future for generations
                to come. Join us in making energy clean, affordable, and
                accessible for all.
              </p>
            </div>
            <div className="rounded-md bg-white p-6 shadow-md">
              <h3 className="mb-2 text-xl font-bold">
                Affordable Excellence for Our Valued Customers
              </h3>
              <p className="text-gray-700">
                At Wellfield Energy, we believe that going green shouldn’t come
                at a premium. That’s why we offer fair, transparent pricing that
                makes sustainable energy accessible to everyone. We understand
                that our customers are at the heart of everything we do, and we
                are committed to providing not only top-tier green energy but
                also exceptional value. With flexible plans and competitive
                rates, we ensure you get the best possible service without
                compromising your budget. At Wellfield Energy, your satisfaction
                is our priority, and we’re dedicated to powering your life
                affordably and sustainably.
              </p>
            </div>
            <div className="rounded-md bg-white p-6 shadow-md">
              <h3 className="mb-2 text-xl font-bold">
                Pioneering Zero-Carbon Energy in Alrewas
              </h3>
              <p className="text-gray-700">
                Wellfield Energy is thrilled to announce our groundbreaking
                pilot project in the village of Alrewas, where we’re introducing
                Janus, a revolutionary new technology poised to deliver the
                world’s first zero-carbon emission energy. This innovative
                system not only eliminates carbon emissions entirely but also
                offers energy at even lower prices than traditional green
                sources. Our work in Alrewas marks a major milestone in our
                mission to make sustainable, affordable energy a reality for
                all. We’re proud to lead this pioneering effort, setting a new
                standard for what’s possible in eco-friendly power.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#62AE9E] py-4 text-white">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 The Wellfield Corporation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default WellfieldHome;

const WELogo = ({ className }: { className?: string }) => {
  return (
    <svg
      width="213"
      height="199"
      viewBox="0 0 213 199"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M196.122 62.6022C190.554 66.2314 180.29 69.5449 175.796 72.4746C173.149 74.2 169.518 77.3162 171.742 80.7624C174.145 84.4849 186.753 83.05 188.984 86.507C190.016 88.1033 188.932 89.9228 187.617 90.7801C180.469 95.4396 159.775 91.2096 150.781 97.0726C149.198 98.1039 145.752 101.478 147.3 103.875C149.522 107.319 162.442 107.567 165.703 112.618C166.562 113.95 166.79 116.064 165.208 117.096C160.471 120.184 146.066 111.84 137.062 117.71C133.618 119.954 129.446 124.561 126.799 126.286C124.685 127.665 123.029 126.852 122.515 126.056C118.916 120.481 132.609 110.805 123.803 94.2694C122.531 91.701 120.579 86.9491 123.501 85.0444C128.259 81.9426 133.988 98.9612 139.278 95.5132C151.43 87.5921 139.959 61.093 144.453 58.1642C145.517 57.4701 147.297 57.4378 149.358 60.633C151.245 63.5546 151.912 65.766 154.134 69.2095C156.368 72.6692 158.711 74.5389 161.883 72.471C169.03 67.8115 164.572 46.9359 170.663 42.9669C171.988 42.1033 173.819 42.0459 174.677 43.3749C176.736 46.5655 175.212 55.847 177.103 58.7758C181.222 65.158 196.184 50.4898 199.616 55.8057C201.159 58.1956 199.301 60.5298 196.122 62.6022ZM76.8975 149.297C76.7248 149.945 75.7952 150.851 74.0884 150.387C71.9516 149.807 68.1777 147.626 65.3977 146.871C58.1282 144.898 50.3115 153.645 46.4873 152.607C45.2097 152.26 44.9074 150.79 45.1938 149.708C46.2838 145.605 54.8503 142.617 55.5931 139.819C56.1104 137.872 53.0863 136.359 51.8077 136.013C44.5479 134.042 31.6488 141.401 25.8791 139.833C24.8173 139.546 23.7035 138.561 24.048 137.264C24.7944 134.455 33.5142 132.665 34.3169 129.641C35.0606 126.842 31.9678 125.542 29.831 124.962C26.2033 123.977 18.6431 123.995 14.1483 122.774C11.5815 122.077 9.83952 120.916 10.3559 118.974C11.5022 114.655 24.6375 121.235 26.0139 116.052C26.6465 113.672 23.6339 107.773 24.3221 105.18C24.6093 104.101 25.8438 103.74 26.9126 104.03C31.8294 105.365 33.3424 120.354 39.113 121.921C41.6736 122.616 42.835 120.849 43.5813 118.038C44.3241 115.242 44.2942 113.611 44.9242 111.237C45.6132 108.642 46.8081 108.276 47.6672 108.508C51.294 109.494 49.337 129.79 59.1477 132.453C63.4186 133.613 63.5816 120.936 67.4234 121.978C69.7814 122.619 69.5012 126.236 69.2051 128.238C66.8841 141.263 78.0994 144.768 76.8975 149.297ZM194.446 1.44186C193.765 0.386817 192.331 -0.953377 191.355 0.987411C190.588 2.51295 190.673 11.7883 172.802 23.4428C163.606 29.4389 153.663 32.5435 140.256 41.2868C108.797 61.8015 109.006 92.8113 107.595 133.464C107.49 136.469 103.862 141.211 102.705 144.045C101.118 147.934 99.331 152.795 98.138 157.875C98.0033 158.451 97.8765 159.03 97.7577 159.611C97.0513 158.705 96.3564 157.854 95.7032 157.077C94.3045 155.416 90.822 153.01 90.097 151.003C80.2974 123.844 73.6905 102.845 47.9694 95.9025C37.0078 92.9432 29.6129 93.0323 22.0949 91.0024C7.48416 87.0593 5.52266 80.7727 4.67264 79.911C3.59129 78.8141 2.91323 80.0349 2.68277 80.8983C-2.67968 100.976 -4.4258 149.778 41.7214 162.235C66.4188 168.902 79.4855 162.252 85.2849 163.818C88.8995 164.793 93.0742 167.428 96.406 170.83C96.1703 173.276 96.087 175.73 96.1543 178.169C96.305 183.542 95.3415 192.302 98.9969 196.778C102.256 200.769 111.087 198.844 110.753 193.086C110.625 190.857 109.365 188.814 108.779 186.686C108.224 184.674 107.713 182.661 107.367 180.6C106.697 176.619 106.508 172.532 107.049 168.523C108.164 160.258 112.591 153.082 119.568 148.532C126.662 143.906 147.035 147.117 177.241 127.418C233.683 90.6103 210.291 26.0002 194.446 1.44186Z"
        fill="#62AE9E"
      />
    </svg>
  );
};
