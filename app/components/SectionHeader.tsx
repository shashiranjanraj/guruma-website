interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  darkOrnament?: boolean;
}

function LotusIcon({ color = "#E07020" }: { color?: string }) {
  return (
    <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Center petal */}
      <ellipse cx="18" cy="14" rx="5" ry="12" stroke={color} strokeWidth="0.8" opacity="0.7" />
      {/* Left petals */}
      <ellipse cx="18" cy="14" rx="5" ry="12" stroke={color} strokeWidth="0.6" opacity="0.5" transform="rotate(-25 18 14)" />
      <ellipse cx="18" cy="14" rx="5" ry="12" stroke={color} strokeWidth="0.5" opacity="0.35" transform="rotate(-50 18 14)" />
      {/* Right petals */}
      <ellipse cx="18" cy="14" rx="5" ry="12" stroke={color} strokeWidth="0.6" opacity="0.5" transform="rotate(25 18 14)" />
      <ellipse cx="18" cy="14" rx="5" ry="12" stroke={color} strokeWidth="0.5" opacity="0.35" transform="rotate(50 18 14)" />
      {/* Center dot */}
      <circle cx="18" cy="14" r="2" fill={color} opacity="0.4" />
    </svg>
  );
}

export default function SectionHeader({ eyebrow, title, subtitle, darkOrnament }: SectionHeaderProps) {
  const lotusColor = darkOrnament ? "#E8963C" : "#E07020";

  return (
    <div className="section-header">
      <div className="ornament-divider">
        <div className="line"></div>
        <span className="glyph">
          <LotusIcon color={lotusColor} />
        </span>
        <div className="line"></div>
      </div>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{subtitle}</p>
      <div
        className="section-ornament"
        style={
          darkOrnament
            ? { background: "linear-gradient(90deg,transparent,rgba(224,112,32,0.5),transparent)" }
            : undefined
        }
      ></div>
    </div>
  );
}
