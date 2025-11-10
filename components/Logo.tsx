export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 60"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="MyAbilities Logo"
    >
      {/* Graphic Element - Sunrise/Sunset */}
      <g id="graphic">
        {/* Sun rays - varying lengths */}
        <line x1="30" y1="18" x2="30" y2="8" stroke="#D4A574" strokeWidth="2" strokeLinecap="round" />
        <line x1="40" y1="16" x2="44" y2="10" stroke="#D4A574" strokeWidth="2" strokeLinecap="round" />
        <line x1="50" y1="14" x2="56" y2="8" stroke="#D4A574" strokeWidth="2" strokeLinecap="round" />
        <line x1="60" y1="12" x2="68" y2="6" stroke="#D4A574" strokeWidth="2" strokeLinecap="round" />
        <line x1="70" y1="10" x2="80" y2="5" stroke="#D4A574" strokeWidth="2" strokeLinecap="round" />
        <line x1="80" y1="8" x2="90" y2="4" stroke="#D4A574" strokeWidth="2" strokeLinecap="round" />
        <line x1="90" y1="10" x2="100" y2="5" stroke="#D4A574" strokeWidth="2" strokeLinecap="round" />
        <line x1="100" y1="12" x2="108" y2="6" stroke="#D4A574" strokeWidth="2" strokeLinecap="round" />
        <line x1="110" y1="14" x2="116" y2="8" stroke="#D4A574" strokeWidth="2" strokeLinecap="round" />
        <line x1="120" y1="16" x2="124" y2="10" stroke="#D4A574" strokeWidth="2" strokeLinecap="round" />
        <line x1="130" y1="18" x2="130" y2="8" stroke="#D4A574" strokeWidth="2" strokeLinecap="round" />
        
        {/* Sun/Horizon semi-circle at bottom */}
        <path
          d="M 30 22 Q 80 12 130 22"
          fill="#D4A574"
          stroke="none"
        />
        
        {/* Two horizontal lines below semi-circle */}
        <line x1="25" y1="26" x2="135" y2="26" stroke="#D4A574" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="30" x2="140" y2="30" stroke="#D4A574" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      
      {/* Text - MyAbilities in dark gray serif */}
      <text
        x="80"
        y="50"
        fontFamily="Georgia, serif"
        fontSize="20"
        fill="#4A5568"
        fontWeight="400"
        textAnchor="middle"
        letterSpacing="0.5"
      >
        MyAbilities
      </text>
    </svg>
  );
}

