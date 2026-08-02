"use client";

import SectionHeader from "./SectionHeader";
import { useLang } from "../i18n/LangContext";

const courses = [
  {
    icon: "fa-book-open",
    title: "श्रीमद् भगवद् गीता",
    titleEn: "Shreemad Bhagwat Geeta",
  },
  {
    icon: "fa-feather-pointed",
    title: "उपनिषद्",
    titleEn: "Upanishad",
  },
  {
    icon: "fa-fire",
    title: "वेदान्त यज्ञ — अनुष्ठानिक कार्यक्रम",
    titleEn: "Vedanta Yagna — Anushthanic Program",
  },
  {
    icon: "fa-om",
    title: "श्री शिव महापुराण",
    titleEn: "Shri Shiv Puran",
  },
  {
    icon: "fa-hands-praying",
    title: "देवी भागवत महापुराण",
    titleEn: "Devi Bhagwat Maha Puran",
  },
  {
    icon: "fa-dharmachakra",
    title: "श्री राम चरित मानस",
    titleEn: "Shri Ram Charit Manas",
  },
];

export default function Courses() {
  const { t } = useLang();

  const descs = t("courses.descs").split(",");

  const handleEnrol = () => {
    alert("🙏 Seva Daan — ₹1,100\n\nAccount Name: Shri Matrishakti Acharya Peeth Seva Trust\nAccount No: 4694000100063726\nIFSC Code: PNUB0469400\nBank: Punjab National Bank, Dehradun\n\n📱 UPI: 9548295001m@pnb\nPhone: 9548295001\n\nॐ Hari Om Tat Sat");
  };

  return (
    <section id="courses" className="bg-ivory">
      <div className="container">
        <SectionHeader
          eyebrow={t("courses.eyebrow")}
          title={t("courses.title")}
          subtitle={t("courses.subtitle")}
        />
        <div className="courses-info-strip">
          <div className="courses-duration">
            <i className="fas fa-clock"></i>
            <span>{t("courses.duration")}</span>
          </div>
          <div className="courses-seva-daan">
            <i className="fas fa-hand-holding-heart"></i>
            <span>{t("courses.sevaDaan")}<strong>&#x20B9;1,100</strong>{t("courses.perCourse")}</span>
          </div>
        </div>
        <div className="courses-grid">
          {courses.map((course, idx) => (
            <div className="course-card" key={course.titleEn}>
              <div className="course-card-icon">
                <i className={`fas ${course.icon}`}></i>
              </div>
              <div className="course-card-title-hi">{course.title}</div>
              <div className="course-card-title-en">{course.titleEn}</div>
              <div className="course-card-desc">{descs[idx]}</div>
              <div className="course-card-footer">
                <div className="course-card-tag">
                  <i className="fas fa-clock"></i> 45 min
                </div>
                <div className="course-card-price">&#x20B9;1,100</div>
              </div>
              <button className="course-enrol-btn" onClick={handleEnrol}>
                <i className="fas fa-hand-holding-heart"></i> {t("courses.enrolBtn")}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
