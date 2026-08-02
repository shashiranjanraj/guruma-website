"use client";

import { useLang } from "../i18n/LangContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-om">&#x0950;</div>
        <div className="footer-name">{t("footer.name")}</div>
        <div className="footer-meta">
          {t("footer.regInfo")}<br />
          &ldquo;सेवा ही सबसे बड़ी पूजा है — Service is the highest worship&rdquo;
        </div>
        <div style={{ width: "120px", height: "1px", background: "linear-gradient(90deg,transparent,rgba(212,168,71,0.3),transparent)" }}></div>
        <div className="footer-copy">{t("footer.copyright")}</div>
      </div>
    </footer>
  );
}
