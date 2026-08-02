"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { useLang } from "../i18n/LangContext";

type TabId = "about" | "education" | "diksha" | "gurus";

export default function Profile() {
  const [activeTab, setActiveTab] = useState<TabId>("about");
  const { t } = useLang();

  return (
    <section id="profile" className="bg-ivory">
      <div className="container">
        <SectionHeader
          eyebrow={t("profile.eyebrow")}
          title={t("profile.title")}
          subtitle={t("profile.subtitle")}
        />
        <div className="profile-layout">
          <aside className="profile-sidebar">
            <div className="profile-portrait">
              <div className="profile-portrait-img">
                <img src="/images/profile-portrait.jpg" alt="Aacharya Maa Jagrat Chetna Giri" />
              </div>
              <div className="hairline"></div>
              <div className="profile-portrait-body">
                <div className="profile-portrait-name">Aacharya Maa Jagrat Chetna Giri</div>
                <div className="profile-portrait-title">Anant Shree 1008 Acharya Mahamandaleshwar</div>
              </div>
              <div className="profile-stats">
                <div className="stat-cell">
                  <div className="stat-cell-num">16<span style={{ fontSize: "1rem" }}>+</span></div>
                  <div className="stat-cell-label">{t("profile.yearsWithGurudev")}</div>
                </div>
                <div className="stat-cell">
                  <div className="stat-cell-num">2016</div>
                  <div className="stat-cell-label">{t("profile.sanyasDiksha")}</div>
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
                  {tab === "about" ? t("profile.tabAbout") : tab === "education" ? t("profile.tabEducation") : tab === "diksha" ? t("profile.tabDiksha") : t("profile.tabGurus")}
                </button>
              ))}
            </div>

            <div className={`tab-pane${activeTab === "about" ? " active" : ""}`}>
              <h3>{t("profile.aboutHeading")}</h3>
              <p dangerouslySetInnerHTML={{ __html: t("profile.aboutP1") }} />
              <p dangerouslySetInnerHTML={{ __html: t("profile.aboutP2") }} />
              <p dangerouslySetInnerHTML={{ __html: t("profile.aboutP3") }} />
            </div>

            <div className={`tab-pane${activeTab === "education" ? " active" : ""}`}>
              <h3>{t("profile.academicEdu")}</h3>
              <div className="lineage-list">
                {t("profile.academicItems").split(",").map((item) => {
                  const [name, desc] = item.split("|");
                  return (
                    <div className="lineage-item" key={name}>
                      <span className="lineage-icon"><i className="fas fa-graduation-cap"></i></span>
                      <div>
                        <div className="lineage-name">{name}</div>
                        <div className="lineage-desc">{desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <h3 style={{ marginTop: "32px" }}>{t("profile.spiritualEdu")}</h3>
              <div className="lineage-list">
                {t("profile.spiritualItems").split(",").map((item) => {
                  const [name, desc] = item.split("|");
                  return (
                    <div className="lineage-item" key={name}>
                      <span className="lineage-icon"><i className="fas fa-book-open"></i></span>
                      <div>
                        <div className="lineage-name">{name}</div>
                        <div className="lineage-desc">{desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={`tab-pane${activeTab === "diksha" ? " active" : ""}`}>
              <h3>{t("profile.dikshaHeading")}</h3>
              <p dangerouslySetInnerHTML={{ __html: t("profile.dikshaP1") }} />
              <p dangerouslySetInnerHTML={{ __html: t("profile.dikshaP2") }} />
              <p dangerouslySetInnerHTML={{ __html: t("profile.dikshaP3") }} />
            </div>

            <div className={`tab-pane${activeTab === "gurus" ? " active" : ""}`}>
              <h3>{t("profile.gurusHeading")}</h3>
              <p dangerouslySetInnerHTML={{ __html: t("profile.gurusIntro") }} />
              <div className="lineage-list">
                <div className="lineage-item">
                  <span className="lineage-icon"><i className="fas fa-dharmachakra"></i></span>
                  <div>
                    <div className="lineage-name">Yugpurush Shree Swami Parmanand Giri Ji Maharaj</div>
                    <div className="lineage-desc">{t("profile.gurudevDesc")}</div>
                  </div>
                </div>
                <div className="lineage-item" style={{ borderLeftColor: "var(--primary, #E8821A)" }}>
                  <span className="lineage-icon"><i className="fas fa-hands-praying"></i></span>
                  <div>
                    <div className="lineage-name">Anant Shree 1008 Acharya Mahamandaleshwar Aacharya Maa Jagrat Chetna Giri</div>
                    <div className="lineage-desc">{t("profile.discipleDesc")}</div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: "24px", padding: "20px", background: "rgba(232,130,26,0.06)", borderRadius: "12px", borderLeft: "3px solid var(--primary, #E8821A)" }}>
                <h4 style={{ marginBottom: "8px" }}>{t("profile.guruPurnima")}</h4>
                <p>{t("profile.guruPurnimaDesc")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
