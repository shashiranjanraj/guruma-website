"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { useLang } from "../i18n/LangContext";

type Category = "all" | "guru" | "ashram" | "events";

const galleryItems = [
  { src: "/images/gallery-with-guru.jpg", alt: "With Guru Maharaj", cat: "guru", caption: "At the feet of Guru Maharaj" },
  { src: "/images/gallery-guru-diptych.jpg", alt: "With Guru Maharaj", cat: "guru", caption: "Sacred moments with Guru Maharaj" },
  { src: "/images/gallery-ashram-devotee.jpg", alt: "With Devotee at Ashram", cat: "ashram", caption: "Blessings at the Ashram" },
  { src: "/images/gallery-ashram-smiling.jpg", alt: "Smiling at Ashram", cat: "ashram", caption: "Joyful moments at the Ashram" },
  { src: "/images/gallery-with-devotees.jpg", alt: "With Devotees", cat: "events", caption: "With beloved devotees" },
  { src: "/images/slider-formal.jpg", alt: "At a Spiritual Event", cat: "events", caption: "At a spiritual gathering" },
  { src: "/images/slider-with-ram.jpg", alt: "With Shri Ram", cat: "events", caption: "With Shri Ram" },
  { src: "/images/slider-celebration.jpg", alt: "Celebration", cat: "events", caption: "Celebration at the Ashram" },
  { src: "/images/slider-garden.jpg", alt: "In the Garden", cat: "ashram", caption: "Peaceful moments in nature" },
];

export default function Gallery() {
  const { t } = useLang();
  const [filter, setFilter] = useState<Category>("all");

  const categories: { id: Category; label: string }[] = [
    { id: "all", label: t("gallery.all") },
    { id: "guru", label: t("gallery.guruParampara") },
    { id: "ashram", label: t("gallery.ashram") },
    { id: "events", label: t("gallery.events") },
  ];

  return (
    <section id="gallery" className="bg-parchment">
      <div className="container">
        <SectionHeader
          eyebrow={t("gallery.eyebrow")}
          title={t("gallery.title")}
          subtitle={t("gallery.subtitle")}
        />
        <div className="gallery-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`gfilter-btn${filter === cat.id ? " active" : ""}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="gallery-masonry">
          {galleryItems
            .filter((item) => filter === "all" || item.cat === filter)
            .map((item) => (
              <div className="gallery-item" key={item.src} data-cat={item.cat}>
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  style={{ width: "100%", height: "auto" }}
                />
                <div className="gallery-item-overlay">
                  <span className="gallery-caption">{item.caption}</span>
                </div>
                <div className="gallery-frame-border"></div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
