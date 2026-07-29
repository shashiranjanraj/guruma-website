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
                { src: "/images/gallery-with-guru.jpg", likes: "4.8K", comments: "124" },
                { src: "/images/gallery-ashram-smiling.jpg", likes: "6.2K", comments: "312" },
                { src: "/images/slider-garden.jpg", likes: "3.5K", comments: "98" },
                { src: "/images/slider-celebration.jpg", likes: "8.1K", comments: "442" },
                { src: "/images/gallery-with-devotees.jpg", likes: "5.4K", comments: "287" },
                { src: "/images/slider-with-ram.jpg", likes: "9.2K", comments: "518" },
              ].map((cell, i) => (
                <div className="insta-cell" key={i}>
                  <img src={cell.src} alt="Instagram post" />
                  <div className="insta-cell-overlay">
                    <span><i className="fas fa-heart"></i> {cell.likes}</span>
                    <span><i className="fas fa-comment"></i> {cell.comments}</span>
                  </div>
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
