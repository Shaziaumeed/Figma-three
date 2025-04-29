import { FaTelegramPlane } from "react-icons/fa";
export default function NewsletterSignup() {
  return (
    <section className="bg-[#9837AE] text-white py-20 px-6 -mt-11">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <span><FaTelegramPlane /></span> Join our VIP list
          </h2>
          <p className="mt-2 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
          <p>sed do eiusmod tempor incididunt.</p>
        </div>

        {/* Right Side */}
        <div>
          <form className="flex flex-col sm:flex-row gap-3 w-full">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="px-4 py-3 rounded-md text-black w-full sm:flex-1"
            />
            <button
              type="submit"
              className="bg-teal-400 text-white px-6 py-3 rounded-md hover:bg-teal-500 transition w-full sm:w-auto"
            >
              Sign Up
            </button>
          </form>
          <p className="text-sm text-white mt-2">
            This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of
          </p>
          <p className="text-sm">
            Service apply. You can unsubscribe at any time. Abrocia Global Privacy Policy
          </p>
        </div>
      </div>
    </section>
  );
}
