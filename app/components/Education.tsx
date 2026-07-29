import SectionHeader from "./SectionHeader";

export default function Education() {
  return (
    <section id="education" className="bg-parchment">
      <div className="container">
        <SectionHeader
          eyebrow="Academic & Spiritual Formation"
          title="Education"
          subtitle="Rooted in Vedic tradition, nurtured by classical scholarship"
        />
        <div className="edu-grid">
          <div>
            <div className="edu-col-title">Academic Journey</div>
            <div className="timeline">
              {[
                { year: "1978", title: "Matriculation", inst: "Government Girls Inter College, Haridwar", desc: "Completed schooling with distinction in Sanskrit and Hindi, winning the state Sanskrit recitation award." },
                { year: "1982", title: "B.A. in Sanskrit & Philosophy", inst: "Gurukul Kangri University, Haridwar", desc: "Gold medalist. Specialised in Vedic Literature, Indian Philosophy, and classical Sanskrit grammar (Ashtadhyayi)." },
                { year: "1984", title: "M.A. in Vedanta Philosophy", inst: "Banaras Hindu University, Varanasi", desc: 'Thesis: "The Role of Bhakti in Advaita Vedanta — A Reconciliation." Awarded University Merit Scholarship.' },
                { year: "2001", title: "D.Litt. (Honoris Causa)", inst: "Sampurnanand Sanskrit University, Varanasi", desc: "Honorary Doctorate for outstanding contributions to Sanskrit scholarship and women's spiritual education." },
              ].map((item) => (
                <div className="tl-item" key={item.year}>
                  <div className="tl-dot"></div>
                  <div className="tl-year">{item.year}</div>
                  <div className="tl-title">{item.title}</div>
                  <div className="tl-inst">{item.inst}</div>
                  <div className="tl-desc">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="edu-col-title">Spiritual &amp; Scriptural Training</div>
            <div className="timeline">
              {[
                { year: "1979 – 1984", title: "Vedic Scriptures", inst: "Under Acharya Pandit Giridharlal Shastri, Haridwar", desc: "Studied Rig Veda, 108 Upanishads, Bhagavad Gita, and Brahma Sutras with traditional Bhashya commentaries." },
                { year: "1985 – 1987", title: "Yoga & Meditation", inst: "Sivananda Ashram, Rishikesh", desc: "Advanced training in Raja Yoga, Pranayama, Dhyana, and Vedantic self-inquiry (Atma Vichara)." },
                { year: "1990 – 1993", title: "Tantric Studies & Devi Upasana", inst: "Under Mateshwari Annapurna Devi Ji, Vindhyachal", desc: "In-depth study of Shakta Tantra, Sri Vidya, Devi Mahatmya, and Mantra Shastra." },
                { year: "Ongoing", title: "Teaching & Discourse", inst: "Shri Matrishakti Acharya Peeth Seva Trust, Pan-India", desc: "Over 2,000 discourses delivered. Conducts weekly Satsang, Gita Yagnas, and international retreats." },
              ].map((item) => (
                <div className="tl-item" key={item.year}>
                  <div className="tl-dot"></div>
                  <div className="tl-year">{item.year}</div>
                  <div className="tl-title">{item.title}</div>
                  <div className="tl-inst">{item.inst}</div>
                  <div className="tl-desc">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="edu-achievement-grid">
          {[
            { icon: "\u{1F3C5}", title: "Awards & Recognitions", desc: "Nari Shakti Puraskar (2008), Dharma Ratna Award (2012), UNESCO Women's Spiritual Leader Recognition (2016), Saraswati Samman (2019)." },
            { icon: "\u{1F4DA}", title: "Published Works", desc: 'Author of 14 books including "Ananda ka Marg" (Hindi), "Women in the Vedas" (English), and "Devi — The Mother of All" — translated into 8 languages.' },
            { icon: "\u{1F30F}", title: "International Presence", desc: "Has taught in the USA, UK, Mauritius, Singapore, and Canada. First all-women Vedanta Camp in London (2010), attended by 600 participants." },
            { icon: "\u{1F393}", title: "Gurukul for Women", desc: 'Founded "Vidyapeeth" in 2003 — a free residential gurukul providing Vedic education to 200+ underprivileged girls annually.' },
          ].map((item) => (
            <div className="achievement-card" key={item.title}>
              <span className="achievement-icon">{item.icon}</span>
              <div className="achievement-title">{item.title}</div>
              <div className="achievement-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
