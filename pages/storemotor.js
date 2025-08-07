"use client";

import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaHome } from 'react-icons/fa';
import { HiOutlineMenu, HiOutlineX, HiOutlineSearch } from 'react-icons/hi';
import { usePathname, useSearchParams } from 'next/navigation';
import { motion, useInView } from "framer-motion";

export default function Home({ language, translations, changeLanguage }) {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");

  const motorproducts = [
    {
      id: "controlD",
      name: "Control Relay Tesys D",
      subtitle: "Control Relay     ",
      description:
        "Model: Tesys D",
      image: "/img/ControlD.jpg",
    },
    {
      id: "ControlK",
      name: "Control Relay Tesys K'",
      subtitle: "Control Relay",
      description:
        "Model: Tesys K",
      image: "/img/ControlK.jpg",
    }
  ];

  const defaultProduct = motorproducts[0];
  const [selectedProduct, setSelectedProduct] = useState(defaultProduct);

  // ⏬ Update selected product based on URL id (once on load or if id changes)
  useEffect(() => {
    const found = motorproducts.find((p) => p.id === productId);
    if (found) setSelectedProduct(found);
    else setSelectedProduct(defaultProduct);
  }, [productId]);

  const relatedProducts = motorproducts.filter((p) => p.id !== selectedProduct.id);

  return (
    <>
      <Head>
        <title>EuroElektra – Empowering Albania Since 2010</title>
        <meta name="description" content="EuroElektra specializes in wholesale electrical materials, renewable energy, and smart building solutions in Albania. Trusted since 2010." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" href="/svg/profile.png" />
      </Head>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 text-white bg-black overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="/vid/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 max-w-5xl ml-8">
          <h1 className="text-5xl sm:text-6xl font-bold uppercase leading-tight mb-4 animate-fade">
            {translations.motorsstarters?.title || "Loading..."}
          </h1>
          <div className="w-24 h-1 bg-white mb-4" />
          <p className="flex items-center gap-2 text-base sm:text-lg text-gray-200 animate-fade-in">
            <FaHome className="text-[#ffffff]" />
            / <span className="font-semibold text-[#58a3ff]">{translations.motorsstarters?.breadcrumb1}</span>
          </p>
        </div>
      </section>


    {/* Main Section */}
<section className="py-12 px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    {/* Selected Product Display */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
      <div className="w-full border p-4 flex items-center justify-center bg-gray-100">
        <img
          src={selectedProduct.image}
          alt={selectedProduct.name}
          className="object-contain max-h-[500px]" // 📸 enlarged image
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {selectedProduct.name}
        </h1>
        <h2 className="text-lg font-semibold text-gray-600 mb-4">
          {translations.store?.subtitle}
        </h2>
        <p className="text-gray-700 mb-6">
          {translations.store?.description}
        </p>

        <div className="flex gap-2 mb-6">
          <button className="border px-3 py-1 rounded text-sm">Tweet</button>
          <button className="border px-3 py-1 rounded text-sm">Share</button>
          <button className="border px-3 py-1 rounded text-sm">Google+</button>
          <button className="border px-3 py-1 rounded text-sm">Pinterest</button>
        </div>

        <div className="border-t pt-4">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">
              {translations.store?.condition || "Condition"}:
            </span>{" "}
            {translations.store?.new_product || "New product"}
          </p>
          <div className="flex gap-4 mt-4">
            <button className="border p-2 rounded">✉️</button>
            <button className="border p-2 rounded">🖨️</button>
          </div>
        </div>
      </div>
    </div>

    {/* Related Products Section */}
    <div>
      <h2 className="text-xl font-bold mb-6">
        {translations.store?.related_products || "Related Products"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedProducts.map((related) => (
          <Link
            key={related.id}
            href={`/storemotor?id=${related.id}`}
            className="cursor-pointer border p-4 rounded-lg bg-gray-50 flex flex-col items-center text-center hover:shadow transition"
          >
            <img
              src={related.image}
              alt={related.name}
              className="w-24 h-24 object-contain mb-4"
            />
            <p className="font-medium text-gray-800">{related.name}</p>
          </Link>
        ))}
      </div>
    </div>
  </div>
</section>

    </>
  );
}
