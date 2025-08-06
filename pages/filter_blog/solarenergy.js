"use client";
import ReloadLink from '../../components/ReloadLink';
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

const blogs = [
  {
    key: "project_1",
    media: [{ src: "/img/DO-SOLAR.jpg" }],
    categories: ["Photovoltaic Plant"],
    link: "/blog/blog1", // ✅ must start with `/` (public route)
    readMoreLink: "/blog/blog1#details", // ✅ anchor to section inside the blog
  },
  {
    key: "project_2",
    media: [{ src: "/img/albania-over.jpg" }],
    categories: ["Photovoltaic Plant"],
    link: "/blog/blog2",
    readMoreLink: "/blog/blog2#details",
  }
];




    const [activeCategory, setActiveCategory] = useState("All");

  const filteredblogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((blogs) =>
          blogs.categories.includes(activeCategory)
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
      <h1 className="text-5xl sm:text-6xl font-bold uppercase leading-tight mb-4 animate-fade">
        {translations.heroBlog?.title || "Loading..."}
      </h1>

      <div className="w-24 h-1 bg-white mb-4" />

      <p className="flex items-center gap-2 text-base sm:text-lg text-gray-200 animate-fade-in">
        <FaHome className="text-white" />
        <span className="text-white">/</span>
        <span className="font-semibold text-[#58a3ff]">
          {translations.heroBlog?.solarenergy || "Loading..."}
        </span>
      </p>
    </div>
</section>




<section className="py-10 px-6 bg-white">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[250px_1fr] gap-10">
    {/* Sidebar */}
    <aside>
      <h2 className="text-lg font-semibold text-[#1C1C1C] mb-4">
        {translations.blogCat?.title || "Blog Categories"}
      </h2>
      <ul className="space-y-4">
        {(translations.blogCat?.categories || []).map((item, idx) => (
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

    {/* Blog Grid */}
          <div className="grid md:grid-cols-2 gap-10">
                {filteredblogs.map((item, index) => {
                  const blogTranslation = translations.blogs?.[item.key];
                  if (!blogTranslation) return null;
          
                  return (
                    <div
                      key={index}
                      className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-[1.015] hover:shadow-xl group min-h-[550px]"
                    >
                      {/* Swiper Media */}
                      {/* Swiper Media with Link */}
                      <ReloadLink href={item.link} passHref prefetch={false} replace={false}>
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
                            className="rounded-t-lg"
                            onSwiper={(swiper) => (swiperRefs.current[index] = swiper)}
                          >
                            {item.media?.map((mediaItem, i) => (
                              <SwiperSlide key={i}>
                                <div className="relative w-full group" style={{ paddingTop: "62.5%" }}>
                                  {mediaItem.type === "video" ? (
                                    <video
                                      src={mediaItem.src}
                                      poster={mediaItem.poster}
                                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                      muted
                                      loop
                                      playsInline
                                      controls
                                    />
                                  ) : (
                                    <div className="absolute inset-0 w-full h-full transition-transform duration-300 group-hover:scale-105">
                                      <img
                                        src={mediaItem.src}
                                        alt={blogTranslation.title}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                  )}
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>
                      </ReloadLink>
          
          
                      {/* Blog Content */}
                      <div className="p-4">
                        {/* Title Link */}
                         <ReloadLink href={item.link}>
                            <h3 className="text-lg font-bold text-[#1C1C1C] leading-snug break-words mb-4 cursor-pointer hover:text-sky-500">
                              {blogTranslation.title}
                            </h3>
                          </ReloadLink>
          
          
          
                        {/* Meta Info */}
                        <div className="text-[#4F4F4F] text-sm space-x-2 mt-1 mb-4">
                          <span>{blogTranslation.date}</span>
                          <span>|</span>
                          <span>
                             {translations.blog1Meta?.by}  <a href="/blog" className="text-[#0073e6] hover:underline">EuroElektra Sh.p.k </a>
                          </span>
                          <span>|</span>
                          <span>{translations.blog1Meta?.date}</span>
                          <span>|</span>
                          <span>{translations.blog1Meta?.hit || "Hit:"} {blogTranslation.views || "0"}</span>
                        </div>
          
                        {/* Description */}
                        <p className="text-[#4F4F4F] text-sm mb-4">{blogTranslation.description}</p>
          
                        {/* Read More Link */}
                        <ReloadLink
                          href={item.readMoreLink}
                          className="text-[#0073e6] text-sm font-medium hover:underline"
                        >
                          {translations.blogs?.project_1?.readMore || "Read more"} &gt;
                        </ReloadLink>
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
