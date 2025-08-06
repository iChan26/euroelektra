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

export default function Home({ language, translations, changeLanguage }) {
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
    <h1 className="text-5xl sm:text-6xl font-bold uppercase leading-tight mb-4 animate-fade">
       {translations.securityautomation?.title || "Loading..."}
    </h1>

    <div className="w-24 h-1 bg-white mb-4" />

   <p className="flex items-center gap-2 text-base sm:text-lg text-gray-200 animate-fade-in">
  <FaHome className="text-[#ffffff]" />
  / <span className="font-semibold text-[#58a3ff]">{translations.securityautomation?.breadcrumb}</span>
</p>
  </div>
</section>
<section className="py-10 px-6 bg-white">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[250px_1fr] gap-10">
    {/* Sidebar */}
    <aside>
      <h2 className="text-lg font-semibold text-[#1C1C1C] mb-4">
        {translations.securityautomation?.category_automation || "Automation for doors"}
      </h2>
      <ul className="space-y-4">
        {(translations.electrical?.categories || []).map((item, idx) => (
          <li
            key={idx}
            className="flex justify-between items-center text-sm text-[#1C1C1C]"
          >
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
                key: "Swing doors",
                label: translations.automationfordoors?.Swingdoors || "Swing doors",
                image: "/img/swingdoors.jpg",
             
            },
            {
                key: "Sliding doors",
                label: translations.automationfordoors?.Slidingdoors || "Sliding doors",
                image: "/img/slidingdoors.jpg",
             
            },
            {
                key: "Garage door automation",
                label: translations.automationfordoors?.Garagedoorautomation || "Garage door automation",
                image: "/img/Garage.png"
            },
            {
                key: "Automated door systems",
                label: translations.automationfordoors?.Automateddoorsystems || "Automated door systems",
                image: "/img/automateddoorsystem.jpg"
            },
            {
                key: "Traffic barriers",
               label: translations.automationfordoors?.Trafficbarriers || "Traffic barriers",
                image: "/img/Trafficbarriers.jpg"
            },
            {
                key: "Traffic bollard",
               label: translations.automationfordoors?.Trafficbollard || "Traffic bollard",
                image: "/img/Trafficbollard.jpg"
            },

          ].map((sector, idx) => {
            const cardContent = (
              <div
                className="border border-gray-300 p-4 flex flex-col items-center justify-center text-center bg-white rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                <img
                  src={sector.image}
                  alt={sector.key}
                  className="w-24 h-24 object-cover mb-4 rounded"
                />
                <p className="text-sm font-medium text-[#4F4F4F]">
                  {sector.label}
                </p>
              </div>
            );

            return sector.href ? (
              <Link key={idx} href={sector.href}>{cardContent}</Link>
            ) : (
              <div key={idx}>{cardContent}</div>
            );
          })}
        </div>

  </div>
</section>



 

    
          </>
  );
}
