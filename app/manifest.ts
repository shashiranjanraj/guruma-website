import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Shri Matrishakti Acharya Peeth Seva Trust",
    short_name: "Matrishakti",
    description: "Official portal of Aacharya Maa Jagrat Chetna Giri, Dehradun.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFF4E0",
    theme_color: "#E07020",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
