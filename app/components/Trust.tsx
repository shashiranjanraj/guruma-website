"use client";

import SectionHeader from "./SectionHeader";
import { useLang } from "../i18n/LangContext";

export default function Trust() {
  const { t } = useLang();

  const icons = ["fa-om", "fa-hands-praying", "fa-cow", "fa-book-open", "fa-dharmachakra", "fa-heart"];

  return (
    <section id="trust" className="bg-dark">
      <div className="container">
        <SectionHeader
          eyebrow={t("trust.eyebrow")}
          title={t("trust.title")}
          subtitle={t("trust.subtitle")}
          darkOrnament
        />
        <div className="trust-layout">
          <div className="trust-body">
            <h3>{t("trust.aboutHeading")}</h3>
            <p dangerouslySetInnerHTML={{ __html: t("trust.aboutP1") }} />
            <p>{t("trust.aboutP2")}</p>
            <ul className="trust-list">
              {t("trust.sevaItems").split(",").map((item) => {
                const [label, desc] = item.split("|");
                return (
                  <li key={label}>
                    <i className="fas fa-diamond"></i>
                    <span><strong>{label}</strong> {desc}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="trust-highlights">
            {t("trust.highlights").split(",").map((item, idx) => {
              const [title, desc] = item.split("|");
              return (
                <div className="trust-highlight-cell" key={title}>
                  <i className={`fas ${icons[idx]} trust-highlight-icon`}></i>
                  <div className="trust-highlight-title">{title}</div>
                  <div className="trust-highlight-desc">{desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
