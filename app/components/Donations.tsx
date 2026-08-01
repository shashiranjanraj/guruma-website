"use client";

import SectionHeader from "./SectionHeader";

export default function Donations() {
  const handleDonate = () => {
    alert("🏦 Bank Transfer Details\n\nAccount Name: Shri Matrishakti Acharya Peeth Seva Trust\nAccount No: 4694000100063726\nIFSC Code: PNUB0469400\nBank: Punjab National Bank, Dehradun\nPAN: ABLTS9908H\n\n📱 UPI: 9548295001m@pnb\nPhone: 9548295001\n\n🙏 Hari Om Tat Sat");
  };

  return (
    <section id="donations" className="bg-ivory">
      <div className="container">
        <SectionHeader
          eyebrow="Dana — The Highest Dharma"
          title="Support the Seva"
          subtitle="Your contribution is a step on the path of Dharma"
        />
        <p className="donation-lede">
          <em>&ldquo;दानं भोगो नाशस्तिस्रो गतयो भवन्ति वित्तस्य&rdquo;</em><br />
          Wealth has three paths: charity, enjoyment, or decay. Choose the highest path.<br />
          All donations are exempt under Section 80G of the Income Tax Act.
        </p>
        <div className="donation-grid">
          {[
            { icon: "fa-bowl-rice", amount: "₹501", name: "Sadhu Bhojan Seva", desc: "Offer sacred meals to sadhus and saints — the most blessed form of seva.", featured: false },
            { icon: "fa-book-open", amount: "₹2,100", name: "Shiksha Seva", desc: "Support the sacred cause of education — nurturing young minds with knowledge and values.", featured: true },
            { icon: "fa-cow", amount: "₹5,100", name: "Gau Seva", desc: "Contribute to the care, protection, and nourishment of Gau Mata.", featured: false },
            { icon: "fa-hand-holding-medical", amount: "₹11,000", name: "Aarogya Seva", desc: "Fully sponsors a free medical camp in a rural village, treating 100+ patients.", featured: false },
          ].map((item) => (
            <div className={`donation-tile${item.featured ? " featured" : ""}`} key={item.name}>
              <span className="donation-tile-icon"><i className={`fas ${item.icon}`}></i></span>
              <div className="donation-tile-amount">{item.amount}</div>
              <div className="donation-tile-name">{item.name}</div>
              <div className="donation-tile-desc">{item.desc}</div>
              <button className="donate-btn" onClick={handleDonate}>Contribute</button>
            </div>
          ))}
        </div>

        <div className="festival-donation-section">
          <h3 className="festival-donation-heading">
            <i className="fas fa-star"></i>
            Festival Seva Daan
            <i className="fas fa-star"></i>
          </h3>
          <p className="festival-donation-sub">Offer your seva on auspicious occasions and earn divine blessings</p>
          <div className="festival-grid">
            {[
              { icon: "fa-om", name: "Maha Shivratri Seva", desc: "Rudrabhishek, Bhandara & night-long puja for Lord Mahadev", amount: "₹1,100" },
              { icon: "fa-fire", name: "Navratri Havan Seva", desc: "Nine nights of Devi aradhana, havan & kanya pujan", amount: "₹2,100" },
              { icon: "fa-sun", name: "Makar Sankranti Daan", desc: "Til-gur daan, khichdi bhandara & Gau Seva on Sankranti", amount: "₹501" },
              { icon: "fa-dharmachakra", name: "Guru Purnima Seva", desc: "Honour the Guru Parampara with puja, bhandara & pada pujan", amount: "₹1,100" },
              { icon: "fa-hands-praying", name: "Diwali Lakshmi Puja", desc: "Lakshmi-Ganesh puja, deep daan & prasad distribution", amount: "₹1,100" },
              { icon: "fa-water", name: "Ganga Dussehra Seva", desc: "Ganga aarti, deep daan & sacred river puja", amount: "₹501" },
              { icon: "fa-dove", name: "Ram Navami Seva", desc: "Shri Ram Katha, bhandara & community celebration", amount: "₹1,100" },
              { icon: "fa-moon", name: "Janmashtami Seva", desc: "Midnight abhishek, bhajan kirtan & makhaan seva for Shri Krishna", amount: "₹1,100" },
            ].map((item) => (
              <div className="festival-card" key={item.name}>
                <div className="festival-card-icon"><i className={`fas ${item.icon}`}></i></div>
                <div className="festival-card-body">
                  <div className="festival-card-name">{item.name}</div>
                  <div className="festival-card-desc">{item.desc}</div>
                </div>
                <div className="festival-card-right">
                  <div className="festival-card-amount">{item.amount}</div>
                  <button className="festival-donate-btn" onClick={handleDonate}>Donate</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bank-panel">
          <div className="bank-panel-header">
            <i className="fas fa-university"></i>
            <span>Bank Transfer Details</span>
          </div>
          <div className="bank-panel-body">
            {[
              { label: "Account Name", val: "Shri Matrishakti Acharya Peeth Seva Trust" },
              { label: "Account Number", val: "4694000100063726" },
              { label: "IFSC Code", val: "PNUB0469400" },
              { label: "Bank & Branch", val: "Punjab National Bank, Dehradun" },
              { label: "PAN Number", val: "ABLTS9908H" },
              { label: "Phone", val: "9548295001" },
            ].map((row) => (
              <div className="bank-row" key={row.label}>
                <div className="bank-row-label">{row.label}</div>
                <div className="bank-row-val">{row.val}</div>
              </div>
            ))}
          </div>
          <div className="upi-strip">
            <div className="upi-strip-label">UPI · PhonePe · Google Pay</div>
            <div className="upi-strip-id">9548295001m@pnb</div>
          </div>
        </div>

        <div className="donation-qr-section">
          <div className="donation-qr-card">
            <div className="donation-qr-title">Scan to Donate via UPI</div>
            <img src="/images/donation-qr.jpg" alt="UPI QR Code - Shri Matrishakti Acharya Peeth Seva Trust" className="donation-qr-img" />
            <div className="donation-qr-upi">UPI: 9548295001m@pnb</div>
          </div>
        </div>
      </div>
    </section>
  );
}
