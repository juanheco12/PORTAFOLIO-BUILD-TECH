"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollRobot() {
  const [progress, setProgress] = useState(0);
  const [tilt, setTilt] = useState(0);
  const lastY = useRef(0);
  const rafId = useRef<number | null>(null);
  const tiltTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafId.current !== null) return;
      rafId.current = requestAnimationFrame(() => {
        const doc = document.documentElement;
        const scrollTop = window.scrollY;
        const scrollHeight = doc.scrollHeight - doc.clientHeight;
        const pct = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
        const delta = scrollTop - lastY.current;
        lastY.current = scrollTop;

        setProgress(Math.min(1, Math.max(0, pct)));
        setTilt(Math.min(20, Math.max(-20, delta * 1.5)));

        if (tiltTimeout.current) clearTimeout(tiltTimeout.current);
        tiltTimeout.current = setTimeout(() => setTilt(0), 200);

        rafId.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
      if (tiltTimeout.current) clearTimeout(tiltTimeout.current);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed right-2 sm:right-6 z-40 pointer-events-none hidden sm:block"
      style={{
        top: `calc(10% + ${progress * 72}vh)`,
        transition: "top 120ms linear",
      }}
    >
      <div
        className="animate-float"
        style={{
          transform: `rotate(${tilt}deg)`,
          transition: "transform 200ms ease-out",
        }}
      >
        <RobotSvg />
      </div>
    </div>
  );
}

function RobotSvg() {
  return (
    <svg
      width="52"
      height="66"
      viewBox="0 0 52 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_0_16px_rgba(0,217,255,0.45)]"
    >
      <line x1="26" y1="3" x2="26" y2="11" stroke="#00D9FF" strokeWidth="2" />
      <circle cx="26" cy="3" r="3" fill="#00D9FF" className="animate-pulse" />

      <rect
        x="8"
        y="11"
        width="36"
        height="27"
        rx="10"
        fill="#0a0e17"
        stroke="#0EA5E9"
        strokeWidth="2"
      />
      <circle cx="19" cy="25" r="4" fill="#00D9FF" className="animate-pulse" />
      <circle cx="33" cy="25" r="4" fill="#00D9FF" className="animate-pulse" />

      <rect
        x="12"
        y="38"
        width="28"
        height="21"
        rx="8"
        fill="#0a0e17"
        stroke="#22C55E"
        strokeWidth="2"
      />
      <circle cx="26" cy="48" r="4" fill="#22C55E" />
      <path
        d="M20 54h12"
        stroke="#22C55E"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />

      <rect x="0" y="41" width="9" height="4" rx="2" fill="#0EA5E9" />
      <rect x="43" y="41" width="9" height="4" rx="2" fill="#0EA5E9" />

      <rect x="17" y="59" width="6" height="6" rx="2" fill="#0EA5E9" opacity="0.8" />
      <rect x="29" y="59" width="6" height="6" rx="2" fill="#0EA5E9" opacity="0.8" />
    </svg>
  );
}
