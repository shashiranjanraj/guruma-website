import SectionHeader from "./SectionHeader";

export default function ShaktiPeeth() {
  return (
    <section id="shaktipeeth" className="bg-dark">
      <div className="container">
        <SectionHeader
          eyebrow="Sacred Establishment"
          title="Shri Rameshwaram Mahadev Shakti Peeth"
          subtitle="A divine abode established by Aacharya Maa Jagrat Chetna Giri"
          darkOrnament
        />
        <div className="shakti-layout">
          <div className="shakti-content">
            <h3>About the Shakti Peeth</h3>
            <p>
              <strong>Shri Rameshwaram Mahadev Shakti Peeth</strong> was established by <strong>Aacharya Maa Jagrat Chetna Giri</strong> as a sacred centre devoted to Lord Shiva and the Divine Mother. It stands as a place of deep spiritual energy, worship, and meditation.
            </p>
            <p>
              The Peeth serves as a spiritual haven where devotees gather for daily puja, aarti, and dhyan — immersing themselves in the divine vibrations of Mahadev and Shakti. It is a living symbol of Maa Ji&rsquo;s vision to bring the sacred presence of Rameshwaram closer to the hearts of the faithful.
            </p>
            <div className="shakti-features">
              {[
                { icon: "fa-om", title: "Shiva Aradhana", desc: "Daily worship and abhishek of Lord Mahadev" },
                { icon: "fa-fire", title: "Yagna & Havan", desc: "Sacred fire ceremonies for spiritual purification" },
                { icon: "fa-hands-praying", title: "Shakti Upasana", desc: "Devotion to the Divine Mother in her many forms" },
                { icon: "fa-dharmachakra", title: "Satsang & Dhyan", desc: "Regular spiritual gatherings and meditation sessions" },
              ].map((item) => (
                <div className="shakti-feature" key={item.title}>
                  <i className={`fas ${item.icon} shakti-feature-icon`}></i>
                  <div>
                    <div className="shakti-feature-title">{item.title}</div>
                    <div className="shakti-feature-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="shakti-aside">
            <div className="shakti-card">
              <div className="shakti-card-icon"><i className="fas fa-gopuram"></i></div>
              <div className="shakti-card-title">Shri Rameshwaram Mahadev Shakti Peeth</div>
              <div className="shakti-card-divider"></div>
              <div className="shakti-card-detail">
                <i className="fas fa-user-shield"></i>
                <span>Established by Aacharya Maa Jagrat Chetna Giri</span>
              </div>
              <div className="shakti-card-detail">
                <i className="fas fa-om"></i>
                <span>Devoted to Lord Shiva & Shakti</span>
              </div>
              <div className="shakti-card-detail">
                <i className="fas fa-hands-praying"></i>
                <span>Open for darshan, puja & satsang</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
