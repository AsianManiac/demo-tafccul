import { cn } from "@/lib/utils";

interface LoaderProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const TafcculLoader = ({ className, size = "md" }: LoaderProps) => {
  const sizeClasses = {
    sm: "h-8 w-32",
    md: "h-12 w-48",
    lg: "h-16 w-64",
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <svg
        className={cn("animate-pulse-slow", sizeClasses[size])}
        viewBox="0 0 200 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* T */}
        <g className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <rect
            x="8"
            y="8"
            width="24"
            height="4"
            fill="currentColor"
            className="text-banking-navy"
          />
          <rect
            x="18"
            y="8"
            width="4"
            height="34"
            fill="currentColor"
            className="text-banking-navy"
          />
        </g>

        {/* A */}
        <g className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <path
            d="M40 42 L44 8 L48 8 L52 42 L48 42 L47 32 L45 32 L44 42 Z M45.5 28 L46.5 28 L46 18 Z"
            fill="currentColor"
            className="text-banking-blue"
          />
        </g>

        {/* F */}
        <g className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <rect
            x="58"
            y="8"
            width="4"
            height="34"
            fill="currentColor"
            className="text-banking-navy"
          />
          <rect
            x="58"
            y="8"
            width="16"
            height="4"
            fill="currentColor"
            className="text-banking-navy"
          />
          <rect
            x="58"
            y="23"
            width="12"
            height="4"
            fill="currentColor"
            className="text-banking-navy"
          />
        </g>

        {/* C */}
        <g className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <path
            d="M88 26 C88 16 94 8 104 8 C110 8 114 12 116 18 L112 20 C110 16 108 12 104 12 C96 12 92 18 92 26 C92 34 96 38 104 38 C108 38 110 34 112 30 L116 32 C114 38 110 42 104 42 C94 42 88 34 88 26 Z"
            fill="currentColor"
            className="text-banking-blue"
          />
        </g>

        {/* C */}
        <g className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <path
            d="M122 26 C122 16 128 8 138 8 C144 8 148 12 150 18 L146 20 C144 16 142 12 138 12 C130 12 126 18 126 26 C126 34 130 38 138 38 C142 38 144 34 146 30 L150 32 C148 38 144 42 138 42 C128 42 122 34 122 26 Z"
            fill="currentColor"
            className="text-banking-navy"
          />
        </g>

        {/* U */}
        <g className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <path
            d="M156 8 L160 8 L160 28 C160 36 164 38 168 38 C172 38 176 36 176 28 L176 8 L180 8 L180 28 C180 38 174 42 168 42 C162 42 156 38 156 28 Z"
            fill="currentColor"
            className="text-banking-blue"
          />
        </g>

        {/* L */}
        <g className="animate-fade-in" style={{ animationDelay: "0.7s" }}>
          <rect
            x="186"
            y="8"
            width="4"
            height="34"
            fill="currentColor"
            className="text-banking-navy"
          />
          <rect
            x="186"
            y="38"
            width="14"
            height="4"
            fill="currentColor"
            className="text-banking-navy"
          />
        </g>

        {/* Animated underline */}
        <rect
          x="8"
          y="46"
          width="192"
          height="2"
          fill="currentColor"
          className="text-banking-gold animate-slide-in-right"
        />

        {/* Cooperative Credit Union text */}
        <text
          x="100"
          y="55"
          textAnchor="middle"
          className="text-[8px] fill-banking-gray animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          COOPERATIVE CREDIT UNION
        </text>
      </svg>
    </div>
  );
};

export default TafcculLoader;
