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
      {translations.energyEfficiencyHero?.title}
    </h1>
    <p className="text-lg sm:text-xl font-medium text-white max-w-3xl mx-auto">
      {translations.energyEfficiencyHero?.description}
    </p>
  </div>
</section>

<section className="bg-white px-6 py-16 border-t border-gray-200">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[250px_1fr] gap-10 items-start">
    
    {/* Sidebar Navigation */}
    <aside className="space-y-4">
      <h2 className="text-[#1C1C1C] font-semibold text-lg">
        {translations.sectorsSidebar?.title || "SECTORS"}
      </h2>
      <ul className="space-y-2 text-[#1C1C1C] text-sm">
        {(translations.sectorsSidebar?.items || [
          "Electrical Products",
          "Security Automation",
          "Lighting Showroom",
          "Energy Efficiency",
          "Renewable Energy",
          "Smart Building"
        ]).map((sector, idx) => (
          <li key={idx} className="flex justify-between items-center group">
            <div className="flex items-center gap-2">
              <span className="text-lg">&rsaquo;</span>
              <span>{sector}</span>
            </div>
            <div className="flex items-center gap-1 bg-[#888] text-white text-xs rounded-full px-2 py-0.5">
              <span>0</span>
              <button className="font-bold leading-none">+</button>
            </div>
          </li>
        ))}
      </ul>
    </aside>

    {/* Main Content */}
    <div className="space-y-10">
      
      {/* Content Block 1 */}
      <div className="bg-[#F5F7FA] p-6 rounded-md shadow-sm border border-gray-200 flex flex-col md:flex-row gap-6">
        {/* Text */}
        <div className="flex-1 space-y-4">
          <h3 className="text-[#003B5C] font-bold text-lg uppercase">
            {translations.sectorsContent?.climateComfort?.title || "Climate comfort"}
          </h3>
          <p className="text-[#4F4F4F] text-sm leading-relaxed">
            {translations.sectorsContent?.climateComfort?.intro || "The temperature you want, as and when you want it"}
          </p>
          <p className="text-[#4F4F4F] text-sm leading-relaxed">
            {translations.sectorsContent?.climateComfort?.paragraph1 ||
              "Complete climate management for any type of building..."}
          </p>
          <p className="text-[#4F4F4F] text-sm leading-relaxed">
            {translations.sectorsContent?.climateComfort?.paragraph2 ||
              "The Ecometer function shows the consumption values..."}
          </p>
        </div>

        {/* Image */}
        <div className="flex-shrink-0 w-full md:w-[300px] flex justify-center items-center">
          <img
            src="/img/6d76b52a-3acb-4936-b16c-8c98a174a814.PNG"
            alt="Climate comfort"
            className="rounded-md border border-gray-300 object-contain"
          />
        </div>
      </div>

      {/* Content Block 2 */}
      <div className="bg-[#F5F7FA] p-6 rounded-md shadow-sm border border-gray-200 flex flex-col md:flex-row gap-6">
        {/* Image */}
        <div className="flex-shrink-0 w-full md:w-[300px] flex justify-center items-center order-1 md:order-none">
          <img
            src="/img/98216c1a-7a8b-4ee9-874d-64bc6808a222.PNG"
            alt="Smart management"
            className="rounded-md border border-gray-300 object-contain"
          />
        </div>

        {/* Text */}
        <div className="flex-1 space-y-4">
          <h3 className="text-[#003B5C] font-bold text-lg uppercase">
            {translations.sectorsContent?.smartManagement?.title || "Smart management"}
          </h3>
          <p className="text-[#4F4F4F] text-sm leading-relaxed">
            {translations.sectorsContent?.smartManagement?.intro || "Integrated Climate control in the By-me home automation system"}
          </p>
          <p className="text-[#4F4F4F] text-sm leading-relaxed">
            {translations.sectorsContent?.smartManagement?.paragraph1 || "As the system is integrated..."}
          </p>
          <p className="text-[#4F4F4F] text-sm leading-relaxed">
            {translations.sectorsContent?.smartManagement?.paragraph2 || "The energy and the building are fully managed..."}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>




 

          </>
  );
}
