export const ReactLogo = ({ size = 60, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)" />
  </svg>
);

export const PythonLogo = ({ size = 60, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2C9.5 2 8 3.5 8 6v2h4v1H7c-1.5 0-3 1-3 3v4c0 2 1.5 3 3 3h2v-3c0-1.5 1.5-3 3-3h4c1.5 0 3-1.5 3-3V6c0-2.5-1.5-4-4-4h-3z" fill="currentColor" opacity="0.7" />
    <path d="M12 22c2.5 0 4-1.5 4-4v-2h-4v-1h5c1.5 0 3-1 3-3v-4c0-2-1.5-3-3-3h-2v3c0 1.5-1.5 3-3 3H8c-1.5 0-3 1.5-3 3v4c0 2.5 1.5 4 4 4h3z" fill="currentColor" />
    <circle cx="10" cy="6" r="1" fill="white" />
    <circle cx="14" cy="18" r="1" fill="white" />
  </svg>
);

export const ExpressLogo = ({ size = 60, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 17l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 7L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M9 7l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const CppLogo = ({ size = 60, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <text x="7" y="15" fontSize="10" fill="currentColor" fontWeight="bold">C++</text>
    <line x1="14" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="1.5" />
    <line x1="16" y1="8" x2="16" y2="12" stroke="currentColor" strokeWidth="1.5" />
    <line x1="14" y1="14" x2="18" y2="14" stroke="currentColor" strokeWidth="1.5" />
    <line x1="16" y1="12" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const FigmaLogo = ({ size = 60, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.8" />
    <circle cx="12" cy="5" r="3" fill="currentColor" opacity="0.6" />
    <circle cx="12" cy="19" r="3" fill="currentColor" opacity="0.6" />
    <circle cx="5" cy="12" r="3" fill="currentColor" opacity="0.5" />
    <circle cx="19" cy="12" r="3" fill="currentColor" opacity="0.5" />
  </svg>
);

export const MongoDBLogo = ({ size = 60, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 3C10.5 3 9 4.5 9 7c0 2 1 4 3 7 2-3 3-5 3-7 0-2.5-1.5-4-3-4z" fill="currentColor" opacity="0.7" />
    <path d="M12 14c0 3-1 5-1 7h2c0-2-1-4-1-7z" fill="currentColor" />
    <ellipse cx="12" cy="8" rx="5" ry="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
  </svg>
);

export const JavaLogo = ({ size = 60, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M8 18c-2 0-3-1-3-2 0-1 1-1.5 2-1.5 1.5 0 2.5 1 4 1s2.5-1 4-1c1 0 2 0.5 2 1.5 0 1-1 2-3 2-1.5 0-2.5-1-4-1s-2.5 1-4 1z" fill="currentColor" />
    <path d="M10 14c-1.5 0-2.5-1-4-1s-2.5 1-4 1c-1 0-2-0.5-2-1.5S1 11 3 11c1.5 0 2.5 1 4 1s2.5-1 4-1" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M8 7c0-2 1-3 2-3s2 1 2 3-1 4-2 4-2-2-2-4z" fill="currentColor" opacity="0.7" />
  </svg>
);

export const FlutterLogo = ({ size = 60, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M14 2L4 12l3 3 10-10z" fill="currentColor" opacity="0.6" />
    <path d="M14 9l-7 7 3 3 7-7z" fill="currentColor" opacity="0.8" />
    <path d="M10 16l4 4 6-6-4-4z" fill="currentColor" />
  </svg>
);

export const DartLogo = ({ size = 60, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M6 6h12v12L6 6z" fill="currentColor" opacity="0.3" />
    <path d="M6 6l6 6-6 6V6z" fill="currentColor" opacity="0.6" />
    <path d="M12 12l6-6v12l-6-6z" fill="currentColor" />
    <circle cx="18" cy="18" r="2" fill="currentColor" />
  </svg>
);
