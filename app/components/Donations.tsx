"use client";

import SectionHeader from "./SectionHeader";
import { useLang } from "../i18n/LangContext";

export default function Donations() {
  const { t } = useLang();
  const handleDonate = () => {
    alert("🏦 Bank Transfer Details\n\nAccount Name: Shri Matrishakti Acharya Peeth Seva Trust\nAccount No: 4694000100063726\nIFSC Code: PNUB0469400\nBank: Punjab National Bank, Dehradun\nPAN: ABLTS9908H\n\n📱 UPI: 9548295001m@pnb\nPhone: 9548295001\n\n🙏 Hari Om Tat Sat");
  };

  return (
    <section id="donations" className="bg-ivory">
      <div className="container">
        <SectionHeader
          eyebrow={t("donations.eyebrow")}
          title={t("donations.title")}
          subtitle={t("donations.subtitle")}
        />
        <p className="donation-lede">
          <em>&ldquo;दानं भोगो नाशस्तिस्रो गतयो भवन्ति वित्तस्य&rdquo;</em><br />
          {t("donations.lede2")}<br />
          {t("donations.lede3")}
        </p>
        <div className="donation-grid">
          {t("donations.items").split(",").map((entry, idx) => {
            const [name, desc] = entry.split("|");
            const icons = ["fa-bowl-rice","fa-book-open","fa-cow","fa-hand-holding-medical"];
            const amounts = ["₹501","₹2,100","₹5,100","₹11,000"];
            const featured = [false,true,false,false];
            return (
              <div className={`donation-tile${featured[idx] ? " featured" : ""}`} key={name}>
                <span className="donation-tile-icon"><i className={`fas ${icons[idx]}`}></i></span>
                <div className="donation-tile-amount">{amounts[idx]}</div>
                <div className="donation-tile-name">{name}</div>
                <div className="donation-tile-desc">{desc}</div>
                <button className="donate-btn" onClick={handleDonate}>{t("donations.contribute")}</button>
              </div>
            );
          })}
        </div>

        <div className="festival-donation-section">
          <h3 className="festival-donation-heading">
            <i className="fas fa-star"></i>
            {t("donations.festivalHeading")}
            <i className="fas fa-star"></i>
          </h3>
          <p className="festival-donation-sub">{t("donations.festivalSub")}</p>
          <div className="festival-grid">
            {t("donations.festivalItems").split(",").map((entry, idx) => {
              const [name, desc] = entry.split("|");
              const icons = ["fa-om","fa-fire","fa-sun","fa-dharmachakra","fa-hands-praying","fa-water","fa-dove","fa-moon"];
              const amounts = ["₹1,100","₹2,100","₹501","₹1,100","₹1,100","₹501","₹1,100","₹1,100"];
              return (
                <div className="festival-card" key={name}>
                  <div className="festival-card-icon"><i className={`fas ${icons[idx]}`}></i></div>
                  <div className="festival-card-body">
                    <div className="festival-card-name">{name}</div>
                    <div className="festival-card-desc">{desc}</div>
                  </div>
                  <div className="festival-card-right">
                    <div className="festival-card-amount">{amounts[idx]}</div>
                    <button className="festival-donate-btn" onClick={handleDonate}>{t("donations.donateBtn")}</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bank-panel">
          <div className="bank-panel-header">
            <i className="fas fa-university"></i>
            <span>{t("donations.bankTitle")}</span>
          </div>
          <div className="bank-panel-body">
            {(() => {
              const labels = t("donations.bankLabels").split(",");
              const vals = [
                "Shri Matrishakti Acharya Peeth Seva Trust",
                "4694000100063726",
                "PNUB0469400",
                "Punjab National Bank, Dehradun",
                "ABLTS9908H",
                "9548295001",
              ];
              return labels.map((label, idx) => (
                <div className="bank-row" key={label}>
                  <div className="bank-row-label">{label}</div>
                  <div className="bank-row-val">{vals[idx]}</div>
                </div>
              ));
            })()}
          </div>
          <div className="upi-strip">
            <div className="upi-strip-label">UPI · PhonePe · Google Pay</div>
            <div className="upi-strip-id">9548295001m@pnb</div>
          </div>
        </div>

        <div className="donation-qr-section">
          <div className="donation-qr-card">
            <div className="donation-qr-title">{t("donations.scanToDonate")}</div>
            <img src="/images/donation-qr.jpg" alt="UPI QR Code - Shri Matrishakti Acharya Peeth Seva Trust" className="donation-qr-img" />
            <div className="donation-qr-upi">UPI: 9548295001m@pnb</div>
          </div>
        </div>
      </div>
    </section>
  );
}
