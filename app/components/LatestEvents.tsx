const events = [
  "श्रावण मास शिव महापुराण कथा — 15 Aug, Dehradun",
  "श्री कृष्ण जन्माष्टमी महोत्सव — 26 Aug, Dehradun",
  "सत्संग एवं भगवद् गीता प्रवचन — Every Sunday, 10:00 AM",
  "शारदीय नवरात्रि महोत्सव — 02 Oct, Shakti Peeth",
];

export default function LatestEvents() {
  const items = [...events, ...events];

  return (
    <div className="marquee-strip">
      <div className="marquee-label">
        <i className="fas fa-om"></i>
        <span>Latest Events</span>
      </div>
      <div className="marquee-track">
        <div className="marquee-content">
          {items.map((event, i) => (
            <span className="marquee-item" key={i}>
              <i className="fas fa-star marquee-dot"></i>
              {event}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
