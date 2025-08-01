"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { HiOutlineMenu, HiOutlineX, HiOutlineSearch, HiChevronDown } from 'react-icons/hi';
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion";
import {
  FaNetworkWired,
  FaBriefcase,
  FaGlobe,
  FaCube,
  FaSolarPanel,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import ReloadLink from '../components/ReloadLink';

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

  const [isPaused, setIsPaused] = useState(false);
  const words = translations.hero?.animatedWords || [];
const [showSearch, setShowSearch] = useState(false);
const [searchTerm, setSearchTerm] = useState("");

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
      const currentScrollY = window.scrollY;
      setShowHeader(currentScrollY < lastScrollY || currentScrollY <= 50);
      setLastScrollY(currentScrollY);
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

  const items = [
  {
    icon: <FaNetworkWired />,
    ...translations.timeline?.[0]
  },
  {
    icon: <FaBriefcase />,
    ...translations.timeline?.[1]
  },
  {
    icon: <FaGlobe />,
    ...translations.timeline?.[2]
  },
  {
    icon: <FaCube />,
    ...translations.timeline?.[3]
  },
  {
    icon: <FaSolarPanel />,
    ...translations.timeline?.[4]
  }
];


  // Optional: Don't render page until translations are ready
  if (!translations.hero) return null;

  return (
    <>
   <Head>
  <title>EuroElektra</title>
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
<section className="relative min-h-screen pt-[150px] flex items-center px-4 sm:px-6 md:px-10 lg:px-16 text-white bg-black overflow-hidden">

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
  <div className="relative z-20 w-full max-w-7xl mx-auto">
    <div className="px-4 sm:px-6 md:px-0">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-tight mb-4">
        {translations.hero?.title}
        <br />
        <span
          key={currentWord}
          className="tracking-wide inline-block text-[#2987bf] transition-all duration-500 ease-in-out opacity-100 animate-fade"
        >
          {currentWord}
          <span className="tracking-wide animate-blink text-white ml-1">|</span>
        </span>
      </h1>

      <div className="w-20 sm:w-24 h-1 bg-white mb-4" />

      <p className="tracking-wide text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl">
        {translations.hero?.intro}
      </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2 mt-6 text-gray-200 text-base sm:text-lg max-w-4xl">
              {translations.hero?.sectors?.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center whitespace-nowrap min-w-0 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <ReloadLink href="/sectors" className="flex items-center group transition-colors">
                    <span className="text-[#2987bf] text-lg font-bold mr-2">➤</span>
                    <span className="truncate group-hover:text-[#2987bf] transition-colors">
                      {item}
                    </span>
                  </ReloadLink>
                </li>
              ))}
            </ul>

    </div>
  </div>
</section>




{translations.features?.length > 0 && (
  <section className="bg-[#F5F7FA] text-[#1C1C1C] py-20">
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-16">
  {translations.features.map((item, idx) => (
    <div key={idx}>
      <ReloadLink  href="/sectors" className="block group">
        <div
          className="text-[10rem] font-bold text-[#003B5C]/10 leading-none 
                     group-hover:text-[#2987bf] transition duration-300"
        >
          {item.number}
        </div>
        <h3
          className="text-xl font-semibold mt-[-2rem] text-[#1C1C1C] 
                     group-hover:text-[#2987bf] transition duration-300"
        >
          {item.title}
        </h3>
      </ReloadLink >
      <p className="mt-4 text-[#4F4F4F]">{item.desc}</p>
    </div>
  ))}
</div>

  </section>
)}

<section className="py-20 px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold mb-6 text-[#1C1C1C]">{translations.projectsTitle}</h2>
     <p className="text-sm mb-4 text-[#4F4F4F]">{translations.projectsDescription}</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.isArray(translations.projects1) &&
  translations.projects1.map((item, index) => (
    <div
      key={index}
      className="relative group h-[400px] overflow-hidden cursor-pointer bg-[#F5F7FA]"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 scale-100 group-hover:scale-110"
        style={{ backgroundImage: `url(${item.image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />

      {/* Title */}
      <div className="absolute bottom-4 left-4 right-4 text-white z-10">
        <h3 className="font-semibold text-lg leading-tight">{item.title}</h3>
      </div>

      {/* Slide-Up Panel */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#F5F7FA] p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
        <h3 className="font-semibold text-[#0077C8] mb-2 text-m leading-tight">{item.headline}</h3>
        <p className="text-sm mb-4 text-[#4F4F4F]">{item.description}</p>
      </div>
    </div>
))}
  

    </div>
    <ReloadLink  href="/events" passHref>
              <div className="flex justify-center">
                <button
                  className="mt-10 inline-flex items-center px-6 py-2 bg-[#0077C8] hover:bg-[#005e9e] text-white text-sm font-medium rounded-full shadow-md transition-all duration-300"
                >
                  {translations.projectsSlider.sectionButton}
                </button>
              </div>
              </ReloadLink >
  </div>
</section>


{translations.projectsSlider?.slides?.length > 0 && (
  <section className="bg-[#F5F7FA] py-16">
    <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-start gap-12">
      {/* Left side: Text */}
      <div className="lg:w-1/3 text-[#1C1C1C]">
        <p className="text-[#0077C8] uppercase text-sm mb-2">
          {translations.projectsSlider.sectionLabel}
        </p>
        <h2 className="text-4xl tracking-wide font-bold mb-4">
          {translations.projectsSlider.sectionTitle}
        </h2>
        <p className="text-[#4F4F4F]">
          {translations.projectsSlider.sectionDescription}
        </p>
              <ReloadLink  href="/projects" passHref>
                <button
                  className="mt-5 inline-flex items-center px-6 py-2 bg-[#0077C8] hover:bg-[#005e9e] text-white text-sm font-medium rounded-full shadow-md transition-all duration-300"
                >
                  {translations.projectsSlider.sectionButton}
                </button>
              </ReloadLink >

      </div>


    {/* Right side: Auto-scrolling Projects Slider */}
<div className="lg:w-2/3 w-full overflow-hidden relative group">
  <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused] space-x-6">
    {translations.projectsSlider.slides
      .concat(translations.projectsSlider.slides) // looped effect
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
              <img
                src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                alt="Location Icon"
                className="w-4 h-4 mr-2"
              />
              {project.location}
            </p>
          </div>
        </div>
      ))}
  </div>
</div>

    </div>
  </section>
)}



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
                whileHover={{ scale: 1.1, rotate: -3 }}
                transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
                className="text-[#003B5C] hover:text-[#2987bf] text-4xl mb-4 transition duration-300"
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
                    whileHover={{ scale: 1.1, rotate: -3 }}
                    transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
                    className="text-[#003B5C] hover:text-[#2987bf] text-4xl mb-4 transition duration-300"
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
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
                    className="text-[#003B5C] hover:text-[#2987bf] text-4xl transition duration-300"
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




    
{translations.blog?.length > 0 && (
  <section className="bg-[#F5F7FA] py-16 px-6 md:px-16">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-[#1C1C1C] mb-12">
        <span className="border-l-4 border-[#003B5C] pl-3">
          {translations.blogTitle}
        </span>
      </h2>

      <div className="grid gap-12 md:grid-cols-3">
        {translations.blog.map((post, index) => {
          const links = ["/blog/blog5", "/blog/blog4", "/blog/blog3"];
          const link = links[index] || "#";

          return (
            <ReloadLink
              key={index}
              href={link}
              className="block bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-md overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#1C1C1C] mb-2 leading-snug cursor-pointer hover:text-sky-500 transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-sm text-[#4F4F4F]">
                  In :{" "}
                  <span className="text-[#003B5C] font-medium">
                    {post.category}
                  </span>
                </p>
              </div>
            </ReloadLink>
          );
        })}
      </div>
    </div>
  </section>
)}

  <section className="bg-[#fff] py-10 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4">
    <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      spaceBetween={24}
      slidesPerView={2}
      breakpoints={{
        640: { slidesPerView: 3 },
        768: { slidesPerView: 5 },
        1024: { slidesPerView: 6 },
      }}
      className="w-full"
    >
      {[
        'brand01.jpg', 'brand02.png', 'brand03.png', 'brand04.png',
        'brand05.png', 'brand06.png', 'brand07.png', 'brand08.png',
        'brand09.png', 'brand10.png', 'brand11.png', 'brand12.png',
        'brand13.png', 'brand14.png', 'brand15.png', 'brand16.png',
        'brand17.png', 'brand18.png', 'brand20.png', 'brand21.png',
        'brand22.png', 'brand23.png', 'Cabur copy.png', 'byd.jpg',
        'tcl.jpg',
      ].map((img, idx) => (
        <SwiperSlide key={idx} className="flex justify-center items-center">
          <img
            src={`/img/brands/${img}`}
            alt={`brand-${idx}`}
            className="h-20 w-auto grayscale hover:grayscale-0 transition duration-300"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>



 

    </>
  );
}

