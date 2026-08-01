"use client";

import { FormEvent, useState } from "react";
import SectionHeader from "./SectionHeader";

export default function Contact() {
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
          eyebrow="Connect"
          title="Contact"
          subtitle="Reach out to the Trust"
          darkOrnament
        />
        <div className="contact-layout">
          <div>
            <div className="contact-info-title">Get in Touch</div>
            {[
              { icon: "fa-map-marker-alt", label: "Trust", val: <>Shri Matrishakti Acharya Peeth Seva Trust (Regd.),<br />Dehradun, Uttarakhand</> },
              { icon: "fa-phone-alt", label: "Phone", val: <>+91 95482 95001</> },
              { icon: "fa-envelope", label: "Email", val: <>jagratjyoti@gmail.com</> },
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
            <div className="contact-form-title">Send a Message</div>
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="subject" value="New message from Shri Matrishakti website" />
              <div className="form-field">
                <label className="form-label">Your Name</label>
                <input type="text" name="name" className="form-input" placeholder="Enter your full name" required />
              </div>
              <div className="form-field">
                <label className="form-label">Email Address</label>
                <input type="email" name="email" className="form-input" placeholder="your@email.com" required />
              </div>
              <div className="form-field">
                <label className="form-label">Phone Number</label>
                <input type="tel" name="phone" className="form-input" placeholder="+91 XXXXX XXXXX" />
              </div>
              <div className="form-field">
                <label className="form-label">Subject</label>
                <select name="topic" className="form-input" required defaultValue="">
                  <option value="" disabled>Select a subject</option>
                  <option value="Diksha / Initiation Inquiry">Diksha / Initiation Inquiry</option>
                  <option value="Satsang / Program Schedule">Satsang / Program Schedule</option>
                  <option value="Donation Receipt Request">Donation Receipt Request</option>
                  <option value="Ashram Visit / Accommodation">Ashram Visit / Accommodation</option>
                  <option value="Books & Publications">Books &amp; Publications</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-field">
                <label className="form-label">Your Message</label>
                <textarea name="message" className="form-input" placeholder="Jai Guru Maa! Please write your message here…" required></textarea>
              </div>
              <button type="submit" className="form-submit-btn" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent!" : "Send Message"}
              </button>
              {status === "sent" && (
                <div className="form-success-msg">Thank you! Your message has been sent to the Trust. Hari Om!</div>
              )}
              {status === "error" && (
                <div className="form-error-msg">Something went wrong. Please try again or contact us directly.</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
