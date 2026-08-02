const API_KEY = process.env.FREE_ASTRO_API_KEY || "4e4a077ecf58485d9cac95468edd189966f9e48711fba277d816f755397eddb4";
const API_BASE = "https://api.freeastroapi.com";

export async function GET() {
  const now = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
  );

  const body = {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate(),
    hour: now.getHours(),
    minute: now.getMinutes(),
    lat: 30.3165,
    lng: 78.0322,
    tz_str: "Asia/Kolkata",
    ayanamsha: "lahiri",
    house_system: "whole_sign",
    node_type: "mean",
  };

  try {
    const res = await fetch(`${API_BASE}/api/v2/vedic/panchang`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      return Response.json(
        { error: "Failed to fetch panchang" },
        { status: res.status }
      );
    }

    const data = await res.json();
    return Response.json(data, {
      headers: { "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=3600" },
    });
  } catch {
    return Response.json({ error: "API unavailable" }, { status: 502 });
  }
}
