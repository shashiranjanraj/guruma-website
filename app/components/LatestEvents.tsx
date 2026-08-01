import SectionHeader from "./SectionHeader";

const events = [
  {
    date: "15",
    month: "Aug",
    title: "श्रावण मास शिव महापुराण कथा",
    titleEn: "Shravan Maas Shiv Maha Puran Katha",
    location: "Shri Rameshwaram Mahadev Shakti Peeth, Dehradun",
    time: "Morning & Evening Sessions",
    tag: "Upcoming",
  },
  {
    date: "26",
    month: "Aug",
    title: "श्री कृष्ण जन्माष्टमी महोत्सव",
    titleEn: "Shri Krishna Janmashtami Mahotsav",
    location: "Shri Matrishakti Acharya Peeth, Dehradun",
    time: "Midnight Abhishek & Bhajan Kirtan",
    tag: "Upcoming",
  },
  {
    date: "07",
    month: "Sep",
    title: "सत्संग एवं भगवद् गीता प्रवचन",
    titleEn: "Satsang & Bhagwat Geeta Pravachan",
    location: "Dehradun, Uttarakhand",
    time: "Every Sunday — 10:00 AM",
    tag: "Weekly",
  },
  {
    date: "02",
    month: "Oct",
    title: "शारदीय नवरात्रि महोत्सव",
    titleEn: "Sharadiya Navratri Mahotsav",
    location: "Shri Rameshwaram Mahadev Shakti Peeth, Dehradun",
    time: "9 Days — Havan, Puja & Kanya Pujan",
    tag: "Upcoming",
  },
];

export default function LatestEvents() {
  return (
    <section id="events" className="bg-parchment">
      <div className="container">
        <SectionHeader
          eyebrow="Karyakram"
          title="Latest Events"
          subtitle="Upcoming satsang, pravachan & spiritual celebrations"
        />
        <div className="events-grid">
          {events.map((event) => (
            <div className="event-card" key={event.titleEn}>
              <div className="event-card-date">
                <div className="event-card-day">{event.date}</div>
                <div className="event-card-month">{event.month}</div>
              </div>
              <div className="event-card-body">
                <div className="event-card-tag">{event.tag}</div>
                <div className="event-card-title-hi">{event.title}</div>
                <div className="event-card-title-en">{event.titleEn}</div>
                <div className="event-card-meta">
                  <span><i className="fas fa-map-marker-alt"></i> {event.location}</span>
                </div>
                <div className="event-card-meta">
                  <span><i className="fas fa-clock"></i> {event.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
