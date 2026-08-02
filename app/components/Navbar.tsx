"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "../i18n/LangContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const { t, toggleLang } = useLang();

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
            <div className="nav-brand-title">{t("nav.brandTitle")}</div>
            <div className="nav-brand-sub">{t("nav.brandSub")}</div>
          </div>
        </a>
        <ul className={`nav-links${menuOpen ? " open" : ""}`} id="navLinks">
          <li><a href="#home" onClick={closeMenu}>{t("nav.home")}</a></li>
          <li><a href="#profile" onClick={closeMenu}>{t("nav.profile")}</a></li>
          <li><a href="#trust" onClick={closeMenu}>{t("nav.trust")}</a></li>
          <li className="nav-donate-link"><a href="#donations" onClick={closeMenu}>{t("nav.donate")}</a></li>
          <li><a href="#gallery" onClick={closeMenu}>{t("nav.gallery")}</a></li>
          <li><a href="#social" onClick={closeMenu}>{t("nav.social")}</a></li>
          <li><a href="#contact" onClick={closeMenu}>{t("nav.contact")}</a></li>
        </ul>
        <button className="lang-toggle" onClick={toggleLang} aria-label="Toggle language">
          {t("lang.switchTo")}
        </button>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}
