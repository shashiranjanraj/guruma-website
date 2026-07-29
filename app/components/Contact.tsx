import SectionHeader from "./SectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="bg-dark">
      <div className="container">
        <SectionHeader
          eyebrow="Connect"
          title="Contact"
          subtitle="Reach out to the Trust"
          darkOrnament
        />
        <div className="contact-layout" style={{ justifyContent: "center" }}>
          <div style={{ maxWidth: "600px", width: "100%" }}>
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
        </div>
      </div>
    </section>
  );
}
