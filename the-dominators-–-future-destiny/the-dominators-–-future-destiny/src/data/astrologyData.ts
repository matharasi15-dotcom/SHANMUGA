import {
  CAREER_TEMPLATES_EN,
  CAREER_TEMPLATES_TA,
  FAME_TEMPLATES_EN,
  FAME_TEMPLATES_TA,
  FRIENDSHIP_TEMPLATES_EN,
  FRIENDSHIP_TEMPLATES_TA,
  FUNNY_TEMPLATES_EN,
  FUNNY_TEMPLATES_TA,
  LUCKY_COLOURS,
  LUCKY_DAYS,
  LUCKY_SYMBOLS,
  MONEY_TEMPLATES_EN,
  MONEY_TEMPLATES_TA,
  PERSONALITY_TEMPLATES_EN,
  PERSONALITY_TEMPLATES_TA,
  type Language,
} from './bilingualTemplates';
import {
  BIOMATHS_COMEDY_EN,
  BIOMATHS_COMEDY_TA,
  BIOMATHS_CAREERS,
  BOARD_EXAM_EN,
  BOARD_EXAM_TA,
  CINEMA_DIALOGUES,
  CINEMA_STYLES,
  CS_CAREERS,
  CS_COMEDY_EN,
  CS_COMEDY_TA,
  LOVE_DESTINY_EN,
  LOVE_DESTINY_TA,
  TUITION_DESTINY_EN,
  TUITION_DESTINY_TA,
  TUITION_GROUP_TITLES,
  TUITION_MISSIONS,
  type CinemaStyleId,
  type StudyGroup,
} from './tuitionTemplates';
import {
  ANBU_ALERTS,
  ANBU_DIALOGUES_EN,
  ANBU_DIALOGUES_TA,
  ANBU_FAVOURITE_TITLES,
  ANBU_SCOLDING_EN,
  ANBU_SCOLDING_TA,
  ANBU_VERDICTS_EN,
  ANBU_VERDICTS_TA,
  type AnbuAlertLevel,
} from './anbuSirData';

export type { Language, StudyGroup, CinemaStyleId, AnbuAlertLevel };
export { CINEMA_STYLES };

export type ZodiacId =
  | 'aries'
  | 'taurus'
  | 'gemini'
  | 'cancer'
  | 'leo'
  | 'virgo'
  | 'libra'
  | 'scorpio'
  | 'sagittarius'
  | 'capricorn'
  | 'aquarius'
  | 'pisces';

export interface ZodiacSign {
  id: ZodiacId;
  name: string;
  nameTa: string;
  symbol: string;
  dateRange: string;
  element: string;
  elementTa: string;
  shortPersonality: string;
  shortPersonalityTa: string;
  svgPath: string;
}

export const ZODIAC_SIGNS: ZodiacSign[] = [
  {
    id: 'aries',
    name: 'Aries',
    nameTa: 'மேஷம்',
    symbol: '♈',
    dateRange: 'Mar 21 – Apr 19',
    element: 'Fire',
    elementTa: 'நெருப்பு',
    shortPersonality: 'Bold, fearless, and always the first to suggest a post-tuition snack trip.',
    shortPersonalityTa: 'தைரியமானவர், எப்பவும் டியூஷன் முடிஞ்சதும் டீ கடைக்குப் போகலாம்னு சொல்ற முதல் ஆள்!',
    svgPath: 'M12 20V9M12 9C12 5.5 9 4 6.5 5.5C4.5 6.7 5 9.5 7 10M12 9C12 5.5 15 4 17.5 5.5C19.5 6.7 19 9.5 17 10',
  },
  {
    id: 'taurus',
    name: 'Taurus',
    nameTa: 'ரிஷபம்',
    symbol: '♉',
    dateRange: 'Apr 20 – May 20',
    element: 'Earth',
    elementTa: 'நிலம்',
    shortPersonality: 'Loyal, calm, and fiercely dedicated to good snacks, comfort, and zero rushing.',
    shortPersonalityTa: 'அமைதியானவர், நல்ல சாப்பாட்டுக்கும் நண்பர்களுக்கும் உயிர் கொடுப்பார்!',
    svgPath: 'M7 5C7 8 9.2 10 12 10C14.8 10 17 8 17 5M12 10A5 5 0 1 0 12 20A5 5 0 1 0 12 10Z',
  },
  {
    id: 'gemini',
    name: 'Gemini',
    nameTa: 'மிதுனம்',
    symbol: '♊',
    dateRange: 'May 21 – Jun 20',
    element: 'Air',
    elementTa: 'காற்று',
    shortPersonality: 'Quick-witted, curious, and powered by nonstop backbench jokes.',
    shortPersonalityTa: 'பேச ஆரம்பிச்சா நிக்காது! டியூஷன்ல எல்லா காமெடிக்கும் சொந்தக்காரர்.',
    svgPath: 'M6 5C9.5 6.5 14.5 6.5 18 5M6 19C9.5 17.5 14.5 17.5 18 19M9 6V18M15 6V18',
  },
  {
    id: 'cancer',
    name: 'Cancer',
    nameTa: 'கடகம்',
    symbol: '♋',
    dateRange: 'Jun 21 – Jul 22',
    element: 'Water',
    elementTa: 'நீர்',
    shortPersonality: 'Protective, sharp-minded, and the quiet keeper of every class memory.',
    shortPersonalityTa: 'பாசமானவர், ஆனா பழைய காமெடி போட்டோக்களையெல்லாம் சேர்த்து வச்சிருப்பார்!',
    svgPath: 'M6 10A3 3 0 1 0 12 10A3 3 0 1 0 6 10ZM12 7C16 7 18.5 9 19 11M12 14A3 3 0 1 0 18 14A3 3 0 1 0 12 14ZM12 17C8 17 5.5 15 5 13',
  },
  {
    id: 'leo',
    name: 'Leo',
    nameTa: 'சிம்மம்',
    symbol: '♌',
    dateRange: 'Jul 23 – Aug 22',
    element: 'Fire',
    elementTa: 'நெருப்பு',
    shortPersonality: 'Confident, charismatic, and naturally wired for big stages and mass entry energy.',
    shortPersonalityTa: 'பிறவியிலேயே ஹீரோ லுக்! கிளாஸ்க்குள்ள வந்தாலே மாஸ் என்ட்ரி தான்.',
    svgPath: 'M8 14A3 3 0 1 0 8 8A3 3 0 1 0 8 14ZM10.5 9.5C12.5 6 17 6 17 11C17 14 14.5 16 15.5 18.5C16.2 20 18 20 19 18.5',
  },
  {
    id: 'virgo',
    name: 'Virgo',
    nameTa: 'கன்னி',
    symbol: '♍',
    dateRange: 'Aug 23 – Sep 22',
    element: 'Earth',
    elementTa: 'நிலம்',
    shortPersonality: 'Sharp, organized, and the only person who actually brings neat color-coded notes.',
    shortPersonalityTa: 'பக்கா பிளானர்! கிளாஸ் நோட்ஸை அழகா எழுதி வச்சிருப்பார்.',
    svgPath: 'M5 6V17M5 9C5 6.5 9 6.5 9 9V17M9 9C9 6.5 13 6.5 13 9V17M13 11C15 8 18 9 17.5 13C17 16 14 18 12 19.5M15 15L19 19',
  },
  {
    id: 'libra',
    name: 'Libra',
    nameTa: 'துலாம்',
    symbol: '♎',
    dateRange: 'Sep 23 – Oct 22',
    element: 'Air',
    elementTa: 'காற்று',
    shortPersonality: 'Diplomatic, stylish, and incapable of choosing a snack in under 20 minutes.',
    shortPersonalityTa: 'ஸ்டைலானவர், ஆனா எந்தப் பப்ஸ் வாங்கலாம்னு முடிவு பண்ண 20 நிமிஷம் ஆகும்!',
    svgPath: 'M5 17H19M5 13H9.2C8.4 12 8 10.8 8 9.5A4 4 0 0 1 16 9.5C16 10.8 15.6 12 14.8 13H19',
  },
  {
    id: 'scorpio',
    name: 'Scorpio',
    nameTa: 'விருச்சிகம்',
    symbol: '♏',
    dateRange: 'Oct 23 – Nov 21',
    element: 'Water',
    elementTa: 'நீர்',
    shortPersonality: 'Mysterious, strategic, and famous for reading every message without replying.',
    shortPersonalityTa: 'அமைதியான ஆபத்து! எல்லா மெசேஜையும் பார்த்துட்டு கடைசியா ஒரு பஞ்ச் கொடுப்பார்.',
    svgPath: 'M5 6V17M5 9C5 6.5 9 6.5 9 9V17M9 9C9 6.5 13 6.5 13 9V16C13 18 14.5 19 16.5 18.5L19 16M19 16L17 15.5M19 16L18.5 18',
  },
  {
    id: 'sagittarius',
    name: 'Sagittarius',
    nameTa: 'தனுசு',
    symbol: '♐',
    dateRange: 'Nov 22 – Dec 21',
    element: 'Fire',
    elementTa: 'நெருப்பு',
    shortPersonality: 'Adventurous, unfiltered, and always dreaming up post-exam vacation plans.',
    shortPersonalityTa: 'ஜாலி பார்ட்டி! எக்ஸாம் முடிஞ்சதும் எங்க போலாம்னு இப்பவே பிளான் போடுவார்.',
    svgPath: 'M6 18L18 6M18 6H11M18 6V13M8 12L12 16',
  },
  {
    id: 'capricorn',
    name: 'Capricorn',
    nameTa: 'மகரம்',
    symbol: '♑',
    dateRange: 'Dec 22 – Jan 19',
    element: 'Earth',
    elementTa: 'நிலம்',
    shortPersonality: 'Ambitious, grounded, and silently studying while pretending to chill.',
    shortPersonalityTa: 'சத்தமே இல்லாம படிக்கிற கில்லாடி! எப்பவும் பிஸி மூட்லயே இருப்பார்.',
    svgPath: 'M5 6L9 16L13 8C14 6 17 6 17 9C17 12 14.5 13.5 15 16.5C15.5 19 18.5 19 19 16.5C19.5 14 17 13 15 14',
  },
  {
    id: 'aquarius',
    name: 'Aquarius',
    nameTa: 'கும்பம்',
    symbol: '♒',
    dateRange: 'Jan 20 – Feb 18',
    element: 'Air',
    elementTa: 'காற்று',
    shortPersonality: 'Original, inventive, and armed with wild ideas during boring revision hours.',
    shortPersonalityTa: 'வித்தியாசமா யோசிப்பார்! போரடிக்கும்போது புது பிசினஸ் ஐடியாவோட வருவார்.',
    svgPath: 'M4 10L7.5 7.5L11 10L14.5 7.5L18 10L20 8.5M4 16L7.5 13.5L11 16L14.5 13.5L18 16L20 14.5',
  },
  {
    id: 'pisces',
    name: 'Pisces',
    nameTa: 'மீனம்',
    symbol: '♓',
    dateRange: 'Feb 19 – Mar 20',
    element: 'Water',
    elementTa: 'நீர்',
    shortPersonality: 'Creative, warm-hearted, and famous for daydreaming through double periods.',
    shortPersonalityTa: 'நல்ல மனசுக்காரர்! கிளாஸ்ல உக்காந்துக்கிட்டு பகல் கனவு காண்பார்.',
    svgPath: 'M6 5C9.5 9 9.5 15 6 19M18 5C14.5 9 14.5 15 18 19M5 12H19',
  },
];

export interface DestinyInput {
  name: string;
  birthDate: string; // YYYY-MM-DD
  group: StudyGroup;
  tuitionStudent: boolean;
  cinemaStyle: CinemaStyleId;
}

export interface PredictionCard {
  id:
    | 'tuition'
    | 'groupComedy'
    | 'boardExam'
    | 'love'
    | 'career'
    | 'money'
    | 'fame'
    | 'personality'
    | 'friendship'
    | 'funny';
  icon: string;
  labelEn: string;
  labelTa: string;
  textEn: string;
  textTa: string;
  isPrimaryPreview: boolean;
}

export interface AnbuSirReading {
  alertLevel: AnbuAlertLevel;
  alertBadgeEn: string;
  alertBadgeTa: string;
  alertTextEn: string;
  alertTextTa: string;
  scoldingEn: string;
  scoldingTa: string;
  dialogueIndexEn: number;
  dialogueIndexTa: number;
  dialoguesEn: string[];
  dialoguesTa: string[];
  favouriteTitleEn: string;
  favouriteTitleTa: string;
  verdictEn: string;
  verdictTa: string;
}

export interface DestinyReading {
  id: string;
  dailyDateKey: string;
  input: DestinyInput;
  sign: ZodiacSign;
  variation: number;
  identityEn: string;
  identityTa: string;
  careerTitleEn: string;
  careerTitleTa: string;
  cinemaStyleLabelEn: string;
  cinemaStyleLabelTa: string;
  cinemaDialogueEn: string;
  cinemaDialogueTa: string;
  cards: PredictionCard[];
  anbuSir: AnbuSirReading;
  luckyNumber: string;
  luckyColourEn: string;
  luckyColourTa: string;
  luckyDayEn: string;
  luckyDayTa: string;
  luckySymbolEn: string;
  luckySymbolTa: string;
  missionEn: string;
  missionTa: string;
}

export function getTodayDateString(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function getZodiacFromDate(dateStr: string): ZodiacSign {
  if (!dateStr) return ZODIAC_SIGNS[4];
  const parts = dateStr.split('-');
  if (parts.length < 3) return ZODIAC_SIGNS[4];
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);

  let id: ZodiacId = 'capricorn';
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) id = 'aries';
  else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) id = 'taurus';
  else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) id = 'gemini';
  else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) id = 'cancer';
  else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) id = 'leo';
  else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) id = 'virgo';
  else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) id = 'libra';
  else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) id = 'scorpio';
  else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) id = 'sagittarius';
  else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) id = 'capricorn';
  else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) id = 'aquarius';
  else id = 'pisces';

  return ZODIAC_SIGNS.find((z) => z.id === id) ?? ZODIAC_SIGNS[0];
}

function hashChannel(baseKey: string, channel: string): number {
  const full = `${channel}::${baseKey}`;
  let h = 2166136261 >>> 0;
  for (let i = 0; i < full.length; i++) {
    h ^= full.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  h ^= h >>> 16;
  h = Math.imul(h, 0x85ebca6b);
  h ^= h >>> 13;
  h = Math.imul(h, 0xc2b2ae35);
  h ^= h >>> 16;
  return h >>> 0;
}

function pick<T>(arr: readonly T[], baseKey: string, channel: string): T {
  return arr[hashChannel(baseKey, channel) % arr.length];
}

function fillTemplate(template: string, name: string, signLabel: string): string {
  return template.replace(/\{name\}/g, name).replace(/\{sign\}/g, signLabel);
}

export function generateDestinyReading(input: DestinyInput, variation = 0): DestinyReading {
  const cleanName = input.name.trim() || 'Student';
  const sign = getZodiacFromDate(input.birthDate);
  const dailyDateKey = getTodayDateString();
  const baseKey = `${cleanName.toLowerCase()}|${input.birthDate}|${input.group}|${input.tuitionStudent}|${input.cinemaStyle}|${dailyDateKey}|${variation}`;

  const identity = pick(TUITION_GROUP_TITLES, baseKey, 'identity');
  const careerPool = input.group === 'cs' ? CS_CAREERS : BIOMATHS_CAREERS;
  const careerTitle = pick(careerPool, baseKey, 'careerTitle');

  const tuitionIdxEn = hashChannel(baseKey, 'tuition_en') % TUITION_DESTINY_EN.length;
  const tuitionIdxTa = hashChannel(baseKey, 'tuition_ta') % TUITION_DESTINY_TA.length;

  const groupPoolEn = input.group === 'cs' ? CS_COMEDY_EN : BIOMATHS_COMEDY_EN;
  const groupPoolTa = input.group === 'cs' ? CS_COMEDY_TA : BIOMATHS_COMEDY_TA;
  const groupIdxEn = hashChannel(baseKey, 'groupComedy_en') % groupPoolEn.length;
  const groupIdxTa = hashChannel(baseKey, 'groupComedy_ta') % groupPoolTa.length;

  const examIdxEn = hashChannel(baseKey, 'boardExam_en') % BOARD_EXAM_EN.length;
  const examIdxTa = hashChannel(baseKey, 'boardExam_ta') % BOARD_EXAM_TA.length;

  const loveIdxEn = hashChannel(baseKey, 'love_en') % LOVE_DESTINY_EN.length;
  const loveIdxTa = hashChannel(baseKey, 'love_ta') % LOVE_DESTINY_TA.length;

  const careerIdxEn = hashChannel(baseKey, 'career_en') % CAREER_TEMPLATES_EN.length;
  const careerIdxTa = hashChannel(baseKey, 'career_ta') % CAREER_TEMPLATES_TA.length;

  const moneyIdxEn = hashChannel(baseKey, 'money_en') % MONEY_TEMPLATES_EN.length;
  const moneyIdxTa = hashChannel(baseKey, 'money_ta') % MONEY_TEMPLATES_TA.length;

  const fameIdxEn = hashChannel(baseKey, 'fame_en') % FAME_TEMPLATES_EN.length;
  const fameIdxTa = hashChannel(baseKey, 'fame_ta') % FAME_TEMPLATES_TA.length;

  const persIdxEn = hashChannel(baseKey, 'personality_en') % PERSONALITY_TEMPLATES_EN.length;
  const persIdxTa = hashChannel(baseKey, 'personality_ta') % PERSONALITY_TEMPLATES_TA.length;

  const friendIdxEn = hashChannel(baseKey, 'friendship_en') % FRIENDSHIP_TEMPLATES_EN.length;
  const friendIdxTa = hashChannel(baseKey, 'friendship_ta') % FRIENDSHIP_TEMPLATES_TA.length;

  const funnyIdxEn = hashChannel(baseKey, 'funny_en') % FUNNY_TEMPLATES_EN.length;
  const funnyIdxTa = hashChannel(baseKey, 'funny_ta') % FUNNY_TEMPLATES_TA.length;

  const styleObj =
    CINEMA_STYLES.find((s) => s.id === input.cinemaStyle) ?? CINEMA_STYLES[0];
  const styleBank = CINEMA_DIALOGUES[styleObj.id];
  const cinemaIdxEn = hashChannel(baseKey, 'cinemaLine_en') % styleBank.en.length;
  const cinemaIdxTa = hashChannel(baseKey, 'cinemaLine_ta') % styleBank.ta.length;

  const tuitionPrefixEn = input.tuitionStudent
    ? ''
    : 'Even without evening tuition, ';
  const tuitionPrefixTa = input.tuitionStudent
    ? ''
    : 'டியூஷன் போகாவிட்டாலும் சரி — ';

  const cards: PredictionCard[] = [
    {
      id: 'tuition',
      icon: '📚',
      labelEn: 'Tuition Destiny',
      labelTa: 'டியூஷன் வாழ்க்கை',
      textEn:
        tuitionPrefixEn +
        fillTemplate(TUITION_DESTINY_EN[tuitionIdxEn], cleanName, sign.name),
      textTa:
        tuitionPrefixTa +
        fillTemplate(TUITION_DESTINY_TA[tuitionIdxTa], cleanName, sign.nameTa),
      isPrimaryPreview: true,
    },
    {
      id: 'groupComedy',
      icon: input.group === 'cs' ? '💻' : '🧬',
      labelEn: input.group === 'cs' ? 'Computer Science Comedy' : 'Bio-Maths Comedy',
      labelTa:
        input.group === 'cs'
          ? 'கணினி அறிவியல் காமெடி'
          : 'உயிரியல் மற்றும் கணிதம் காமெடி',
      textEn: fillTemplate(groupPoolEn[groupIdxEn], cleanName, sign.name),
      textTa: fillTemplate(groupPoolTa[groupIdxTa], cleanName, sign.nameTa),
      isPrimaryPreview: true,
    },
    {
      id: 'boardExam',
      icon: '📝',
      labelEn: '12th Board Exam Destiny',
      labelTa: '12th பொதுத்தேர்வு கணிப்பு',
      textEn: fillTemplate(BOARD_EXAM_EN[examIdxEn], cleanName, sign.name),
      textTa: fillTemplate(BOARD_EXAM_TA[examIdxTa], cleanName, sign.nameTa),
      isPrimaryPreview: true,
    },
    {
      id: 'love',
      icon: '❤️',
      labelEn: 'Love Destiny',
      labelTa: 'காதல் நகைச்சுவை',
      textEn: fillTemplate(LOVE_DESTINY_EN[loveIdxEn], cleanName, sign.name),
      textTa: fillTemplate(LOVE_DESTINY_TA[loveIdxTa], cleanName, sign.nameTa),
      isPrimaryPreview: true,
    },
    {
      id: 'career',
      icon: '🚀',
      labelEn: `Future Career: ${careerTitle.en}`,
      labelTa: `எதிர்கால வேலை: ${careerTitle.ta}`,
      textEn: fillTemplate(CAREER_TEMPLATES_EN[careerIdxEn], cleanName, sign.name),
      textTa: fillTemplate(CAREER_TEMPLATES_TA[careerIdxTa], cleanName, sign.nameTa),
      isPrimaryPreview: false,
    },
    {
      id: 'money',
      icon: '💰',
      labelEn: 'Money & Wealth',
      labelTa: 'பணம் மற்றும் செல்வம்',
      textEn: fillTemplate(MONEY_TEMPLATES_EN[moneyIdxEn], cleanName, sign.name),
      textTa: fillTemplate(MONEY_TEMPLATES_TA[moneyIdxTa], cleanName, sign.nameTa),
      isPrimaryPreview: false,
    },
    {
      id: 'fame',
      icon: '🌟',
      labelEn: 'Future Fame',
      labelTa: 'புகழ்',
      textEn: fillTemplate(FAME_TEMPLATES_EN[fameIdxEn], cleanName, sign.name),
      textTa: fillTemplate(FAME_TEMPLATES_TA[fameIdxTa], cleanName, sign.nameTa),
      isPrimaryPreview: false,
    },
    {
      id: 'personality',
      icon: '🔮',
      labelEn: 'Personality',
      labelTa: 'குணாதிசயம்',
      textEn: fillTemplate(PERSONALITY_TEMPLATES_EN[persIdxEn], cleanName, sign.name),
      textTa: fillTemplate(PERSONALITY_TEMPLATES_TA[persIdxTa], cleanName, sign.nameTa),
      isPrimaryPreview: false,
    },
    {
      id: 'friendship',
      icon: '🤝',
      labelEn: 'Tuition Friends',
      labelTa: 'நண்பர்கள்',
      textEn: fillTemplate(FRIENDSHIP_TEMPLATES_EN[friendIdxEn], cleanName, sign.name),
      textTa: fillTemplate(FRIENDSHIP_TEMPLATES_TA[friendIdxTa], cleanName, sign.nameTa),
      isPrimaryPreview: false,
    },
    {
      id: 'funny',
      icon: '😂',
      labelEn: "Today's Comedy",
      labelTa: 'இன்றைய நகைச்சுவை',
      textEn: fillTemplate(FUNNY_TEMPLATES_EN[funnyIdxEn], cleanName, sign.name),
      textTa: fillTemplate(FUNNY_TEMPLATES_TA[funnyIdxTa], cleanName, sign.nameTa),
      isPrimaryPreview: false,
    },
  ];

  const anbuAlert = pick(ANBU_ALERTS, baseKey, 'anbuAlert');
  const anbuScoldIdxEn = hashChannel(baseKey, 'anbuScold_en') % ANBU_SCOLDING_EN.length;
  const anbuScoldIdxTa = hashChannel(baseKey, 'anbuScold_ta') % ANBU_SCOLDING_TA.length;
  const anbuDialogueIdxEn = hashChannel(baseKey, 'anbuDial_en') % ANBU_DIALOGUES_EN.length;
  const anbuDialogueIdxTa = hashChannel(baseKey, 'anbuDial_ta') % ANBU_DIALOGUES_TA.length;
  const anbuFav = pick(ANBU_FAVOURITE_TITLES, baseKey, 'anbuFav');
  const anbuVerdictIdxEn = hashChannel(baseKey, 'anbuVerdict_en') % ANBU_VERDICTS_EN.length;
  const anbuVerdictIdxTa = hashChannel(baseKey, 'anbuVerdict_ta') % ANBU_VERDICTS_TA.length;

  const anbuSir: AnbuSirReading = {
    alertLevel: anbuAlert.level,
    alertBadgeEn: anbuAlert.badgeEn,
    alertBadgeTa: anbuAlert.badgeTa,
    alertTextEn: fillTemplate(anbuAlert.textEn, cleanName, sign.name),
    alertTextTa: fillTemplate(anbuAlert.textTa, cleanName, sign.nameTa),
    scoldingEn: fillTemplate(ANBU_SCOLDING_EN[anbuScoldIdxEn], cleanName, sign.name),
    scoldingTa: fillTemplate(ANBU_SCOLDING_TA[anbuScoldIdxTa], cleanName, sign.nameTa),
    dialogueIndexEn: anbuDialogueIdxEn,
    dialogueIndexTa: anbuDialogueIdxTa,
    dialoguesEn: ANBU_DIALOGUES_EN.map((d) => fillTemplate(d, cleanName, sign.name)),
    dialoguesTa: ANBU_DIALOGUES_TA.map((d) => fillTemplate(d, cleanName, sign.nameTa)),
    favouriteTitleEn: anbuFav.en,
    favouriteTitleTa: anbuFav.ta,
    verdictEn: fillTemplate(ANBU_VERDICTS_EN[anbuVerdictIdxEn], cleanName, sign.name),
    verdictTa: fillTemplate(ANBU_VERDICTS_TA[anbuVerdictIdxTa], cleanName, sign.nameTa),
  };

  const rawNum = (hashChannel(baseKey, 'luckyNum') % 89) + 1;
  const luckyNumber = String(rawNum === 13 ? 7 : rawNum);
  const colour = pick(LUCKY_COLOURS, baseKey, 'luckyCol');
  const day = pick(LUCKY_DAYS, baseKey, 'luckyDay');
  const symbol = pick(LUCKY_SYMBOLS, baseKey, 'luckySym');
  const mission = pick(TUITION_MISSIONS, baseKey, 'mission');

  return {
    id: `${hashChannel(baseKey, 'id')}-${dailyDateKey}-${variation}`,
    dailyDateKey,
    input: { ...input, name: cleanName },
    sign,
    variation,
    identityEn: identity.en,
    identityTa: identity.ta,
    careerTitleEn: careerTitle.en,
    careerTitleTa: careerTitle.ta,
    cinemaStyleLabelEn: styleObj.labelEn,
    cinemaStyleLabelTa: styleObj.labelTa,
    cinemaDialogueEn: fillTemplate(styleBank.en[cinemaIdxEn], cleanName, sign.name),
    cinemaDialogueTa: fillTemplate(styleBank.ta[cinemaIdxTa], cleanName, sign.nameTa),
    cards,
    anbuSir,
    luckyNumber,
    luckyColourEn: colour.en,
    luckyColourTa: colour.ta,
    luckyDayEn: day.en,
    luckyDayTa: day.ta,
    luckySymbolEn: symbol.en,
    luckySymbolTa: symbol.ta,
    missionEn: mission.en,
    missionTa: mission.ta,
  };
}

export interface GroupFriendResult {
  name: string;
  titleEn: string;
  titleTa: string;
}

export function generateGroupFriendsDestiny(names: string[]): GroupFriendResult[] {
  const cleaned = names
    .map((n) => n.trim())
    .filter((n) => n.length > 0);
  if (cleaned.length === 0) return [];

  const today = getTodayDateString();
  const baseKey = `${cleaned.map((n) => n.toLowerCase()).join('|')}|${today}`;

  const pool = [...TUITION_GROUP_TITLES];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = hashChannel(baseKey, `grp-${i}`) % (i + 1);
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  return cleaned.map((name, idx) => {
    const chosen = pool[idx % pool.length];
    return {
      name,
      titleEn: chosen.en,
      titleTa: chosen.ta,
    };
  });
}

export function formatReadingForWhatsApp(
  reading: DestinyReading,
  lang: Language,
  siteUrl?: string,
): string {
  const tuition = reading.cards.find((c) => c.id === 'tuition');
  const groupJoke = reading.cards.find((c) => c.id === 'groupComedy');
  const love = reading.cards.find((c) => c.id === 'love');

  const groupLabelEn =
    reading.input.group === 'cs' ? 'COMPUTER SCIENCE 💻' : 'BIO-MATHS 🧬';
  const groupLabelTa =
    reading.input.group === 'cs'
      ? 'கணினி அறிவியல் 💻'
      : 'உயிரியல் மற்றும் கணிதம் 🧬';

  const anbuDialogueEn =
    reading.anbuSir.dialoguesEn[reading.anbuSir.dialogueIndexEn] ?? '';
  const anbuDialogueTa =
    reading.anbuSir.dialoguesTa[reading.anbuSir.dialogueIndexTa] ?? '';

  if (lang === 'ta') {
    const lines = [
      `🔮 *SHANMUGA'S HOROSCOPE – 12th டியூஷன் ஸ்பெஷல்* 🔮`,
      `_12th வாழ்க்கை தற்காலிகம்... டியூஷன் காமெடி நிரந்தரம்! 😂_`,
      ``,
      `பெயர்: *${reading.input.name}*`,
      `வகுப்பு: ${groupLabelTa}`,
      `ராசி: ${reading.sign.nameTa} ${reading.sign.symbol}`,
      `🏆 எதிர்கால பட்டம்: *${reading.identityTa}*`,
      ``,
      `📚 *டியூஷன் வாழ்க்கை:* ${tuition?.textTa ?? ''}`,
      `${reading.input.group === 'cs' ? '💻' : '🧬'} *வகுப்பு காமெடி:* ${groupJoke?.textTa ?? ''}`,
      `🚀 *எதிர்கால வேலை:* ${reading.careerTitleTa}`,
      `❤️ *காதல் நகைச்சுவை:* ${love?.textTa ?? ''}`,
      `🎬 *சினிமா வசனம் (${reading.cinemaStyleLabelTa}):* "${reading.cinemaDialogueTa}"`,
      ``,
      `📐 *அன்பு சார் எச்சரிக்கை மண்டலம் (கற்பனை காமெடி):*`,
      `🚨 ${reading.anbuSir.alertBadgeTa}: ${reading.anbuSir.alertTextTa}`,
      `📏 *கணிப்பு:* ${reading.anbuSir.scoldingTa}`,
      `💬 *கற்பனை வகுப்பு வசனம்:* "${anbuDialogueTa}"`,
      `🏅 *செல்லப் பட்டம்:* ${reading.anbuSir.favouriteTitleTa}`,
      `⚖️ *அன்பு சார் சொல்வது:* "${reading.anbuSir.verdictTa}"`,
      ``,
      `🎯 *இன்றைய சவால்:* ${reading.missionTa}`,
    ];
    if (siteUrl) {
      lines.push(``, `உன் 12th எதிர்காலத்தையும் பாரு:`, siteUrl);
    }
    lines.push(
      ``,
      `⚠️ கற்பனை பொழுதுபோக்கு மட்டுமே! நல்லா படிங்க, சிரிச்சுட்டே இருங்க!`,
    );
    return lines.join('\n');
  }

  const lines = [
    `🔮 *SHANMUGA'S HOROSCOPE – 12th TUITION SPECIAL* 🔮`,
    `_12th Life Is Temporary... Tuition Comedy Is Permanent! 😂_`,
    ``,
    `Name: *${reading.input.name}*`,
    `Group: ${groupLabelEn}`,
    `Zodiac: ${reading.sign.name} ${reading.sign.symbol}`,
    `🏆 Future Identity: *${reading.identityEn}*`,
    ``,
    `📚 *Tuition Destiny:* ${tuition?.textEn ?? ''}`,
    `${reading.input.group === 'cs' ? '💻' : '🧬'} *Group Comedy:* ${groupJoke?.textEn ?? ''}`,
    `🚀 *Career:* Future ${reading.careerTitleEn}`,
    `❤️ *Love Destiny:* ${love?.textEn ?? ''}`,
    `🎬 *Cinema Dialogue (${reading.cinemaStyleLabelEn}):* "${reading.cinemaDialogueEn}"`,
    ``,
    `📐 *ANBU SIR WARNING ZONE (Fictional Comedy):*`,
    `🚨 ${reading.anbuSir.alertBadgeEn}: ${reading.anbuSir.alertTextEn}`,
    `📏 *Maths Prediction:* ${reading.anbuSir.scoldingEn}`,
    `💬 *Fictional Class Line:* "${anbuDialogueEn}"`,
    `🏅 *Title:* ${reading.anbuSir.favouriteTitleEn}`,
    `⚖️ *ANBU SIR SAYS:* "${reading.anbuSir.verdictEn}"`,
    ``,
    `🎯 *Today's Mission:* ${reading.missionEn}`,
  ];
  if (siteUrl) {
    lines.push(``, `Check YOUR 12th Destiny here:`, siteUrl);
  }
  lines.push(
    ``,
    `⚠️ Purely fictional entertainment only! Study, friendships, and future choices are real; horoscope results are just jokes.`,
  );
  return lines.join('\n');
}

export function formatGroupForWhatsApp(
  members: GroupFriendResult[],
  lang: Language,
  siteUrl?: string,
): string {
  if (lang === 'ta') {
    const lines = [
      `👬 *12th டியூஷன் நண்பர்கள் எதிர்காலம்! – SHANMUGA'S HOROSCOPE* 🔮`,
      ``,
      ...members.map((m) => `• *${m.name.toUpperCase()}* – ${m.titleTa}`),
    ];
    if (siteUrl) {
      lines.push(``, `உங்க டியூஷன் நண்பர்கள் பெயரையும் போட்டுப் பாருங்க:`, siteUrl);
    }
    lines.push(``, `⚠️ சும்மா ஜாலிக்கு மட்டும்!`);
    return lines.join('\n');
  }

  const lines = [
    `👬 *12th TUITION FRIENDS DESTINY – SHANMUGA'S HOROSCOPE* 🔮`,
    ``,
    ...members.map((m) => `• *${m.name.toUpperCase()}* – ${m.titleEn}`),
  ];
  if (siteUrl) {
    lines.push(``, `Test your tuition squad:`, siteUrl);
  }
  lines.push(``, `⚠️ Purely fictional entertainment only!`);
  return lines.join('\n');
}
