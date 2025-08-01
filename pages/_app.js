// pages/_app.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ScrollToTopButton from '../components/ScrollToTopButton';
import ChatWidget from '../components/ChatWidget';
import Header from '../components/Header';
import Footer from '../components/Footer'; 

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "@fortawesome/fontawesome-svg-core/styles.css";
import '../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function App({ Component, pageProps }) {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState({});

  const loadTranslations = async (lang) => {
    try {
      const res = await fetch(`/locales/${lang}.json`);
      const data = await res.json();
      setTranslations(data);
    } catch (err) {
      console.error("Failed to load translations:", err);
    }
  };

  const changeLanguage = (lang) => {
    localStorage.setItem('language', lang);
    setLanguage(lang);
    loadTranslations(lang);
  };

  useEffect(() => {
    const storedLang = localStorage.getItem('language') || 'en';
    setLanguage(storedLang);
    loadTranslations(storedLang);
  }, []);

  return (
    <>
      <Header
        language={language}
        translations={translations}
        changeLanguage={changeLanguage}
      />
      <Component
        {...pageProps}
        language={language}
        translations={translations}
        changeLanguage={changeLanguage}
      />
      <Footer translations={translations} /> 
      <ScrollToTopButton />
      <ChatWidget
        language={language}
        translations={translations}
        changeLanguage={changeLanguage}
      />

    </>
  );
}
