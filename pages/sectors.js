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
    title: "Inauguration - Photovoltaic Plant 600 kWp'",
    date: "18 October 2019",
    description:"The Minister of Infrastructure and Energy, Mrs. Belinda Balluku visits the photovoltaic plant in Korça, realized by EuroElektra Sh.pk, at the company '2 AT Chemicals', getting acquainted closely with the photovoltaic investments and the positive effects that these investments bring.",
    image: "/img/inagurimi_korce4.jpg",
    categories: ['Photovoltaic Plant']
  },
  {
    title: "Energy Expo & Forum 2019- 3rd Edition",
    date: " 4-5 October 2019",
    description: "Moments during the third edition of Energy Expo & Forum 2019, where our booth guests were representatives from the most prestigious photovoltaic companies such as SunPower, Alussystem. During the two days of the fair, the EuroElektra booth was joined by Mr. Eduard Shalsi, Minister of State for Enterprise Protection, Ministry of Infrastructure and Energy, Ms. Belinda Balluku as well as representatives from the US Embassy, ​​Economic and Commercial Officer Mr. Alex MacFarlane.",
    image: "/img/IMG_0536.jpg",
    categories: ['Photovoltaic Plant']
  },
  {
    title: "Austrian Institute of Excellence",
    date: "15 April 2019",
    description: "Moments during training with the Austrian Institute, held at our company premises, where they discussed the latest Photovoltaic Power Plant developments and innovations.'", 
    image: "/img/IMG_9715.jpg",
    categories: ['Photovoltaic Plant']
  },
  {
    title: "Energy Expo & Forum 2018- 2nd Edition",
    date: "5-6 October 2018",
    description: "For the second year in a row, EuroElektra participates in the energy fair 'Energy & Expo Forum 2018 'as one of the main supporters of this event bringing together all energy market players in an interactive environment. Participants in this edition will be representatives of some of the most prestigious companies in the world solar energy market such as: SunPower, SolarEdge, Alusistemi, Zucchetti Centro System etc. who will share with the Albanian public the latest photovoltaic technologies.",
    image: "/img/IMG_8634.jpg",
    categories: ['Photovoltaic Plant']
  },
  {
    title: "Touch the Renewables revolution with EuroElektra”- Albanian Skills Week 2018",
    date: "10 May 2018",
    description: "In the framework of the “Albanian Skills Week 2018”, a series of training activities were held for technical and electrical vocational education students and electrical engineering students on the latest developments in the photovoltaic sector, as well as ways to install a photovoltaic system. During the event, EuroElektra demonstrated electrical connections between components of a photovoltaic system.",
    image: "/img/IMG_7881.jpg",
    categories: ['Photovoltaic Plant']
  },
  {
    title: "Visit of the representatives of the Assembly of Albania to EuroElektra.",
    date: "May 2018",
    description:"Representatives of GIZ Albania and the Albanian Parliament are interested to find out more about the current situation in the photovoltaic market and the performance of the company in this regard.",
    image: "/img/WhatsApp Image 2018-04-28 at 08.40.03.jpeg",
    categories: ['Electric Vehicle Chargers']
  },
  {
    title: "Visit of the International Renewable Energy Agency (IRENA)",
    date: "7 December 2017",
    description: "In the context of monitoring the current market conditions for Southwest Europe, the International Renewable Energy Agency has visited EuroElectra premises to become more familiar with its photovoltaic sector, as the only company in the Albanian market that has implemented several plants. photovoltaics with different power for business and family.",
    image: "/img/IMG_5551.jpg",
    categories: ['Photovoltaic Plant']
  },
  {
    title: "Energy Expo & Forum 2017 - 1st Edition",
    date: "14-16 November 2017",
    description: "On the 14th and 16th of November, the first edition of the first Expo-Forum dedicated to the energy sector in Albania was launched. The main focus of this event was Renewable Energy and Energy Efficiency. The event was held at ExpoCity Albania premises in cooperation with the Ministry of Infrastructure and Energy and with the support of EuroElectra as the official sponsor of the event. During the three days of the forum, project ideas on supply, technology, transmission, systems, equipment, services, consultancy, projects, economics and energy finance were presented.",
    image: "/img/23593434_964624207026120_8971282994926525004_o.jpg",
    categories: ['Photovoltaic Plant']
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

          {/* Submenu */}
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
          </div>
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
      Sectors
    </h1>
    <p className="text-lg sm:text-xl font-medium text-white max-w-3xl mx-auto">
      Our Sectors provide high quality, sustainability, energy efficiency, and environmentally friendly solutions — aligning with EuroElektra's mission to power the future through innovation and smart energy systems.
    </p>
  </div>
</section>
<section className="py-10 px-6 bg-white">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[250px_1fr] gap-10">
    {/* Sidebar */}
    <aside>
      <h2 className="text-lg font-semibold text-[#1C1C1C] mb-4">SECTORS</h2>
      <ul className="space-y-4">
        {[
          "Electrical Products",
          "Security Automation",
          "Lighting Showroom",
          "Energy Efficiency",
          "Renewable Energy",
          "Smart Building",
        ].map((item, idx) => (
          <li key={idx} className="flex justify-between items-center text-sm text-[#1C1C1C]">
            <div className="flex items-center gap-2">
              <span className="text-lg">&rsaquo;</span>
              <span>{item}</span>
            </div>
            <div className="flex items-center gap-1 text-white text-xs bg-[#888] rounded-full px-2 py-0.5">
              <span>0</span>
              <button className="text-xs font-bold leading-none">+</button>
            </div>
          </li>
        ))}
      </ul>
    </aside>

    {/* Grid with Images */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      {[
        {
          title: "Electrical Products",
          image: "/img/images.jpg",
        },
        {
          title: "Security Automation",
          image: "/img/Security-Automation_blog.PNG",
        },
        {
          title: "Lighting Showroom",
          image: "/img/20171213_111130-1030x579.jpg",
        },
        {
          title: "Energy Efficiency",
          image: "/img/korce1.jpg",
        },
        {
          title: "Renewable Energy",
          image: "/img/b-solar panels-winter.jpg",
        },
        {
          title: "Smart Building",
          image: "/img/CCBS3.jpg",
        },
      ].map((sector, idx) => (
        <div
          key={idx}
          className="border border-gray-300 p-4 flex flex-col items-center justify-center text-center"
        >
          <img
            src={sector.image}
            alt={sector.title}
            className="w-24 h-24 object-cover mb-4 rounded"
          />
          <p className="text-sm font-medium text-[#4F4F4F]">{sector.title}</p>
        </div>
      ))}
    </div>
  </div>
</section>


 

       {/* FOOTER */}
          {/* FOOTER */}
       {/* FOOTER */}
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
