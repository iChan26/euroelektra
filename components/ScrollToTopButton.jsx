import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
      <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={` fixed bottom-[20px] sm:bottom-3 right-4 sm:right-6 z-50 
    w-16 h-16 sm:w-[100px] sm:h-[100px] 
    p-1 flex items-center justify-center  transition-all duration-500 ease-in-out
    ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"}`}
      >
          <img
              src="/svg/scroll-up.gif"
              alt="Scroll to top"
              className="w-[100px] h-[100px] object-contain hover:scale-110 transition-transform duration-300"
          />
      </button>

  );
}
