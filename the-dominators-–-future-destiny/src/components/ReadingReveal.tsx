import { useEffect, useState } from 'react';
import {
  Check,
  ChevronDown,
  ChevronUp,
  Copy,
  Heart,
  RefreshCw,
  RotateCcw,
  Send,
} from 'lucide-react';
import { motion } from 'motion/react';
import {
  formatReadingForWhatsApp,
  type DestinyReading,
  type Language,
} from '../data/astrologyData';
import { translations } from '../data/translations';
import { AnbuSirZone } from './AnbuSirZone';
import { ZodiacGlyph } from './ZodiacGlyph';

interface ReadingRevealProps {
  reading: DestinyReading;
  lang: Language;
  onReroll: () => void;
  onRestart: () => void;
}

function GirlfriendCountdownWidget({
  readingId,
  lang,
}: {
  readingId: string;
  lang: Language;
}) {
  const t = translations[lang].result;
  const [step, setStep] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    setStep(0);
    const t1 = window.setTimeout(() => setStep(1), 1600);
    const t2 = window.setTimeout(() => setStep(2), 3400);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [readingId, cycle]);

  const current = t.countdownSteps[step];

  return (
    <div className="mt-4 pt-4 border-t border-white/10">
      <div className="flex items-center justify-between gap-2">
        <p className="text-[11px] tracking-[0.14em] uppercase text-[#FFE5A0] font-semibold flex items-center gap-1.5">
          <Heart className="w-3.5 h-3.5 text-[#D4AF37]" aria-hidden="true" />
          <span>{t.countdownTitle}</span>
        </p>
        <button
          type="button"
          onClick={() => setCycle((c) => c + 1)}
          className="text-[11px] font-medium text-[#D4AF37] hover:text-[#FFE5A0] transition-colors flex items-center gap-1 shrink-0 min-h-[28px] px-1.5"
        >
          <RefreshCw className="w-3 h-3" aria-hidden="true" />
          <span>{t.countdownReplay}</span>
        </button>
      </div>

      <div className="mt-2.5 grid grid-cols-3 gap-2">
        {t.countdownSteps.map((item, idx) => {
          const active = idx === step;
          const passed = idx < step;
          return (
            <div
              key={item.day}
              className={`rounded-lg px-2.5 py-2 text-center border transition-colors ${
                active
                  ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-[#FFE5A0]'
                  : passed
                    ? 'bg-[#08070E] border-[#D4AF37]/40 text-white/80'
                    : 'bg-[#08070E] border-white/10 text-[#B8B8B8]/70'
              }`}
            >
              <span className="block text-[10px] font-mono tabular-nums tracking-wider font-semibold">
                {item.day}
              </span>
            </div>
          );
        })}
      </div>

      <p className="mt-2.5 text-sm text-[#FFE5A0] font-medium leading-snug">
        {current.text}
      </p>
    </div>
  );
}

export function ReadingReveal({
  reading,
  lang,
  onReroll,
  onRestart,
}: ReadingRevealProps) {
  const [showFullFuture, setShowFullFuture] = useState(false);
  const [copied, setCopied] = useState(false);

  const isTa = lang === 'ta';
  const t = translations[lang].result;
  const siteUrl = typeof window !== 'undefined' ? window.location.href : undefined;
  const whatsappText = formatReadingForWhatsApp(reading, lang, siteUrl);
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappText)}`;

  const visibleCards = showFullFuture
    ? reading.cards
    : reading.cards.filter((c) => c.isPrimaryPreview);

  const groupLabel =
    reading.input.group === 'cs' ? t.groupCsBadge : t.groupBiomathsBadge;
  const tuitionLabel = reading.input.tuitionStudent
    ? t.tuitionBadge
    : t.selfStudyBadge;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(whatsappText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = whatsappText;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <motion.div
      id="reading-result"
      key={`${reading.id}-${lang}`}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="mt-10 space-y-6"
    >
      {/* Top Identity Result Banner */}
      <div className="bg-[#13101D] gold-border-active rounded-2xl p-4 min-[375px]:p-6 sm:p-8 lg:p-10 shadow-[0_24px_60px_rgba(0,0,0,0.65)]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <ZodiacGlyph sign={reading.sign} size="lg" />
            <div className="min-w-0">
              <p className="text-xs tracking-[0.16em] uppercase text-[#D4AF37] font-medium">
                {t.starsSpoken}
              </p>
              <h3 className="font-[var(--font-display)] text-xl min-[375px]:text-2xl sm:text-4xl font-bold text-white mt-1 uppercase tracking-wide break-words">
                {reading.input.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#FFE5A0] mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>{groupLabel}</span>
                <span className="text-[#D4AF37]" aria-hidden="true">
                  ·
                </span>
                <span className="text-[#B8B8B8]">{tuitionLabel}</span>
                <span className="text-[#D4AF37]" aria-hidden="true">
                  ·
                </span>
                <span>
                  {reading.sign.symbol}{' '}
                  {isTa ? reading.sign.nameTa : reading.sign.name}
                </span>
              </p>
            </div>
          </div>

          <div className="md:text-right">
            <p className="text-xs tracking-[0.16em] uppercase text-[#B8B8B8]">
              {t.identityLabel}
            </p>
            <p className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold text-[#FFE5A0] mt-1 gold-text-glow">
              {isTa ? reading.identityTa : reading.identityEn}
            </p>
            <p className="text-xs text-[#D4AF37] mt-1">
              {t.careerPathPrefix}{' '}
              {isTa ? reading.careerTitleTa : reading.careerTitleEn}
            </p>
          </div>
        </div>

        {/* Prominent Cinema Dialogue Card */}
        <div className="mt-6 bg-[#08070E] gold-border-active rounded-xl p-5">
          <p className="text-xs tracking-[0.18em] uppercase text-[#D4AF37] font-semibold">
            <span aria-hidden="true">🎬 </span>
            {t.cinemaHeadingPrefix} —{' '}
            {isTa ? reading.cinemaStyleLabelTa : reading.cinemaStyleLabelEn}
          </p>
          <p className="mt-2 text-base sm:text-lg text-[#FFE5A0] font-medium leading-relaxed">
            “{isTa ? reading.cinemaDialogueTa : reading.cinemaDialogueEn}”
          </p>
        </div>

        {/* Primary Action Row: WhatsApp Share + Full Future Toggle */}
        <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[50px] px-5 py-3 text-sm sm:text-base font-semibold text-white bg-[#15803D] hover:bg-[#16A34A] rounded-xl shadow-[0_8px_24px_rgba(21,128,61,0.35)] transition-colors flex items-center justify-center gap-2 text-center sm:whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFE5A0]"
          >
            <Send className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{t.shareWhatsapp}</span>
          </a>

          <button
            type="button"
            onClick={() => setShowFullFuture((prev) => !prev)}
            className="w-full sm:w-auto min-h-[50px] px-5 py-3 text-xs sm:text-sm font-bold text-[#08070E] bg-gradient-to-r from-[#FFE600] via-[#FFAE00] to-[#FF7A00] hover:brightness-110 rounded-xl transition-all flex items-center justify-center gap-2 text-center sm:whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFE600]"
          >
            <span>{showFullFuture ? t.showSummary : t.showFullFuture}</span>
            {showFullFuture ? (
              <ChevronUp className="w-4 h-4 shrink-0" aria-hidden="true" />
            ) : (
              <ChevronDown className="w-4 h-4 shrink-0" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={handleCopy}
            className="w-full sm:w-auto min-h-[50px] px-4 py-3 text-xs sm:text-sm font-medium text-[#FFE5A0] bg-[#08070E] gold-border-hairline hover:border-[#D4AF37] rounded-xl transition-colors flex items-center justify-center gap-2 sm:whitespace-nowrap shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{t.copied}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{t.copy}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Individual Prediction Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {visibleCards.map((card, idx) => (
          <motion.article
            key={card.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.35,
              delay: idx * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="bg-[#13101D] gold-border-hairline hover:border-[#D4AF37]/60 rounded-2xl p-6 transition-colors flex flex-col justify-between"
          >
            <div>
              <p className="text-xs sm:text-sm tracking-[0.14em] uppercase text-[#D4AF37] font-semibold">
                <span aria-hidden="true">{card.icon} </span>
                {isTa ? card.labelTa : card.labelEn}
              </p>
              <p className="mt-3 text-base sm:text-lg text-white/95 leading-relaxed">
                {isTa ? card.textTa : card.textEn}
              </p>
            </div>

            {card.id === 'love' && (
              <GirlfriendCountdownWidget readingId={reading.id} lang={lang} />
            )}
          </motion.article>
        ))}

        {/* Lucky Details Card */}
        <motion.article
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#13101D] gold-border-hairline rounded-2xl p-6"
        >
          <p className="text-xs sm:text-sm tracking-[0.14em] uppercase text-[#D4AF37] font-semibold">
            {t.luckyTitle}
          </p>
          <dl className="grid grid-cols-2 gap-4 mt-4 text-sm">
            <div>
              <dt className="text-xs text-[#B8B8B8]">{t.luckyNumber}</dt>
              <dd className="text-xl font-bold text-[#FFE5A0] font-mono tabular-nums mt-0.5">
                {reading.luckyNumber}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-[#B8B8B8]">{t.luckyColour}</dt>
              <dd className="text-base font-semibold text-white mt-0.5">
                {isTa ? reading.luckyColourTa : reading.luckyColourEn}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-[#B8B8B8]">{t.luckyDay}</dt>
              <dd className="text-sm font-medium text-white mt-0.5">
                {isTa ? reading.luckyDayTa : reading.luckyDayEn}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-[#B8B8B8]">{t.luckySymbol}</dt>
              <dd className="text-sm font-medium text-[#FFE5A0] mt-0.5">
                {isTa ? reading.luckySymbolTa : reading.luckySymbolEn}
              </dd>
            </div>
          </dl>
        </motion.article>

        {/* Today's Mission Card */}
        <motion.article
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#13101D] gold-border-active rounded-2xl p-6 flex flex-col justify-between"
        >
          <div>
            <p className="text-xs sm:text-sm tracking-[0.14em] uppercase text-[#FFE5A0] font-semibold">
              {t.missionTitle}
            </p>
            <p className="mt-3 text-base sm:text-lg text-white font-medium leading-relaxed">
              {isTa ? reading.missionTa : reading.missionEn}
            </p>
          </div>
          <p className="mt-4 text-xs text-[#B8B8B8]">{t.missionNote}</p>
        </motion.article>
      </div>

      {/* Dedicated ANBU SIR WARNING ZONE automatically included in every student's result */}
      <AnbuSirZone reading={reading} lang={lang} />

      {/* Bottom Reroll / Try Another Name Bar */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-between gap-3 pt-2">
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
          <button
            type="button"
            onClick={onReroll}
            className="w-full sm:w-auto min-h-[48px] px-4 py-2.5 text-xs sm:text-sm font-medium text-[#FFE5A0] bg-[#13101D] gold-border-hairline hover:border-[#D4AF37] rounded-lg transition-colors flex items-center justify-center gap-2 sm:whitespace-nowrap shrink-0"
          >
            <RefreshCw className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>{t.reroll}</span>
          </button>

          <button
            type="button"
            onClick={onRestart}
            className="w-full sm:w-auto min-h-[48px] px-4 py-2.5 text-xs sm:text-sm font-medium text-[#B8B8B8] hover:text-white bg-[#13101D] gold-border-hairline hover:border-[#D4AF37]/60 rounded-lg transition-colors flex items-center justify-center gap-2 sm:whitespace-nowrap shrink-0"
          >
            <RotateCcw className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>{t.tryAnother}</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
