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

const blog4 = [
  {
    key: "project_1",
    media: [
      { src: "/img/when-the-taste.jpg" },

    ],
    categories: ["Photovoltaic Plant"],
  },
];



  const [activeCategory, setActiveCategory] = useState("All");
  const filteredblog4 =
    activeCategory === "All"
      ? blog4
      : blog4.filter((blog4) =>
          blog4.categories.includes(activeCategory)
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
    <h1 className="text-5xl sm:text-6xl font-bold uppercase leading-tight mb-4">
      {translations.heroBlog4?.title || "Loading..."}
    </h1>
    <div className="w-24 h-1 bg-white mb-4" />
   <p className="flex items-center gap-2">
  <FaHome className="text-[#ffffff]" />
  / <span className="font-semibold text-[#58a3ff]">{translations.heroBlog4?.breadcrumb || "Loading..."}</span>
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


    {/* Main Content */}
    <div className="space-y-10">
      {filteredblog4.map((item, index) => {
        const blog4 = translations.blog4?.[item.key];
        const meta = translations.blog1Meta || {};

        if (!blog4) return null;

        return (
          <div key={index}>
            {/* Title */}
            <h1 className="text-2xl font-black text-black mb-3 uppercase">
              {blog4.title}
            </h1>

           {/* Meta Section */}
<div className="flex flex-wrap items-center text-sm text-[#333] gap-x-5 gap-y-3 mb-4">
  {/* Posted By */}
  <span className="flex items-center gap-1">
      <i className="fa fa-user text-gray-500" />
      {translations.blog1Meta?.postedBy || "Posted By:"}
      <a href="/blog" className="ml-1 text-blue-600 hover:underline">
        {translations.blog1Meta?.company || "EuroElektra Sh.p.k"}
      </a>
</span>

  {/* Category */}
  <span className="flex items-center gap-1">
    <i className="fa fa-folder-open text-gray-500" />
    {translations.blog1Meta?.category || "In:"}
    <span className="ml-1">
      {translations.blog1Meta?.categoryName || "Renewable Energy"}
    </span>
  </span>

  {/* Date */}
  <span className="flex items-center gap-1">
    <i className="fa fa-calendar text-gray-500" />
    {translations.blog1Meta?.date || "On:"}
    <span className="ml-1">
      {translations.blog1Meta?.published || "Friday, February 28, 2020"}
    </span>
  </span>

  {/* Comments */}
  <span className="flex items-center gap-1">
    <i className="fa fa-comments text-gray-500" />
    {translations.blog1Meta?.comment || "Comment:"}
    <span className="ml-1">0</span>
  </span>

  {/* Hit Count */}
  <span className="flex items-center gap-1">
    <i className="fa fa-heart text-gray-500" />
    {translations.blog1Meta?.hit || "Hit:"}
    <span className="ml-1">8116</span>
  </span>
</div>


            <div className="w-full h-[1px] bg-[#ddd] mb-4" />

            {/* Image */}
            <img
              src={item.media?.[0]?.src}
              alt={blog4.title}
              className="w-full h-auto object-cover mb-6"
            />

     {/* Blog Body */}
<div className="space-y-4 text-[#4F4F4F] text-base leading-relaxed">
  {/* Title & Intro */}
  {/* Title & Intro */}
{blog4?.title1 && (
  <>
    <h4 className="font-semibold text-black mb-1">{blog4.title}</h4>
    
  </>
)}

{/* Paragraphs Section */}
{blog4.description1 && <p>{blog4.description1}</p>}
{blog4.description1_2 && <p>{blog4.description1_2}</p>}
{blog4.description1_3 && <p className="italic">{blog4.description1_3}</p>}



</div>



          {/* Social Interaction Footer */}
<div className="flex items-center flex-wrap text-sm text-[#4F4F4F] mt-10 border-t border-gray-200 pt-4 gap-4">
  {/* Left Side: Action Buttons */}
  <div className="flex items-center gap-2">
    <button className="text-[#555] font-semibold hover:underline">
      {translations?.social?.likeThis || "Like This"}
    </button>
    <button className="bg-black text-white text-xs px-3 py-1 rounded-full">
      {translations?.social?.post || "✗ Post"}
    </button>
    <button className="bg-[#1877F2] text-white text-xs px-3 py-1 rounded flex items-center gap-1">
      <i className="fa fa-thumbs-up" />
      {translations?.social?.like || "Like"}
    </button>
  </div>

  {/* Right Side: Info */}
  <div className="text-xs text-[#555] whitespace-nowrap">
   
    <a href="#" className="text-blue-600 hover:underline">
      {translations?.social?.likesInfo?.signup || "Sign Up"}
    </a>{" "}
    {translations?.social?.likesInfo?.see || "to see what your friends like."}
  </div>
</div>






{/* Related Articles Section */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 border-t border-gray-200 pt-8">
  {/* In Same Category */}
  <div>
    <h3 className="text-lg font-black uppercase mb-5 tracking-tight">
      {translations.related4?.categoryTitle || "IN SAME CATEGORY"}
    </h3>
    <ul className="space-y-4 text-sm text-black">
      {[
        {
          key: "do",
          href: "/blog/blog1",
        },
        {
          key: "albania",
          href: "/blog/blog2",
        },
        {
          key: "business",
          href: "/blog/blog5",
        },
        {
          key: "the",
          href: "/blog/blog3",
        },
      ].map(({ key, href }) => (
        <li key={key} className="border-b border-dotted border-gray-300 pb-2">
          <a href={href} className="hover:underline">
            {translations.related4?.[key]}
          </a>
        </li>
      ))}
    </ul>
  </div>

  {/* Related by Tags (empty for now) */}
  <div>
    <h3 className="text-lg font-black uppercase mb-5 tracking-tight">
      {translations.related4?.tagsTitle || "RELATED BY TAGS"}
    </h3>
   
  </div>
</div>





{/* COMMENTS SECTION */}
<div className="mt-12 max-w-2xl">
  {/* Section Heading */}
  <h3 className="text-xl font-black uppercase mb-1">
    {translations?.comments?.title || "Comments"}
  </h3>
  <h4 className="text-lg font-bold mb-6">
    {translations?.comments?.subtitle || "Leave Your Comment"}
  </h4>

  {/* Form */}
  <form className="space-y-6 text-sm text-black">
    {/* Full Name */}
    <div className="flex flex-col md:flex-row md:items-center gap-2">
      <label className="md:w-28 font-medium" htmlFor="name">
        {translations?.comments?.name || "Full Name"}
      </label>
      <input
        id="name"
        type="text"
        placeholder={translations?.comments?.namePlaceholder || "Enter your full name"}
        className="flex-1 px-4 py-2 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-black"
      />
    </div>

    {/* Email */}
    <div className="flex flex-col md:flex-row md:items-center gap-2">
      <label className="md:w-28 font-medium" htmlFor="email">
        {translations?.comments?.email || "Email"}
      </label>
      <input
        id="email"
        type="email"
        placeholder={translations?.comments?.emailPlaceholder || "Enter your email"}
        className="flex-1 px-4 py-2 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-black"
      />
    </div>

    {/* Comment */}
    <div className="flex flex-col md:flex-row md:items-start gap-2">
      <label className="md:w-28 font-medium pt-2" htmlFor="comment">
        {translations?.comments?.comment || "Comment"}
      </label>
      <textarea
        id="comment"
        rows={5}
        placeholder={translations?.comments?.commentPlaceholder || "Enter your comment"}
        className="flex-1 px-4 py-2 rounded-2xl border border-gray-300 outline-none resize-none focus:ring-2 focus:ring-black"
      />
    </div>

    {/* Captcha */}
    <div className="flex flex-col md:flex-row md:items-center gap-2">
      <label className="md:w-28 font-medium" htmlFor="captcha">
        {translations?.comments?.captcha || "Captcha"}
      </label>
      <div className="flex items-center gap-2">
        <img
          src="/img/captcha4.jpg" // Replace with actual captcha image source
          alt="captcha"
          className="h-10 border"
        />
        <input
          type="text"
          id="captcha"
          placeholder=""
          className="px-4 py-2 rounded-full border border-gray-300 w-32 outline-none focus:ring-2 focus:ring-black"
        />
      </div>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="px-6 py-2 border border-black rounded-full uppercase text-sm font-semibold hover:bg-black hover:text-white transition"
    >
      {translations?.comments?.submit || "Submit"}
    </button>
  </form>
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
