"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer({ translations }) {
  const sectorPaths = [
    "/sectors/electrical-products",
    "/sectors/energy-efficiency",
    "/sectors/lighting-showroom",
    "/sectors/renewable-energy",
    "/sectors/security-automation",
    "/sectors/smart-building",
  ];

  const explorePaths = ["/", "/about-us", "/projects", "/events", "/blog"];

  return (
    <footer className="bg-[#003B5C] text-white pt-14 pb-8 px-6 md:px-12 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Logo & Copyright */}
        <div className="col-span-1 lg:col-span-2">
          <Image
            src="/img/logo.png"
            alt="EuroElektra Logo"
            width={150}
            height={50}
            className="mb-4"
          />
          <p className="text-sm text-white/80 mb-2">
            © {new Date().getFullYear()} EuroElektra. {translations.footer?.rights}
          </p>
         
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-base font-semibold mb-4 text-white">
            {translations.footer?.contact}
          </h4>
          <p className="text-white/80">{translations.footer?.email}</p>
          <p className="text-white/80 mt-2">{translations.footer?.address}</p>
        </div>

        {/* Explore Links */}
        <div>
          <h4 className="text-base font-semibold mb-4 text-white">
            {translations.footer?.explore}
          </h4>
          <ul className="space-y-2 text-white/80">
            {translations.footer?.links?.map((label, idx) => (
              <li key={idx}>
                <a
                  href={explorePaths[idx]}
                  className="hover:text-[#00B4DB] transition"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Sectors Links */}
        <div>
          <h4 className="text-base font-semibold mb-4 text-white">
            {translations.footer?.sectorsTitle || "Sectors"}
          </h4>
          <ul className="space-y-2 text-white/80">
            {translations.footer?.sectors?.map((label, idx) => (
              <li key={idx}>
                <a
                  href={sectorPaths[idx]}
                  className="hover:text-[#00B4DB] transition"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20 mt-10 pt-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
         
          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/euroelektra/"
              aria-label="Instagram"
              className="hover:text-[#00B4DB] transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://www.facebook.com/EuroElektraAl"
              aria-label="Facebook"
              className="hover:text-[#00B4DB] transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/euroelektra/"
              aria-label="LinkedIn"
              className="hover:text-[#00B4DB] transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCsfg02v3l9_tT3nJl4haHZw"
              aria-label="YouTube"
              className="hover:text-[#00B4DB] transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={18} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
