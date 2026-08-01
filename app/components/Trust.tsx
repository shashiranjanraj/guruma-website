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
            <p>Guided by the spirit of devotion and selfless action, the Trust strives to serve society through spiritual awakening, Go-Seva, and the timeless values of Sanatan Dharma.</p>
            <ul className="trust-list">
              {[
{ label: "Seva & Sadhana:", desc: "Devoted to selfless service as a path to spiritual growth and inner awakening" },
                { label: "Go-Seva:", desc: "Caring for and protecting cows as a sacred expression of compassion" },
                { label: "Spiritual Discourses:", desc: "Sharing the timeless wisdom of Sanatan Dharma through satsang and pravachan" },
                { label: "Community Welfare:", desc: "Uplifting communities through acts of kindness, charity, and devotion" },
                { label: "Satsang & Bhajan:", desc: "Nurturing devotion through regular gatherings of prayer, kirtan, and meditation" },
              ].map((item) => (
                <li key={item.label}>
                  <i className="fas fa-diamond"></i>
                  <span><strong>{item.label}</strong> {item.desc}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="trust-highlights">
            {[
              { icon: "fa-om", title: "Sanatan Dharma", desc: "Preserving and spreading the eternal teachings of Vedic tradition" },
              { icon: "fa-hands-praying", title: "Bhakti & Seva", desc: "Walking the path of devotion through selfless love and service" },
              { icon: "fa-cow", title: "Go-Seva", desc: "Honouring the sacred bond with Gau Mata through care and protection" },
              { icon: "fa-book-open", title: "Gyan & Pravachan", desc: "Illuminating hearts with the wisdom of scriptures and spiritual discourse" },
              { icon: "fa-dharmachakra", title: "Guru Parampara", desc: "Carrying forward the sacred lineage of the Guru-Shishya tradition" },
              { icon: "fa-heart", title: "Lok Kalyan", desc: "Serving humanity with compassion as an offering to the Divine" },
            ].map((item) => (
              <div className="trust-highlight-cell" key={item.title}>
                <i className={`fas ${item.icon} trust-highlight-icon`}></i>
                <div className="trust-highlight-title">{item.title}</div>
                <div className="trust-highlight-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
