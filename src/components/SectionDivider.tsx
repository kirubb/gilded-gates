interface SectionDividerProps {
  variant?: "wave" | "angle" | "curve";
  fromColor?: string;
  toColor?: string;
  flip?: boolean;
}

const SectionDivider = ({ 
  variant = "wave", 
  fromColor = "fill-secondary", 
  toColor = "fill-background",
  flip = false 
}: SectionDividerProps) => {
  const transforms = flip ? "rotate-180" : "";
  
  if (variant === "wave") {
    return (
      <div className={`relative w-full h-24 md:h-32 -mt-1 ${transforms}`}>
        <svg
          viewBox="0 0 1440 120"
          className="absolute w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            className={fromColor}
            d="M0,0 L0,80 Q360,120 720,80 T1440,80 L1440,0 Z"
          />
          <path
            className={toColor}
            d="M0,80 Q360,120 720,80 T1440,80 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    );
  }

  if (variant === "angle") {
    return (
      <div className={`relative w-full h-20 md:h-28 -mt-1 ${transforms}`}>
        <svg
          viewBox="0 0 1440 100"
          className="absolute w-full h-full"
          preserveAspectRatio="none"
        >
          <polygon className={fromColor} points="0,0 1440,0 1440,30 0,100" />
          <polygon className={toColor} points="0,100 1440,30 1440,100" />
        </svg>
      </div>
    );
  }

  if (variant === "curve") {
    return (
      <div className={`relative w-full h-24 md:h-36 -mt-1 ${transforms}`}>
        <svg
          viewBox="0 0 1440 120"
          className="absolute w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            className={fromColor}
            d="M0,0 L0,60 C480,120 960,0 1440,60 L1440,0 Z"
          />
          <path
            className={toColor}
            d="M0,60 C480,120 960,0 1440,60 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    );
  }

  return null;
};

export default SectionDivider;
