import type { ZodiacSign } from '../data/astrologyData';

interface ZodiacGlyphProps {
  sign: ZodiacSign;
  size?: 'sm' | 'md' | 'lg';
}

export function ZodiacGlyph({ sign, size = 'md' }: ZodiacGlyphProps) {
  const dimensions =
    size === 'sm' ? 'w-9 h-9' : size === 'lg' ? 'w-14 h-14' : 'w-11 h-11';
  const iconSize =
    size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-7 h-7' : 'w-5 h-5';

  return (
    <div
      className={`${dimensions} shrink-0 rounded-full bg-[#080808] gold-border-hairline flex items-center justify-center text-[#D4AF37]`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={iconSize}
      >
        <path d={sign.svgPath} />
      </svg>
    </div>
  );
}
