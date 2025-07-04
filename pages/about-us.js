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
    { year: '2025 — Continued Innovation & Growth', text: 'Driving sustainable energy solutions and smart technologies for the Albanian market.' },
    { year: '2020 — Excellence in Project Implementation', text: 'Qualified teams provided full-cycle project support from study, design, to installation under international IEC standards.' },
    { year: '2018 — Strengthened Global Partnerships', text: 'Secured exclusive distribution rights for top international brands in key product sector' },
    { year: '2016 — Pioneer in Photovoltaic Market', text: 'Became a leader in Albania’s photovoltaic sector with numerous residential and business projects.' },
    { year: '2014 — Smart Building Solutions Launched', text: 'Started providing smart building technologies to modernize infrastructure across Albania.' },
    { year: '2012 — New Product Sectors Introduced', text: 'Added automated security systems, professional LED lighting, and energy efficiency solutions.' },
    { year: '2010 — Expanded operations to offer a full range of civil and industrial electrical materials.' },
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
    <Link href="/index.js">
      <Image
        src="/img/logo-blue.png"
        alt="EuroElektra Logo"
        width={160}
        height={50}
        className="transition-all duration-300"
      />
    </Link>

    {/* Desktop Nav */}
    <nav
      className={`hidden md:flex transition-all duration-300 uppercase text-sm tracking-[0.25em] ${
        atTop
          ? "flex-col absolute top-10 right-10 space-y-2 text-white items-start text-left"
          : "flex-row relative space-x-8 text-blue-400 items-center"
      }`}
    >
      {["Home", "About Us", "Sectors", "Projects", "Events"].map((item, i) => {
        const href = item === "Home"
          ? "/index.js"
          : item === "Sectors"
            ? "/sectors"
            : `/${item.toLowerCase().replace(/ /g, "-")}`;

        const isActive = pathname === href || (item === "Home" && pathname === "/");

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

    {/* Mobile Menu Toggle */}
    <div className="md:hidden flex items-center space-x-4">
      <button>
        <HiOutlineSearch
          size={22}
          className={`transition-colors duration-300 ${
            showHeader ? "text-white" : "text-black"
          }`}
        />
      </button>
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
      {["Home", "About Us", "Sectors", "Projects", "Contact Us", "AL"].map((item, i) => (
        <Link
          key={i}
          href={
            item === "Home"
              ? "/index.js"
              : item === "Sectors"
              ? "/sectors"
              : `/${item.toLowerCase().replace(/ /g, "-")}`
          }
          className="block uppercase tracking-widest text-sm"
          onClick={() => setIsMenuOpen(false)}
        >
          {item}
        </Link>
      ))}
    </div>
  )}

 {/* 
  // Submenu kept disabled
  <div className="absolute top-full mt-2 bg-white shadow-md rounded-md py-2 px-4 space-y-2 z-50 hidden group-hover:block text-black text-xs tracking-wide">
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
  */}
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
      About us
    </h1>
    <div className="w-24 h-1 bg-white mb-4" />
   <p className="flex items-center gap-2">
  <FaHome className="text-[#ffffff]" />
  / <span className="font-semibold text-[#58a3ff]">ABOUT US</span>
</p>
  </div>
</section>



<section className="bg-[#F5F7FA] text-[#1C1C1C] py-16 px-4">
  <div className="max-w-7xl mx-auto space-y-16">
    {/* Mission */}
    <motion.div
      className="flex flex-col sm:flex-row sm:gap-10 items-start"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative sm:w-1/3 w-full mb-6 sm:mb-0">
        <div className="border-l-2 border-[#003B5C] h-full absolute left-3 top-0"></div>
        <h3 className="font-semibold text-lg ml-6 text-[#003B5C]">Our mission</h3>
      </div>
      <div className="sm:w-2/3 w-full text-base font-medium text-[#4F4F4F]">
        The mission of Matrix Konstruksion company is to develop and deliver high quality projects, to promote urban and infrastructural development, which creates social and economic values for our customers, positively transforming their lives.
      </div>
    </motion.div>

    {/* Goal */}
    <motion.div
      className="flex flex-col sm:flex-row sm:gap-10 items-start"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="relative sm:w-1/3 w-full mb-6 sm:mb-0">
        <div className="border-l-2 border-[#003B5C] h-full absolute left-3 top-0"></div>
        <h3 className="font-semibold text-lg ml-6 text-[#003B5C]">Our goal</h3>
      </div>
      <div className="sm:w-2/3 w-full text-base font-medium text-[#4F4F4F] space-y-2">
        <p>To lead the wholesale market in electrical materials.</p>
        <p>To offer a complete range of civil and industrial electrical products.</p>
        <p>To meet customer needs with quality, availability, and competitive pricing.</p>
        <p>To build lasting partnerships through professional service and reliability.</p>
      </div>
    </motion.div>

    {/* Standards */}
    <motion.div
      className="flex flex-col sm:flex-row sm:gap-10 items-start"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="relative sm:w-1/3 w-full mb-6 sm:mb-0">
        <div className="border-l-2 border-[#003B5C] h-full absolute left-3 top-0"></div>
        <h3 className="font-semibold text-lg ml-6 text-[#003B5C]">Our standards</h3>
      </div>
      <div className="sm:w-2/3 w-full text-base font-medium text-[#4F4F4F] space-y-2">
        <p>Since 2010, EuroElektra has specialized in the wholesale distribution of electrical materials.</p>
        <p>We provide complete solutions for both civil and industrial electrical needs.</p>
        <p>Our product range, technical support, and logistics ensure customer satisfaction.</p>
        <p>We aim to set high standards in product quality, availability, and service efficiency.</p>
      </div>
    </motion.div>
  </div>
</section>


     {/* Philosophy Section */}
<section className="bg-[#F1F3FA] text-[#1C1C1C] py-20 px-6">
  <motion.div
    className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-10"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    transition={{ duration: 0.6 }}
  >
    {/* Logo */}
    <div className="w-full sm:w-1/3 flex justify-center sm:justify-start">
      <motion.img
        src="/img/logo-aboutus.png"
        alt="EuroElektra Logo"
        className="w-40 sm:w-52 h-auto transition-transform duration-300"
        whileHover={{ scale: 1.1 }}
      />
    </div>

    {/* Text */}
    <div className="w-full sm:w-2/3 space-y-5">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#003B5C]">
        Business philosophy uniquely identified with professionalism…
      </h2>
      <p className="text-[#4F4F4F] leading-relaxed">
        "Electric motors with high power require too much energy at the start, so they can begin moving.
        Initially, these engines are connected with Star (Y), and once they reach their normal regime, the
        connection transforms into Triangle (Δ). Every metallic element needs to be Protected (⏚),
        so they can be safely grounded."
      </p>
      <p className="text-[#4F4F4F] leading-relaxed">
        Transforming a configuration from “star” into “triangle” means equalizing resistor values.
        This unification of resistance values across all three connection points inspired the creation of the EuroElektra logo.
      </p>
    </div>
  </motion.div>
</section>

<section className="py-20 px-4 sm:px-6 bg-[#F5F7FA]" id="timeline">
  <div className="max-w-4xl mx-auto font-[450]">
    <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#003B5C] font-bold text-center mb-14 sm:mb-16 tracking-wide">
      Our Journey
    </h2>

    <motion.div
      ref={ref}
      className="relative"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
    >
      {/* Center vertical line */}
      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-[2px] bg-[#003B5C] h-full z-0 hidden sm:block" />

      <div className="space-y-12 sm:space-y-16">
        {timelineData.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                isEven ? 'sm:justify-end' : 'sm:justify-start'
              } group`}
            >
              {/* Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#003B5C] rounded-full z-10 hidden sm:block" />

              {/* Timeline Text Block */}
              <div
                className={`w-full sm:w-[calc(50%-1rem)] md:w-[calc(50%-2rem)] ${
                  isEven ? 'text-left sm:pr-4' : 'text-left sm:text-right sm:pl-4'
                }`}
              >
                <h3 className="text-base sm:text-lg text-[#1C1C1C] font-semibold mb-2 tracking-wide">
                  {item.year}
                </h3>
                <p className="text-sm sm:text-[1.0625rem] text-[#4F4F4F] leading-[1.75] sm:leading-[1.9] font-[450] tracking-wide">
                  {item.text}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  </div>
</section>


<section className="bg-[#F1F34FA] py-16">
  <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-start gap-12">
    
    {/* Left Side: Description */}
    <div className="lg:w-1/3 text-[#1C1C1C]">
      <p className="text-[#0077C8] uppercase text-sm mb-4 leading-relaxed">
        Since 2010, "EuroElektra" has become specialized in the wholesale market by offering the full range of electrical materials: civil and industrial. Our product portfolio also covers important sectors such as:
      </p>
      <h2 className="text-3xl font-serif font-bold mb-6 leading-snug text-[#003B5C]">
        Electrical materials<br />
        Automated security<br />
        Professional LED lighting<br />
        Energy efficiency<br />
        Smart Building<br />
        Renewable energy
      </h2>
    </div>

    {/* Right Side: Landscape Image Slider */}
    <div className="lg:w-2/3 w-full overflow-hidden relative">
      <div className="flex w-max animate-scroll-x space-x-6">
        {[
          "/img/rr1.jpg",
          "/img/rr2.jpg",
          "/img/rr3.jpg",
          "/img/rr4.jpg",
        ].map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-96 h-60 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500"
          >
            <img
              src={src}
              alt={`Project ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>

  </div>
</section>


<style jsx>{`
  @keyframes scroll-x {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .animate-scroll-x {
    animation: scroll-x 40s linear infinite;
  }
`}</style>

         {/* FOOTER */}
      <footer className="bg-[#003B5C] text-[#F5F7FA] py-12 px-4 text-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          
          {/* Logo + Copyright */}
          <div>
            <Image
              src="/img/logo.png"
              alt="EuroElektra Logo"
              width={120}
              height={40}
              className="mb-4"
            />
            <p className="text-[#F5F7FA]">
              © {new Date().getFullYear()} EuroElektra. All Rights Reserved.
            </p>
          </div>
      
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <p className="text-[#F5F7FA]">info@euroelektra.com</p>
            <p className="mt-2 text-[#F5F7FA]">
              Street Nikolla Jorga, Godina 18, 1001, Tiranë, Albania
            </p>
          </div>
      
          {/* Explore Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Explore</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Projects', href: '/projects' },
                { name: 'Events', href: '/events' },
              ].map(({ name, href }, i) => (
                <li key={i}>
                  <Link
                    href={href}
                    className="text-[#F5F7FA] hover:text-[#005E9E] transition-colors duration-200"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
      
          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4 text-white">
              <a href="#" className="hover:text-[#0077C8] transition-colors duration-200">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-[#0077C8] transition-colors duration-200">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="hover:text-[#0077C8] transition-colors duration-200">
                <FaLinkedinIn size={20} />
              </a>
              <a href="#" className="hover:text-[#0077C8] transition-colors duration-200">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
      
    </>
  );
}
