import { useEffect, useState } from 'react';
import { AlertTriangle, Award, MessageSquareQuote, RefreshCw, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import type { DestinyReading, Language } from '../data/astrologyData';
import { translations } from '../data/translations';

interface AnbuSirZoneProps {
  reading: DestinyReading;
  lang: Language;
}

export function AnbuSirZone({ reading, lang }: AnbuSirZoneProps) {
  const isTa = lang === 'ta';
  const t = translations[lang].anbuSir;
  const { anbuSir } = reading;

  const [dialogueOffset, setDialogueOffset] = useState(0);

  useEffect(() => {
    setDialogueOffset(0);
  }, [reading.id]);

  const dialogues = isTa ? anbuSir.dialoguesTa : anbuSir.dialoguesEn;
  const startIdx = isTa ? anbuSir.dialogueIndexTa : anbuSir.dialogueIndexEn;
  const currentDialogue =
    dialogues[(startIdx + dialogueOffset) % dialogues.length] ?? '';

  const alertStyles =
    anbuSir.alertLevel === 'danger'
      ? 'border-red-400/60 bg-red-950/20'
      : anbuSir.alertLevel === 'warning'
        ? 'border-[#FFE5A0]/70 bg-[#D4AF37]/10'
        : 'border-emerald-400/50 bg-emerald-950/20';

  return (
    <section
      id="anbu-sir"
      aria-labelledby="anbu-sir-heading"
      className="bg-[#13101D] gold-border-active rounded-2xl p-4 min-[375px]:p-6 sm:p-8 space-y-6 shadow-[0_24px_60px_rgba(0,0,0,0.65)]"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-5 border-b border-white/10">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-[#D4AF37] font-semibold">
            {isTa ? 'கணித டியூஷன் சிறப்புப் பகுதி' : 'Maths Tuition Special'}
          </p>
          <h3
            id="anbu-sir-heading"
            className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold text-[#FFE5A0] mt-1 gold-text-glow"
          >
            {t.sectionTitle}
          </h3>
          <p className="mt-2 text-sm sm:text-base text-[#B8B8B8] leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Favourite Student Title */}
        <div className="bg-[#08070E] gold-border-hairline rounded-xl px-4 py-3 shrink-0">
          <p className="text-[11px] tracking-[0.14em] uppercase text-[#D4AF37] font-semibold flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{t.favouriteLabel}</span>
          </p>
          <p className="font-[var(--font-display)] text-base sm:text-lg font-bold text-white mt-1">
            {isTa ? anbuSir.favouriteTitleTa : anbuSir.favouriteTitleEn}
          </p>
        </div>
      </div>

      {/* Dedicated Today's Anbu Sir Alert Card with Animated Golden Pulse */}
      <motion.div
        animate={{
          boxShadow: [
            '0 0 0 rgba(212,175,55,0)',
            '0 0 24px rgba(212,175,55,0.22)',
            '0 0 0 rgba(212,175,55,0)',
          ],
        }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        className={`rounded-xl border p-5 ${alertStyles}`}
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs tracking-[0.18em] uppercase text-[#FFE5A0] font-semibold flex items-center gap-2">
            {anbuSir.alertLevel === 'safe' ? (
              <ShieldCheck className="w-4 h-4 text-emerald-400" aria-hidden="true" />
            ) : (
              <AlertTriangle className="w-4 h-4 text-[#FFE5A0]" aria-hidden="true" />
            )}
            <span>{t.alertCardTitle}</span>
          </p>
          <span className="text-xs sm:text-sm font-bold text-white">
            {isTa ? anbuSir.alertBadgeTa : anbuSir.alertBadgeEn}
          </span>
        </div>

        <p className="mt-3 text-base sm:text-lg font-semibold text-white leading-relaxed">
          {isTa ? anbuSir.alertTextTa : anbuSir.alertTextEn}
        </p>
        <p className="mt-2 text-xs text-[#B8B8B8]">{t.alertDisclaimer}</p>
      </motion.div>

      {/* Scolding Prediction + Classroom Comedy Dialogue Generator */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* 1. Scolding Prediction */}
        <article className="bg-[#08070E] gold-border-hairline rounded-xl p-5 flex flex-col justify-between">
          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-[#D4AF37] font-semibold">
              <span aria-hidden="true">📏 </span>
              {t.scoldingLabel}
            </p>
            <p className="mt-3 text-base text-white/95 leading-relaxed">
              {isTa ? anbuSir.scoldingTa : anbuSir.scoldingEn}
            </p>
          </div>
          <p className="mt-4 text-xs text-[#B8B8B8]">{t.alertDisclaimer}</p>
        </article>

        {/* 2. Classroom Comedy Dialogue Generator */}
        <article className="bg-[#08070E] gold-border-hairline rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs tracking-[0.15em] uppercase text-[#D4AF37] font-semibold flex items-center gap-1.5">
                <MessageSquareQuote className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{t.dialogueLabel}</span>
              </p>
              <button
                type="button"
                onClick={() => setDialogueOffset((prev) => prev + 1)}
                className="min-h-[36px] px-3 py-1 text-xs font-medium text-[#FFE5A0] bg-[#13101D] gold-border-hairline hover:border-[#D4AF37] rounded-lg transition-colors flex items-center gap-1.5 shrink-0"
              >
                <RefreshCw className="w-3 h-3" aria-hidden="true" />
                <span>{t.nextDialogueBtn}</span>
              </button>
            </div>
            <p className="mt-3 text-base text-[#FFE5A0] font-medium leading-relaxed">
              “{currentDialogue}”
            </p>
          </div>
          <p className="mt-4 text-xs text-[#B8B8B8]">{t.dialogueDisclaimer}</p>
        </article>
      </div>

      {/* 5. Final Verdict & ANBU SIR vs YOUR DESTINY Banner */}
      <div className="bg-[#08070E] gold-border-active rounded-xl p-5 sm:p-6">
        <p className="text-xs tracking-[0.18em] uppercase text-[#D4AF37] font-semibold">
          {t.verdictLabel}
        </p>
        <p className="mt-2 text-lg sm:text-xl font-bold text-white leading-relaxed">
          “{isTa ? anbuSir.verdictTa : anbuSir.verdictEn}”
        </p>

        <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <p className="font-[var(--font-display)] text-base sm:text-lg font-bold text-[#FFE5A0]">
            {t.finalTitle}
          </p>
          <p className="text-xs sm:text-sm text-[#B8B8B8]">{t.finalLine}</p>
        </div>
      </div>
    </section>
  );
}
