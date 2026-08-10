"use client";

import { useState, useEffect, useCallback } from "react";
import { useLang } from "../i18n/LangContext";

const slides = [
  { src: "/images/hero-portrait.jpg", alt: "Aacharya Maa Jagrat Chetna Giri -- Portrait", position: "center 38%" },
  { src: "/images/slider-formal.jpg", alt: "At a Spiritual Event", position: "center 50%" },
  { src: "/images/slider-with-ram.jpg", alt: "With Shri Ram", position: "center 20%" },
  { src: "/images/slider-celebration.jpg", alt: "Celebration at the Ashram", position: "center 55%" },
  { src: "/images/slider-garden.jpg", alt: "In the Garden", position: "center 36%" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const { t } = useLang();

  const goTo = useCallback((idx: number) => {
    setCurrent((idx + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => goTo(current + 1), 6000);
    return () => clearInterval(timer);
  }, [current, paused, goTo]);

  return (
    <section
      id="home"
      className="hero-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <div className="hero-slider-track">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`hero-slide${i === current ? " active" : ""}`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              draggable={false}
              style={{ objectPosition: slide.position || "center 20%" }}
            />
          </div>
        ))}
        <div className="hero-slide-overlay" />
      </div>

      {/* Floating Glassmorphic Content Card */}
      <div className="hero-slider-content hero-slider-content--split">
        <div className="hero-content-left">
          <div className="hero-greeting-badge">
            <span className="hero-greeting-line"></span>
            <span className="hero-greeting-text">{t("hero.greeting")}</span>
            <span className="hero-greeting-line"></span>
          </div>
          <h1 className="hero-title">{t("nav.brandTitle")}</h1>
          <div className="hero-ornament-center">
            <span className="ornament-line"></span>
            <span className="ornament-glyph">&#x0950;</span>
            <span className="ornament-line"></span>
          </div>
          <p className="hero-subtitle">{t("hero.subtitle")}</p>
          <div className="hero-actions">
            <a href="#youtube" className="hero-btn hero-btn--primary">
              <i className="fab fa-youtube"></i>
              <span>{t("hero.ctaWatch")}</span>
            </a>
            <a href="#donations" className="hero-btn hero-btn--secondary">
              <i className="fas fa-hand-holding-heart"></i>
              <span>{t("hero.ctaDonate")}</span>
            </a>
          </div>
        </div>

        <div className="hero-content-right">
          <div className="hero-qr-card">
            <div className="hero-qr-title">{t("donations.scanToDonate")}</div>
            <div className="hero-qr-frame">
              <img src="/images/donation-qr.jpg" alt="UPI QR Code - Shri Matrishakti Acharya Peeth Seva Trust" />
            </div>
            <div className="hero-qr-upi">UPI: 9548295001m@pnb</div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        className="hero-slider-arrow hero-slider-arrow--prev"
        onClick={() => goTo(current - 1)}
        aria-label="Previous slide"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        className="hero-slider-arrow hero-slider-arrow--next"
        onClick={() => goTo(current + 1)}
        aria-label="Next slide"
      >
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* Dots */}
      <div className="hero-slider-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-slider-dot${i === current ? " active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="hero-slider-progress">
        <div
          className={`hero-slider-progress-bar${paused ? " paused" : ""}`}
          key={current}
        />
      </div>

      <div className="scroll-hint">
        <span>Scroll</span>
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  );
}
