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
const swiperRefs = useRef([]); // for the swipper
const categories = useMemo(() => {
  return [
    {
      name: translations.projects?.all || "All",
      key: "All",
      count: 30,
    },
    {
      name: translations.projects?.categories?.photovoltaic || "Photovoltaic Plant",
      key: "Photovoltaic Plant",
      count: 18,
    },
    {
      name: translations.projects?.categories?.ev_chargers || "Electric Vehicle Chargers",
      key: "Electric Vehicle Chargers",
      count: 1,
    },
    {
      name: translations.projects?.categories?.automation || "Automation",
      key: "Automation",
      count: 1,
    },
    {
      name: translations.projects?.categories?.el_photovoltaic || "ElPhotovotlaic Plant",
      key: "ElPhotovotlaic Plant",
      count: 1,
    },
    {
      name: translations.projects?.categories?.project || "Project",
      key: "Project",
      count: 2,
    },
    {
      name: translations.projects?.categories?.others || "Others",
      key: "Others",
      count: 7,
    },
  ];
}, [translations]);

const events = [
  {
    key: "project_1",
    media: [
      { src: "/img/Inauguration1.jpg" },
      { src: "/img/Inauguration2.jpg" },
      { src: "/img/Inauguration3.jpg" },
      { src: "/img/Inauguration4.jpg" }, // you can replace with different images if available
    ],
    categories: ["Photovoltaic Plant"],
  },
  {
    key: "project_2",
    media: [
      { type: 'video', src: '/vid/EuroElektra_ne_Energy_Expo .mp4', poster: '/img/energy_expo3.jpg' },
      { src: "/img/energy_expo1.jpg" },
      { src: "/img/energy_expo2.jpg" },
      { src: "/img/energy_expo3.jpg" },
      { src: "/img/energy_expo4.jpg" },
      { src: "/img/energy_expo5.jpg" },
      { src: "/img/energy_expo6.jpg" },
    ],
    categories: ["Photovoltaic Plant"],
  },
  {
    key: "project_3",
    media: [
      { src: "/img/austrian1.jpg" },
      { src: "/img/austrian2.jpg" },
      { src: "/img/austrian3.jpg" },
    ],
    categories: ["Photovoltaic Plant"],
  },
  {
    key: "project_4",
    media: [
      { src: "/img/forum2018_1.jpg" },
      { type: 'video', src: '/vid/EuroElektra_ne Energy_Expo.mp4', poster: '/img/forum2018_4.jpg' },
      { src: "/img/forum2018_2.jpg" },
      { src: "/img/forum2018_3.jpg" },
      { src: "/img/forum2018_4.jpg" },
      { src: "/img/forum2018_5.jpg" },
      { src: "/img/forum2018_6.jpg" },
      { src: "/img/forum2018_7.jpg" },
    ],
    categories: ["Photovoltaic Plant"],
  },
  {
    key: "project_5",
    media: [
      { src: "/img/touch1.jpg" },
      { src: "/img/touch2.jpg" },
      { src: "/img/touch3.jpg" },
      { src: "/img/touch4.jpg" },
      { src: "/img/touch5.jpg" },
    ],
    categories: ["Photovoltaic Plant"],
  },
  {
    key: "project_6",
    media: [
      { src: "/img/visit1.jpeg" },
      { src: "/img/visit2.jpeg" },
    ],
    categories: ["Photovoltaic Plant"],
  },
  {
    key: "project_7",
    media: [
      { src: "/img/irena1.jpg" },
      { src: "/img/irena2.jpg" },
      { src: "/img/irena3.jpg" },
      { src: "/img/irena4.jpg" },
    ],
    categories: ["Photovoltaic Plant"],
  },
  {
    key: "project_8",
    media: [
      { src: "/img/forum2017_1.jpg" },
      { src: "/img/forum2017_2.jpg" },
      { src: "/img/forum2017_3.jpg" },
    ],
    categories: ["Photovoltaic Plant"],
  }
];



    const [activeCategory, setActiveCategory] = useState("All");

  const filteredEvents =
    activeCategory === "All"
      ? events
      : events.filter((events) =>
          events.categories.includes(activeCategory)
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
  <title>Events - EuroElektra</title>
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
     {translations.heroEvents?.title || "EVENTS"}
    </h1>
    <div className="w-24 h-1 bg-white mb-4" />
   <p className="flex items-center gap-2">
  <FaHome className="text-[#ffffff]" />
  / <span className="font-semibold text-[#58a3ff]">{translations.heroEvents?.breadcrumb || "EVENTS"}</span>
</p>
  </div>
</section>



<section className="bg-[#F5F7FA] text-[#1C1C1C] px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
  <div className="max-w-7xl mx-auto">

    {/* Events Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
      {filteredEvents.map((item, index) => {
        const events = translations.events?.[item.key];
        if (!events) return null;

        return (
          <div
            key={index}
            className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-md overflow-hidden group"
          >
            {/* Media Swiper */}
            <div
              className="overflow-hidden"
              onMouseEnter={() => swiperRefs.current[index]?.autoplay?.stop()}
              onMouseLeave={() => swiperRefs.current[index]?.autoplay?.start()}
            >
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation
                loop
                className="w-full"
                onSwiper={(swiper) => (swiperRefs.current[index] = swiper)}
              >
                {item.media?.map((mediaItem, i) => (
                  <SwiperSlide key={i}>
                    <div className="relative w-full" style={{ paddingTop: '62.5%' }}>
                      {mediaItem.type === 'video' ? (
                        <video
                          src={mediaItem.src}
                          poster={mediaItem.poster}
                          className="absolute inset-0 w-full h-full object-cover"
                          muted
                          loop
                          playsInline
                          controls
                        />
                      ) : (
                        <img
                          src={mediaItem.src}
                          alt={events.title}
                          className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Event Info */}
            <div className="p-4 sm:p-5 md:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#1C1C1C] group-hover:text-[#2987bf] transition-colors duration-300">
                {events.title}
              </h3>
              <p className="text-[#4F4F4F] text-sm sm:text-base flex items-center gap-2 mt-2">
                <img src="/svg/google-calendar.png" alt="Calendar" className="w-4 h-4" />
                {events.date}
              </p>
              <p className="text-[#4F4F4F] text-sm sm:text-base mt-2">{events.description}</p>
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