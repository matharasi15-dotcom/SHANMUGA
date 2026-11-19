import type { BilingualTitle } from './bilingualTemplates';

export type AnbuAlertLevel = 'safe' | 'warning' | 'danger';

export interface AnbuAlertOption {
  level: AnbuAlertLevel;
  badgeEn: string;
  badgeTa: string;
  textEn: string;
  textTa: string;
}

export const ANBU_ALERTS: readonly AnbuAlertOption[] = [
  {
    level: 'safe',
    badgeEn: '🟢 SAFE DAY',
    badgeTa: '🟢 பாதுகாப்பான நாள்',
    textEn: 'Today ANBU SIR might actually praise your neat Maths steps, {name}!',
    textTa: 'இன்று ANBU SIR உன்னைப் பார்த்து பாராட்ட வாய்ப்பு இருக்கு {name}!',
  },
  {
    level: 'warning',
    badgeEn: '🟡 WARNING',
    badgeTa: '🟡 எச்சரிக்கை',
    textEn: 'Surprise homework check might happen today, {name}. Is your notebook ready?',
    textTa: 'இன்று வீட்டுப்பாடம் சோதனை நடக்கலாம் {name}. உன் நோட்புக் தயாரா?',
  },
  {
    level: 'danger',
    badgeEn: '🔴 MATHS DANGER',
    badgeTa: '🔴 கணக்கு ஆபத்து',
    textEn: 'ANBU SIR might call {name} to solve a problem on the board today! Stay alert!',
    textTa: 'இன்று ANBU SIR உன் பெயரைச் சொல்லி போர்டுக்குக் கூப்பிடலாம் {name}! கவனமாக இரு!',
  },
];

export const ANBU_SCOLDING_EN: readonly string[] = [
  'Today ANBU SIR might look straight at {name} and ask, "Where is yesterday’s Maths homework?"',
  'Your {sign} horoscope shows a tiny Maths puzzle today—ANBU SIR’s radar is locking onto {name}’s bench!',
  '{name} will walk into Maths tuition quietly today... until ANBU SIR writes one integration problem on the board!',
  'Will ANBU SIR praise {name} or ask for your notebook today? Everything depends on page 42!',
  'Big success waits in {name}’s future—but first solve today’s sum without skipping three steps!',
  'High chance ANBU SIR calls {name}’s name today—either for attendance or for forgetting the formula!',
  'If {name} sits calmly in the third row pretending to understand, ANBU SIR will definitely ask "Tell me the next step!"',
  'Today {name}’s calculator wish is strong—too bad ANBU SIR believes in pure mental Maths!',
];

export const ANBU_SCOLDING_TA: readonly string[] = [
  'இன்று ANBU SIR {name}-ஐப் பார்த்து, "என்னப்பா, வீட்டுப்பாடம் எங்கே?" என்று கேட்கப்போகிறார்!',
  'உன் {sign} ஜாதகத்தில் இன்று கணக்கு பிரச்சனை இருக்கு {name}... ANBU SIR பார்வை உன் பெஞ்ச் மேல விழப்போகுது!',
  '{name}, நீ இன்று அமைதியாக டியூஷன் போகலாம்... ஆனால் ANBU SIR ஒரு கணக்கு கொடுத்ததும் உன் அமைதி போயிடும்!',
  'இன்று ANBU SIR உன்னைப் பாராட்டுவாரா அல்லது திட்டுவாரா {name}? அது உன் கணக்கு நோட்டைப் பொறுத்தது!',
  '{name} எதிர்காலத்தில் பெரிய வெற்றி இருக்கு... ஆனா இன்றைய கணக்கை முதலில் சரியாகப் போடு!',
  'ANBU SIR இன்று {name} பெயரைச் சொல்ல வாய்ப்பு அதிகம்... காரணம் வருகைப் பதிவா, கணக்கா என்று பொறுத்திருந்து பார்ப்போம்!',
  'எதுவுமே தெரியாத மாதிரி {name} அமைதியா தலையாட்டினா, "சரி அடுத்த ஸ்டெப் நீ சொல்லு"னு ANBU SIR கேட்பார்!',
  'கடைசி வரிசையில் மறைந்து உக்காந்தாலும் {name}, ANBU SIR கண்களில் இருந்து தப்பிக்க முடியாது!',
];

export const ANBU_DIALOGUES_EN: readonly string[] = [
  'What is this, {name}—you couldn’t solve even this warm-up problem?',
  'Where is the formula, {name}? Did it go on vacation?',
  'Did you finish the Maths homework, or did the notebook stay home sleeping?',
  'Look at the board, {name}, stop staring at your friend’s blank page!',
  'If this integration step is unclear, should I explain it one more time slowly?',
  'Don’t skip four steps and jump straight to the final answer like magic, {name}!',
  'In the exam hall, your friend won’t sit next to you to whisper the minus sign!',
  'Draw the margin neatly first—half the confusion disappears when the steps look clean!',
];

export const ANBU_DIALOGUES_TA: readonly string[] = [
  'என்னப்பா {name}, இந்தச் சின்ன கணக்கைக்கூடப் போட முடியலையா?',
  'ஃபார்முலா எங்கேப்பா {name}? நோட்புக்ல எழுத மறந்துட்டியா?',
  'வீட்டுப்பாடம் முடிச்சியா {name}, இல்ல நோட்டு வீட்லயே தூங்குதா?',
  'போர்டைப் பாருப்பா {name}, உன் நண்பனைப் பார்க்காதே!',
  'இந்தக் கணக்கு புரியலனா இன்னொரு முறை மெதுவா சொல்லட்டுமா {name}?',
  'நடுவுல நாலு ஸ்டெப்பைத் தாவி நேரடியா விடை எழுதாதப்பா {name}!',
  'பரீட்சை ஹால்ல பக்கத்துல நண்பன் இருக்க மாட்டான், நீதான் பிளஸ் மைனஸ் கரெக்டா போடணும்!',
  'முதலில் கட்டம் கட்டி அழகா ஸ்டெப் எழுதுப்பா {name}, அப்பதான் கணக்கு தப்பாகாது!',
];

export const ANBU_FAVOURITE_TITLES: readonly BilingualTitle[] = [
  { en: 'Future Maths Master', ta: 'எதிர்கால கணித மேதை' },
  { en: 'Homework King', ta: 'வீட்டுப்பாட மன்னன்' },
  { en: 'Formula Forgetter', ta: 'ஃபார்முலா மறக்கும் புலி' },
  { en: 'Integration Survivor', ta: 'இன்டகிரேஷன் போராளி' },
  { en: 'Calculus Fighter', ta: 'கால்குலஸ் வீரன்' },
  { en: 'Board Work Champion', ta: 'போர்டு வொர்க் சாம்பியன்' },
  { en: 'Silent Backbencher', ta: 'அமைதியான கடைசி பெஞ்ச்' },
  { en: "Anbu Sir's Special Student", ta: 'அன்பு சாரின் செல்ல மாணவர்' },
];

export const ANBU_VERDICTS_EN: readonly string[] = [
  'First solve the Maths problem... then worry about your future! 😂',
  'No matter what your future holds... just don’t miss the + C in integration! 😂',
  'Dreams are great, {name}—now finish Exercise 7.2 before tea break! 😂',
  'Horoscopes change every day, {name}, but Pythagoras theorem stays forever! 😂',
];

export const ANBU_VERDICTS_TA: readonly string[] = [
  'முதலில் கணக்கைப் போடு... அப்புறம் எதிர்காலத்தைப் பார்! 😂',
  'உன் எதிர்காலம் எப்படி இருந்தாலும்... கணக்கு மட்டும் தப்பா போடாதே! 😂',
  'பெரிய கனவெல்லாம் ஓகே {name}—முதல்ல இன்றைய பயிற்சிக் கணக்கை முடி! 😂',
  'ஜாதகம் தினமும் மாறும் {name}, ஆனா கணித ஃபார்முலா எப்பவும் மாறாது! 😂',
];
