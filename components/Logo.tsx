import React from 'react';

const Logo = () => {
  return (
    <svg className="w-full h-full z-20" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#a78bfa', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#6b21a8', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* Hexagon shape */}
      <polygon 
        points="40,10 65,25 65,55 40,70 15,55 15,25" 
        fill="#0a0118" 
        stroke="url(#purpleGradient)" 
        strokeWidth="2"
      />
      
      {/* Inner hexagon */}
      <polygon 
        points="40,18 58,28 58,52 40,62 22,52 22,28" 
        fill="none" 
        stroke="#6b21a8" 
        strokeWidth="1" 
        opacity="0.3"
      />
      
      {/* L and S stacked vertically */}
      <g fontFamily="Orbitron, monospace" fontWeight="700" textAnchor="middle">
        {/* L */}
        <text 
          x="40" 
          y="38" 
          fontSize="24" 
          fill="#ffffff" 
          letterSpacing="1"
        >
          L
        </text>
        
        {/* Divider line */}
        <line 
          x1="30" 
          y1="42" 
          x2="50" 
          y2="42" 
          stroke="url(#purpleGradient)" 
          strokeWidth="2"
        />
        
        {/* S */}
        <text 
          x="40" 
          y="60" 
          fontSize="24" 
          fill="url(#purpleGradient)" 
          letterSpacing="1"
        >
          S
        </text>
      </g>
      
      {/* Corner accents */}
      <circle cx="40" cy="10" r="2" fill="#a78bfa" />
      <circle cx="65" cy="55" r="2" fill="#6b21a8" />
    </svg>
  );
};

export default Logo;