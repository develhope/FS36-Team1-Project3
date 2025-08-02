import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const AuthIllustration = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const elements = svgRef.current?.querySelectorAll('.animate-float');
    if (elements) {
      elements.forEach((element, index) => {
        gsap.to(element, {
          y: -10,
          duration: 2 + index * 0.3,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1
        });
      });
    }

    // Animazione per gli elementi grafici
    const charts = svgRef.current?.querySelectorAll('.chart-element');
    if (charts) {
      gsap.fromTo(charts, 
        { scale: 0, rotation: -10 },
        { 
          scale: 1, 
          rotation: 0, 
          duration: 1, 
          stagger: 0.2,
          ease: "back.out(1.7)",
          delay: 0.5
        }
      );
    }
  }, []);

  return (
    <svg
      ref={svgRef}
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-lg"
    >
      {/* Background Circle */}
      <circle cx="100" cy="100" r="90" fill="rgba(255,255,255,0.1)" className="animate-float" />
      
      {/* Person */}
      <g className="animate-float">
        {/* Body */}
        <rect x="85" y="120" width="30" height="50" rx="15" fill="#6366F1" />
        
        {/* Head */}
        <circle cx="100" cy="105" r="15" fill="#F3E8FF" />
        
        {/* Hair */}
        <path d="M87 95 Q100 85 113 95 Q108 90 100 90 Q92 90 87 95" fill="#4C1D95" />
        
        {/* Arms */}
        <rect x="70" y="125" width="12" height="25" rx="6" fill="#F3E8FF" transform="rotate(-20 76 137)" />
        <rect x="118" y="125" width="12" height="25" rx="6" fill="#F3E8FF" transform="rotate(20 124 137)" />
        
        {/* Legs */}
        <rect x="88" y="165" width="8" height="25" rx="4" fill="#1E1B4B" />
        <rect x="104" y="165" width="8" height="25" rx="4" fill="#1E1B4B" />
      </g>

      {/* Dashboard Elements */}
      <g className="chart-element">
        {/* Main Dashboard */}
        <rect x="40" y="60" width="60" height="40" rx="8" fill="rgba(255,255,255,0.9)" stroke="#8B5CF6" strokeWidth="2" />
        
        {/* Charts inside dashboard */}
        <rect x="45" y="68" width="20" height="15" rx="2" fill="#A855F7" />
        <rect x="70" y="75" width="25" height="8" rx="2" fill="#C084FC" />
        <circle cx="82" cy="88" r="6" fill="#DDD6FE" />
        
        {/* Lock icon */}
        <rect x="48" y="65" width="6" height="4" rx="1" fill="white" />
        <rect x="46" y="67" width="10" height="6" rx="2" fill="#6366F1" />
      </g>

      {/* Floating Elements */}
      <g className="chart-element">
        <circle cx="140" cy="80" r="12" fill="rgba(255,255,255,0.8)" />
        <rect x="135" y="75" width="10" height="10" rx="1" fill="#8B5CF6" />
      </g>

      <g className="chart-element">
        <rect x="130" y="140" width="25" height="15" rx="4" fill="rgba(255,255,255,0.8)" />
        <rect x="133" y="143" width="6" height="9" rx="1" fill="#A855F7" />
        <rect x="141" y="146" width="6" height="6" rx="1" fill="#C084FC" />
        <rect x="149" y="148" width="4" height="4" rx="1" fill="#DDD6FE" />
      </g>

      {/* Decorative dots */}
      <circle cx="160" cy="120" r="3" fill="rgba(255,255,255,0.6)" className="animate-float" />
      <circle cx="40" cy="140" r="2" fill="rgba(255,255,255,0.4)" className="animate-float" />
      <circle cx="30" cy="80" r="2.5" fill="rgba(255,255,255,0.5)" className="animate-float" />
    </svg>
  );
};

export default AuthIllustration;