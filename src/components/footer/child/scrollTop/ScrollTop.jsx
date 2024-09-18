"use client";
import "./scrollTop.scss";
import { useState, useEffect } from "react";
import Scrollcon from "/src/assets/footer/scrollTop.svg";
import Whatsapplcon from "/src/assets/footer/whatsapp.svg";

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <div className="fixed-scroll">
        <a className="fixed-whatsapp" href="https://wa.me/77017338500">
          <Whatsapplcon />
        </a>
        <div onClick={scrollToTop} className="scroll-icon">
          <Scrollcon />
        </div>
      </div>
    )
  );
}
