"use client";

import SectionHeader from "./SectionHeader";
import { useLang } from "../i18n/LangContext";

export default function ShaktiPeeth() {
  const { t } = useLang();

  const featureIcons = ["fa-om", "fa-fire", "fa-hands-praying", "fa-dharmachakra"];

  return (
    <section id="shaktipeeth" className="bg-dark">
      <div className="container">
        <SectionHeader
          eyebrow={t("shakti.eyebrow")}
          title={t("shakti.title")}
          subtitle={t("shakti.subtitle")}
          darkOrnament
        />
        <div className="shakti-layout">
          <div className="shakti-content">
            <h3>{t("shakti.aboutHeading")}</h3>
            <p dangerouslySetInnerHTML={{ __html: t("shakti.aboutP1") }} />
            <p dangerouslySetInnerHTML={{ __html: t("shakti.aboutP2") }} />
            <div className="shakti-features">
              {t("shakti.features").split(",").map((item, idx) => {
                const [title, desc] = item.split("|");
                return (
                  <div className="shakti-feature" key={title}>
                    <i className={`fas ${featureIcons[idx]} shakti-feature-icon`}></i>
                    <div>
                      <div className="shakti-feature-title">{title}</div>
                      <div className="shakti-feature-desc">{desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="shakti-aside">
            <div className="shakti-card">
              <div className="shakti-card-icon"><i className="fas fa-gopuram"></i></div>
              <div className="shakti-card-title">Shri Rameshwaram Mahadev Shakti Peeth</div>
              <div className="shakti-card-divider"></div>
              <div className="shakti-card-detail">
                <i className="fas fa-user-shield"></i>
                <span>{t("shakti.establishedBy")}</span>
              </div>
              <div className="shakti-card-detail">
                <i className="fas fa-om"></i>
                <span>{t("shakti.devotedTo")}</span>
              </div>
              <div className="shakti-card-detail">
                <i className="fas fa-hands-praying"></i>
                <span>{t("shakti.openFor")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
