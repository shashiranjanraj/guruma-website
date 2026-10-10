import { ImageResponse } from "next/og";

export const alt = "Aacharya Maa Jagrat Chetna Giri — Shri Matrishakti Acharya Peeth Seva Trust, Dehradun";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #7A2E0B 0%, #E07020 100%)",
          color: "#FFF4E0",
          textAlign: "center",
          padding: 80,
        }}
      >
        <div style={{ fontSize: 40, letterSpacing: 6, opacity: 0.85 }}>JAI GURUDEV</div>
        <div style={{ fontSize: 76, fontWeight: 700, marginTop: 24, lineHeight: 1.1 }}>
          Aacharya Maa Jagrat Chetna Giri
        </div>
        <div style={{ fontSize: 34, marginTop: 36, opacity: 0.9 }}>
          Shri Matrishakti Acharya Peeth Seva Trust · Dehradun, Uttarakhand
        </div>
      </div>
    ),
    size,
  );
}
