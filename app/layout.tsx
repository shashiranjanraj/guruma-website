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
  title: {
    default: "Aacharya Maa Jagrat Chetna Giri | Shri Matrishakti Acharya Peeth Seva Trust, Dehradun",
    template: "%s | Aacharya Maa Jagrat Chetna Giri",
  },
  applicationName: "Shri Matrishakti Acharya Peeth Seva Trust",
  alternates: { canonical: "/" },
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
    "Bhakti Yoga Seva",
    "जाग्रत चेतना गिरी",
    "आचार्य माँ जाग्रत चेतना गिरी",
    "श्री मातृशक्ति आचार्य पीठ सेवा ट्रस्ट",
    "देहरादून आश्रम",
    "वेदांत प्रवचन",
    "गौ सेवा"
  ],
  openGraph: {
    title: "Aacharya Maa Jagrat Chetna Giri | जय गुरुदेव",
    description: "Official portal of Shri Matrishakti Acharya Peeth Seva Trust. Discover spiritual discourses, Vedanta classes, and charitable services.",
    url: "https://www.shrimatrishakti.com",
    siteName: "Aacharya Maa Jagrat Chetna Giri",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aacharya Maa Jagrat Chetna Giri | जय गुरुदेव",
    description: "Official portal of Shri Matrishakti Acharya Peeth Seva Trust. Discover spiritual discourses and charitable services.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.shrimatrishakti.com/#website",
      url: "https://www.shrimatrishakti.com",
      name: "Shri Matrishakti Acharya Peeth Seva Trust",
      inLanguage: ["hi", "en"],
    },
    {
      "@type": "NGO",
      "@id": "https://www.shrimatrishakti.com/#organization",
      name: "Shri Matrishakti Acharya Peeth Seva Trust",
      url: "https://www.shrimatrishakti.com",
      logo: "https://www.shrimatrishakti.com/icon.svg",
      image: "https://www.shrimatrishakti.com/images/hero-portrait.jpg",
      email: "jagratjyoti@gmail.com",
      telephone: "+91-95482-95001",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dehradun",
        addressRegion: "Uttarakhand",
        addressCountry: "IN",
      },
      founder: { "@id": "https://www.shrimatrishakti.com/#person" },
      sameAs: [
        "https://www.facebook.com/jagrat.jyoti/",
        "https://www.youtube.com/@SadhviJagratChetna-nq1rb",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://www.shrimatrishakti.com/#person",
      name: "Aacharya Maa Jagrat Chetna Giri",
      alternateName: "Acharya Maa Jagrat Chetna Giri",
      jobTitle: "Acharya Mahamandaleshwar",
      image: "https://www.shrimatrishakti.com/images/profile-portrait.jpg",
      url: "https://www.shrimatrishakti.com",
      worksFor: { "@id": "https://www.shrimatrishakti.com/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hi"
      className={`${cinzel.variable} ${cinzelDecorative.variable} ${ebGaramond.variable} ${cormorantGaramond.variable} ${poppins.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
