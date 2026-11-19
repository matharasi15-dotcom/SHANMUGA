import { useEffect, useState } from 'react';
import type { Language } from '../data/astrologyData';
import { translations } from '../data/translations';

interface CinematicRevealOverlayProps {
  isOpen: boolean;
  userName: string;
  lang: Language;
  onComplete: () => void;
}

const RING_GLYPHS = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];

export function CinematicRevealOverlay({
  isOpen,
  userName,
  lang,
  onComplete,
}: CinematicRevealOverlayProps) {
  const [step, setStep] = useState(0);
  const t = translations[lang].loading;

  useEffect(() => {
    if (!isOpen) {
      setStep(0);
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      const quickTimer = window.setTimeout(onComplete, 250);
      return () => window.clearTimeout(quickTimer);
    }

    const t1 = window.setTimeout(() => setStep(1), 400);
    const t2 = window.setTimeout(() => setStep(2), 820);
    const t3 = window.setTimeout(() => setStep(3), 1240);
    const tDone = window.setTimeout(onComplete, 1680);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
      window.clearTimeout(tDone);
    };
  }, [isOpen, onComplete]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t.ariaLabel}
      className="fixed inset-0 z-50 bg-[#08070E]/95 backdrop-blur-md flex flex-col items-center justify-center px-6 text-center"
    >
      <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center">
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-full border border-[#A855F7]/45 shadow-[0_0_60px_rgba(168,85,247,0.28)] animate-[spin_14s_linear_infinite]"
        >
          {RING_GLYPHS.map((glyph, idx) => {
            const angle = (idx / RING_GLYPHS.length) * 360;
            return (
              <span
                key={glyph}
                style={{
                  transform: `rotate(${angle}deg) translateY(-88px) rotate(-${angle}deg)`,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs sm:text-base text-[#FFE600]/90 font-[var(--font-display)]"
              >
                {glyph}
              </span>
            );
          })}
        </div>

        <div
          aria-hidden="true"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-dashed border-[#FF7A00]/50 flex items-center justify-center animate-[spin_9s_linear_infinite_reverse]"
        >
          <div className="w-16 h-16 rounded-full bg-[#13101D] gold-border-active flex items-center justify-center text-2xl shadow-[0_0_30px_rgba(255,122,0,0.38)]">
            🔮
          </div>
        </div>
      </div>

      <p className="mt-8 text-xs tracking-[0.2em] uppercase text-[#D4AF37] font-medium">
        {t.readingForPrefix} {userName || t.defaultName}
      </p>

      <h2
        className={`mt-3 font-[var(--font-display)] text-xl sm:text-3xl font-semibold tracking-wide transition-opacity duration-200 ${
          step === 3 ? 'text-[#FFE5A0] gold-text-glow' : 'text-white'
        }`}
      >
        {t.messages[step]}
      </h2>

      <button
        type="button"
        onClick={onComplete}
        className="mt-8 min-h-[44px] px-5 py-2 text-xs font-medium text-[#B8B8B8] hover:text-[#FFE5A0] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-lg"
      >
        {t.skip}
      </button>
    </div>
  );
}
