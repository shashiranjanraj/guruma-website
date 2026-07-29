import SectionHeader from "./SectionHeader";

export default function Trust() {
  return (
    <section id="trust" className="bg-dark">
      <div className="container">
        <SectionHeader
          eyebrow="Institutional Service"
          title="Shri Matrishakti Acharya Peeth Seva Trust"
          subtitle="Serving humanity as a form of worship since 1995"
          darkOrnament
        />
        <div className="trust-layout">
          <div className="trust-body">
            <h3>About the Trust</h3>
            <p>The <strong>Shri Matrishakti Acharya Peeth Seva Trust</strong> was founded with the vision of uniting spiritual wisdom with practical service. The Trust operates on the principle: <em>&ldquo;Atma Seva is Lok Seva.&rdquo;</em></p>
            <p>Registered under FCRA and holding 80G &amp; 12A exemptions, it has grown into a multi-dimensional organisation running ashrams, schools, hospitals, and humanitarian programmes across 14 states over three decades.</p>
            <ul className="trust-list">
              {[
                { label: "Ananda Vidyapeeth:", desc: "Free residential gurukul for 200+ underprivileged girls in Vedic and modern education" },
                { label: "Free Medical Camps:", desc: "Monthly health camps in rural villages — 5,000+ patients served annually" },
                { label: "Go-Seva:", desc: "Gaushala housing 800+ cows across 4 locations" },
                { label: "Ganga Shuddhi Abhiyan:", desc: "Regular river-cleaning drives with local communities" },
                { label: "Disaster Relief:", desc: "Immediate aid during floods and earthquakes in Uttarakhand, Nepal, and Kerala" },
                { label: "Satsang & Spiritual Programs:", desc: "Free weekly satsangs, Gita Yagnas, and meditation retreats pan-India" },
              ].map((item) => (
                <li key={item.label}>
                  <i className="fas fa-diamond"></i>
                  <span><strong>{item.label}</strong> {item.desc}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="trust-counters">
            {[
              { num: "12", label: "Ashrams Across India" },
              { num: "200", suffix: "+", label: "Girls in Gurukul" },
              { num: "5K", suffix: "+", label: "Medical Patients / Year" },
              { num: "800", suffix: "+", label: "Cows Protected" },
              { num: "29", label: "Years of Seva" },
              { num: "14", label: "States Reached" },
            ].map((item) => (
              <div className="trust-count-cell" key={item.label}>
                <div className="trust-count-num">
                  {item.num}
                  {item.suffix && <span className="trust-count-suffix">{item.suffix}</span>}
                </div>
                <div className="trust-count-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
