"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { HiOutlineMenu, HiOutlineX, HiOutlineSearch } from 'react-icons/hi';
import { usePathname } from 'next/navigation'; // if not already in your file
import { motion } from "framer-motion";
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

const words = ["Innovation!", "Efficiency!", "Connections!", "Energy!", "Sustainability!"];
const [currentWord, setCurrentWord] = useState("");
const [wordIndex, setWordIndex] = useState(0);
const [charIndex, setCharIndex] = useState(0);
const [deleting, setDeleting] = useState(false);

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

const items = [
  {
    icon: <FaNetworkWired />,
    title: "Official distributor",
    subtitle: "of professional electrical brands",
  },
  {
    icon: <FaBriefcase />,
    title: "8+",
    subtitle: "years of experience",
  },
  {
    icon: <FaGlobe />,
    title: "40+",
    subtitle: "international partners",
  },
  {
    icon: <FaCube />,
    title: "8000+",
    subtitle: "products",
  },
  {
    icon: <FaSolarPanel />,
    title: "Designing",
    subtitle: "Technical assistance of photovoltaic plants",
  },
];


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
        src="/img/logo.png"
        alt="EuroElektra Logo"
        width={160}
        height={50}
        className={`transition-all duration-300 ${
          showHeader ? "" : "filter invert"
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
<section className="relative min-h-screen flex items-center px-6 text-white bg-black overflow-hidden">
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
  <div className="absolute inset-0 bg-black/60 z-10" />

  {/* Hero Content */}
  <div className="relative z-20 max-w-5xl ml-8">
    <h1 className="text-5xl sm:text-6xl font-bold uppercase leading-tight mb-4">
      Leading<br />
      <span
        key={currentWord} // re-triggers animation on word change
        className="inline-block text-blue-400 transition-all duration-500 ease-in-out opacity-100 animate-fade"
      >
        {currentWord}
        <span className="animate-blink text-white ml-1">|</span>
      </span>
    </h1>

    <div className="w-24 h-1 bg-white mb-4" />
    <p className="text-base sm:text-lg text-gray-200 max-w-2xl">
      Since 2010, <strong>"EuroElektra"</strong> has become specialized in the wholesale market by offering the full range of electrical materials: civil and industrial. Our product portfolio also covers important sectors such as:
    </p>

    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 mt-4 text-gray-200 text-base sm:text-lg max-w-4xl">
      {[
        "Electrical materials",
        "Automated security",
        "Professional LED lighting",
        "Energy efficiency",
        "Smart Building",
        "Renewable energy",
      ].map((item, index) => (
        <li
          key={index}
          className="flex items-center whitespace-nowrap min-w-0 opacity-0 animate-fade-in"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <span className="text-blue-400 text-lg font-bold mr-2">➤</span>
          <span className="inline-block truncate">{item}</span>
        </li>
      ))}
    </ul>
  </div>
</section>


<section className="bg-[#F5F7FA] text-[#1C1C1C] py-20">
  <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-16">
    {/* Section Items */}
    {[
      {
        number: "01",
        title: "Electrical Products",
        desc: "EuroElektra offers selected products by the best international suppliers, assuring the market the most advanced and intelligent solution technology.",
      },
      {
        number: "02",
        title: "Security Automation",
        desc: "Your building is safer thanks to smart monitoring systems with cameras and commanded by automated systems enabling total control of your premises.",
      },
      {
        number: "03",
        title: "Lighting Show Room",
        desc: "In EuroElektra the lights are a combination through the art, architecture and scenography by assuring to your space the right system of lightening.",
      },
      {
        number: "04",
        title: "Energy Efficiency",
        desc: "Efficient air conditioning is one of the services that EuroElektra provides for management and energy savings in office buildings, apartments, and profile items.",
      },
      {
        number: "05",
        title: "Renewable Energy",
        desc: "EuroElektra, through the best global brands in green energy, enables the use of potential solar energy focusing on renewable energy.",
      },
      {
        number: "06",
        title: "Smart Building",
        desc: "Contemporary buildings are complex structures that not only provide comfort, lighting, and security but link all these services into one integrated system.",
      },
    ].map((item, idx) => (
      <div key={idx}>
        <div className="text-[10rem] font-bold text-[#003B5C]/10 leading-none">{item.number}</div>
        <h3 className="text-xl font-semibold mt-[-2rem] text-[#1C1C1C]">{item.title}</h3>
        <p className="mt-4 text-[#4F4F4F]">{item.desc}</p>
      </div>
    ))}
  </div>
</section>


<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
  {[
    {
      title: "Inauguration of 600 kWp Photovoltaic Plant in Korca!",
      description:
        'The Minister of Infrastructure and Energy, Mrs. Belinda Balluku visits the photovoltaic plant in Korça, realized by EuroElektra Sh.pk, at the company "2 AT Chemicals".',
      image: "/img/inagurimi1.jpg",
    },
    {
      title: '"Energy & Expo 2019"',
      description:
        'The third "Energy & Expo 2019" fair, dedicated to energy.',
      image: "/img/expo2019-11.jpg",
    },
    {
      title: "Training Day - Austrian Institute of Excellence",
      description:
        'IRENA has visited EuroElektra facilities to get to know more closely about the activity in the photovoltaic sector.',
      image: "/img/instituti1.jpg",
    },
    {
      title: "Touch the renewables with EuroElektra",
      description:
        'IRENA has visited EuroElektra facilities to get to know more closely about the activity in the photovoltaic sector.',
      image: "/img/event4.png",
    },
  ].map((item, index) => (
    <div
      key={index}
      className="relative group h-[400px] overflow-hidden cursor-pointer bg-[#F5F7FA]"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 scale-100 group-hover:scale-110"
        style={{ backgroundImage: `url(${item.image})` }}
      />

      {/* Light Gray Overlay on hover */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />

      {/* Title */}
      <div className="absolute bottom-4 left-4 right-4 text-white z-10">
        <h3 className="font-semibold text-lg leading-tight">{item.title}</h3>
      </div>

      {/* Slide-Up Panel */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#F5F7FA] p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
        <p className="text-sm mb-4 text-[#4F4F4F]">{item.description}</p>
        <a
          href="#"
          className="text-sm font-medium inline-flex items-center gap-1 text-[#0077C8] hover:text-[#005E9E] hover:underline"
        >
          Read more <span>→</span>
        </a>
      </div>
    </div>
  ))}
</section>


<section className="bg-[#F5F7FA] py-16">
  <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-start gap-12">
    {/* Left side: Text */}
    <div className="lg:w-1/3 text-[#1C1C1C]">
      <p className="text-[#0077C8] uppercase text-sm mb-2">Our Projects</p>
      <h2 className="text-4xl font-serif font-bold mb-4 leading-tight">
        We count a number of projects implemented in each of the sectors we operate.
      </h2>
      <p className="text-[#4F4F4F]">
        Explore our portfolio to see how we deliver high-quality photovoltaic plants that reflect
        your style and needs.
      </p>
    </div>

    {/* Right side: Auto-scrolling Projects Slider */}
    <div className="lg:w-2/3 w-full overflow-hidden relative">
      <div className="flex w-max animate-scroll space-x-6">
        {[
          {
            title: "Photovoltaic Plant 600 kWp",
            location: "2AT Chemicals, Korce",
            image: "/img/korce1.jpg",
          },
          {
            title: "Photovoltaic Plant 126 kWp",
            location: "Coca-Cola Bottling Albania",
            image: "/img/ccbs1.jpg",
          },
          {
            title: "Photovoltaic Plant 100 kWp",
            location: 'Hotel "Villa Pascucci"',
            image: "/img/villa1.jpg",
          },
          {
            title: "Photovoltaic Plant 11 kWp",
            location: "Devoll HydroPower",
            image: "/img/devoll1.jpg",
          },
        ]
          .concat([
            {
              title: "Photovoltaic Plant 600 kWp",
              location: "2AT Chemicals, Korce",
              image: "/img/korce1.jpg",
            },
            {
              title: "Photovoltaic Plant 126 kWp",
              location: "Coca-Cola Bottling Albania",
              image: "/img/ccbs1.jpg",
            },
            {
              title: "Photovoltaic Plant 100 kWp",
              location: 'Hotel "Villa Pascucci"',
              image: "/img/villa1.jpg",
            },
            {
              title: "Photovoltaic Plant 11 kWp",
              location: "Devoll HydroPower",
              image: "/img/devoll1.jpg",
            },
          ])
          .map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className="h-48 bg-cover bg-center hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 text-[#1C1C1C]">
                  {project.title}
                </h3>
                <p className="flex items-center text-sm text-[#4F4F4F]">
                  <svg
                    className="w-4 h-4 mr-2 text-[#0077C8]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13 21.314l-4.657-4.657A8 8 0 1117.657 16.657z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {project.location}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  </div>
</section>


<section className="bg-[#F1F3FA] text-[#1C1C1C] py-20 relative overflow-hidden">
  <div className="relative max-w-7xl mx-auto px-4">
    {/* Timeline line - hidden on mobile, horizontal on desktop */}
    <div className="hidden sm:block absolute sm:top-1/2 sm:left-0 sm:w-full sm:h-1 bg-[#003B5C] z-0" />

    <div className="flex flex-col sm:flex-row justify-between items-center sm:gap-6 gap-20 relative z-10">
      {items.map((item, index) => {
        const isEven = index % 2 === 0;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative flex flex-col w-full sm:w-1/5 items-center text-center"
          >
            {/* Timeline node - visible only on desktop */}
            <div className="hidden sm:block absolute sm:top-1/2 sm:left-auto sm:-translate-y-1/2 w-6 h-6 rounded-full bg-white border-4 border-[#003B5C] z-10" />

            {/* Mobile Layout */}
            <div className="flex flex-col items-center z-20 sm:hidden">
              <motion.div
                whileHover={{
                  scale: 1.15,
                  rotate: [0, -5, 5, 0],
                }}
                transition={{
                  type: "tween",
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="text-[#003B5C] text-4xl mb-4 transition duration-300 hover:drop-shadow-[0_0_12px_rgba(0,59,92,0.8)]"
              >
                {item.icon}
              </motion.div>
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="text-sm mt-1 text-[#4F4F4F]">{item.subtitle}</p>
            </div>

            {/* Desktop Layout */}
            <div className="hidden sm:flex flex-col items-center text-center z-20">
              {isEven ? (
                <>
                  <motion.div
                    whileHover={{
                      scale: 1.15,
                      rotate: [0, -5, 5, 0],
                    }}
                    transition={{
                      type: "tween",
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="text-[#003B5C] text-4xl mb-4 transition duration-300 hover:drop-shadow-[0_0_12px_rgba(0,59,92,0.8)]"
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-lg mt-20 font-semibold">{item.title}</h3>
                  <p className="text-sm mt-1 text-[#4F4F4F]">{item.subtitle}</p>
                </>
              ) : (
                <>
                  <h3 className="text-lg mb-2 font-semibold">{item.title}</h3>
                  <p className="text-sm mb-20 text-[#4F4F4F]">{item.subtitle}</p>
                  <motion.div
                    whileHover={{
                      scale: 1.15,
                      rotate: [0, -5, 5, 0],
                    }}
                    transition={{
                      type: "tween",
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="text-[#003B5C] text-4xl transition duration-300 hover:drop-shadow-[0_0_12px_rgba(0,59,92,0.8)]"
                  >
                    {item.icon}
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>



    
<section className="bg-[#F5F7FA] py-16 px-6 md:px-16">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-[#1C1C1C] mb-12">
      <span className="border-l-4 border-[#003B5C] pl-3">BLOG</span>
    </h2>

    <div className="grid gap-12 md:grid-cols-3">
      {/* Card 1 */}
      <div className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
        <img src="/img/b-img_870311.jpg" alt="Business Benefits" className="w-full h-64 object-cover" />
        <div className="p-6">
          <h3 className="text-lg font-semibold text-[#1C1C1C] mb-2 leading-snug">
            Business Benefits from the implementation of Photovoltaic Technologies.
          </h3>
          <p className="text-sm text-[#4F4F4F]">
            In : <span className="text-[#003B5C] font-medium">Renewable Energy</span>
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
        <img src="/img/b-rapsodia.jpg" alt="Rapsodia Restaurant Solar" className="w-full h-64 object-cover" />
        <div className="p-6">
          <h3 className="text-lg font-semibold text-[#1C1C1C] mb-2 leading-snug">
            When the taste of “Rapsodia Restaurant” touches on solar technology innovations!
          </h3>
          <p className="text-sm text-[#4F4F4F]">
            In : <span className="text-[#003B5C] font-medium">Renewable Energy</span>
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
        <img src="/img/b-download.jpg" alt="SunPower Solar" className="w-full h-64 object-cover" />
        <div className="p-6">
          <h3 className="text-lg font-semibold text-[#1C1C1C] mb-2 leading-snug">
            The technology that ensures the highest efficiency of photovoltaic panels comes to the Albanian ...
          </h3>
          <p className="text-sm text-[#4F4F4F]">
            In : <span className="text-[#003B5C] font-medium">Renewable Energy</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  <section className="bg-[#F1F3FA] py-10 overflow-hidden">
    <div className="relative">
      <div className="marquee flex whitespace-nowrap animate-marquee">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="flex items-center gap-12 px-6 min-w-full">
            {[
              'brand01.jpg', 'brand02.png', 'brand03.png', 'brand04.png',
              'brand05.png', 'brand06.png', 'brand07.png', 'brand08.png',
              'brand09.png', 'brand10.png', 'brand11.png', 'brand12.png',
              'brand13.png', 'brand14.png', 'brand15.png', 'brand16.png',
              'brand17.png', 'brand18.png', 'brand20.png', 'brand21.png',
              'brand22.png', 'brand23.png', 'Cabur copy.png',
            ].map((img, idx) => (
              <img
                key={`${i}-${idx}`}
                src={`/img/brands/${img}`}
                alt={`brand-${idx}`}
                className="h-24 grayscale invert hover:invert-0 hover:grayscale-0 transition duration-300"
              />
            ))}
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

