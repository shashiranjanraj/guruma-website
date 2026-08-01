"use client";

import SectionHeader from "./SectionHeader";

const courses = [
  {
    icon: "fa-book-open",
    title: "श्रीमद् भगवद् गीता",
    titleEn: "Shreemad Bhagwat Geeta",
    desc: "The divine song of Lord Krishna — timeless wisdom on duty, devotion, and self-realisation.",
  },
  {
    icon: "fa-feather-pointed",
    title: "उपनिषद्",
    titleEn: "Upanishad",
    desc: "The philosophical essence of the Vedas — exploring the nature of Brahman, Atman, and ultimate reality.",
  },
  {
    icon: "fa-fire",
    title: "वेदान्त यज्ञ — अनुष्ठानिक कार्यक्रम",
    titleEn: "Vedanta Yagna — Anushthanic Program",
    desc: "Sacred Vedantic discourse combined with ritualistic anushthanic practices for spiritual transformation.",
  },
  {
    icon: "fa-om",
    title: "श्री शिव महापुराण",
    titleEn: "Shri Shiv Puran",
    desc: "The sacred narrative of Lord Shiva — His leelas, teachings, and the path of devotion to Mahadev.",
  },
  {
    icon: "fa-hands-praying",
    title: "देवी भागवत महापुराण",
    titleEn: "Devi Bhagwat Maha Puran",
    desc: "The glory of the Divine Mother — Her manifestations, grace, and the power of Shakti upasana.",
  },
  {
    icon: "fa-dharmachakra",
    title: "श्री राम चरित मानस",
    titleEn: "Shri Ram Charit Manas",
    desc: "The sacred epic of Lord Ram by Goswami Tulsidas — the ideal of dharma, devotion, and righteous living.",
  },
];

export default function Courses() {
  const handleEnrol = () => {
    alert("🙏 Seva Daan — ₹1,100\n\nAccount Name: Shri Matrishakti Acharya Peeth Seva Trust\nAccount No: 4694000100063726\nIFSC Code: PNUB0469400\nBank: Punjab National Bank, Dehradun\n\n📱 UPI: 9548295001m@pnb\nPhone: 9548295001\n\nॐ Hari Om Tat Sat");
  };

  return (
    <section id="courses" className="bg-ivory">
      <div className="container">
        <SectionHeader
          eyebrow="Spiritual Discourses"
          title="Courses by Guru Maa"
          subtitle="Sacred teachings and pravachan offered by Aacharya Maa Jagrat Chetna Giri"
        />
        <div className="courses-info-strip">
          <div className="courses-duration">
            <i className="fas fa-clock"></i>
            <span>Each course — 45 minutes per session</span>
          </div>
          <div className="courses-seva-daan">
            <i className="fas fa-hand-holding-heart"></i>
            <span>Seva Daan — <strong>&#x20B9;1,100</strong> per course</span>
          </div>
        </div>
        <div className="courses-grid">
          {courses.map((course) => (
            <div className="course-card" key={course.titleEn}>
              <div className="course-card-icon">
                <i className={`fas ${course.icon}`}></i>
              </div>
              <div className="course-card-title-hi">{course.title}</div>
              <div className="course-card-title-en">{course.titleEn}</div>
              <div className="course-card-desc">{course.desc}</div>
              <div className="course-card-footer">
                <div className="course-card-tag">
                  <i className="fas fa-clock"></i> 45 min
                </div>
                <div className="course-card-price">&#x20B9;1,100</div>
              </div>
              <button className="course-enrol-btn" onClick={handleEnrol}>
                <i className="fas fa-hand-holding-heart"></i> Enrol via Seva Daan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
