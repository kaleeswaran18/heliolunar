import React, { useRef } from "react";
import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";
import "./StatsSection.css";

const stats = [
  {
    number: 16000,
    display: "16K+",
    color: "#ff2ebf",
    label: "Business",
    desc: "Keeping projects on-track, more profitable and less-nightmarish."
  },
  {
    number: 22,
    display: "22%",
    color: "#ff884d",
    label: "Billable utilization boost",
    desc: "That's more billable hours, fewer mystery gaps."
  },
  {
    number: 17000,
    display: "17K+",
    color: "#7b61ff",
    label: "New projects",
    desc: "Created each week (then smashed out of ballparks, probably)."
  },
  {
    number: 40000000,
    display: "40M+",
    color: "#ff9edb",
    label: "Billable hours",
    desc: "Logged in 2024. That's 4,566 years of ka-chings."
  }
];

const logos = [
  "../asset/image/cloudflare.png",
  "../asset/image/grok.png",
  "../asset/image/instagram.png",
  "../asset/image/openai.png",
  "../asset/image/tiktok.png",
  "../asset/image/google.png",
  "../asset/image/stripe.png",
  "../asset/image/amazon-aws.png"
];

const StatCard = ({ item }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, once: false }); // triggers every time in view

  return (
    <div className="stat-card" ref={ref}>
      <h3 className="stat-number" style={{ color: item.color }}>
        {inView ? (
          <CountUp start={0} end={item.number} duration={2.5} separator="," />
        ) : (
          0
        )}
        {item.display.includes("+") && "+"}
        {item.display.includes("%") && "%"}
      </h3>
      <p className="stat-label" style={{ color: item.color }}>
        {item.label}
      </p>
      <p className="stat-desc">{item.desc}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="stats-section">
      <h2 className="stats-heading">
        Happy customers. Happier clients. And the least-stressed teams around.
      </h2>

      <div className="stats-grid">
        {stats.map((item, index) => (
          <StatCard item={item} key={index} />
        ))}
      </div>

      <div className="logo-marquee">
        <div className="logo-track">
          {[...logos, ...logos].map((logo, idx) => (
            <img src={logo} alt={`logo-${idx}`} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
