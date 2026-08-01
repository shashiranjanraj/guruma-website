import type { Metadata } from "next";
import { Cinzel, Cinzel_Decorative, EB_Garamond, Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel-decorative",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-eb-garamond",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shrimatrishakti.com"),
  title: "जय गुरुदेव",
  description: "Official portal of Shri Matrishakti Acharya Peeth Seva Trust. Discover the teachings, Vedanta discourses, Bhakti Yoga Satsangs, and humanitarian initiatives led by Aacharya Maa Jagrat Chetna Giri in Dehradun, Uttarakhand.",
  keywords: [
    "Aacharya Maa Jagrat Chetna Giri",
    "Acharya Maa Jagrat Chetna Giri",
    "Acharya Mahamandaleshwar",
    "Shri Matrishakti Acharya Peeth Seva Trust",
    "Vedanta Scholar",
    "Giri Order",
    "Sannyas Diksha",
    "Swami Parmanand Giri Ji Maharaj",
    "Ashram Dehradun",
    "Sanskrit and Vedanta",
    "Go Seva Gaushala",
    "Spiritual Discourse",
    "Bhakti Yoga Seva"
  ],
  openGraph: {
    title: "जय गुरुदेव",
    description: "Official portal of Shri Matrishakti Acharya Peeth Seva Trust. Discover spiritual discourses, Vedanta classes, and charitable services.",
    url: "https://www.shrimatrishakti.com",
    siteName: "Aacharya Maa Jagrat Chetna Giri",
    images: [
      {
        url: "/images/hero-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Aacharya Maa Jagrat Chetna Giri -- Portrait",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aacharya Maa Jagrat Chetna Giri",
    description: "Official portal of Shri Matrishakti Acharya Peeth Seva Trust. Discover spiritual discourses and charitable services.",
    images: ["/images/hero-portrait.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cinzelDecorative.variable} ${ebGaramond.variable} ${cormorantGaramond.variable} ${poppins.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
