import SectionHeader from "./SectionHeader";

export default function Social() {
  return (
    <section id="social" className="bg-parchment">
      <div className="container">
        <SectionHeader
          eyebrow="Stay Connected"
          title="Social Media"
          subtitle="Daily inspiration, satsang updates & divine moments"
        />
        <div className="social-layout">
          {/* Facebook */}
          <div className="fb-panel">
            <div className="platform-header fb-header-bg">
              <span className="platform-header-icon"><i className="fab fa-facebook-f"></i></span>
              <div>
                <div className="platform-header-name">Sadhvi Jagrit Chetana Giri</div>
                <div className="platform-header-meta">4.8M followers · Spiritual Leader</div>
              </div>
            </div>
            <div className="fb-post-list">
              <div className="fb-post">
                <div className="fb-post-top">
                  <div className="fb-avatar"><i className="fas fa-pray"></i></div>
                  <div>
                    <div className="fb-post-name">Sadhvi Jagrit Chetana Giri</div>
                    <div className="fb-post-time">2 hours ago · &#x1F310;</div>
                  </div>
                </div>
                <div className="fb-post-text">
                  &#x1F64F; &#x0950; नमः शिवाय<br /><br />
                  The mind that is constantly engaged in service has no time for sorrow. When you forget yourself in the service of others, you discover the Self — which is pure bliss. <em>Serve, love, meditate, realize.</em><br /><br />
                  आज का विचार: &ldquo;सेवा ही सबसे बड़ी पूजा है।&rdquo;
                </div>
                <div className="fb-post-reactions">
                  <button className="fb-react-btn"><i className="fas fa-thumbs-up"></i> 8.4K</button>
                  <button className="fb-react-btn"><i className="fas fa-comment"></i> 423</button>
                  <button className="fb-react-btn"><i className="fas fa-share"></i> 2.1K</button>
                </div>
              </div>
              <div className="fb-post">
                <div className="fb-post-top">
                  <div className="fb-avatar"><i className="fas fa-pray"></i></div>
                  <div>
                    <div className="fb-post-name">Sadhvi Jagrit Chetana Giri</div>
                    <div className="fb-post-time">Yesterday · &#x1F310;</div>
                  </div>
                </div>
                <div className="fb-post-text">
                  &#x1F4E2; <strong>Upcoming Satsang — Varanasi</strong><br /><br />
                  Join us for a 3-day Gita Yagna at Sankat Mochan Ashram, July 15–17, 2024. Free entry. Prasad seva after each session.<br />
                  Registration: +91 98765 43210
                </div>
                <div className="fb-post-reactions">
                  <button className="fb-react-btn"><i className="fas fa-thumbs-up"></i> 5.2K</button>
                  <button className="fb-react-btn"><i className="fas fa-comment"></i> 891</button>
                  <button className="fb-react-btn"><i className="fas fa-share"></i> 4.7K</button>
                </div>
              </div>
            </div>
            <div className="platform-footer">
              <a href="https://www.facebook.com/jagrat.jyoti/" target="_blank" rel="noopener noreferrer" className="platform-follow-btn fb-follow-btn"><i className="fab fa-facebook-f"></i> Follow on Facebook</a>
            </div>
          </div>

          {/* Instagram */}
          <div className="fb-panel">
            <div className="platform-header ig-header-bg">
              <span className="platform-header-icon"><i className="fab fa-instagram"></i></span>
              <div>
                <div className="platform-header-name">@sadhvi_jagrit_chetana_giri</div>
                <div className="platform-header-meta">2.1M followers · 1,240 posts</div>
              </div>
            </div>
            <div className="insta-grid-wrap">
              {[
                { bg: "linear-gradient(135deg,#E8821A,#D4A017)", emoji: "\u{1FAB7}" },
                { bg: "linear-gradient(135deg,#7B1C1C,#E8821A)", emoji: "\u{1F64F}" },
                { bg: "linear-gradient(135deg,#1a6b1a,#4CAF50)", emoji: "\u{1F33F}" },
                { bg: "linear-gradient(135deg,#1a1a6b,#6b1a6b)", emoji: "\u{1F549}️" },
                { bg: "linear-gradient(135deg,#6b4a00,#E8821A)", emoji: "\u{1FA94}" },
                { bg: "linear-gradient(135deg,#4a0E0E,#7B1C1C)", emoji: "\u{1F4FF}" },
              ].map((cell, i) => (
                <div className="insta-cell" key={i} style={{ background: cell.bg }}>
                  {cell.emoji}
                </div>
              ))}
            </div>
            <div className="insta-caption">
              <strong>Latest:</strong> &ldquo;The lamp that gives light to others first burns itself — this is the way of the Guru, the Mother, the Devi. &#x1FA94;&rdquo;
            </div>
            <div className="platform-footer">
              <a href="#" className="platform-follow-btn ig-follow-btn"><i className="fab fa-instagram"></i> Follow on Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
