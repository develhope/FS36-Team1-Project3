import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CelebrationSVG: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const leftPersonRef = useRef<SVGGElement>(null);
  const rightPersonRef = useRef<SVGGElement>(null);
  const confettiRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    // Animazione persone che saltano
    tl.to(leftPersonRef.current, {
      y: -10,
      duration: 0.6,
      ease: "power2.inOut"
    })
    .to(rightPersonRef.current, {
      y: -8,
      duration: 0.6,
      ease: "power2.inOut"
    }, "-=0.3");

    // Animazione confetti
    gsap.fromTo(confettiRef.current?.children || [], {
      opacity: 0,
      scale: 0,
      rotation: 0
    }, {
      opacity: 1,
      scale: 1,
      rotation: 360,
      duration: 2,
      stagger: 0.1,
      repeat: -1,
      ease: "power2.out"
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      width="200"
      height="120"
      viewBox="0 0 200 120"
      className="mx-auto mb-6"
    >
      {/* Confetti */}
      <g ref={confettiRef}>
        <circle cx="30" cy="20" r="2" fill="#f59e0b" />
        <rect x="170" y="15" width="3" height="3" fill="#ef4444" />
        <circle cx="50" cy="25" r="1.5" fill="#8b5cf6" />
        <rect x="150" y="18" width="2" height="4" fill="#10b981" />
        <circle cx="20" cy="35" r="2" fill="#f97316" />
        <rect x="175" y="30" width="4" height="2" fill="#06b6d4" />
        <circle cx="180" cy="45" r="1.5" fill="#ec4899" />
        <rect x="25" y="40" width="3" height="3" fill="#84cc16" />
      </g>

      {/* Persona sinistra */}
      <g ref={leftPersonRef}>
        {/* Corpo */}
        <ellipse cx="70" cy="90" rx="12" ry="25" fill="#374151" />
        {/* Testa */}
        <circle cx="70" cy="55" r="12" fill="#fbbf24" />
        {/* Capelli */}
        <path d="M58 48 Q70 42 82 48 Q78 45 70 45 Q62 45 58 48" fill="#92400e" />
        {/* Braccia alzate */}
        <ellipse cx="55" cy="70" rx="4" ry="15" fill="#fbbf24" transform="rotate(-30 55 70)" />
        <ellipse cx="85" cy="70" rx="4" ry="15" fill="#fbbf24" transform="rotate(30 85 70)" />
        {/* Gambe */}
        <ellipse cx="65" cy="105" rx="4" ry="12" fill="#1f2937" />
        <ellipse cx="75" cy="105" rx="4" ry="12" fill="#1f2937" />
        {/* Faccia felice */}
        <circle cx="66" cy="53" r="1" fill="#000" />
        <circle cx="74" cy="53" r="1" fill="#000" />
        <path d="M66 58 Q70 62 74 58" stroke="#000" strokeWidth="1" fill="none" />
      </g>

      {/* Persona destra */}
      <g ref={rightPersonRef}>
        {/* Corpo */}
        <ellipse cx="130" cy="90" rx="12" ry="25" fill="#8b5cf6" />
        {/* Testa */}
        <circle cx="130" cy="55" r="12" fill="#fbbf24" />
        {/* Capelli */}
        <path d="M118 48 Q130 42 142 48 Q138 45 130 45 Q122 45 118 48" fill="#7c2d12" />
        {/* Braccia alzate */}
        <ellipse cx="115" cy="70" rx="4" ry="15" fill="#fbbf24" transform="rotate(-45 115 70)" />
        <ellipse cx="145" cy="70" rx="4" ry="15" fill="#fbbf24" transform="rotate(45 145 70)" />
        {/* Gambe */}
        <ellipse cx="125" cy="105" rx="4" ry="12" fill="#6d28d9" />
        <ellipse cx="135" cy="105" rx="4" ry="12" fill="#6d28d9" />
        {/* Faccia felice */}
        <circle cx="126" cy="53" r="1" fill="#000" />
        <circle cx="134" cy="53" r="1" fill="#000" />
        <path d="M126 58 Q130 62 134 58" stroke="#000" strokeWidth="1" fill="none" />
      </g>
    </svg>
  );
};

export default CelebrationSVG;