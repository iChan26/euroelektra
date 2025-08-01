"use client";
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { HiOutlineMenu, HiOutlineX, HiOutlineSearch } from 'react-icons/hi';
import { usePathname } from 'next/navigation';
import { motion, useInView } from 'framer-motion';
import {
  FaNetworkWired,
  FaHome,
  FaBriefcase,
  FaGlobe,
  FaCube,
  FaSolarPanel,
} from 'react-icons/fa';

export default function Home({ language, translations, changeLanguage }) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [currentWord, setCurrentWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const pathname = usePathname();
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [atTop, setAtTop] = useState(true);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
const [showSearch, setShowSearch] = useState(false);
const [searchTerm, setSearchTerm] = useState("");

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };




  const words = translations.hero?.animatedWords || [];
  const timeline1Data = translations.timeline1?.events || [];


  useEffect(() => {
    if (!words.length) return;

    const current = words[wordIndex];
    let timeout;

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setCurrentWord(current.slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 100);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setCurrentWord(current.slice(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, 40);
    }

    if (!deleting && charIndex === current.length + 1) {
      timeout = setTimeout(() => {
        setDeleting(true);
        setCharIndex((prev) => prev - 1);
      }, 800);
    }

    if (deleting && charIndex < 0) {
      setDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowHeader(currentY < lastScrollY || currentY <= 50);
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastY;

      setAtTop(currentY <= 50);
      setIsScrollingDown(scrollingDown);
      setShowHeader(!scrollingDown);

      lastY = currentY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
// Optional: Don't render page until translations are ready
  if (!translations.hero) return null;
  return (
    <>
   <Head>
  <title>About Us - EuroElektra</title>
  <meta
    name="description"
    content="EuroElektra specializes in wholesale electrical materials, renewable energy, and smart building solutions in Albania. Trusted since 2010."
  />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&display=swap"
    rel="stylesheet"
  />
  <link rel="icon" type="image/png" href="/svg/profile.png" />
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
    <h1 className="text-5xl sm:text-6xl font-bold uppercase leading-tight mb-4">
      {translations.aboutHero?.heading || "About us"}
    </h1>
    <div className="w-24 h-1 bg-white mb-4" />
    <p className="flex items-center gap-2">
      <FaHome className="text-[#ffffff]" />
      / <span className="font-semibold text-[#58a3ff]">{translations.aboutHero?.breadcrumb || "ABOUT US"}</span>
    </p>
  </div>
</section>


<section className="py-16 px-4 text-center bg-white">
  <h2 className="text-3xl md:text-4xl font-bold uppercase text-[#003B5C] mb-4">
    {translations.abouts.title}
  </h2>

  <div className="w-20 h-1 bg-[#2987bf] mx-auto mb-6" />

  <p className="max-w-4xl mx-auto text-gray-700 text-base md:text-lg leading-relaxed space-y-4">
    {translations.abouts.content}
  </p>
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
        <h3 className="font-semibold text-lg ml-6 text-[#003B5C]">
          {translations.about?.missionTitle}
        </h3>
      </div>
      <div className="sm:w-2/3 w-full text-base font-medium text-[#4F4F4F]">
        {translations.about?.missionDesc}
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
        <h3 className="font-semibold text-lg ml-6 text-[#003B5C]">
          {translations.about?.goalTitle}
        </h3>
      </div>
      <div className="sm:w-2/3 w-full text-base font-medium text-[#4F4F4F] space-y-2">
        {translations.about?.goalPoints?.map((point, idx) => (
          <p key={idx}>{point}</p>
        ))}
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
        <h3 className="font-semibold text-lg ml-6 text-[#003B5C]">
          {translations.about?.standardsTitle}
        </h3>
      </div>
      <div className="sm:w-2/3 w-full text-base font-medium text-[#4F4F4F] space-y-2">
        {translations.about?.standardsPoints?.map((point, idx) => (
          <p key={idx}>{point}</p>
        ))}
      </div>
    </motion.div>

  </div>
</section>

<section className="py-16 px-4 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12">{translations.companyValues.title}</h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {translations.companyValues.values.map((item, index) => (
        <div key={index} className="bg-white shadow-lg p-6 rounded-xl hover:shadow-xl transition-all">
          <h3 className="text-lg font-semibold text-[#2987bf] mb-2">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>

    <h2 className="text-3xl font-bold text-center mt-20 mb-12">{translations.strategicObjectives.title}</h2>

    <div className="grid md:grid-cols-2 gap-6">
      {translations.strategicObjectives.points.map((point, index) => (
        <div key={index} className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition-all">
          <p className="text-sm text-gray-700">{point}</p>
        </div>
      ))}
    </div>
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
        {translations.philosophy?.heading}
      </h2>
      <p className="text-[#4F4F4F] leading-relaxed">
        {translations.philosophy?.paragraph1}
      </p>
      <p className="text-[#4F4F4F] leading-relaxed">
        {translations.philosophy?.paragraph2}
      </p>
    </div>
  </motion.div>
</section>


<section className="py-20 px-4 sm:px-6 bg-[#F5F7FA]" id="timeline1">
  <div className="max-w-4xl mx-auto font-[450]">
    <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#003B5C] font-bold text-center mb-14 sm:mb-16 tracking-wide">
      {translations.timeline1?.title}
    </h2>

    <div className="relative">
      {/* Center vertical line */}
      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-[2px] bg-[#003B5C] h-full z-0 hidden sm:block" />

      <div className="space-y-12 sm:space-y-16">
        {(translations.timeline1?.events || []).map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
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
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>





<section className="bg-[#F1F34FA] py-16">
  <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-start gap-12">
    
    {/* Left Side: Description */}
    <div className="lg:w-1/3 text-[#1C1C1C]">
      <p className="text-[#0077C8] uppercase text-sm mb-4 leading-relaxed">
        {translations.sectionIntro?.intro}
      </p>
      <h2 className="text-3xl font-bold mb-6 leading-snug text-[#003B5C] whitespace-pre-line">
        {translations.sectionIntro?.points?.join('\n')}
      </h2>
    </div>

    {/* Right Side: Landscape Image Slider */}
<div className="lg:w-2/3 w-full overflow-hidden relative group">
  <div className="flex w-max animate-scroll-x group-hover:[animation-play-state:paused] space-x-6">
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

    
    </>
  );
}
