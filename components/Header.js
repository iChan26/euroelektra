"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiOutlineSearch, HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useRouter } from "next/router";

export default function Header({ language, translations, changeLanguage }) {
  const router = useRouter();
  const currentPath = router.pathname;
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [atTop, setAtTop] = useState(true);
  const flagIcon = (lang) => {
  switch (lang) {
    case "al":
      return "flag";
    case "it":
      return "italian";
    case "en":
    default:
      return "united-kingdom";
  }
};
const [isLangOpen, setIsLangOpen] = useState(false);
const [expanded, setExpanded] = useState(null);
  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastY;
      setAtTop(currentY <= 50);
      setShowHeader(!scrollingDown);
      lastY = currentY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleReload = (e, path) => {
    e.preventDefault();
    window.location.href = path;
  };

  const navItems = [
    { path: "/", key: "Home" },
    { path: "/about-us", key: "About Us" },
    {
      path: "/sectors",
      key: "Sectors",
      submenus: [
        { path: "/sectors/electrical-products", key: "electrical_products" },
        { path: "/sectors/energy-efficiency", key: "energy_efficiency" },
        { path: "/sectors/lighting-showroom", key: "lighting_showroom" },
        { path: "/sectors/renewable-energy", key: "renewable_energy" },
        { path: "/sectors/security-automation", key: "security_automation" },
        { path: "/sectors/smart-building", key: "smart_building" },
      ],
    },
    { path: "/projects", key: "Projects" },
    { path: "/events", key: "Events" },
  ];

  return (
  <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${atTop ? "bg-transparent" : "bg-white shadow-md"}`}>
  {/* Wrapper */}
  <div className="relative flex justify-between items-start md:items-center px-6 pt-6 md:pt-4 md:py-4">
        {/* Logo (Desktop only) */}
        <a
          href="/"
          onClick={(e) => handleReload(e, "/")}
          className="hidden md:block"
        >
          <Image
            src="/img/logo-blue.png"
            alt="EuroElektra Logo"
            width={160}
            height={50}
            className="transition-all duration-300"
          />
        </a>

    {/* Desktop Nav */}
    <nav
      className={`tracking-wide hidden md:flex transition-all duration-300 uppercase text-sm ${
        atTop
          ? "flex-col absolute top-10 right-10 space-y-2 text-white items-start text-left"
          : "flex-row relative space-x-8 text-[#2987bf] items-center"
      }`}
    >
      {navItems.map((item, i) => {
        const isActive = pathname === item.path || (item.path === "/home" && pathname === "/");
        return (
          <div key={i} className="relative group">
            <div className="flex items-center space-x-1">
              <a
                href={item.path}
                onClick={(e) => handleReload(e, item.path)}
                className={`relative pb-1 transition-all duration-300 flex items-center before:content-[''] before:absolute before:left-0 before:-bottom-0.5 before:h-[2px] before:bg-current before:transition-all before:duration-300 ${
                  isActive ? "font-bold before:w-full" : "hover:font-bold before:w-0 hover:before:w-full"
                }`}
              >
                {translations.nav?.[i] || item.key}
              </a>
              {item.submenus && (
                <img
                  src="/svg/arrow-down-sign-to-navigate.png"
                  alt="Dropdown Arrow"
                  className={`w-3 h-3 transition-transform duration-300 group-hover:rotate-180 ${atTop ? "filter brightness-0 invert" : ""}`}
                />
              )}
            </div>
            {item.submenus && (
              <ul
                className={`absolute z-50 ${
                  atTop ? "right-full mr-2 top-0" : "top-full mt-2 left-0"
                } bg-white text-left w-56 space-y-1 py-2 px-2 hidden group-hover:block`}
              >
                {item.submenus.map((submenu, j) => (
                  <li key={j}>
                    <a
                      href={submenu.path}
                      onClick={(e) => handleReload(e, submenu.path)}
                      className="block px-[10px] py-[6px] text-xs tracking-wide text-gray-700 hover:text-[#2987bf] hover:font-semibold hover:bg-gray-100 transition whitespace-nowrap"
                    >
                      {translations.sectors?.[submenu.key] || submenu.key}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}

      {/* Search */}
      <div className="relative">
        {showSearch ? (
          <div className="relative">
            <HiOutlineSearch size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              type="text"
              className="transition-all duration-300 pl-10 pr-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              placeholder={translations.searchPlaceholder || "Search..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onBlur={() => setShowSearch(false)}
              autoFocus
            />
          </div>
        ) : (
          <button className="focus:outline-none" onClick={() => setShowSearch(true)}>
            <HiOutlineSearch size={20} className={`transition-colors duration-300 ${atTop ? "text-white" : "text-[#2987bf]"}`} />
          </button>
        )}
      </div>

      {/* Language Selector */}
      <div className="relative group">
        <button
          className={`flex items-center space-x-2 px-2 py-1 rounded-md transition-colors duration-300 ${
            atTop ? "text-white" : "text-[#2987bf]"
          }`}
        >
          <Image
            src={`/svg/${language === "al" ? "flag" : language === "it" ? "italian" : "united-kingdom"}.png`}
            alt="Current Flag"
            width={20}
            height={20}
            className="rounded-full"
          />
          <span className="text-xs font-medium uppercase">{language}</span>
          <img
            src="/svg/arrow-down-sign-to-navigate.png"
            alt="Arrow"
            className={`w-3 h-3 ml-1 transition-transform duration-300 group-hover:rotate-180 ${
              atTop ? "filter brightness-0 invert" : ""
            }`}
          />
        </button>
        <div className="absolute z-10 hidden group-hover:flex flex-col top-full mt-1 bg-white text-gray-800 overflow-hidden w-36">
          {["en", "al", "it"].map((lang) => {
            const flag = lang === "al" ? "flag" : lang === "it" ? "italian" : "united-kingdom";
            const label = lang === "al" ? "Albanian" : lang === "it" ? "Italian" : "English";
            return (
              <button
                key={lang}
                onClick={() => changeLanguage(lang)}
                className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 hover:text-[#2987bf] hover:font-semibold text-left text-sm w-full"
              >
                <Image src={`/svg/${flag}.png`} alt={label} width={20} height={20} className="rounded-full" />
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  </div>

  {/* Mobile Header Top Row */}
  <div className="flex justify-between items-center px-6 py-[-50px] md:hidden">
    <a href="/" onClick={(e) => handleReload(e, "/")}>
      <Image src="/img/logo-blue.png" alt="Logo" width={140} height={40} />
    </a>
    <div className="flex items-center space-x-3">
      <button onClick={() => setShowSearch(!showSearch)} className="focus:outline-none">
        <HiOutlineSearch size={22} className={`${atTop ? "text-white" : "text-[#2987bf]"}`} />
      </button>

          {/* Mobile Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="focus:outline-none flex items-center space-x-1"
            >
              <Image
                src={`/svg/${flagIcon(language)}.png`}
                alt="Lang"
                width={20}
                height={20}
                className="rounded-full"
              />
              <img
                src="/svg/arrow-down-sign-to-navigate.png"
                alt="Arrow"
                className={`w-3 h-3 transition-transform ${isLangOpen ? "rotate-180" : ""} ${atTop ? "filter brightness-0 invert" : ""}`}
              />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 z-50 flex flex-col bg-white shadow-md rounded-md overflow-hidden w-32 text-sm">
                {["en", "al", "it"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      changeLanguage(lang);
                      setIsLangOpen(false);
                    }}
                    className="flex items-center px-3 py-2 hover:bg-gray-100 text-left space-x-2"
                  >
                    <Image
                      src={`/svg/${flagIcon(lang)}.png`}
                      alt={lang}
                      width={18}
                      height={18}
                      className="rounded-full"
                    />
                    <span>{lang === "al" ? "Albanian" : lang === "it" ? "Italian" : "English"}</span>
                  </button>
                ))}
              </div>
            )}
          </div>


      {/* Burger Menu */}
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
        {isMenuOpen ? (
          <HiOutlineX size={26} className={`${atTop ? "text-white" : "text-[#2987bf]"}`} />
        ) : (
          <HiOutlineMenu size={26} className={`${atTop ? "text-white" : "text-[#2987bf]"}`} />
        )}
      </button>
    </div>
  </div>

  {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-[#2987bf] z-50 transform transition-transform duration-300 ease-in-out shadow-lg shadow-black/10 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden px-6 py-6`}
      >

    <div className="flex justify-end mb-4">
      <button onClick={() => setIsMenuOpen(false)} className="focus:outline-none">
        <HiOutlineX size={26} className="text-white" />
      </button>
    </div>
        {navItems.map((item, i) => {
  const isSectors = item.key === "sectors";

  return (
    <div key={i} className="flex flex-col">
      <div className="w-full flex justify-between items-center py-2">
        {/* Label click - navigate to sectors if it's that item */}
        <button
          onClick={() => {
            setIsMenuOpen(false);
            handleReload(new Event("click"), isSectors ? "/sectors" : item.path);
          }}
          className={`text-left w-full uppercase tracking-widest text-sm transition
    ${currentPath === (isSectors ? "/sectors" : item.path)
              ? "text-white border-b-2 border-white pb-1"
              : "text-white hover:text-[#00b4db]"}`}
        >
          {translations.nav?.[i] || item.key}
        </button>


        {/* Show arrow ONLY if it's not 'sectors' */}
        {item.submenus && !isSectors && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setExpanded((prev) => (prev === i ? null : i));
            }}
            className="ml-2 focus:outline-none"
          >
            <img
              src="/svg/arrow-down-sign-to-navigate.png"
              alt="Arrow"
              className={`w-3 h-3 transition-transform filter invert brightness-0 ${expanded === i ? "rotate-180" : ""}`}
            />

          </button>
        )}
      </div>

      {/* Submenu - only if not sectors */}
      {item.submenus && expanded === i && !isSectors && (
        <div className="ml-4 mt-1 flex flex-col space-y-1">
          {item.submenus.map((submenu, j) => (
            <a
              key={j}
              href={submenu.path}
              onClick={(e) => {
                setIsMenuOpen(false);
                handleReload(e, submenu.path);
              }}
              className="text-sm text-white hover:text-[#2987bf] transition px-2 py-1"
            >
              {translations.sectors?.[submenu.key] || submenu.key}
            </a>
          ))}
        </div>
      )}
    </div>
  );
})}
  

  </div>

  {/* Mobile Search Input */}
  {showSearch && (
    <div className="md:hidden px-6 pb-4">
      <div className="relative">
        <HiOutlineSearch size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
          placeholder={translations.searchPlaceholder || "Search..."}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  )}
</header>

  );
}
