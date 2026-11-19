import { useState } from 'react';
import { ZODIAC_SIGNS, type Language, type ZodiacId } from '../data/astrologyData';
import { translations } from '../data/translations';
import { ZodiacGlyph } from './ZodiacGlyph';

interface ZodiacCodexProps {
  lang: Language;
  onSelectForReading?: (signId: ZodiacId) => void;
}

export function ZodiacCodex({ lang, onSelectForReading }: ZodiacCodexProps) {
  const isTa = lang === 'ta';
  const t = translations[lang].zodiac;
  const [selectedId, setSelectedId] = useState<ZodiacId>('leo');
  const activeSign = ZODIAC_SIGNS.find((s) => s.id === selectedId) ?? ZODIAC_SIGNS[0];

  return (
    <section id="zodiac" className="relative z-10 py-16 md:py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-xs tracking-[0.22em] uppercase text-[#D4AF37] font-medium mb-2">
            {t.eyebrow}
          </p>
          <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold text-white tracking-tight text-balance">
            {t.title}
          </h2>
          <p className="mt-2 text-base text-[#B8B8B8] leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          <div
            className="lg:col-span-7 grid grid-cols-1 min-[360px]:grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3"
            role="tablist"
            aria-label={t.eyebrow}
          >
            {ZODIAC_SIGNS.map((sign) => {
              const isSelected = sign.id === selectedId;
              return (
                <button
                  key={sign.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedId(sign.id)}
                  className={`min-h-[64px] text-left p-3.5 sm:p-4 rounded-xl transition-all duration-200 flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                    isSelected
                      ? 'bg-[#13101D] gold-border-active shadow-[0_0_24px_rgba(212,175,55,0.12)]'
                      : 'bg-[#13101D]/60 gold-border-hairline hover:bg-[#13101D] hover:border-[#D4AF37]/45'
                  }`}
                >
                  <ZodiacGlyph sign={sign} size="sm" />
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-white truncate">
                      {isTa ? sign.nameTa : sign.name}
                    </div>
                    <div className="text-xs text-[#B8B8B8] truncate tabular-nums">
                      {sign.dateRange}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-5 bg-[#13101D] gold-border-hairline rounded-2xl p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex items-center gap-4 min-w-0">
                <ZodiacGlyph sign={activeSign} size="lg" />
                <div className="min-w-0">
                  <p className="text-xs text-[#D4AF37] tracking-[0.16em] uppercase font-medium">
                    {isTa ? activeSign.elementTa : activeSign.element}
                  </p>
                  <h3 className="font-[var(--font-display)] text-2xl font-semibold text-white mt-1 truncate">
                    {isTa ? activeSign.nameTa : activeSign.name}
                  </h3>
                  <p className="text-xs text-[#B8B8B8] tabular-nums mt-0.5">
                    {activeSign.dateRange}
                  </p>
                </div>
              </div>
              <span
                className="font-[var(--font-display)] text-2xl text-[#FFE5A0] shrink-0"
                aria-hidden="true"
              >
                {activeSign.symbol}
              </span>
            </div>

            <div className="pt-6 space-y-5">
              <p className="text-base text-white/90 leading-relaxed">
                {isTa ? activeSign.shortPersonalityTa : activeSign.shortPersonality}
              </p>

              {onSelectForReading && (
                <button
                  type="button"
                  onClick={() => onSelectForReading(activeSign.id)}
                  className="min-h-[44px] px-5 py-2.5 text-xs font-bold text-[#08070E] bg-gradient-to-r from-[#FFE600] to-[#FF9E3D] hover:brightness-110 rounded-lg transition-all whitespace-nowrap shrink-0"
                >
                  {t.cta}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
