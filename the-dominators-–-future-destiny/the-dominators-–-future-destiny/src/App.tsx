import { useCallback, useEffect, useRef, useState, type FormEvent } from 'react';
import { ArrowRight, Compass, Film, Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import {
  CINEMA_STYLES,
  generateDestinyReading,
  getTodayDateString,
  getZodiacFromDate,
  type DestinyInput,
  type DestinyReading,
  type Language,
  type ZodiacId,
} from './data/astrologyData';
import { translations } from './data/translations';
import { StarfieldCanvas } from './components/StarfieldCanvas';
import { CinematicRevealOverlay } from './components/CinematicRevealOverlay';
import { ReadingReveal } from './components/ReadingReveal';
import { ZodiacCodex } from './components/ZodiacCodex';
import { GroupDestiny } from './components/GroupDestiny';
import { ZodiacGlyph } from './components/ZodiacGlyph';

const HERO_IMAGE_URL = '${import.meta.env.BASE_URL}SHANMU.jpeg';
const LANG_STORAGE_KEY = 'shanmuga_horoscope_lang';

type FormErrorKey = '' | 'name' | 'dob' | 'futureDob';

function loadSessionLang(): Language {
  try {
    const saved = window.sessionStorage.getItem(LANG_STORAGE_KEY);
    if (saved === 'ta' || saved === 'en') return saved;
  } catch {
    // Ignore storage error
  }
  return 'en';
}

export default function App() {
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const [heroImgFailed, setHeroImgFailed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [lang, setLang] = useState<Language>(loadSessionLang);
  const isTa = lang === 'ta';
  const t = translations[lang];

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (ev: KeyboardEvent) => {
      if (ev.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    try {
      window.sessionStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
      // Ignore storage error
    }
    document.documentElement.lang = lang === 'ta' ? 'ta' : 'en';
  }, [lang]);

  const todayStr = getTodayDateString();

  const [formInput, setFormInput] = useState<DestinyInput>({
    name: '',
    birthDate: '2008-08-15',
    group: 'cs',
    tuitionStudent: true,
    cinemaStyle: 'mass_hero',
  });
  const [formErrorKey, setFormErrorKey] = useState<FormErrorKey>('');

  const [currentReading, setCurrentReading] = useState<DestinyReading | null>(() =>
    generateDestinyReading(
      {
        name: 'Ram',
        birthDate: '2008-08-15',
        group: 'cs',
        tuitionStudent: true,
        cinemaStyle: 'mass_hero',
      },
      0,
    ),
  );

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [pendingReading, setPendingReading] = useState<DestinyReading | null>(null);

  const previewSign = getZodiacFromDate(formInput.birthDate);

  const formErrorMessage =
    formErrorKey === 'name'
      ? t.form.errNameRequired
      : formErrorKey === 'dob'
        ? t.form.errDobRequired
        : formErrorKey === 'futureDob'
          ? t.form.errDobFuture
          : '';

  const scrollToForm = () => {
    const el = document.getElementById('reading');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.setTimeout(() => {
      nameInputRef.current?.focus();
    }, 360);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = formInput.name.trim();
    if (!trimmed) {
      setFormErrorKey('name');
      nameInputRef.current?.focus();
      return;
    }

    if (!formInput.birthDate) {
      setFormErrorKey('dob');
      return;
    }

    if (formInput.birthDate > todayStr) {
      setFormErrorKey('futureDob');
      return;
    }

    setFormErrorKey('');
    const nextReading = generateDestinyReading(
      { ...formInput, name: trimmed },
      0,
    );
    setPendingReading(nextReading);
    setIsOverlayOpen(true);
  };

  const handleOverlayComplete = useCallback(() => {
    setIsOverlayOpen(false);
    if (pendingReading) {
      setCurrentReading(pendingReading);
      setPendingReading(null);
      window.setTimeout(() => {
        const el = document.getElementById('reading-result');
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
    }
  }, [pendingReading]);

  const handleReroll = () => {
    if (!currentReading) return;
    const next = generateDestinyReading(
      currentReading.input,
      currentReading.variation + 1,
    );
    setCurrentReading(next);
  };

  const handleRestart = () => {
    setFormInput((prev) => ({ ...prev, name: '' }));
    setFormErrorKey('');
    scrollToForm();
  };

  const handleZodiacJump = (_signId: ZodiacId) => {
    scrollToForm();
  };

  return (
    <div id="top" className="min-h-screen bg-[#08070E] text-white relative">
      <StarfieldCanvas />

      <CinematicRevealOverlay
        isOpen={isOverlayOpen}
        userName={pendingReading?.input.name ?? formInput.name}
        lang={lang}
        onComplete={handleOverlayComplete}
      />

      {/* Clean 3-Zone Top Bar with Mobile Menu & தமிழ் | ENGLISH Selector */}
      <header className="sticky top-0 z-40 bg-[#08070E]/92 backdrop-blur-md border-b border-[#A855F7]/25">
        <div className="max-w-6xl mx-auto h-14 sm:h-16 px-3 min-[375px]:px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-6">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#top"
            onClick={() => setMobileMenuOpen(false)}
            className="font-[var(--font-display)] text-[11px] min-[375px]:text-xs sm:text-base font-semibold tracking-[0.03em] sm:tracking-[0.08em] text-[#FFE600] min-w-0 truncate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7A00] rounded"
          >
            <span aria-hidden="true">🔮 </span>
            {t.brandName}
          </a>

          {/* Zone 2: Desktop Navigation Links */}
          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-6 text-sm font-medium text-[#B8B8B8]"
          >
            <a
              href="#reading"
              className="hover:text-[#FFE5A0] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#D4AF37]"
            >
              {t.nav.destiny}
            </a>
            <a
              href="#anbu-sir"
              className="hover:text-[#FFE5A0] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#D4AF37]"
            >
              {t.nav.anbuSir}
            </a>
            <a
              href="#zodiac"
              className="hover:text-[#FFE5A0] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#D4AF37]"
            >
              {t.nav.zodiac}
            </a>
            <a
              href="#group-destiny"
              className="hover:text-[#FFE5A0] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#D4AF37]"
            >
              {t.nav.tuitionGang}
            </a>
          </nav>

          {/* Zone 3: Language Switch + Mobile Menu Button */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <div
              className="flex items-center p-0.5 sm:p-1 bg-[#13101D] gold-border-hairline rounded-lg shrink-0"
              role="group"
              aria-label="Language selection"
            >
              <button
                type="button"
                onClick={() => setLang('ta')}
                aria-pressed={lang === 'ta'}
                className={`min-h-[34px] px-2 min-[375px]:px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  lang === 'ta'
                    ? 'bg-gradient-to-r from-[#FFE600] to-[#FF9E3D] text-[#08070E]'
                    : 'text-[#B8B8B8] hover:text-white'
                }`}
              >
                தமிழ்
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                aria-pressed={lang === 'en'}
                className={`min-h-[34px] px-2 min-[375px]:px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  lang === 'en'
                    ? 'bg-gradient-to-r from-[#FFE600] to-[#FF9E3D] text-[#08070E]'
                    : 'text-[#B8B8B8] hover:text-white'
                }`}
              >
                ENGLISH
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={isTa ? 'மெனு' : 'Menu'}
              className="md:hidden min-h-[40px] min-w-[40px] flex items-center justify-center rounded-lg bg-[#13101D] gold-border-hairline text-[#FFE5A0] hover:border-[#D4AF37] transition-colors shrink-0"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile-Friendly Navigation Drawer */}
        {mobileMenuOpen && (
          <nav
            id="mobile-nav-drawer"
            aria-label="Mobile navigation"
            className="md:hidden border-t border-[#D4AF37]/20 bg-[#08070E] px-4 py-3 space-y-1"
          >
            <a
              href="#reading"
              onClick={() => setMobileMenuOpen(false)}
              className="block min-h-[44px] px-3 py-2.5 text-sm font-medium text-white hover:text-[#FFE5A0] hover:bg-[#13101D] rounded-lg transition-colors"
            >
              {t.nav.destiny}
            </a>
            <a
              href="#anbu-sir"
              onClick={() => setMobileMenuOpen(false)}
              className="block min-h-[44px] px-3 py-2.5 text-sm font-medium text-white hover:text-[#FFE5A0] hover:bg-[#13101D] rounded-lg transition-colors"
            >
              {t.nav.anbuSir}
            </a>
            <a
              href="#zodiac"
              onClick={() => setMobileMenuOpen(false)}
              className="block min-h-[44px] px-3 py-2.5 text-sm font-medium text-white hover:text-[#FFE5A0] hover:bg-[#13101D] rounded-lg transition-colors"
            >
              {t.nav.zodiac}
            </a>
            <a
              href="#group-destiny"
              onClick={() => setMobileMenuOpen(false)}
              className="block min-h-[44px] px-3 py-2.5 text-sm font-medium text-white hover:text-[#FFE5A0] hover:bg-[#13101D] rounded-lg transition-colors"
            >
              {t.nav.tuitionGang}
            </a>
          </nav>
        )}
      </header>

      <main className="relative z-10">
        {/* Bold Cinematic Comedy Hero */}
        <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* 1. HUGE PERFECTLY CENTERED WEBSITE TITLE */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="text-center max-w-5xl mx-auto"
            >
              <div className="inline-flex items-center justify-center gap-3 sm:gap-5">
                <span
                  aria-hidden="true"
                  className="text-2xl sm:text-4xl animate-float-slow select-none"
                >
                  🔮
                </span>
                <p className="text-xs sm:text-sm tracking-[0.22em] uppercase text-[#C084FC] font-semibold">
                  {t.hero.editionLabel}
                </p>
                <span
                  aria-hidden="true"
                  className="text-2xl sm:text-4xl animate-float-slow-delayed select-none"
                >
                  😂
                </span>
              </div>

              <h1 className="mt-3 font-[var(--font-display)] text-[clamp(2.2rem,7.2vw,5.15rem)] leading-[1.04] font-black uppercase tracking-[0.03em] text-center title-metallic-glow text-balance break-words">
                {t.brandName}
              </h1>

              <p className="mt-3 sm:mt-4 text-sm sm:text-lg font-semibold text-[#FFE600] tracking-wide">
                {t.hero.officialSubtitle}
              </p>
            </motion.div>

            {/* 2. SHANMUGA COMEDY PHOTO SHOWCASE + CINEMATIC CTA */}
            <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Shanmuga's Uploaded Comedy Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 flex flex-col items-center"
              >
                <figure className="w-full max-w-[320px] min-[390px]:max-w-[355px] sm:max-w-[390px] mx-auto">
                  <div className="cinema-photo-frame rounded-3xl overflow-hidden">
                    <div className="relative rounded-[21px] overflow-hidden bg-[#13101D]">
                      <div className="relative aspect-[3/4] w-full overflow-hidden">
                        {!heroImgFailed ? (
                          <img
                            src={HERO_IMAGE_URL}
                            alt="Chief Prediction Officer Shanmuga holding his horoscope book with funny Tamil signboard"
                            loading="eager"
                            decoding="async"
                            onError={() => setHeroImgFailed(true)}
                            className="w-full h-full object-cover object-top"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center p-10 text-center bg-gradient-to-br from-[#1B1430] to-[#08070E]">
                            <Compass className="w-14 h-14 text-[#FFE600] mb-3" />
                            <p className="font-[var(--font-display)] text-xl text-[#FFE600]">
                              {t.brandName}
                            </p>
                          </div>
                        )}
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#08070E]/90 to-transparent" />
                      </div>

                      <figcaption className="px-4 py-3.5 bg-[#13101D] border-t border-[#FF7A00]/35 text-center">
                        <p className="text-sm sm:text-base font-bold text-[#FFE600]">
                          {t.hero.photoCaption}
                        </p>
                      </figcaption>
                    </div>
                  </div>
                </figure>
              </motion.div>

              {/* Right Copy + Animated Emojis + Huge CTA */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start"
              >
                <div className="flex items-center gap-3 text-xl sm:text-2xl mb-3" aria-hidden="true">
                  <span className="animate-float-slow">⚡</span>
                  <span className="animate-float-slow-delayed">📐</span>
                  <span className="animate-float-slow">🎬</span>
                  <span className="animate-float-slow-delayed">🔥</span>
                </div>

                <h2 className="font-[var(--font-display)] text-[clamp(1.6rem,4.4vw,2.85rem)] leading-[1.2] font-bold text-white tracking-tight text-balance gold-text-glow">
                  {t.hero.headline}
                </h2>

                <p className="mt-4 text-base sm:text-xl text-[#FF9E3D] font-semibold leading-relaxed">
                  {t.hero.tagline}
                </p>

                <p className="mt-1.5 text-sm font-semibold text-[#C084FC]">
                  {t.hero.subTagline}
                </p>

                <p className="mt-4 text-sm sm:text-base text-[#C4BFD3] leading-relaxed max-w-xl">
                  {t.hero.description}
                </p>

                <div className="mt-7 sm:mt-8 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="w-full sm:w-auto min-h-[58px] px-8 sm:px-10 py-4 text-base sm:text-lg font-extrabold tracking-wide text-[#08070E] bg-gradient-to-r from-[#FFE600] via-[#FFAE00] to-[#FF7A00] hover:brightness-110 rounded-xl shadow-[0_0_32px_rgba(255,140,0,0.4)] transition-all duration-200 inline-flex items-center justify-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFE600]"
                  >
                    <span aria-hidden="true">🔮</span>
                    <span>{t.hero.ctaButton}</span>
                    <ArrowRight className="w-5 h-5 shrink-0" aria-hidden="true" />
                  </button>
                </div>

                <p className="mt-6 text-xs sm:text-sm text-[#C4BFD3] leading-relaxed">
                  <span>{t.hero.metaSubjects}</span>
                  <span className="mx-2 text-[#A855F7]" aria-hidden="true">
                    ·
                  </span>
                  <span>{t.hero.metaNoLogin}</span>
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Student Details Form */}
        <section id="reading" className="py-12 sm:py-16 md:py-24 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <p className="text-xs tracking-[0.2em] uppercase text-[#D4AF37] font-medium mb-2">
                {t.form.eyebrow}
              </p>
              <h2 className="font-[var(--font-display)] text-2xl sm:text-4xl font-semibold text-white tracking-tight text-balance">
                {t.form.title}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#B8B8B8]">{t.form.subtitle}</p>
            </div>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-[#13101D] gold-border-active rounded-2xl p-4 min-[375px]:p-5 sm:p-8 space-y-5 sm:space-y-6 shadow-[0_20px_60px_rgba(0,0,0,0.65)]"
            >
              {/* Row 1: Name & Date of Birth */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="min-w-0">
                  <label
                    htmlFor="user-name"
                    className="block text-sm font-semibold text-[#FFE5A0] mb-2"
                  >
                    {t.form.nameLabel}
                  </label>
                  <input
                    ref={nameInputRef}
                    id="user-name"
                    type="text"
                    value={formInput.name}
                    onChange={(e) => {
                      setFormInput((prev) => ({ ...prev, name: e.target.value }));
                      if (formErrorKey) setFormErrorKey('');
                    }}
                    placeholder={t.form.namePlaceholder}
                    maxLength={40}
                    required
                    className="w-full max-w-full min-w-0 min-h-[52px] px-4 py-3 text-base text-white bg-[#08070E] gold-border-hairline rounded-xl placeholder:text-[#B8B8B8]/55 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div className="min-w-0">
                  <label
                    htmlFor="user-dob"
                    className="block text-sm font-semibold text-[#FFE5A0] mb-2"
                  >
                    {t.form.dobLabel}
                  </label>
                  <input
                    id="user-dob"
                    type="date"
                    max={todayStr}
                    value={formInput.birthDate}
                    onChange={(e) => {
                      setFormInput((prev) => ({ ...prev, birthDate: e.target.value }));
                      if (formErrorKey) setFormErrorKey('');
                    }}
                    required
                    className="w-full max-w-full min-w-0 min-h-[52px] px-4 py-3 text-base text-white bg-[#08070E] gold-border-hairline rounded-xl tabular-nums focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              {/* Row 2: Group & Tuition Student */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="min-w-0">
                  <span className="block text-sm font-semibold text-[#FFE5A0] mb-2">
                    {t.form.groupLabel}
                  </span>
                  <div className="grid grid-cols-1 min-[410px]:grid-cols-2 gap-2.5 sm:gap-3" role="group" aria-label={t.form.groupLabel}>
                    <button
                      type="button"
                      onClick={() => setFormInput((prev) => ({ ...prev, group: 'cs' }))}
                      aria-pressed={formInput.group === 'cs'}
                      className={`min-h-[52px] px-3 py-3 text-sm font-semibold rounded-xl transition-colors text-center ${
                        formInput.group === 'cs'
                          ? 'bg-gradient-to-r from-[#FFE600] to-[#FF9E3D] text-[#08070E]'
                          : 'bg-[#08070E] text-[#B8B8B8] gold-border-hairline hover:text-white'
                      }`}
                    >
                      {t.form.groupCs}
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormInput((prev) => ({ ...prev, group: 'biomaths' }))}
                      aria-pressed={formInput.group === 'biomaths'}
                      className={`min-h-[52px] px-3 py-3 text-sm font-semibold rounded-xl transition-colors text-center ${
                        formInput.group === 'biomaths'
                          ? 'bg-gradient-to-r from-[#FFE600] to-[#FF9E3D] text-[#08070E]'
                          : 'bg-[#08070E] text-[#B8B8B8] gold-border-hairline hover:text-white'
                      }`}
                    >
                      {t.form.groupBiomaths}
                    </button>
                  </div>
                </div>

                <div>
                  <span className="block text-sm font-semibold text-[#FFE5A0] mb-2">
                    {t.form.tuitionLabel}
                  </span>
                  <div className="grid grid-cols-2 gap-3" role="group" aria-label={t.form.tuitionLabel}>
                    <button
                      type="button"
                      onClick={() =>
                        setFormInput((prev) => ({ ...prev, tuitionStudent: true }))
                      }
                      aria-pressed={formInput.tuitionStudent}
                      className={`min-h-[52px] px-4 py-3 text-sm font-semibold rounded-xl transition-colors ${
                        formInput.tuitionStudent
                          ? 'bg-gradient-to-r from-[#FFE600] to-[#FF9E3D] text-[#08070E]'
                          : 'bg-[#08070E] text-[#B8B8B8] gold-border-hairline hover:text-white'
                      }`}
                    >
                      {t.form.tuitionYes}
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setFormInput((prev) => ({ ...prev, tuitionStudent: false }))
                      }
                      aria-pressed={!formInput.tuitionStudent}
                      className={`min-h-[52px] px-4 py-3 text-sm font-semibold rounded-xl transition-colors ${
                        !formInput.tuitionStudent
                          ? 'bg-gradient-to-r from-[#FFE600] to-[#FF9E3D] text-[#08070E]'
                          : 'bg-[#08070E] text-[#B8B8B8] gold-border-hairline hover:text-white'
                      }`}
                    >
                      {t.form.tuitionNo}
                    </button>
                  </div>
                </div>
              </div>

              {/* Row 3: Language & Auto Zodiac Display */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
                <div>
                  <span className="block text-sm font-semibold text-[#FFE5A0] mb-2">
                    {t.form.languageLabel}
                  </span>
                  <div className="grid grid-cols-2 gap-3" role="group" aria-label={t.form.languageLabel}>
                    <button
                      type="button"
                      onClick={() => setLang('ta')}
                      aria-pressed={lang === 'ta'}
                      className={`min-h-[52px] px-4 py-3 text-sm font-semibold rounded-xl transition-colors ${
                        lang === 'ta'
                          ? 'bg-gradient-to-r from-[#FFE600] to-[#FF9E3D] text-[#08070E]'
                          : 'bg-[#08070E] text-[#B8B8B8] gold-border-hairline hover:text-white'
                      }`}
                    >
                      🇮🇳 தமிழ்
                    </button>
                    <button
                      type="button"
                      onClick={() => setLang('en')}
                      aria-pressed={lang === 'en'}
                      className={`min-h-[52px] px-4 py-3 text-sm font-semibold rounded-xl transition-colors ${
                        lang === 'en'
                          ? 'bg-gradient-to-r from-[#FFE600] to-[#FF9E3D] text-[#08070E]'
                          : 'bg-[#08070E] text-[#B8B8B8] gold-border-hairline hover:text-white'
                      }`}
                    >
                      🇬🇧 English
                    </button>
                  </div>
                </div>

                <div>
                  <span className="block text-sm font-semibold text-[#FFE5A0] mb-2">
                    {t.form.autoZodiacLabel}
                  </span>
                  <div className="min-h-[52px] bg-[#08070E] gold-border-hairline rounded-xl px-4 py-2.5 flex items-center gap-3">
                    <ZodiacGlyph sign={previewSign} size="sm" />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white truncate">
                        {isTa ? previewSign.nameTa : previewSign.name}{' '}
                        <span aria-hidden="true">{previewSign.symbol}</span>
                      </p>
                      <p className="text-xs text-[#B8B8B8] tabular-nums truncate">
                        {previewSign.dateRange}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 4: Cinema Dialogue Style Selector */}
              <div className="bg-[#08070E] gold-border-hairline rounded-xl p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Film className="w-4 h-4 text-[#D4AF37] shrink-0" aria-hidden="true" />
                  <span className="text-sm font-semibold text-[#FFE5A0]">
                    {t.form.cinemaStyleLabel}
                  </span>
                </div>
                <div
                  className="grid grid-cols-1 min-[375px]:grid-cols-2 sm:grid-cols-3 gap-2.5"
                  role="radiogroup"
                  aria-label={t.form.cinemaStyleLabel}
                >
                  {CINEMA_STYLES.map((style) => {
                    const selected = formInput.cinemaStyle === style.id;
                    return (
                      <button
                        key={style.id}
                        type="button"
                        role="radio"
                        aria-checked={selected}
                        onClick={() =>
                          setFormInput((prev) => ({
                            ...prev,
                            cinemaStyle: style.id,
                          }))
                        }
                        className={`min-h-[44px] px-3 py-2 text-xs sm:text-sm font-medium rounded-lg text-left transition-colors ${
                          selected
                            ? 'bg-[#D4AF37] text-[#080808] font-semibold'
                            : 'bg-[#151515] text-[#B8B8B8] gold-border-hairline hover:text-white hover:border-[#D4AF37]/50'
                        }`}
                      >
                        {isTa ? style.labelTa : style.labelEn}
                      </button>
                    );
                  })}
                </div>
              </div>

              {formErrorMessage && (
                <p role="alert" className="text-sm text-[#FFE5A0] font-medium">
                  {formErrorMessage}
                </p>
              )}

              {/* Main Submit Button */}
              <button
                type="submit"
                className="w-full min-h-[58px] px-8 py-4 text-base sm:text-lg font-extrabold tracking-wide text-[#08070E] bg-gradient-to-r from-[#FFE600] via-[#FFAE00] to-[#FF7A00] hover:brightness-110 rounded-xl shadow-[0_0_32px_rgba(255,140,0,0.35)] transition-all flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFE600]"
              >
                <span aria-hidden="true">🔮</span>
                <span>{t.form.submitButton}</span>
              </button>
            </form>

            {/* Results Display (Includes ANBU SIR WARNING ZONE) */}
            {currentReading && (
              <ReadingReveal
                reading={currentReading}
                lang={lang}
                onReroll={handleReroll}
                onRestart={handleRestart}
              />
            )}
          </div>
        </section>

        {/* 12 Zodiac Signs */}
        <ZodiacCodex lang={lang} onSelectForReading={handleZodiacJump} />

        {/* Group Friends Feature */}
        <GroupDestiny lang={lang} />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#A855F7]/25 bg-[#08070E] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <p className="font-[var(--font-display)] text-lg font-semibold tracking-[0.12em] text-[#FFE600]">
                {t.brandName} <span aria-hidden="true">🔮</span>
              </p>
              <p className="text-sm text-[#FF9E3D] font-medium mt-1">
                {t.footer.tagline}
              </p>
              <p className="text-xs text-[#C4BFD3] mt-1">{t.footer.subTagline}</p>
            </div>

            <nav
              aria-label="Footer"
              className="flex flex-wrap items-center gap-6 text-xs text-[#C4BFD3]"
            >
              <a href="#reading" className="hover:text-[#FFE600] transition-colors">
                {t.nav.destiny}
              </a>
              <a href="#anbu-sir" className="hover:text-[#FFE600] transition-colors">
                {t.nav.anbuSir}
              </a>
              <a href="#zodiac" className="hover:text-[#FFE600] transition-colors">
                {t.nav.zodiac}
              </a>
              <a
                href="#group-destiny"
                className="hover:text-[#FFE600] transition-colors"
              >
                {t.nav.tuitionGang}
              </a>
            </nav>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#C4BFD3] leading-relaxed">
            <p className="max-w-2xl">{t.footer.disclaimer}</p>
            <p className="shrink-0 font-[var(--font-display)] text-[#FFE600]">
              {t.footer.createdBy}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
