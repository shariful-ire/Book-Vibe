import React from "react";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white">
      {/* ================= Newsletter Section ================= */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 rounded-3xl bg-[#1f2937] p-8 md:p-10 lg:flex-row">
            {/* Newsletter Content */}
            <div className="max-w-xl">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-amber-400">
                Stay Connected
              </p>

              <h2 className="text-2xl font-bold sm:text-3xl">
                Get book recommendations in your inbox.
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                Subscribe to BookVibe and discover new books, reading
                recommendations, and exclusive updates.
              </p>
            </div>

            {/* Newsletter Form */}
            <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-white
                  px-4
                  py-3
                  text-sm
                  text-gray-900
                  outline-none
                  placeholder:text-gray-400
                  focus:border-amber-400
                "
              />

              <button
                type="submit"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-amber-400
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-gray-900
                  transition
                  hover:bg-amber-300
                "
              >
                Subscribe
                <FaArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ================= Main Footer ================= */}
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* ================= Brand ================= */}
          <div>
            <Link to="/" className="mb-5 flex w-fit items-center gap-3">
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-amber-400
                  text-2xl
                "
              >
                📚
              </div>

              <h2 className="text-2xl font-bold">
                Book<span className="text-amber-400">Vibe</span>
              </h2>
            </Link>

            <p className="max-w-xs text-sm leading-7 text-gray-400">
              Your digital destination for discovering, borrowing, and enjoying
              great books.
            </p>

            {/* Contact Information */}
            <div className="mt-6 space-y-4 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <FaEnvelope size={16} className="text-amber-400" />

                <span>support@bookvibe.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt size={15} className="text-amber-400" />

                <span>+880 1234-567890</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt size={16} className="text-amber-400" />

                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* ================= Explore ================= */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Explore
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link to="/" className="transition hover:text-amber-400">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/books" className="transition hover:text-amber-400">
                  Browse Books
                </Link>
              </li>

              <li>
                <Link
                  to="/categories"
                  className="transition hover:text-amber-400"
                >
                  Categories
                </Link>
              </li>

              <li>
                <Link to="/authors" className="transition hover:text-amber-400">
                  Authors
                </Link>
              </li>

              <li>
                <Link
                  to="/new-arrivals"
                  className="transition hover:text-amber-400"
                >
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= Categories ================= */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Categories
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link
                  to="/categories/fiction"
                  className="transition hover:text-amber-400"
                >
                  Fiction
                </Link>
              </li>

              <li>
                <Link
                  to="/categories/science"
                  className="transition hover:text-amber-400"
                >
                  Science
                </Link>
              </li>

              <li>
                <Link
                  to="/categories/technology"
                  className="transition hover:text-amber-400"
                >
                  Technology
                </Link>
              </li>

              <li>
                <Link
                  to="/categories/business"
                  className="transition hover:text-amber-400"
                >
                  Business
                </Link>
              </li>

              <li>
                <Link
                  to="/categories/self-development"
                  className="transition hover:text-amber-400"
                >
                  Self Development
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= Support ================= */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Support
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link to="/about" className="transition hover:text-amber-400">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/contact" className="transition hover:text-amber-400">
                  Contact Us
                </Link>
              </li>

              <li>
                <Link to="/faq" className="transition hover:text-amber-400">
                  FAQ
                </Link>
              </li>

              <li>
                <Link to="/privacy" className="transition hover:text-amber-400">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link to="/terms" className="transition hover:text-amber-400">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= Bottom Footer ================= */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} BookVibe. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-white/5
                  text-gray-400
                  transition
                  hover:bg-amber-400
                  hover:text-gray-900
                "
              >
                <FaFacebookF size={15} />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-white/5
                  text-gray-400
                  transition
                  hover:bg-amber-400
                  hover:text-gray-900
                "
              >
                <FaInstagram size={16} />
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-white/5
                  text-gray-400
                  transition
                  hover:bg-amber-400
                  hover:text-gray-900
                "
              >
                <FaTwitter size={15} />
              </a>

              {/* Github */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-white/5
                  text-gray-400
                  transition
                  hover:bg-amber-400
                  hover:text-gray-900
                "
              >
                <FaGithub size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
