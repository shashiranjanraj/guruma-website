"use client";

import { FormEvent, useState } from "react";
import SectionHeader from "./SectionHeader";
import { useLang } from "../i18n/LangContext";

export default function Contact() {
  const { t } = useLang();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append("access_key", "f969606f-ebaf-43f8-ad9f-d694fa639639");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-dark">
      <div className="container">
        <SectionHeader
          eyebrow={t("contact.eyebrow")}
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
          darkOrnament
        />
        <div className="contact-layout">
          <div>
            <div className="contact-info-title">{t("contact.getInTouch")}</div>
            {[
              { icon: "fa-map-marker-alt", label: t("contact.trust"), val: <>Shri Matrishakti Acharya Peeth Seva Trust (Regd.),<br />Dehradun, Uttarakhand</> },
              { icon: "fa-phone-alt", label: t("contact.phone"), val: <>+91 95482 95001</> },
              { icon: "fa-envelope", label: t("contact.email"), val: <>jagratjyoti@gmail.com</> },
            ].map((entry) => (
              <div className="contact-entry" key={entry.label}>
                <div className="contact-entry-icon"><i className={`fas ${entry.icon}`}></i></div>
                <div>
                  <div className="contact-entry-label">{entry.label}</div>
                  <div className="contact-entry-val">{entry.val}</div>
                </div>
              </div>
            ))}
            <div className="contact-social-row">
              {[
                { icon: "fa-facebook-f", href: "https://www.facebook.com/jagrat.jyoti/" },
                { icon: "fa-youtube", href: "https://www.youtube.com/@SadhviJagratChetna-nq1rb" },
              ].map((item) => (
                <a href={item.href} className="contact-social-btn" key={item.icon} target="_blank" rel="noopener noreferrer">
                  <i className={`fab ${item.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-panel">
            <div className="contact-form-title">{t("contact.sendMsg")}</div>
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="subject" value="New message from Shri Matrishakti website" />
              <div className="form-field">
                <label className="form-label">{t("contact.yourName")}</label>
                <input type="text" name="name" className="form-input" placeholder={t("contact.namePlaceholder")} required />
              </div>
              <div className="form-field">
                <label className="form-label">{t("contact.emailLabel")}</label>
                <input type="email" name="email" className="form-input" placeholder="your@email.com" required />
              </div>
              <div className="form-field">
                <label className="form-label">{t("contact.phoneLabel")}</label>
                <input type="tel" name="phone" className="form-input" placeholder="+91 XXXXX XXXXX" />
              </div>
              <div className="form-field">
                <label className="form-label">{t("contact.subject")}</label>
                <select name="topic" className="form-input" required defaultValue="">
                  <option value="" disabled>{t("contact.selectSubject")}</option>
                  {t("contact.subjectOptions").split(",").map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className="form-field">
                <label className="form-label">{t("contact.yourMessage")}</label>
                <textarea name="message" className="form-input" placeholder={t("contact.messagePlaceholder")} required></textarea>
              </div>
              <button type="submit" className="form-submit-btn" disabled={status === "sending"}>
                {status === "sending" ? t("contact.sending") : status === "sent" ? t("contact.sent") : t("contact.sendBtn")}
              </button>
              {status === "sent" && (
                <div className="form-success-msg">{t("contact.successMsg")}</div>
              )}
              {status === "error" && (
                <div className="form-error-msg">{t("contact.errorMsg")}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
