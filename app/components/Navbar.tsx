"use client";

import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let lastY = 0;
    const handleScroll = () => {
      const y = window.scrollY;
      if (navRef.current) {
        navRef.current.style.transform =
          y > lastY && y > 120 ? "translateY(-150%)" : "translateY(0)";
      }
      lastY = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav id="mainNav" ref={navRef}>
      <div className="nav-inner">
        <a href="#home" className="nav-brand">
          <div className="nav-om">&#x0950;</div>
          <div className="nav-brand-text">
            <div className="nav-brand-title">Sadhvi Jagrit Chetana Giri</div>
            <div className="nav-brand-sub">Shri Matrishakti Acharya Peeth Seva Trust · Dehradun</div>
          </div>
        </a>
        <ul className={`nav-links${menuOpen ? " open" : ""}`} id="navLinks">
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#profile" onClick={closeMenu}>Profile</a></li>
          <li><a href="#trust" onClick={closeMenu}>Trust</a></li>
          <li className="nav-donate-link"><a href="#donations" onClick={closeMenu}>Donate</a></li>
          <li><a href="#gallery" onClick={closeMenu}>Gallery</a></li>
          <li><a href="#social" onClick={closeMenu}>Social</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}
