import { useState, type FormEvent } from 'react';
import { Check, Copy, Plus, Send, Sparkles, X } from 'lucide-react';
import {
  formatGroupForWhatsApp,
  generateGroupFriendsDestiny,
  type GroupFriendResult,
  type Language,
} from '../data/astrologyData';
import { translations } from '../data/translations';

interface GroupDestinyProps {
  lang: Language;
}

const DEFAULT_FRIENDS = ['RAM', 'ARUN', 'KARTHIK', 'VICKY', 'SHANMUGA'];

export function GroupDestiny({ lang }: GroupDestinyProps) {
  const isTa = lang === 'ta';
  const t = translations[lang].group;
  const [members, setMembers] = useState<string[]>(DEFAULT_FRIENDS);
  const [newName, setNewName] = useState('');
  const [error, setError] = useState('');
  const [results, setResults] = useState<GroupFriendResult[]>(() =>
    generateGroupFriendsDestiny(DEFAULT_FRIENDS),
  );
  const [copied, setCopied] = useState(false);

  const handleAddMember = (e: FormEvent) => {
    e.preventDefault();
    const parts = newName
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    if (parts.length === 0) {
      setError(t.errAddOne);
      return;
    }

    const updated = [...members];
    for (const part of parts) {
      if (!updated.some((m) => m.toLowerCase() === part.toLowerCase()) && updated.length < 12) {
        updated.push(part);
      }
    }

    setMembers(updated);
    setResults(generateGroupFriendsDestiny(updated));
    setNewName('');
    setError('');
  };

  const handleRemoveMember = (index: number) => {
    const updated = members.filter((_, idx) => idx !== index);
    setMembers(updated);
    setResults(generateGroupFriendsDestiny(updated));
  };

  const handleRegenerate = () => {
    if (members.length === 0) {
      setError(t.errGenerateOne);
      return;
    }
    setError('');
    setResults(generateGroupFriendsDestiny(members));
  };

  const siteUrl = typeof window !== 'undefined' ? window.location.href : undefined;
  const whatsappText = formatGroupForWhatsApp(results, lang, siteUrl);
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappText)}`;

  const handleCopy = async () => {
    if (results.length === 0) return;
    try {
      await navigator.clipboard.writeText(whatsappText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="group-destiny" className="relative z-10 py-16 md:py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8">
          <p className="text-xs tracking-[0.22em] uppercase text-[#D4AF37] font-medium mb-2">
            {t.eyebrow}
          </p>
          <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold text-white tracking-tight text-balance">
            {t.title}
          </h2>
          <p className="mt-3 text-base text-[#B8B8B8] leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Add Friend Form */}
        <form onSubmit={handleAddMember} className="flex flex-col sm:flex-row gap-3 max-w-2xl">
          <div className="flex-1">
            <label htmlFor="group-friend-input" className="sr-only">
              {t.inputLabel}
            </label>
            <input
              id="group-friend-input"
              type="text"
              value={newName}
              onChange={(e) => {
                setNewName(e.target.value);
                if (error) setError('');
              }}
              placeholder={t.inputPlaceholder}
              maxLength={80}
              className="w-full max-w-full min-w-0 min-h-[48px] px-4 py-3 text-base text-white bg-[#13101D] gold-border-hairline rounded-xl placeholder:text-[#B8B8B8]/60 focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <button
            type="submit"
            className="min-h-[48px] px-5 py-3 text-sm font-semibold text-[#08070E] bg-gradient-to-r from-[#FFE600] to-[#FF9E3D] hover:brightness-110 rounded-xl transition-colors flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
          >
            <Plus className="w-4 h-4" aria-hidden="true" />
            <span>{t.addBtn}</span>
          </button>

          <button
            type="button"
            onClick={handleRegenerate}
            className="min-h-[48px] px-5 py-3 text-sm font-medium text-[#FFE5A0] bg-[#13101D] gold-border-hairline hover:border-[#D4AF37] rounded-xl transition-colors flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
          >
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            <span>{t.generateBtn}</span>
          </button>
        </form>

        {error && (
          <p role="alert" className="mt-2 text-xs text-[#FFE5A0]">
            {error}
          </p>
        )}

        {/* Member Chips */}
        <div className="mt-5 flex flex-wrap items-center gap-2">
          {members.map((member, idx) => (
            <span
              key={`${member}-${idx}`}
              className="inline-flex items-center gap-1.5 pl-3 pr-1.5 py-1.5 text-xs font-medium text-white bg-[#13101D] gold-border-hairline rounded-lg"
            >
              <span>{member}</span>
              <button
                type="button"
                onClick={() => handleRemoveMember(idx)}
                aria-label={`Remove ${member}`}
                className="w-6 h-6 rounded flex items-center justify-center text-[#B8B8B8] hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </span>
          ))}
          {members.length > 0 && (
            <button
              type="button"
              onClick={() => {
                setMembers([]);
                setResults([]);
              }}
              className="min-h-[34px] px-3 py-1 text-xs text-[#B8B8B8] hover:text-[#FFE5A0] transition-colors"
            >
              {t.clearAllBtn}
            </button>
          )}
        </div>

        {/* Friend Destiny Cards */}
        {results.length === 0 ? (
          <div className="mt-8 bg-[#13101D] gold-border-hairline rounded-2xl p-8 text-center">
            <p className="text-sm text-[#B8B8B8]">{t.emptyState}</p>
            <button
              type="button"
              onClick={() => {
                setMembers(DEFAULT_FRIENDS);
                setResults(generateGroupFriendsDestiny(DEFAULT_FRIENDS));
              }}
              className="mt-4 min-h-[44px] px-5 py-2 text-xs font-semibold text-[#08070E] bg-gradient-to-r from-[#FFE600] to-[#FF9E3D] hover:brightness-110 rounded-lg"
            >
              {t.loadSampleBtn}
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {results.map((item, idx) => (
                <div
                  key={`${item.name}-${idx}`}
                  className="bg-[#13101D] gold-border-hairline hover:border-[#D4AF37]/60 rounded-2xl p-6 transition-colors"
                >
                  <p className="text-xs font-mono tabular-nums text-[#B8B8B8]">
                    {t.friendPrefix} {idx + 1}
                  </p>
                  <h3 className="font-[var(--font-display)] text-xl font-bold text-white mt-1 uppercase">
                    {item.name}
                  </h3>
                  <p className="font-[var(--font-display)] text-base sm:text-lg font-semibold text-[#FFE5A0] mt-2">
                    {isTa ? item.titleTa : item.titleEn}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[48px] px-6 py-3 text-sm font-semibold text-white bg-[#15803D] hover:bg-[#16A34A] rounded-xl transition-colors flex items-center justify-center gap-2 text-center sm:whitespace-nowrap shrink-0"
              >
                <Send className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{t.shareBtn}</span>
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="w-full sm:w-auto min-h-[48px] px-5 py-3 text-sm font-medium text-[#FFE5A0] bg-[#13101D] gold-border-hairline hover:border-[#D4AF37] rounded-xl transition-colors flex items-center justify-center gap-2 sm:whitespace-nowrap shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>{t.copiedBtn}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>{t.copyBtn}</span>
                  </>
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
