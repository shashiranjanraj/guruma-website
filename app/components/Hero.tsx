"use client";

import { useState, useEffect, useCallback } from "react";

const slides = [
  { src: "/images/hero-portrait.jpg", alt: "Sadhvi Jagrit Chetana Giri -- Portrait", position: "center 38%" },
  { src: "/images/slider-formal.jpg", alt: "At a Spiritual Event", position: "center 50%" },
  { src: "/images/slider-with-ram.jpg", alt: "With Shri Ram", position: "center 20%" },
  { src: "/images/slider-celebration.jpg", alt: "Celebration at the Ashram", position: "center 55%" },
  { src: "/images/slider-garden.jpg", alt: "In the Garden", position: "center 36%" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

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

      {/* Content overlay */}
      <div className="hero-slider-content">
        <div className="hero-pre">Shri Matrishakti Acharya Peeth Seva Trust &middot; Dehradun, Uttarakhand</div>
        <span className="hero-om">&#x0950;</span>
        <div className="hero-name-block">
          <div className="hero-title-small">Shri Shri 1008 Acharya Mahamandaleshwar</div>
          <div className="hero-title-main">
            Sadhvi Jagrit<br />
            Chetana Giri
          </div>
        </div>
        <div className="hero-rule">
          <div className="hero-rule-line"></div>
          <div className="hero-rule-diamond"></div>
          <div className="hero-rule-line r"></div>
        </div>
        <div className="hero-tags">
          <span className="hero-tag">Acharya Mahamandaleshwar</span>
          <span className="hero-tag">Vedantic Scholar</span>
          <span className="hero-tag">Bhakti Yoga</span>
          <span className="hero-tag">Seva</span>
        </div>
        <div className="hero-quote">
          &ldquo;&#x0938;&#x0924;&#x094D;&#x092F;&#x0902; &#x0936;&#x093F;&#x0935;&#x0902; &#x0938;&#x0941;&#x0928;&#x094D;&#x0926;&#x0930;&#x092E;&#x094D; &mdash; Truth is God, God is Beauty.<br />
          Serve all, Love all, Worship all as the Divine.&rdquo;
        </div>
        <a href="#profile" className="hero-cta">
          <span>Discover Sadhvi Ji</span>
          <i className="fas fa-arrow-right" style={{ fontSize: "0.7rem" }}></i>
        </a>
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
