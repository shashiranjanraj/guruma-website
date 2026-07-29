"use client";

import { FormEvent } from "react";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("🙏 Thank you for reaching out! Your message has been sent to Shri Matrishakti Acharya Peeth Seva Trust. We will get back to you soon. Hari Om!");
    (e.target as HTMLFormElement).reset();
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
              <div className="form-field">
                <label className="form-label">Your Name</label>
                <input type="text" className="form-input" placeholder="Enter your full name" required />
              </div>
              <div className="form-field">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-input" placeholder="your@email.com" required />
              </div>
              <div className="form-field">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-input" placeholder="+91 XXXXX XXXXX" />
              </div>
              <div className="form-field">
                <label className="form-label">Subject</label>
                <select className="form-input" required defaultValue="">
                  <option value="" disabled>Select a subject</option>
                  <option value="diksha">Diksha / Initiation Inquiry</option>
                  <option value="satsang">Satsang / Program Schedule</option>
                  <option value="donation">Donation Receipt Request</option>
                  <option value="ashram">Ashram Visit / Accommodation</option>
                  <option value="books">Books &amp; Publications</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-field">
                <label className="form-label">Your Message</label>
                <textarea className="form-input" placeholder="Jai Guru Maa! Please write your message here…" required></textarea>
              </div>
              <button type="submit" className="form-submit-btn">🙏 &nbsp; Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
