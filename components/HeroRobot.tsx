"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroRobot() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [pupil, setPupil] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        const el = wrapRef.current;
        if (el) {
          const r = el.getBoundingClientRect();
          const cx = r.left + r.width / 2;
          const cy = r.top + r.height / 2;
          const dx = e.clientX - cx;
          const dy = e.clientY - cy;
          const nx = Math.max(-1, Math.min(1, dx / (window.innerWidth / 2)));
          const ny = Math.max(-1, Math.min(1, dy / (window.innerHeight / 2)));
          setTilt({ rx: -ny * 9, ry: nx * 12 });
          const dist = Math.hypot(dx, dy) || 1;
          const reach = Math.min(1, dist / 400);
          const max = 7 * reach;
          setPupil({ x: (dx / dist) * max, y: (dy / dist) * max });
        }
        rafRef.current = null;
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative mx-auto w-[260px] sm:w-[320px] lg:w-[380px]"
      style={{ perspective: "1100px" }}
    >
      {/* halo */}
      <div className="absolute inset-0 -z-10 bg-cyan/20 blur-[90px] rounded-full animate-pulse" />

      <div
        className="animate-float"
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transition: "transform 180ms ease-out",
          transformStyle: "preserve-3d",
        }}
      >
        <svg
          viewBox="0 0 300 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-[0_18px_45px_rgba(0,217,255,0.3)]"
        >
          <defs>
            <linearGradient id="botEdge" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#00D9FF" />
              <stop offset="100%" stopColor="#0EA5E9" />
            </linearGradient>
            <linearGradient id="botBody" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#111826" />
              <stop offset="100%" stopColor="#070b13" />
            </linearGradient>
            <radialGradient id="visor" cx="50%" cy="40%" r="70%">
              <stop offset="0%" stopColor="#0b1422" />
              <stop offset="100%" stopColor="#05080f" />
            </radialGradient>
            <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8bf3ff" />
              <stop offset="60%" stopColor="#00D9FF" />
              <stop offset="100%" stopColor="#0088c2" />
            </radialGradient>
          </defs>

          {/* antenna */}
          <line x1="150" y1="52" x2="150" y2="30" stroke="url(#botEdge)" strokeWidth="4" strokeLinecap="round" />
          <circle cx="150" cy="24" r="8" fill="url(#eyeGlow)" className="animate-pulse" />

          {/* ears / side pods */}
          <rect x="44" y="150" width="18" height="60" rx="9" fill="url(#botBody)" stroke="#0EA5E9" strokeWidth="3" />
          <rect x="238" y="150" width="18" height="60" rx="9" fill="url(#botBody)" stroke="#0EA5E9" strokeWidth="3" />

          {/* head */}
          <rect x="60" y="52" width="180" height="150" rx="40" fill="url(#botBody)" stroke="url(#botEdge)" strokeWidth="4" />

          {/* visor screen */}
          <rect x="82" y="86" width="136" height="84" rx="26" fill="url(#visor)" stroke="#123047" strokeWidth="2" />

          {/* eyes */}
          <g transform={`translate(${pupil.x} ${pupil.y})`} style={{ transition: "transform 120ms ease-out" }}>
            <circle cx="120" cy="124" r="15" fill="url(#eyeGlow)" />
            <circle cx="180" cy="124" r="15" fill="url(#eyeGlow)" />
            <circle cx="115" cy="119" r="4.5" fill="#eafcff" />
            <circle cx="175" cy="119" r="4.5" fill="#eafcff" />
          </g>

          {/* smile / mouth bar */}
          <path d="M120 152 q30 16 60 0" stroke="#22C55E" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.85" />

          {/* neck */}
          <rect x="132" y="202" width="36" height="22" fill="url(#botBody)" stroke="#0EA5E9" strokeWidth="2" />

          {/* body / bust */}
          <path
            d="M78 250 q0-32 32-34 h80 q32 2 32 34 v70 q0 10-10 10 h-124 q-10 0-10-10 z"
            fill="url(#botBody)"
            stroke="url(#botEdge)"
            strokeWidth="4"
          />

          {/* chest core */}
          <circle cx="150" cy="288" r="16" fill="url(#visor)" stroke="#22C55E" strokeWidth="2.5" />
          <circle cx="150" cy="288" r="7" fill="#22C55E" className="animate-pulse" />

          {/* chest detail lines */}
          <path d="M104 318 h30" stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
          <path d="M166 318 h30" stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
        </svg>
      </div>
    </div>
  );
}
