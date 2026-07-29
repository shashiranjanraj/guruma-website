"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";

type TabId = "about" | "education" | "diksha" | "gurus";

export default function Profile() {
  const [activeTab, setActiveTab] = useState<TabId>("about");

  return (
    <section id="profile" className="bg-ivory">
      <div className="container">
        <SectionHeader
          eyebrow="Sacred Biography"
          title="About Sadhvi Ji"
          subtitle="Life, Education, Diksha & the Sacred Guru Parampara"
        />
        <div className="profile-layout">
          <aside className="profile-sidebar">
            <div className="profile-portrait">
              <div className="profile-portrait-img">
                <img src="/images/profile-portrait.jpg" alt="Acharya Maa Jagrat Chetna Giri" />
              </div>
              <div className="hairline"></div>
              <div className="profile-portrait-body">
                <div className="profile-portrait-name">Acharya Maa Jagrat Chetna Giri</div>
                <div className="profile-portrait-title">Anant Shree 1008 Acharya Mahamandaleshwar</div>
              </div>
              <div className="profile-stats">
                <div className="stat-cell">
                  <div className="stat-cell-num">16<span style={{ fontSize: "1rem" }}>+</span></div>
                  <div className="stat-cell-label">Years with Gurudev</div>
                </div>
                <div className="stat-cell">
                  <div className="stat-cell-num">2016</div>
                  <div className="stat-cell-label">Sanyas Diksha</div>
                </div>
              </div>
            </div>
          </aside>

          <div>
            <div className="tab-nav">
              {(["about", "education", "diksha", "gurus"] as TabId[]).map((tab) => (
                <button
                  key={tab}
                  className={`tab-nav-btn${activeTab === tab ? " active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === "gurus" ? "Guru Parampara" : tab === "about" ? "About" : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className={`tab-pane${activeTab === "about" ? " active" : ""}`}>
              <h3>About Acharya Maa</h3>
              <p><strong>Anant Shree 1008 Acharya Mahamandaleshwar Acharya Maa Jagrat Chetna Giri</strong> is the President of <strong>Shri Matrishakti Acharya Peeth Seva Trust (Regd.)</strong>, based in Dehradun, Uttarakhand.</p>
              <p>She received her <strong>Sanyas Diksha</strong> on <strong>12 May 2016</strong> at the sacred <em>Simhastha Ujjain Mahakumbh</em> at Mahakaleshwar, under the guidance of her revered Gurudev.</p>
              <p>Having been in the sacred refuge of Gurudev for approximately <strong>16 years</strong>, she has dedicated her life to the path of devotion, seva, and spiritual awakening — serving humanity through the teachings of Sanatan Dharma.</p>
            </div>

            <div className={`tab-pane${activeTab === "education" ? " active" : ""}`}>
              <h3>Academic Education</h3>
              <div className="lineage-list">
                {[
                  { name: "M.A. in Hindi Literature", desc: "Postgraduate degree in Hindi Literature" },
                  { name: "M.A. in English Literature", desc: "Postgraduate degree in English Literature" },
                  { name: "PGDCA — Computer Applications", desc: "Post Graduate Diploma in Computer Applications" },
                  { name: "Indian Classical Music", desc: "Training in Indian Classical Music" },
                ].map((item) => (
                  <div className="lineage-item" key={item.name}>
                    <span className="lineage-icon">&#x1F393;</span>
                    <div>
                      <div className="lineage-name">{item.name}</div>
                      <div className="lineage-desc">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 style={{ marginTop: "32px" }}>Spiritual Education</h3>
              <div className="lineage-list">
                {[
                  { name: "Upanishads", desc: "Study of the principal Upanishads — the philosophical foundation of Vedanta" },
                  { name: "Puranas — Ramayana & Vedanta", desc: "In-depth study of the Ramayana and Vedantic philosophy" },
                  { name: "Shreemad Bhagwat Puran", desc: "Comprehensive study of the Shreemad Bhagwat Maha Puran" },
                  { name: "Devi Bhagwat Puran", desc: "Study of Devi Bhagwat Puran — the glory of the Divine Mother" },
                  { name: "Shiva Maha Puran", desc: "Study of Shiva Maha Puran — the sacred text of Lord Shiva" },
                  { name: "Bhagavad Gita", desc: "Deep study and discourse of the Shreemad Bhagavad Gita" },
                ].map((item) => (
                  <div className="lineage-item" key={item.name}>
                    <span className="lineage-icon">&#x1F4D6;</span>
                    <div>
                      <div className="lineage-name">{item.name}</div>
                      <div className="lineage-desc">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`tab-pane${activeTab === "diksha" ? " active" : ""}`}>
              <h3>Sanyas Diksha</h3>
              <p>Acharya Maa Jagrat Chetna Giri received her <strong>Sanyas Diksha</strong> on <strong>12 May 2016</strong> at the auspicious occasion of <em>Simhastha Ujjain Mahakumbh</em> at the sacred <strong>Mahakaleshwar</strong>, Ujjain.</p>
              <p>She was initiated into the <strong>Giri Order</strong> of the Dashanami Sannyasa tradition by her revered Gurudev, <em>Yugpurush Shree Swami Parmanand Giri Ji Maharaj</em> of Haridwar.</p>
              <p>Her diksha name <strong>&ldquo;Jagrat Chetna&rdquo;</strong> signifies <em>Awakened Consciousness</em> — the very essence of her spiritual mission and teaching. She wears the traditional <em>Gerua</em> (saffron) robes as a symbol of renunciation and selfless service.</p>
            </div>

            <div className={`tab-pane${activeTab === "gurus" ? " active" : ""}`}>
              <h3>Guru Parampara — Sacred Lineage</h3>
              <p>The Guru-Shishya tradition holds immense significance in India. A Guru nurtures the soul of the disciple through a sacred spiritual bond. Just as sunlight enables us to see every object in the world, the light of <strong>Guru Tattva</strong> within our inner being resolves our sorrows and afflictions. We must offer ourselves with grateful devotion and surrender to our Guru — this is the true essence of the Guru-Shishya Parampara.</p>
              <div className="lineage-list">
                <div className="lineage-item">
                  <span className="lineage-icon">&#x1FAB7;</span>
                  <div>
                    <div className="lineage-name">Yugpurush Shree Swami Parmanand Giri Ji Maharaj</div>
                    <div className="lineage-desc">Gurudev · Haridwar · Revered Master of the Giri Order · Bestowed Sanyas Diksha at Simhastha Ujjain Mahakumbh, 12 May 2016</div>
                  </div>
                </div>
                <div className="lineage-item" style={{ borderLeftColor: "var(--primary, #E8821A)" }}>
                  <span className="lineage-icon">&#x1FAB7;</span>
                  <div>
                    <div className="lineage-name">Anant Shree 1008 Acharya Mahamandaleshwar Acharya Maa Jagrat Chetna Giri</div>
                    <div className="lineage-desc">President · Shri Matrishakti Acharya Peeth Seva Trust (Regd.) · Dehradun, Uttarakhand</div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: "24px", padding: "20px", background: "rgba(232,130,26,0.06)", borderRadius: "12px", borderLeft: "3px solid var(--primary, #E8821A)" }}>
                <h4 style={{ marginBottom: "8px" }}>Guru Purnima</h4>
                <p>Guru Purnima is celebrated on the full moon day (Purnima) of Shukla Paksha in the month of Ashadh, during the rainy season. It is a day to honour the Guru, express gratitude, and rededicate oneself to the spiritual path.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
