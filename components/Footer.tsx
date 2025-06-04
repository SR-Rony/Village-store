import Image from "next/image";
import Link from "next/link";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-200 mt-3 md:mt-5">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & Contact Info */}
        <div>
          <Link href="/" className="text-2xl font-bold text-primary flex items-center gap-2">
          🛍️ <span>Village Store</span>
        </Link>
          <p className="mt-4 text-sm">
            Plot 21, Road 20, Sector 14, Uttara, Dhaka
          </p>
          <p className="text-sm">Helpline: 09609669966</p>
          <p className="text-sm">seradanabd@gmail.com</p>
          <div className="flex items-center gap-3 mt-4 text-xl">
            <FaWhatsapp />
            <FaInstagram />
            <FaFacebook />
            <FaTiktok />
            <FaYoutube />
            <FaLinkedin />
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Useful links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Delivery Information</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Term and Condition</a></li>
          </ul>
        </div>

        {/* Get in touch */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Get in touch</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Our Best Selling Products</a></li>
            <li><a href="#">All Products</a></li>
            <li><a href="#">Collections</a></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Newsletter signup</h3>
          <p className="text-sm mb-4">
            Subscribe to our newsletters now and stay up-to-date with new collections.
          </p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 border border-gray-300 rounded-l-md flex-1"
            />
            <button type="submit" className="bg-lime-600 text-white px-4 py-2 rounded-r-md hover:bg-lime-700">
              Subscribe
            </button>
          </form>
          <Image
            src="/payment-logo.png"
            alt="payment logo"
            width={200}
            height={40}
            className="mt-4"
          />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200 mt-6 py-4 px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p>© 2024 <span className="font-bold">Sera Dana</span> Powered by <a href="#" className="text-blue-600">Soppiya</a></p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#">Accessibility</a>
          <a href="#">About us</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
        </div>
        <div className="mt-2 md:mt-0">
          <span>English ▼ </span> <span>BANGLADESH ▼</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
