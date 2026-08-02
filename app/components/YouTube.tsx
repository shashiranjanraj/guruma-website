"use client";

import SectionHeader from "./SectionHeader";
import { useLang } from "../i18n/LangContext";

const videos = [
  { bg: "linear-gradient(135deg,#1a0533,#4a1060)", dur: "1:24:36", title: "Bhagavad Gita Chapter 12 — Bhakti Yoga: The Path of Devotion | Full Discourse", views: "458K views", ago: "3 weeks ago" },
  { bg: "linear-gradient(135deg,#1a0a00,#6b2a00)", dur: "47:12", title: "Who Am I? Self-Inquiry Meditation — Guided by Aacharya Maa | Atma Vichara", views: "312K views", ago: "1 month ago" },
  { bg: "linear-gradient(135deg,#001a0a,#00452a)", dur: "2:10:45", title: "Navratri Special — Devi Mahatmya Recitation with Commentary | All 9 Days", views: "1.1M views", ago: "2 months ago" },
  { bg: "linear-gradient(135deg,#0a0a1a,#1a1a4a)", dur: "58:03", title: "Morning Sadhana Routine — How to Start Your Spiritual Practice | Step by Step", views: "589K views", ago: "5 months ago" },
  { bg: "linear-gradient(135deg,#1a001a,#4a004a)", dur: "35:20", title: "Guru Purnima Satsang LIVE 2023 — Significance & How to Honor Your Guru", views: "778K views", ago: "8 months ago" },
  { bg: "linear-gradient(135deg,#001a1a,#004a4a)", dur: "1:05:17", title: "Women & Spirituality — Are Women Eligible for Sannyasa? A Vedantic Answer", views: "2.3M views", ago: "1 year ago" },
];

export default function YouTube() {
  const { t } = useLang();

  return (
    <section id="youtube" className="bg-ivory">
      <div className="container">
        <SectionHeader
          eyebrow={t("yt.eyebrow")}
          title={t("yt.title")}
          subtitle={t("yt.subtitle")}
        />
        <div className="yt-channel-strip">
          <i className="fab fa-youtube yt-icon"></i>
          <div>
            <div className="yt-channel-name">Aacharya Maa Jagrat Chetna Giri</div>
            <div className="yt-channel-meta">Satsang, Gita discourses &amp; guided meditation</div>
          </div>
          <a href="https://www.youtube.com/@SadhviJagratChetna-nq1rb" target="_blank" rel="noopener noreferrer" className="yt-sub-btn"><i className="fab fa-youtube"></i> {t("yt.subscribe")}</a>
        </div>
        <div className="yt-channel-strip" style={{ marginTop: "12px" }}>
          <i className="fab fa-youtube yt-icon"></i>
          <div>
            <div className="yt-channel-name">आचार्य साध्वी जाग्रत चेतना</div>
            <div className="yt-channel-meta">Hindi Channel · Spiritual discourses &amp; bhajans</div>
          </div>
          <a href="https://youtube.com/channel/UCkOll0DdkvO0rlZAk7NkTgw" target="_blank" rel="noopener noreferrer" className="yt-sub-btn"><i className="fab fa-youtube"></i> {t("yt.subscribe")}</a>
        </div>
        <div className="yt-grid">
          {videos.map((v) => (
            <div className="yt-card" key={v.title}>
              <div className="yt-thumb">
                <div className="yt-thumb-bg" style={{ background: v.bg }}></div>
                <div className="yt-play-btn"><i className="fas fa-play"></i></div>
                <span className="yt-dur">{v.dur}</span>
              </div>
              <div className="yt-card-body">
                <div className="yt-card-title">{v.title}</div>
                <div className="yt-card-meta">
                  <span>{v.views}</span>
                  <span>{v.ago}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
