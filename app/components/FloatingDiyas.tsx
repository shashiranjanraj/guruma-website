"use client";

import { useEffect, useState } from "react";

interface Particle {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

export default function FloatingDiyas() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const items: Particle[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 5 + Math.random() * 7,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 15,
    }));
    setParticles(items);
  }, []);

  return (
    <div className="floating-diyas">
      {particles.map((p) => (
        <div
          key={p.id}
          className="diya-particle"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
