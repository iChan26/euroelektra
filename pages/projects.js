"use client";
import { useState, useEffect, useRef, } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { HiOutlineMenu, HiOutlineX, HiOutlineSearch } from 'react-icons/hi';
import { usePathname } from 'next/navigation'; // if not already in your file
import { FaHome } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

import {
  FaNetworkWired,
  FaBriefcase,
  FaGlobe,
  FaCube,
  FaSolarPanel,
} from "react-icons/fa";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const timelineData = [
    { year: '2025 — New Digital Experience', text: 'Launch of our new website…' },
    { year: '2015 — Exclusive Brand Partnerships', text: 'Secured exclusive selling rights…' },
    { year: '2000s — Expansion Across Albania', text: 'Grew presence with multiple retail stores…' },
    { year: '1991', text: 'I&A International was established…' },
  ];
    const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.3 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };
const words = ["Innovation!", "Efficiency!", "Connections!", "Energy!", "Sustainability!"];
const [currentWord, setCurrentWord] = useState("");
const [wordIndex, setWordIndex] = useState(0);
const [charIndex, setCharIndex] = useState(0);
const [deleting, setDeleting] = useState(false);
const categories = [
  { name: 'All', count: 30 },
  { name: 'Photovoltaic Plant', count: 18 },
  { name: 'Electric Vehicle Chargers', count: 1 },
  { name: 'Automation', count: 1 },
  { name: 'ElPhotovotlaic Plant', count: 1 },
  { name: 'Project', count: 2 },
  { name: 'Others', count: 7 },
];

const projects = [
  {
    title: "Photovoltaic Plant: 'EHW'",
    category: "Total Installed Power: 582 kWp | Location: Highway Tirana-Durres, Albania",
    image: "/img/EHW-POSTIM (2).jpg",
    categories: ['Photovoltaic Plant']
  },
  {
    title: "Photovoltaic Plant: 'HAKO'",
    category: "Total Installed Power: 266.8 kWp | Location: Highway Tirana-Durres, Albania",
    image: "/img/HAKO2.jpg",
    categories: ['Photovoltaic Plant']
  },
  {
    title: "Photovoltaic Plant: 'Algrafika'",
    category: "Total Installed Power: 98.4 kWp | Location: Highway Tirana-Durres, Albania",
    image: "/img/infosoft1.jpg",
    categories: ['Photovoltaic Plant']
  },
  {
    title: "Photovoltaic Plant: 'InfoSoft Office'",
    category: "Total Installed Power: 85.28 kWp | Location: Highway Tirana-Durres, Albania",
    image: "/img/info&algr2.jpg",
    categories: ['Photovoltaic Plant']
  },
  {
    title: "Photovoltaic Plant: 'Villa Alba Medical Center'",
    category: "Total Installed Power: 20.04 kWp | Location: Durres, Albania",
    image: "/img/VILLA ALBA-20KWP.jpg",
    categories: ['Photovoltaic Plant']
  },
  {
    title: "Electric Vehicle Chargers: 'Coca-Cola Bottling Albania'",
    category: "Location: Highway Tirana-Durres, Albania",
    image: "/img/IMG_2079.jpg",
    categories: ['Electric Vehicle Chargers']
  },
  {
    title: "Photovoltaic Plant: 'Devoll HydroPower, Statkraft'",
    category: "Installed Power: 38 kWp | Location: Elbasan",
    image: "/img/devoll1.jpg",
    categories: ['Photovoltaic Plant']
  },
  {
    title: "Photovoltaic Plant: '2AT Chemicals'",
    category: "Installed Power: 600 kWp | Location: Dishnice, Korce",
    image: "/img/korce-dishnice1 (1).jpg",
    categories: ['Photovoltaic Plant']
  },
  {
    title: "Photovoltaic Plant: 'Coca-Cola Bottling Albania'",
    category: "Installed Power: 126 kWp | Location: Autostrada Tirane-Durres, km 5, Tirane",
    image: "/img/CCBS1 (1).jpg",
    categories: ['Photovoltaic Plant']
  },
  {
    title: "Photovoltaic Plants in Permet City",
    category: "Total Installed Power: 28.35 kWp | Location: Permet, Albania",
    image: "/img/baxho1.jpg",
    categories: ['Photovoltaic Plant']
  },
  {
    title: "Photovoltaic Plant: 'SARP & LAB'",
    category: "Installed Power: 36 kWp | Location: Autostrada Tirane-Durres",
    image: "/img/9e1642ac-18bf-45c4-ab64-64128445d4b8.jpg",
    categories: ['Photovoltaic Plant']
  },
  {
    title: "Photovoltaic Plant: 'Banese Private'",
    category: "Installed Power: 5.9 kWp | Location: Shkoder",
    image: "/img/imp2 shkoder.jpg",
    categories: ['Photovoltaic Plant']
  },
  {
    title: "Photovoltaic Plant: Godina EuroElektra",
    category: "Installed Power: 24.17 kWp | Location: Prush, Vaqarr",
    image: "/img/Euroelektra_S7P-23.jpg",
    categories: ['Photovoltaic Plant']
  },
  {
    title: "Photovoltaic Plant: Banka 'ProCredit'",
    category: "Installed Power: 17.55 kWp | Location: Rr. 'Dritan Hoxha', Tirane",
    image: "/img/ac.png",
    categories: ['Photovoltaic Plant']
  },
  {
    title: "Photovoltaic Plant: Baxho 'Rapsodia'",
    category: "Installed Power: 50 kWp | Location: Krajne, Lezhe",
    image: "/img/IMG_8558.jpg",
    categories: ['Photovoltaic Plant']
  },
  {
    title: "Photovoltaic Plant: 'Qendra Vizitoreve Divjake-Karavasta'",
    category: "Installed Power: 5 kWp | Location: Divjake",
    image: "/img/divjaka1.jpg",
    categories: ['Photovoltaic Plant']
  },
  {
    title: "Photovoltaic Plant: 'Qendra Vizitoreve Llogara'",
    category: "Installed Power: 3.16 kWp | Location: Parku Kombetar Llogara",
    image: "/img/Llogara1.jpg",
    categories: ['Photovoltaic Plant']
  },
  {
    title: "Photovoltaic Plant: 'Qendra Vizitoreve Theth'",
    category: "Installed Power: 3.16 kWp | Location: Parku Kombetar Theth",
    image: "/img/05e09fa7-3eca-429f-a83a-cd4d1d4933bf.jpg",
    categories: ['Photovoltaic Plant']
  },
  {
    title: "Photovoltaic Plant: Observatori",
    category: "Installed Power: 5.8 kWp | Location: Rr. e Saraceve, Tirane",
    image: "/img/IMG_5100.jpg",
    categories: ['Photovoltaic Plant']
  },
  {
    title: "Automation for Sliding Doors",
    category: "Location: Kompleksi 'Rolling Hills'",
    image: "/img/IMG_8411.jpg",
    categories: ['Automation']
  },
  {
    title: "Mounting of lighting systems",
    category: "Location: Kompleksi 'Rolling Hills'",
    image: "/img/IMG_8400.jpg",
    categories: ['Others']
  },
  {
    title: "Photovoltaic Plant: Tamaco sh.p.k",
    category: "Installed Power: 6.18 kWp | Location: Kombinat Tirane",
    image: "/img/IMG_5067.jpg",
    categories: ['Photovoltaic Plant']
  },
  {
    title: "Photovoltaic Plant: ICE Tirana",
    category: "Installed Power: 100 kWp | Location: Lezhe",
    image: "/img/IMG_4910.jpg",
    categories: ['Photovoltaic Plant']
  },
  {
    title: "Smart Building: InfoSoft Office",
    category: "Vimar's BY-ME system for audio, VOIP, lighting & air conditioning",
    image: "/img/IMG_6733.jpg",
    categories: ['Smart Building']
  },
  {
    title: "Photovoltaic Plant: Hotel Villa Pascucci",
    category: "Installed Power: 100 kWp | Location: Shkallnur, Durres",
    image: "/img/4317f537-5599-418c-961e-8a9597748ead.jpeg",
    categories: ['Photovoltaic Plant']
  },
  {
    title: "ElPhotovotlaic Plant: Kisha Troshan",
    category: "Installed Power: 4 kWp | Location: Troshan, Lezhe",
    image: "/img/579e19a8-3d90-4ec8-b09c-2c36499b0745.jpg",
    categories: ['ElPhotovotlaic Plant']
  },
  {
    title: "Photovoltaic Plant: ICE Tirana",
    category: "Installed Power: 1.2 kWp | Location: Tirane",
    image: "/img/1.jpg",
    categories: ['Photovoltaic Plant']
  },
  {
    title: "CCTV Camera System with 360 ° view",
    category: "Location: Tirana International School",
    image: "/img/IMG_8394.jpg",
    categories: ['Others']
  },
  {
    title: "Project: F&M REKLAMA",
    category: "Electrical installations | Location: Rruga Prush, Vaqarr, Tirana",
    image: "/img/60438122_2468932163131028_3767026175059165184_o.jpg",
    categories: ['Project']
  },
  {
    title: "Project: QTU",
    category: "Lighting systems & Gate Automation",
    image: "/img/48076639_2077107622345764_1033423802056310784_o.jpg",
    categories: ['Project']
  }
];


    const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(activeCategory)
        );

useEffect(() => {
  const current = words[wordIndex];
  let timeout;

  if (!deleting && charIndex <= current.length) {
    // Typing characters
    timeout = setTimeout(() => {
      setCurrentWord(current.slice(0, charIndex));
      setCharIndex((prev) => prev + 1);
    }, 100);
  } else if (deleting && charIndex >= 0) {
    // Deleting characters
    timeout = setTimeout(() => {
      setCurrentWord(current.slice(0, charIndex));
      setCharIndex((prev) => prev - 1);
    }, 40);
  }

  // Pause before deleting
  if (!deleting && charIndex === current.length + 1) {
    timeout = setTimeout(() => {
      setDeleting(true);
      setCharIndex((prev) => prev - 1);
    }, 800);
  }

  // Move to next word after delete
  if (deleting && charIndex < 0) {
    setDeleting(false);
    setWordIndex((prev) => (prev + 1) % words.length);
    setCharIndex(0);
  }

  return () => clearTimeout(timeout);
}, [charIndex, deleting, wordIndex, words]);



  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(currentScrollY < lastScrollY || currentScrollY <= 50);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

const pathname = usePathname();
const [isScrollingDown, setIsScrollingDown] = useState(false);
const [atTop, setAtTop] = useState(true);

useEffect(() => {
  let lastY = window.scrollY;

  const handleScroll = () => {
    const currentY = window.scrollY;
    const scrollingDown = currentY > lastY;

    setAtTop(currentY <= 50);
    setIsScrollingDown(scrollingDown);
    setShowHeader(!scrollingDown); // Hides nav only when scrolling down

    lastY = currentY;
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <>
   <Head>
  <title>EuroElektra – Empowering Albania Since 2010</title>
  <meta
    name="description"
    content="EuroElektra specializes in wholesale electrical materials, renewable energy, and smart building solutions in Albania. Trusted since 2010."
  />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&display=swap"
    rel="stylesheet"
  />
</Head>

{/* HEADER */}
<header
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
    ${atTop ? "bg-transparent h-full" : "bg-white h-auto shadow-md"}
    pointer-events-none`}
>

  <div className="relative flex justify-between items-start md:items-center px-6 pt-6 md:pt-4 md:py-4 pointer-events-auto">
    {/* Logo */}
    <Link href="/">
      <Image
        src="/img/logo-blue.png"
        alt="EuroElektra Logo"
        width={160}
        height={50}
        className={`transition-all duration-300 ${
          showHeader ? "" : ""
        }`}
      />
    </Link>

    {/* Desktop Nav */}
   {/* Desktop Nav – Conditional Layout */}
<nav
  className={`hidden md:flex transition-all duration-300 uppercase text-sm tracking-[0.25em] ${
    atTop
      ? "flex-col absolute top-10 right-10 space-y-2 text-white items-start text-left"
      : "flex-row relative space-x-8 text-blue-400 items-center"
  }`}
>
  {["Home", "About Us", "Sectors", "Projects", "Events"].map((item, i) => {
    const href = `/${item.toLowerCase().replace(/ /g, "-")}`;
    const isActive = pathname === href || (item === "Home" && pathname === "/");

    if (item === "Sectors") {
      return (
        <div key={i} className="relative group">
          <span
            className={`relative pb-1 cursor-pointer flex items-center gap-1 transition-all duration-300
              before:content-[''] before:absolute before:left-0 before:-bottom-0.5
              before:h-[2px] before:bg-current before:transition-all before:duration-300
              ${isActive ? "font-bold before:w-full" : "hover:font-bold before:w-0 group-hover:before:w-full"}
            `}
          >
            {item}
            <svg
              className={`w-3 h-3 transition-transform duration-300 group-hover:rotate-90 ${
                atTop ? "text-white" : "text-blue-400"
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>

          {/* Submenu 
          <div
            className={`absolute top-full mt-2 bg-white shadow-md rounded-md py-2 px-4 space-y-2 z-50 hidden group-hover:block text-black text-xs tracking-wide`}
          >
            {[
              "Electrical Products",
              "Security Automation",
              "Lighting ShowRoom",
              "Energy Efficiency",
              "Renewable Energy",
              "Smart Building",
            ].map((sub, idx) => (
              <Link
                key={idx}
                href={`/sectors/${sub.toLowerCase().replace(/ /g, "-")}`}
                className="block hover:font-semibold whitespace-nowrap transition-colors duration-200"
              >
                {sub}
              </Link>
            ))}
          </div>*/}
        </div>
      );
    }

    return (
      <Link
        key={i}
        href={href}
        className={`relative pb-1 transition-all duration-300
          before:content-[''] before:absolute before:left-0 before:-bottom-0.5
          before:h-[2px] before:bg-current before:transition-all before:duration-300
          ${isActive
            ? "font-bold before:w-full"
            : "hover:font-bold before:w-0 hover:before:w-full"
          }`}
      >
        {item}
      </Link>
    );
  })}

  {/* Search Icon */}
  <button className="focus:outline-none">
    <HiOutlineSearch
      size={20}
      className={`transition-colors duration-300 ${
        atTop ? "text-white" : "text-blue-400"
      }`}
    />
  </button>
</nav>



    {/* Mobile Menu Toggle – Always visible */}
    <div className="md:hidden flex items-center space-x-4">
      {/* Search icon (mobile) */}
      <button>
        <HiOutlineSearch
          size={22}
          className={`transition-colors duration-300 ${
            showHeader ? "text-white" : "text-black"
          }`}
        />
      </button>
      {/* Burger / Close icon */}
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <HiOutlineX
            size={28}
            className={`transition-colors duration-300 ${
              showHeader ? "text-white" : "text-black"
            }`}
          />
        ) : (
          <HiOutlineMenu
            size={28}
            className={`transition-colors duration-300 ${
              showHeader ? "text-white" : "text-black"
            }`}
          />
        )}
      </button>
    </div>
  </div>

  {/* Mobile Nav */}
  {isMenuOpen && (
    <div className="md:hidden bg-white text-black px-6 py-4 space-y-4 transition-all duration-300">
      {["Home", "About Us", "Projects", "Contact Us", "AL"].map((item, i) => (
        <Link
          key={i}
          href={`/${item.toLowerCase().replace(/ /g, "-")}`}
          className="block uppercase tracking-widest text-sm"
          onClick={() => setIsMenuOpen(false)}
        >
          {item}
        </Link>
      ))}
    </div>
  )}
</header>


{/* HERO */}
<section className="relative min-h-screen flex items-center justify-center px-6 text-white bg-black overflow-hidden">
  {/* Video Background */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source src="/vid/hero.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/70 z-10" />

  {/* Hero Content */}
  <div className="relative z-20 max-w-4xl text-center">
    <h1 className="text-5xl sm:text-6xl font-extrabold uppercase mb-8">
      Projects
    </h1>
    <p className="text-lg sm:text-xl font-medium text-white max-w-3xl mx-auto">
      Our projects provide high quality, sustainability, energy efficiency, and environmentally friendly solutions — aligning with EuroElektra's mission to power the future through innovation and smart energy systems.
    </p>
  </div>
</section>



  <section className="bg-[#F5F7FA] text-[#1C1C1C] px-6 py-16">
  <div className="max-w-7xl mx-auto">
    
    {/* Category Filters */}
    <div className="flex flex-wrap justify-center gap-6 mb-12 text-[#4F4F4F] text-sm">
      {categories.map((cat) => (
        <span
          key={cat.name}
          onClick={() => setActiveCategory(cat.name)}
          className={`cursor-pointer transition-colors duration-200 ${
            activeCategory === cat.name ? "text-[#003B5C] font-semibold" : "hover:text-[#005E9E]"
          }`}
        >
          {cat.name} <sup>{cat.count}</sup>
        </span>
      ))}
    </div>

    {/* Projects Grid */}
    <div className="grid md:grid-cols-2 gap-10">
      {filteredProjects.map((item, index) => (
        <div key={index}>
          <div className="overflow-hidden rounded-lg">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h3 className="text-xl font-bold mt-4 text-[#1C1C1C]">{item.title}</h3>
          <p className="text-[#4F4F4F] text-sm">{item.category}</p>
        </div>
      ))}
    </div>
    
  </div>
</section>





       {/* FOOTER */}
<footer className="bg-[#003B5C] text-[#F5F7FA] py-12 px-4 text-sm">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
    
    {/* Logo & Copyright */}
    <div>
      <Image src="/img/logo.png" alt="EuroElektra Logo" width={120} height={40} className="mb-4" />
      <p className="text-[#F5F7FA]">© {new Date().getFullYear()} EuroElektra. All Rights Reserved.</p>
    </div>

    {/* Contact */}
    <div>
      <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
      <p className="text-[#F5F7FA]">info@euroelektra.com</p>
      <p className="mt-2 text-[#F5F7FA]">Street Nikolla Jorga, Godina 18, 1001, Tiranë, Albania</p>
    </div>

    {/* Explore Links */}
    <div>
      <h4 className="text-lg font-semibold mb-4 text-white">Explore</h4>
      <ul className="space-y-2">
        <li><Link href="/" className="hover:text-[#005E9E]">Home</Link></li>
        <li><Link href="/about" className="hover:text-[#005E9E]">About Us</Link></li>
        <li><Link href="/projects" className="hover:text-[#005E9E]">Projects</Link></li>
        <li><Link href="/events" className="hover:text-[#005E9E]">Events</Link></li>
      </ul>
    </div>

    {/* Social Icons */}
    <div>
      <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
      <div className="flex gap-4 text-white">
        <a href="#" className="hover:text-[#005E9E]"><FaInstagram size={20} /></a>
        <a href="#" className="hover:text-[#005E9E]"><FaFacebookF size={20} /></a>
        <a href="#" className="hover:text-[#005E9E]"><FaLinkedinIn size={20} /></a>
        <a href="#" className="hover:text-[#005E9E]"><FaYoutube size={20} /></a>
      </div>
    </div>

  </div>
</footer>
    </>
  );
}
