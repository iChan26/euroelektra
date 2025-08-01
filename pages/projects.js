"use client";
import { useState, useEffect, useRef,useMemo } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { HiOutlineMenu, HiOutlineX, HiOutlineSearch } from 'react-icons/hi';
import { usePathname } from 'next/navigation'; // if not already in your file
import { FaHome } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // ✅ include Autoplay
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



import {
  FaNetworkWired,
  FaBriefcase,
  FaGlobe,
  FaCube,
  FaSolarPanel,
} from "react-icons/fa";
import { type } from 'os';

export default function Home({ language, translations, changeLanguage }) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
   
const [showSearch, setShowSearch] = useState(false);
const [searchTerm, setSearchTerm] = useState("");
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
const swiperRefs = useRef([]);
const categories = [
  {
    name: translations.projects?.all || "All",
    key: "All",
    count: 30,
  },
  {
    name: translations.projects?.categories?.photovoltaic || "Photovoltaic Plant",
    key: "Photovoltaic Plant",
    count: 22,
  },
  {
    name: translations.projects?.categories?.ev_chargers || "Electric Vehicle Chargers",
    key: "Electric Vehicle Chargers",
    count: 1,
  },
  {
    name: translations.projects?.categories?.automation || "Automation",
    key: "Automation",
    count: 2,
  },
  
  {
    name: translations.projects?.categories?.project || "Project",
    key: "Project",
    count: 2,
  },
  {
    name: translations.projects?.categories?.others || "Smart Building",
    key: "Smart Building",
    count: 2,
  },
];

const projects = [
  {
    key: "ehw", // this must match the translation key used in your locales
    media: [
      { type: 'video', src: '/vid/Fotovoltaik.mp4', poster: '/img/EHW-POSTIM (1).jpg' },
      { type: 'image', src: '/img/EHW-POSTIM (2).jpg' },
      { type: 'image', src: '/img/EHW-POSTIM (1).jpg' }
    ],
    
    categories: ['Photovoltaic Plant']
  },
 {
 key: "HAKO", // this must match the translation key used in your locales
    media: [
        { type: 'video', src: '/vid/Impiant Fotovoltaik 266.8 kWp - Hako.mp4', poster: '/img/hakonew.jpg'},
        { type: 'image', src: '/img/1hako (1).jpg' },
        { type: 'image', src: '/img/hakonew.jpg' },
        { type: 'image', src: '/img/HAKO2.jpg' },
        { type: 'image', src: '/img/HAKO33.jpg'}
     
      ],
      categories: ['Photovoltaic Plant']
    },
    {
 key: "Algrafika", // this must match the translation key used in your locales
     media: [
      { type: 'image', src: '/img/algrafika1.jpg'},
      { type: 'image', src: '/img/algrafika2.jpg'},
     ],
      categories: ['Photovoltaic Plant']
    },
     {
 key: "InfoSoft Office", // this must match the translation key used in your locales
    media: [
      { type: 'image', src: '/img/infoSoft Office1.jpg'},
      { type: 'image', src: '/img/infoSoft Office2.jpg'},
     ],
      categories: ['Photovoltaic Plant']
    },
    {
 key: "Villa Alba Medical Center", // this must match the translation key used in your locales
    media: [
        { type: 'video', src: '/vid/Impiant Fotovoltaik 20.04kWp - Villa Alba Medical Center.mp4', poster: '/img/VILLA.jpg' },
        { type: 'image', src: '/img/VILLA.jpg' },
      ],
      categories: ['Photovoltaic Plant']
    },
     {
 key: "Coca-Cola Bottling Albania", // this must match the translation key used in your locales
    media: [
      { type: 'image', src: '/img/COCOLA1.jpg'},
      { type: 'image', src: '/img/COCOLA2.jpg'},
      { type: 'image', src: '/img/COCOLA3.jpg'},
      { type: 'image', src: '/img/COCOLA4.jpg'},
     ],
      categories: ['Electric Vehicle Chargers']
    },
    {
 key: "Statkraft", // this must match the translation key used in your locales
    media: [
      { type: 'image', src: '/img/DEVOL1.jpg'},
      { type: 'image', src: '/img/DEVOL2.jpg'},
      
     ],
      categories: ['Photovoltaic Plant']
    },
    {
 key: "2AT Chemicals", // this must match the translation key used in your locales
     media: [
        { type: 'video', src: '/vid/Impiant Fotovoltaik 600 kWp i realizuar nga EuroElektra sh.p.k.mp4', poster: '/img/chemicals.jpg' },
        { type: 'image', src: '/img/chemicals1.jpg' },
        { type: 'image', src: '/img/chemicals2.jpg' },
        { type: 'image', src: '/img/chemicals3.jpg' },
        { type: 'image', src: '/img/chemicals4.jpg' },
      ],
      categories: ['Photovoltaic Plant']
    },
     {
 key: "Coca-Cola Bottling Albania1", // this must match the translation key used in your locales
    media: [
        { type: 'video', src: '/vid/Impiant Fotovoltaik 126kWp - Coca Cola Bottling Shqiperia.mp4', poster: '/img/COCALA-ALBANIA.jpg' },
        { type: 'image', src: '/img/COCALA-ALBANIA1.jpg' },
        { type: 'image', src: '/img/COCALA-ALBANIA2.jpg' },
        { type: 'image', src: '/img/COCALA-ALBANIA3.jpg' },
        { type: 'image', src: '/img/COCALA-ALBANIA4.jpg' },
      ],
      categories: ['Photovoltaic Plant']
    },
    {
 key: "Photovoltaic Plants in Permet City", // this must match the translation key used in your locales
    media: [
        { type: 'image', src: '/img/PERMET1.jpg' },
        { type: 'image', src: '/img/PERMET2.jpg' },
        { type: 'image', src: '/img/PERMET3.jpg' },
        { type: 'image', src: '/img/PERMET4.jpg' },
        { type: 'image', src: '/img/PERMET5.jpg' },
        { type: 'image', src: '/img/PERMET6.jpg' },
        { type: 'image', src: '/img/PERMET7.jpg' },
        { type: 'image', src: '/img/PERMET8.jpg' },
        { type: 'image', src: '/img/PERMET9.jpg' },
        { type: 'image', src: '/img/PERMET10.jpg' },
      ],
      categories: ['Photovoltaic Plant']
    },
     {
 key: "SARP & LAB", // this must match the translation key used in your locales
    media: [
        { type: 'video', src: '/vid/Impiant Fotovoltaik - Godina Sarp .mp4', poster: '/img/SARP2.jpg' },
        { type: 'image', src: '/img/SARP1.jpg' },
        { type: 'image', src: '/img/SARP2.jpg' },
        
      ],
      categories: ['Photovoltaic Plant']
    },
     {
 key: "Banese Private", // this must match the translation key used in your locales
     media: [
        { type: 'image', src: '/img/BANESE1.jpg' },
        { type: 'image', src: '/img/BANESE2.jpg' },
        
      ],
      categories: ['Photovoltaic Plant']
    },
     {
 key: "Godina EuroElektra", // this must match the translation key used in your locales
    media: [
        { type: 'image', src: '/img/GODINA1.jpg' },
        { type: 'image', src: '/img/GODINA2.jpg' },
        { type: 'image', src: '/img/GODINA3.jpg' },
        
      ],
      categories: ['Photovoltaic Plant']
    },
    {
 key: "ProCredit", // this must match the translation key used in your locales
    media: [
        { type: 'video', src: '/vid/EuroElektra sjell teknologjine e fundit amerikane te fotovoltaikeve ne Shqiperi.mp4', poster: '/img/PROCREDIT4.jpg' },
        { type: 'image', src: '/img/PROCREDIT1.png' },
        { type: 'image', src: '/img/PROCREDIT2.jpg' },
        { type: 'image', src: '/img/PROCREDIT3.jpg' },
        { type: 'image', src: '/img/PROCREDIT4.jpg' },
      ],
      categories: ['Photovoltaic Plant']
    },
     {
 key: "Rapsodia", // this must match the translation key used in your locales
   media: [
        { type: 'video', src: '/vid/Impiant Fotovoltaik në Baxho.mp4', poster: '/img/RAPSODIA3.jpeg' },
        { type: 'image', src: '/img/RAPSODIA1.jpg' },
        { type: 'image', src: '/img/RAPSODIA2.jpg' },
        { type: 'image', src: '/img/RAPSODIA3.jpeg' },
        { type: 'image', src: '/img/RAPSODIA4.jpeg' },
      ],
      categories: ['Photovoltaic Plant']
    },
     {
 key: "Qendra Vizitoreve Divjake-Karavasta", // this must match the translation key used in your locales
   media: [
        { type: 'video', src: '/vid/Impiant Fotovoltaik - Parku Kombëtar Divjakë,Karavasta.mp4', poster: '/img/QENDRA2.jpg' },
        { type: 'image', src: '/img/QENDRA1.jpg' },
        { type: 'image', src: '/img/QENDRA2.jpg' },
        { type: 'image', src: '/img/QENDRA3.jpg' },
      ],
      categories: ['Photovoltaic Plant']
    },
    {
 key: "Qendra Vizitoreve Llogara", // this must match the translation key used in your locales
    media: [
        { type: 'video', src: '/vid/Impiant Fotovoltaik - Parku Kombëtar i Llogarasë.mp4', poster: '/img/LLOGARA2.jpg' },
        { type: 'image', src: '/img/Llogara2 (1).jpg' },
        { type: 'image', src: '/img/LLOGARA2.jpg' },
      
      ],
      categories: ['Photovoltaic Plant']
    },
 
     {
 key: "Qendra Vizitoreve Theth", // this must match the translation key used in your locales
   media: [
        { type: 'image', src: '/img/THETH1.jpg' },
        { type: 'image', src: '/img/THETH2.jpg' },
      
      ],
      categories: ['Photovoltaic Plant']
    },
    {
 key: "Observatori", // this must match the translation key used in your locales
  media: [
        { type: 'image', src: '/img/OBSERVATORI1.jpg' },
        { type: 'image', src: '/img/OBSERVATORI2.jpg' },
        { type: 'image', src: '/img/OBSERVATORI3.jpg' },
      
      ],
      categories: ['Photovoltaic Plant']
    },
    {
 key: "Automation for Sliding Doors", // this must match the translation key used in your locales
   media: [
        { type: 'image', src: '/img/AUTOMATION1.jpg' },
        { type: 'image', src: '/img/AUTOMATION2.jpg' },
        { type: 'image', src: '/img/AUTOMATION3.jpg' },
      
      ],
      categories: ['Automation']
    },
    {
 key: "Mounting of lighting systems", // this must match the translation key used in your locales
  media: [
        { type: 'image', src: '/img/MOUNTING1.jpg' },
      ],
      categories: ['Others']
    },
     {
 key: "Tamaco sh.p.k", // this must match the translation key used in your locales
  media: [
        { type: 'image', src: '/img/TAMACO1.jpg' },
        { type: 'image', src: '/img/TAMACO2.jpg' },
      ],
      categories: ['Photovoltaic Plant']
    },
    {
 key: "Almoso sh.p.k", // this must match the translation key used in your locales
  media: [
        { type: 'image', src: '/img/Almoso1.jpg' },
        { type: 'image', src: '/img/Almoso2.jpg' },
        { type: 'image', src: '/img/Almoso3.jpg' },
        { type: 'image', src: '/img/Almoso4.jpg' },
        { type: 'image', src: '/img/Almoso5.jpg' },
        { type: 'image', src: '/img/Almoso6.jpg' },
      ],
      categories: ['Photovotlaic Plant:']
    },
    {
 key: "Villa Pascucci", // this must match the translation key used in your locales
media: [
        { type: 'image', src: '/img/HOTEL1.jpg' },
        { type: 'image', src: '/img/HOTEL2.jpg' },
        { type: 'image', src: '/img/HOTEL3.jpg' },
        { type: 'image', src: '/img/HOTEL4.jpg' },
        { type: 'image', src: '/img/HOTEL5.jpg' },
        { type: 'image', src: '/img/HOTEL6.jpg' },
        { type: 'image', src: '/img/HOTEL7.jpg' },
      ],
      categories: ['Automation']
    },
    {
 key: "Villa Pascucci1", // this must match the translation key used in your locales
 media: [
        { type: 'video', src: '/vid/Parkingu I Parë Fotovoltaik Në Shqipëri !!.mp4',  poster: '/img/PLANT-HOTEL3.jpeg'},
        { type: 'image', src: '/img/PLANT-HOTEL1.jpeg' },
        { type: 'image', src: '/img/PLANT-HOTEL2.jpeg' },
        { type: 'image', src: '/img/PLANT-HOTEL3.jpeg' },
       
      ],
      categories: ['Photovotlaic Plant']
    },
     {
 key: "Kisha Troshan", // this must match the translation key used in your locales
  media: [
        { type: 'image', src: '/img/TROSHAN1.jpg' },
        { type: 'image', src: '/img/TROSHAN2.jpg' },
       
      ],
      categories: ['Smart Building']
    },
{
 key: "ICE Tirana", // this must match the translation key used in your locales
  media: [
        { type: 'image', src: '/img/ICE.jpg' },
       
      ],
      categories: ['Photovoltaic Plant']
    },
    {
 key: "CCTV Camera System with 360 ° view", // this must match the translation key used in your locales
 media: [
        { type: 'image', src: '/img/VIEW1.jpg' },
        { type: 'image', src: '/img/VIEW2.jpg' },
        { type: 'image', src: '/img/VIEW3.jpg' },
      ],
      categories: ['Smart Building']
    },
     {
 key: "F&M REKLAMA", // this must match the translation key used in your locales
 media: [
        { type: 'image', src: '/img/F&M.jpg' },
        { type: 'image', src: '/img/F&M1.jpg' },
        { type: 'image', src: '/img/F&M2.jpg' },
      ],
      categories: ['Project']
    },
    {
 key: "Project: QTU", // this must match the translation key used in your locales
 media: [
        { type: 'image', src: '/img/QTU1.jpg' },
        { type: 'image', src: '/img/QTU2.jpg' },
        { type: 'image', src: '/img/QTU3.jpg' },
      ],
      categories: ['Project']
    },
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
  <title>Projects - EuroElektra</title>
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
      {translations.heroProjects?.title || "PROJECTS"}
    </h1>
    <div className="w-24 h-1 bg-white mb-4" />
    <p className="flex items-center gap-2">
      <FaHome className="text-white" />
      / <span className="font-semibold text-[#58a3ff]">{translations.heroProjects?.breadcrumb || "PROJECTS"}</span>
    </p>
  </div>
</section>



  <section className="bg-[#F5F7FA] text-[#1C1C1C] px-6 py-16">
  <div className="max-w-7xl mx-auto">
    
    {/* Category Filters */}
<div className="flex flex-wrap justify-center gap-6 mb-12 text-[#4F4F4F] text-sm">
  {categories.map((cat) => {
    const isActive = activeCategory === cat.key;

    return (
      <span
        key={cat.key}
        onClick={() => setActiveCategory(cat.key)}
        className={`cursor-pointer relative transition-all duration-300 pb-1 
          ${isActive ? "text-[#003B5C] font-semibold" : "hover:text-[#005E9E]"}
          ${isActive ? "font-semibold" : "hover:font-semibold"}
        `}
      >
        <span
          className={`before:absolute before:bottom-0 before:left-0 before:h-[2px] before:bg-current before:transition-all before:duration-300
            ${isActive ? "before:w-full" : "before:w-0 hover:before:w-full"}
            before:content-['']`}
        >
          {cat.name} <sup>{cat.count}</sup>
        </span>
      </span>
    );
  })}
</div>


    {/* Projects Grid */}
<div className="grid md:grid-cols-2 gap-10">
  {filteredProjects.map((project, index) => {
    const projectData = translations.projects?.[project.key];

    if (!projectData) {
      console.warn(`Missing translation for: ${project.key}`);
      return (
        <div key={index} className="p-4 text-red-500">
          Missing data for <strong>{project.key}</strong>
        </div>
      );
    }

    return (
      <div
        key={index}
        className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-[1.015] hover:shadow-xl group"
      >
        {/* Swiper */}
        <div
          className="w-full aspect-[16/10]"
          onMouseEnter={() => swiperRefs.current[index]?.autoplay?.stop()}
          onMouseLeave={() => swiperRefs.current[index]?.autoplay?.start()}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            loop={true}
            onSwiper={(swiper) => (swiperRefs.current[index] = swiper)}
            className="w-full h-full"
          >
            {project.media.map((item, i) => (
              <SwiperSlide key={i}>
                {item.type === "video" ? (
                  <video controls poster={item.poster} className="w-full h-full object-cover">
                    <source src={item.src} type="video/mp4" />
                  </video>
                ) : (
                  <img src={item.src} alt={`Slide ${i + 1}`} className="w-full h-full object-cover" />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Info */}
        <div className="p-4 transition-colors duration-300 group-hover:bg-gray-50">
          <h3 className="text-xl font-bold text-[#1C1C1C] group-hover:text-[#2987bf]">
            {projectData.title}
          </h3>
          <p className="text-sm text-[#4F4F4F] space-y-1 mt-2">
            {projectData.installed_power && (
              <span className="flex items-center gap-2">
                <img src="/svg/lighting.png" alt="Installed Power" className="w-4 h-4" />
                {projectData.installed_power}
              </span>
            )}

            {projectData.location && (
              <span className="flex items-center gap-2">
                <img src="/svg/map.png" alt="Location" className="w-4 h-4" />
                {projectData.location}
              </span>
            )}
          </p>

        </div>
      </div>
    );
  })}
</div>
    
  </div>
</section>





    
    </>
  );
}
