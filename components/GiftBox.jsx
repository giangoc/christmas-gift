 // components/GiftBox.jsx
'use client'

export default function GiftBox({ isOpening, onClick, className = '' }) {
  return (
    <div 
      className={`relative cursor-pointer ${className} ${isOpening ? 'animate-gift-open' : 'animate-float hover:animate-gift-shake'}`}
      onClick={onClick}
    >
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-2xl"
      >
        {/* Gift Box Body */}
        <rect
          x="40"
          y="80"
          width="120"
          height="100"
          rx="5"
          fill="#DC2626"
          stroke="#991B1B"
          strokeWidth="3"
        />
        
        {/* Vertical Ribbon */}
        <rect
          x="90"
          y="80"
          width="20"
          height="100"
          fill="#FCD34D"
        />
        
        {/* Horizontal Ribbon */}
        <rect
          x="40"
          y="120"
          width="120"
          height="20"
          fill="#FCD34D"
        />
        
        {/* Gift Box Lid */}
        <rect
          x="35"
          y="60"
          width="130"
          height="25"
          rx="5"
          fill="#991B1B"
          stroke="#7F1D1D"
          strokeWidth="3"
        />
        
        {/* Bow - Left Loop */}
        <ellipse
          cx="75"
          cy="50"
          rx="20"
          ry="15"
          fill="#FCD34D"
          stroke="#F59E0B"
          strokeWidth="2"
        />
        
        {/* Bow - Right Loop */}
        <ellipse
          cx="125"
          cy="50"
          rx="20"
          ry="15"
          fill="#FCD34D"
          stroke="#F59E0B"
          strokeWidth="2"
        />
        
        {/* Bow - Center Knot */}
        <circle
          cx="100"
          cy="50"
          r="10"
          fill="#F59E0B"
          stroke="#D97706"
          strokeWidth="2"
        />
        
        {/* Sparkles around the gift */}
        <circle cx="25" cy="90" r="3" fill="#FCD34D" opacity="0.8" className="animate-sparkle" />
        <circle cx="175" cy="110" r="2" fill="#FCD34D" opacity="0.8" className="animate-sparkle" style={{ animationDelay: '0.3s' }} />
        <circle cx="30" cy="150" r="2.5" fill="#FCD34D" opacity="0.8" className="animate-sparkle" style={{ animationDelay: '0.6s' }} />
        <circle cx="170" cy="160" r="3" fill="#FCD34D" opacity="0.8" className="animate-sparkle" style={{ animationDelay: '0.9s' }} />
      </svg>
      
      {!isOpening && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <p className="text-white font-bold text-sm bg-black/30 px-3 py-1 rounded-full animate-pulse">
            Click to open! 🎁
          </p>
        </div>
      )}
    </div>
  )
}
