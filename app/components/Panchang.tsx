"use client";

import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import { useLang } from "../i18n/LangContext";

interface PanchangData {
  date: string;
  sunrise: string;
  sunset: string;
  weekday: { name: string };
  lunar_month: { name: string; vikram_samvat: number };
  tithi: { name: string; paksha: string };
  nakshatra: { name: string; lord: string; pada: number };
  yoga: { name: string };
  karanas: { name: string }[];
  rahu_kalam: { start: string; end: string };
  request_time_panchang?: {
    tithi?: { name: string; paksha: string };
    nakshatra?: { name: string; pada: number; lord: string };
    yoga?: { name: string };
    karana?: { name: string };
    sun_sign?: { name: string };
    moon_sign?: { name: string };
  };
}

export default function Panchang() {
  const { t } = useLang();
  const [data, setData] = useState<PanchangData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/panchang")
      .then((r) => {
        if (!r.ok) throw new Error();
        return r.json();
      })
      .then((d) => {
        setData(d);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const rtp = data?.request_time_panchang;
  const tithi = rtp?.tithi || data?.tithi;
  const nak = rtp?.nakshatra || data?.nakshatra;
  const yoga = rtp?.yoga || data?.yoga;
  const karana = rtp?.karana || (data?.karanas?.[0]);

  return (
    <section id="panchang" className="bg-parchment">
      <div className="container">
        <SectionHeader
          eyebrow={t("panchang.eyebrow")}
          title={t("panchang.title")}
          subtitle={t("panchang.subtitle")}
        />

        {loading && (
          <div className="panchang-loading">
            <div className="panchang-spinner"></div>
            <span>{t("panchang.loading")}</span>
          </div>
        )}

        {error && (
          <div className="panchang-error">
            <i className="fas fa-exclamation-circle"></i>
            <span>{t("panchang.error")}</span>
          </div>
        )}

        {data && !loading && (
          <>
            <div className="panchang-date-strip">
              <span className="panchang-date-day">{data.weekday?.name}</span>
              <span className="panchang-date-sep"></span>
              <span>{data.date}</span>
              <span className="panchang-date-sep"></span>
              <span>{data.lunar_month?.name} {data.lunar_month?.vikram_samvat && `(V.S. ${data.lunar_month.vikram_samvat})`}</span>
            </div>

            <div className="panchang-grid">
              <div className="panchang-card panchang-card--highlight">
                <i className="fas fa-moon panchang-card-icon"></i>
                <div className="panchang-card-label">{t("panchang.tithi")}</div>
                <div className="panchang-card-value">{tithi?.name}</div>
                <div className="panchang-card-sub">{tithi?.paksha} {t("panchang.paksha")}</div>
              </div>
              <div className="panchang-card">
                <i className="fas fa-star panchang-card-icon"></i>
                <div className="panchang-card-label">{t("panchang.nakshatra")}</div>
                <div className="panchang-card-value">{nak?.name}</div>
                <div className="panchang-card-sub">{t("panchang.pada")} {nak?.pada} &middot; {t("panchang.lord")}: {nak?.lord}</div>
              </div>
              <div className="panchang-card">
                <i className="fas fa-dharmachakra panchang-card-icon"></i>
                <div className="panchang-card-label">{t("panchang.yoga")}</div>
                <div className="panchang-card-value">{yoga?.name}</div>
              </div>
              <div className="panchang-card">
                <i className="fas fa-om panchang-card-icon"></i>
                <div className="panchang-card-label">{t("panchang.karana")}</div>
                <div className="panchang-card-value">{karana?.name}</div>
              </div>
            </div>

            <div className="panchang-timings">
              <div className="panchang-time-card">
                <i className="fas fa-sun panchang-time-icon sunrise"></i>
                <div>
                  <div className="panchang-time-label">{t("panchang.sunrise")}</div>
                  <div className="panchang-time-value">{data.sunrise}</div>
                </div>
              </div>
              <div className="panchang-time-card">
                <i className="fas fa-sun panchang-time-icon sunset"></i>
                <div>
                  <div className="panchang-time-label">{t("panchang.sunset")}</div>
                  <div className="panchang-time-value">{data.sunset}</div>
                </div>
              </div>
              <div className="panchang-time-card panchang-time-card--rahu">
                <i className="fas fa-exclamation-triangle panchang-time-icon rahu"></i>
                <div>
                  <div className="panchang-time-label">{t("panchang.rahuKalam")}</div>
                  <div className="panchang-time-value">{data.rahu_kalam?.start} — {data.rahu_kalam?.end}</div>
                </div>
              </div>
              {rtp?.sun_sign && (
                <div className="panchang-time-card">
                  <i className="fas fa-sun panchang-time-icon"></i>
                  <div>
                    <div className="panchang-time-label">{t("panchang.sunMoonSign")}</div>
                    <div className="panchang-time-value">{rtp.sun_sign.name} / {rtp.moon_sign?.name}</div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
