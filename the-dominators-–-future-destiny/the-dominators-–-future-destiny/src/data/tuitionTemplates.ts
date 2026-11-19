import type { BilingualTitle } from './bilingualTemplates';

export type StudyGroup = 'cs' | 'biomaths';

export type CinemaStyleId =
  | 'mass_hero'
  | 'comedy_king'
  | 'silent_villain'
  | 'emotional_hero'
  | 'future_superstar'
  | 'tuition_rowdy';

export interface CinemaStyleOption {
  id: CinemaStyleId;
  labelEn: string;
  labelTa: string;
}

export const CINEMA_STYLES: CinemaStyleOption[] = [
  { id: 'mass_hero', labelEn: 'Mass Hero', labelTa: 'மாஸ் ஹீரோ' },
  { id: 'comedy_king', labelEn: 'Comedy King', labelTa: 'காமெடி கிங்' },
  { id: 'silent_villain', labelEn: 'Silent Villain', labelTa: 'சைலண்ட் வில்லன்' },
  { id: 'emotional_hero', labelEn: 'Emotional Hero', labelTa: 'எமோஷனல் ஹீரோ' },
  { id: 'future_superstar', labelEn: 'Future Superstar', labelTa: 'எதிர்கால சூப்பர் ஸ்டார்' },
  { id: 'tuition_rowdy', labelEn: 'Tuition Rowdy', labelTa: 'டியூஷன் ரவுடி' },
];

export const TUITION_GROUP_TITLES: BilingualTitle[] = [
  { en: 'The Future Billionaire 👑', ta: 'எதிர்கால கோடீஸ்வரன் 👑' },
  { en: 'Tuition Don 😎', ta: 'டியூஷன் டான் 😎' },
  { en: 'The Silent Legend 🕶️', ta: 'சைலண்ட் லெஜெண்ட் 🕶️' },
  { en: 'The Backbench Philosopher 🧠', ta: 'லாஸ்ட் பெஞ்ச் தத்துவஞானி 🧠' },
  { en: 'The Homework Escaper 🏃', ta: 'ஹோம்வொர்க் எஸ்கேப்பர் 🏃' },
  { en: 'The Attendance King 📋', ta: 'அட்டென்டன்ஸ் கிங் 📋' },
  { en: 'The Future Superstar 🎬', ta: 'எதிர்கால சூப்பர் ஸ்டார் 🎬' },
  { en: "The Group's Google 🔍", ta: 'குரூப் கூகுள் 🔍' },
  { en: 'The Tea Break Minister ☕', ta: 'டீ பிரேக் மந்திரி ☕' },
  { en: 'The Future Director 🎥', ta: 'எதிர்கால இயக்குநர் 🎥' },
];

// 📚 TUITION DESTINY TEMPLATES
export const TUITION_DESTINY_EN: readonly string[] = [
  'Great success awaits {name} in the future—right after you finish yesterday’s pending homework!',
  'Teacher will ask {name} one question today. You will start answering confidently... and forget what the question even was!',
  'You are destined to rule big stages, {name}—even if right now friends only look for you to copy attendance or borrow notes!',
  'Every surprise test makes {name} look around calmly like a detective searching for clues on the ceiling!',
  '{name} arrives at tuition 15 minutes late with hero energy, hoping nobody notices while sitting quietly in the back row!',
  'Your best brainpower activates strictly during the 10-minute tuition tea break, {name}!',
  'One day people will pay for {name}’s notes—today you are still texting friends at 9 PM asking "Which chapter did sir teach?"',
  '{name} opens the textbook at midnight with full motivation—and wakes up using chapter 3 as a pillow!',
  'Sitting next to friends in tuition increases {name}’s laughter by 300% and focus by at least 2%!',
  'Teacher thinks {name} is deeply thinking about formulas; actually you are planning the post-tuition samosa stop!',
  '{name} borrows one blue pen from a friend on Monday and somehow owns zero pens by Friday!',
  'Last-minute revision turns {name} into a speed-reading superhero faster than any CPU!',
];

export const TUITION_DESTINY_TA: readonly string[] = [
  '{name}, உன் எதிர்காலத்தில் பெரிய வெற்றி காத்திருக்கிறது... முதலில் நேற்றுக் கொடுத்த Homework-ஐ முடிச்சிட்டு வா! 😂',
  'Teacher உன்னிடம் ஒரு கேள்வி கேட்பாங்க {name}. நீ பதில் சொல்லத் தொடங்குவாய்... அப்புறம் உனக்கே கேள்வி என்னனு மறந்துடும்!',
  'நீ ஒருநாள் பெரிய ஆளாகப் போற {name}... ஆனா இப்போ tuition attendance-க்கே உன் நண்பர்கள் உன்னைத் தேடுறாங்க!',
  'திடீர் Surprise Test வச்சா {name} மட்டும் கூலிங் கிளாஸ் இல்லாத டிடெக்டிவ் மாதிரி மேல சீலிங்கைப் பார்த்து யோசிப்ப!',
  '15 நிமிஷம் லேட்டா வந்துட்டு {name} ஹீரோ மாதிரி சத்தமே இல்லாம கடைசி பெஞ்ச்ல போய் செட் ஆயிடுவ!',
  '{name} மூளை எப்போ வேகமா வேலை செய்யும்னா—டியூஷன்ல 10 நிமிஷம் Tea Break விடும்போது மட்டும் தான்!',
  'ஒருநாள் {name} எழுதுறதைப் பார்க்கக் கூட்டம் நிக்கும்—ஆனா இப்போ ராத்திரி 9 மணிக்கு "இன்னைக்கு என்ன பாடம் எடுத்தாங்க?"னு மெசேஜ் போடுற!',
  'ராத்திரி 11 மணிக்கு "இன்னைக்கு முழுசா படிச்சே ஆகணும்"னு புத்தகத்தைத் திறப்ப {name}—அடுத்த 10 நிமிஷத்துல அதுவே தலையணை ஆகிடும்!',
  'நண்பர்கள் பக்கத்துல உக்காந்தா {name} சிரிப்பு 300% ஏறும்—கவனம் மட்டும் கொஞ்சம் டீ குடிக்கப் போயிடும்!',
  'Teacher உன்னைப் பார்த்து "ரொம்ப ஆழமா ஃபார்முலா யோசிக்கிறான்"னு நினைப்பாங்க {name}—உண்மையில நீ டியூஷன் முடிஞ்சு பஜ்ஜி சாப்பிட பிளான் போட்டுட்டு இருப்ப!',
  'திங்கட்கிழமை நண்பன்கிட்ட ஒரு பேனா கடன் வாங்குவ {name}—வெள்ளிக்கிழமை உன் பையில ஒரு பேனாவும் இருக்காது!',
  'கடைசி நேரத்துல படிக்க உட்கார்ந்தா {name} வேகத்தை யாராலையும் பிடிக்க முடியாது—சூப்பர் ஃபாஸ்ட் ரிவிஷன் கிங்!',
  'சாயங்காலம் டியூஷன் பெல் அடிச்சதும் {name} பேக்கை மூடுற வேகம் இருக்கே—அதுக்கு ஆஸ்கார் அவார்டே கொடுக்கலாம்!',
  'டியூஷன் வாசல்ல நண்பர்களோட 15 நிமிஷம் கதை பேசிட்டு, "சரிடா உள்ள போலாம்"னு சொல்ற தலைவன் {name} தான்!',
  'நாளைக்கு டெஸ்ட்னு சார் சொன்னதும் {name} முகத்துல வர்ற சீரியஸ் லுக் அடுத்த அஞ்சு நிமிஷத்துல சிரிப்பா மாறிடும்!',
  'ஒரு சமோசாவ நாலு பேருக்குப் பிரிச்சுக் கொடுக்குற பெரிய மனசு {name}க்கு மட்டும் தான் டியூஷன்ல இருக்கு!',
  'பப்ளிக் எக்ஸாம் டைம் டேபிள் பார்த்ததும் {name} போடுற படிப்பு ஷெட்யூல்—முதல் நாள் மட்டும் பக்காவா நடக்கும்!',
];

// 💻 COMPUTER SCIENCE COMEDY
export const CS_COMEDY_EN: readonly string[] = [
  '{name}’s future runs smooth like clean Python—right now your daily routine just has a few funny syntax bugs!',
  'One day {name} will be a top software developer; first, debug why your alarm didn’t ring at 6 AM!',
  'Even if {name} writes your crush story in Python, the terminal still waits for a missing semicolon in life!',
  'Future CEO loading for {name}... 99%, while today’s chapter preparation sits peacefully at 12%!',
  '{name} understands loops and arrays faster than understanding why your friend forgot to bring your notes back!',
  'Your {sign} brain compiles big ideas in milliseconds—except when someone asks you to write code on paper without autocomplete!',
  '{name} treats every school test like a software release: "Works on my rough notebook, sir!"',
  'Expect {name} to build legendary apps—right after you stop opening 30 tabs while watching one tutorial!',
];

export const CS_COMEDY_TA: readonly string[] = [
  '{name}, உன் எதிர்காலம் Python மாதிரி ஸ்மூத்தா இருக்கும்... ஆனா இப்போ உன் வாழ்க்கையில்தான் நிறைய bugs சுத்துது! 😂',
  'ஒருநாள் {name} பெரிய software developer ஆவாய். முதலில் காலைல 6 மணி அலாரத்துல இருக்கிற error-ஐ debug பண்ணு!',
  'உன் love story கூட programming language-ல எழுதினாலும் {name}, output மட்டும் இன்னும் loading-லயே நிக்குது!',
  'Future CEO loading for {name}... 99%! ஆனால் இன்றைய exam preparation இன்னும் 12%-ல தான் இருக்கு!',
  'Python code-ல இருக்கிற loop எல்லாம் {name}க்குப் புரியுது—ஆனா நண்பன் வாங்கிட்டுப் போன நோட்டை எப்ப திருப்பித் தருவான்னு மட்டும் புரியல!',
  'கம்பியூட்டர்ல ஃபாஸ்டா டைப் பண்ற {name}, பேப்பர்ல கோடு எழுதச் சொன்னா மட்டும் ஒரு செகண்ட் ஹேங் ஆயிடுவ!',
  '{name} எப்பவும் டெஸ்ட் முடிஞ்சதும் சொல்ற டயலாக்: "ரஃப் நோட்டுல ரன் ஆச்சு சார், மெயின் பேப்பர்ல தான் கொஞ்சம் எரர்!"',
  'பெரிய ஆப் டெவலப்பர் ஆகப்போற {name}—அதுக்குள்ள YouTube-ல ஒரு பாடம் பார்க்கப் போய் 30 டேப் ஓபன் பண்ணாம இரு!',
  'கணினி ஆய்வகத்துல (Computer Lab) கம்ப்யூட்டர் முன்னாடி உக்காந்தா {name} ஹேக்கர் மாதிரி போஸ் கொடுப்ப—உண்மையில பாஸ்வேர்டே மறந்திருப்ப!',
  'Python-ல ஸ்பேஸ் (Indentation) தப்பா போட்டு எரர் வந்தா, {name} "கம்ப்யூட்டரே சரியில்ல சார்"னு சீரியஸா சொல்லுவ!',
  'CS பிராக்டிகல் ரெக்கார்டு எழுதி முடிக்க {name} போடுற ஸ்பீட்ல ஒரு நாவலே எழுதிடலாம்!',
  'C++ மற்றும் Python ஃபுளோச்சார்ட் வரையும்போது {name} ஸ்கேல் இல்லாம கையாலேயே நேர்கோடு போடுற திறமை வேற லெவல்!',
];

// 🧬 BIO-MATHS COMEDY
export const BIOMATHS_COMEDY_EN: readonly string[] = [
  'Life is full of equations for {name}—yet nobody has found the formula for getting borrowed ₹20 back from friends!',
  '{name}’s future glows bright gold—right after you finally finish drawing those neat Biology diagrams!',
  'Your Chemistry vibes are strong, {name}—just make sure weird unexpected reactions stay out of the exam hall!',
  '{name}’s brain holds Biology, Physics, and Calculus—yet still cannot control afternoon sleepiness!',
  'Integration problems bow before {name}—only if you actually remember the + C at the end!',
  '{name} draws a human heart diagram neatly for 40 minutes and writes the label arrows in five seconds flat!',
  'Physics derivations look scary until {name} drinks one strong cup of tea and becomes Einstein for two hours!',
  'Your {sign} focus balances heavy Bio-Maths chapters with elite friendship comedy!',
];

export const BIOMATHS_COMEDY_TA: readonly string[] = [
  '{name}, உன் வாழ்க்கையில் எல்லாமே equations. ஆனால் நண்பர்களின் கடன் கணக்குக்கு மட்டும் இன்னும் solution கிடைக்கல! 😂',
  'உன் future மிகப் பிரகாசமாக இருக்கும் {name}... முதலில் அந்த Biology diagrams-ஐ அழகா வரைஞ்சு முடிச்சுடு!',
  'உன் வாழ்க்கையில் chemistry நல்லா இருக்கும் {name}... ஆனால் exam paper-ல மட்டும் எதிர்பாராத reactions நடக்காம பார்த்துக்கோ!',
  '{name} brain-ல் biology, physics, chemistry எல்லாம் இருக்கு. ஆனா மதியத் தூக்கத்தை மட்டும் control பண்ண முடியல!',
  'பெரிய Integration கணக்கெல்லாம் {name} போட்டுடுவ—கடைசியில அந்த "+ C" மட்டும் போட மறந்துடாத!',
  'Biology படம் வரைய 40 நிமிஷம் எடுத்துக்குவ {name}—கடைசி 5 நிமிஷத்துல வேகமா பேரு எழுதிச் சமாளிப்ப!',
  'Physics டெரிவேஷன் பார்த்து மிரண்டாலும் {name}, ஒரு சூப்பர் டீ குடிச்சா ரெண்டு மணி நேரம் ஐன்ஸ்டீன் மாதிரி படிப்ப!',
  'கடினமான Bio-Maths பாடங்களையும் {name} நண்பர்களோட காமெடியால ஜாலியா சமாளிச்சிடுவ!',
  'பயாலஜி பிராக்டிகல் லேப்ல மைக்ரோஸ்கோப்ல பார்க்கும்போது {name} "சூப்பரா தெரியுது சார்"னு சொல்லுவ—கண்ணுல ஒண்ணுமே தெரிஞ்சிருக்காது!',
  'ஆர்கானிக் கெமிஸ்ட்ரி (Organic Chemistry) பென்சீன் வளையம் வரையத் தொடங்கினா, {name} நோட்டு முழுக்க அறுகோணமாத் தான் இருக்கும்!',
  'கடினமான டிஃபரென்ஷியேஷன் கணக்கையும் {name} பாட்டுப் பாடிக்கிட்டே போட்டு எல்லாரையும் மிரள வைப்ப!',
  'Bio-Maths குரூப் எடுத்ததுக்கு {name} தினமும் ஒரு தடவை "நான் ஏன் இந்தப் பக்கம் வந்தேன்?"னு நண்பன்கிட்ட கேட்டுச் சிரிப்ப!',
];

// ❤️ LOVE DESTINY (Innocent, Age-Appropriate, Non-Explicit Crush Comedy)
export const LOVE_DESTINY_EN: readonly string[] = [
  'Two days to get a girlfriend... but first finish the two-week pending tuition homework, {name}!',
  'Something big happens in two days, {name}—either a sweet smile across the hallway or an extra surprise test!',
  'A plot twist waits in {name}’s crush story—step one: make sure they at least know your actual name first!',
  'Your romantic star glows bright, {name}, though "talking courage" is currently stuck at 18% loading!',
  'For now, {name}’s most loyal companion is your Physics record notebook—treat it with respect!',
  'Two days to get a girlfriend... meanwhile your friends are already writing imaginary wedding invitations for you!',
];

export const LOVE_DESTINY_TA: readonly string[] = [
  'இன்னும் இரண்டு நாளில் {name} வாழ்க்கையில் ஒரு முக்கியமான சம்பவம் நடக்கப்போகுது... காதல் கதையா இல்ல டியூஷன் வீட்டுப்பாடமா என்று பார்ப்போம்! 😂',
  'இரண்டு நாளில் சர்ப்ரைஸ் காத்திருக்கு... ஆனால் முதலில் இரண்டு வாரமாக நிலுவையில் இருக்கும் வீட்டுப்பாடத்தை முடி {name}!',
  'உன் காதல் வாழ்க்கையில் ஒரு பெரிய திருப்பம் காத்திருக்கிறது {name}... முதலில் அவங்க உன் பெயரையாவது தெரிஞ்சுக்கட்டும்!',
  'உன் காதல் நட்சத்திரம் பிரகாசமாக இருக்கு {name}... ஆனா நேர்ல பேசத் தைரியம் இன்னும் 18% லோடிங்ல இருக்கு!',
  'உனக்கு எதிர்காலத்தில் நல்ல துணை கிடைக்கலாம் {name}... இப்போதைக்கு உன் உண்மையான துணை இயற்பியல் ரெக்கார்டு நோட்டு தான்!',
  'இரண்டு நாள் கவுண்டவுன் ஆரம்பம் {name}—உன் நண்பர்கள் இப்பவே உன் பெயரைச் சொல்லி கலாய்க்க ஆரம்பிச்சுட்டாங்க!',
  'டியூஷன் படிக்கட்டுல ஏறும்போது யாராவது சிரிச்சா {name} மனசுக்குள்ள பிஜிஎம் ஓடும்—ஆனா அவங்க உன் செருப்பு மாத்தி போட்டதைப் பார்த்து சிரிச்சிருப்பாங்க!',
  'காதல் காத்து வீசுறதை விட {name}க்கு இப்போ பொதுத்தேர்வு காத்து தான் வேகமா வீசுது—படிப்புல கவனம் வச்சா ரெண்டுமே சக்சஸ்!',
];

// 🔥 CINEMA DIALOGUE MODE (By Selected Style, Original Punchlines!)
export const CINEMA_DIALOGUES: Record<CinemaStyleId, { en: readonly string[]; ta: readonly string[] }> = {
  mass_hero: {
    en: [
      'I don’t make ordinary entrances—this is {name}’s legendary tuition attendance entry!',
      'Obstacles may show up in {name}’s path... but nobody can stop the evening tea break!',
      'Don’t underestimate {name}—I haven’t even opened the full syllabus yet and I’m still calm!',
    ],
    ta: [
      'நான் வர்றது சாதாரண entry இல்ல... {name} போடுற Tuition attendance-க்கான மாஸ் entry! 🔥',
      'என் வாழ்க்கையில் தோல்வி இருக்கலாம்... ஆனா {name} போற Tea break-ஐ யாராலும் தடுக்க முடியாது!',
      'என்னை யாரும் underestimate பண்ணாதீங்க... {name} இன்னும் syllabus-ஐ முழுசா பார்க்கவே இல்லை!',
    ],
  },
  comedy_king: {
    en: [
      'The moment {name} saw the surprise test paper, my inner confidence whispered: "Bro, let’s leave politely!"',
      'My entry can never be forgotten—mostly because nobody can ever find {name}’s homework notebook!',
      '{name} opens the book like a warrior and closes it five minutes later like a sleepy king!',
    ],
    ta: [
      'Exam paper-ஐ பார்த்ததும் {name} confidence சொன்னது... "தம்பி, நாம மெதுவா கிளம்பலாம்!" 😂',
      '{name} entry-யை யாரும் மறக்க முடியாது... ஆனா என் homework-ஐ மட்டும் யாரும் கண்டுபிடிக்க முடியாது!',
      'நான் படிக்க ஆரம்பிச்சா history create ஆகும்... ஆனா {name} முதல்ல புத்தகம் திறக்கணுமே!',
    ],
  },
  silent_villain: {
    en: [
      '{name} says zero words in class, watches everyone panic, and quietly scores right when it counts!',
      'Keep laughing at the back bench—{name}’s silent comeback will echo all the way to the top!',
      'While others argue over pen colors, {name} plans the entire future in total silence!',
    ],
    ta: [
      '{name} கிளாஸ்ல ஒரு வார்த்தை பேச மாட்டான்... ஆனா சைலண்டா வந்து எல்லாரையும் ஆச்சரியப்படுத்துவான்! 🕶️',
      'கடைசி பெஞ்ச்ல அமைதியா இருக்கேன்னு சிரிக்காதீங்க—{name} போடுற ஸ்கெட்ச் வேற லெவலா இருக்கும்!',
      'மத்தவங்க சத்தம் போடும்போது {name} அமைதியா சிரிப்பான்—அந்த சிரிப்புக்குப் பின்னாடி பெரிய பிளான் இருக்கு!',
    ],
  },
  emotional_hero: {
    en: [
      'Marks come and go, {name}, but the friends who share one ₹10 puff outside tuition stay forever!',
      'Late nights, heavy books, tired eyes—every drop of {name}’s effort is building a proud tomorrow!',
      'No matter how tough the chapter feels today, {name}’s family smile will make every page worth it!',
    ],
    ta: [
      'மார்க் வரும் போகும் {name}, ஆனா டியூஷன் வாசல்ல ஒரு பஃப்ஸ் ஷேர் பண்ண நண்பர்கள் என்னைக்கும் கூட இருப்பாங்க! ❤️',
      'ராத்திரி தூங்காம {name} படிக்கிற ஒவ்வொரு பக்கமும், நாளைக்கு உன் குடும்பத்துக்குப் பெருமை சேர்க்கும்!',
      'இன்னைக்கு பாடம் கஷ்டமா தெரியலாம் {name}—ஆனா உன் அம்மா அப்பா சிரிப்புக்காக நீ நிச்சயம் ஜெயிப்ப!',
    ],
  },
  future_superstar: {
    en: [
      'Camera, lights, confidence! {name} treats the tuition staircase like a red-carpet premiere!',
      'Today {name} practices signatures on the back page of a rough notebook; tomorrow fans ask for autographs!',
      'Remember {name}’s name now—because one day you’ll brag you sat next to me in 12th standard!',
    ],
    ta: [
      'லைட்ஸ், கேமரா, ஆக்ஷன்! {name} டியூஷன் படிக்கட்டுல நடக்குறதே ரெட் கார்ப்பெட் மாதிரி தான்! 🎬',
      'இன்னைக்கு ரஃப் நோட் பின்னாடி {name} ஆட்டோகிராஃப் பிராக்டிஸ் பண்ற—நாளைக்கு உண்மையாவே ரசிகர்கள் கேட்பாங்க!',
      '{name} பேரை இப்பவே நோட் பண்ணி வச்சுக்கோங்க—12th-ல என் பக்கத்துல உக்காந்தேன்னு நாளைக்குப் பெருமையா சொல்லுவீங்க!',
    ],
  },
  tuition_rowdy: {
    en: [
      'Who rules the back row? {name}! Who finishes samosas first during break? Also {name}!',
      'Homework? Forgot it. Pen? Borrowed it. Attitude? 100% undefeated—that’s {name}!',
      'Sir walks in, {name} opens a random page at Mach 5 speed and nods thoughtfully!',
    ],
    ta: [
      'லாஸ்ட் பெஞ்ச் யாருடைய கோட்டை? {name}! டீ பிரேக்ல முதல் சமோசா யாருக்கு? அதுவும் {name}-க்குத் தான்! 😎',
      'Homework? மறந்துட்டேன். பேனா? கடன் வாங்கிட்டேன். கெத்து? 100% குறையாது—இதுதான் {name} ஸ்டைல்!',
      'சார் உள்ள வந்த உடனே {name} மின்னல் வேகத்துல ஏதோ ஒரு பக்கத்தைத் திறந்து ரொம்ப சின்சியரா தலையாட்டுவான்!',
    ],
  },
};

// 📝 12TH BOARD EXAM COMEDY
export const BOARD_EXAM_EN: readonly string[] = [
  'Will the question {name} studied show up on the paper? Mystery! Will the ONE question you skipped show up? Guaranteed comedy!',
  '{name}’s pen has zero rest today—write neatly and don’t forget to read the full question paper first!',
  'Your best exam strategy, {name}: underline keywords with a black pen so the answer looks extra scholarly!',
  'On exam morning, {name} reads ten chapters in twenty minutes—pure supersonic concentration!',
  'Practical exam vibe for {name}: acting completely confident even when adjusting the apparatus for the fifth time!',
  'Result day prediction for {name}: your heart beats at 180 BPM before clicking, followed by instant relief and snacks!',
];

export const BOARD_EXAM_TA: readonly string[] = [
  '{name}, நீ படிச்ச கேள்வி exam-ல் வருமா தெரியாது... ஆனா நீ சாய்ஸ்ல விட்ட கேள்வி மட்டும் கண்டிப்பா வரும்னு மனசு சொல்லுது! 😂',
  'உன் pen-க்கு இன்று ஓய்வு கிடையாது {name}! முதலில் question paper-ஐ முழுசா நிதானமா படி!',
  'பிளாக் பென்ல அண்டர்லைன் பண்ணி {name} எழுதுற ஸ்டைலைப் பார்த்தாலே எக்ஸாமினர் இம்ப்ரெஸ் ஆகிடுவாங்க!',
  'எக்ஸாம் காலைல 20 நிமிஷத்துல {name} 10 சாப்டர் ரிவிஷன் பண்ற வேகத்தை பார்த்து ராக்கெட்டே மிரளும்!',
  'Practical exam-ல {name} எதுவுமே தெரியாத மாதிரி போய், கடைசியில ரீடிங் கரெக்டா எடுத்து மாஸ் காட்டுவ!',
  'நல்லபடியா படி {name}—முயற்சி உன்னோடது, சிரிப்பும் தைரியமும் எப்பவும் கூடவே இருக்கும்!',
  'பப்ளிக் எக்ஸாம் ஹால்ல "கூடுதல் தாள் (Additional Sheet)" வாங்கி {name} பக்கத்து பெஞ்ச் நண்பனுக்கு கெத்து காட்டுவ!',
  'வினாத்தாளை வாங்குனதும் {name} முதல் ரெண்டு நிமிஷம் கடவுளைக் கும்பிட்டுட்டு, தெரிஞ்ச ஒரு மார்க் கேள்வியை டிக் அடிப்ப!',
  'எக்ஸாம் முடிஞ்சு வாசலுக்கு வந்ததும் "அந்தப் பெரிய கேள்வி நீ எழுதினியா?"னு கேட்டு எல்லாரையும் டென்ஷன் ஆக்குற நண்பன் {name} தான்!',
];

// 🚀 GROUP-SPECIFIC FUTURE CAREERS
export const CS_CAREERS: BilingualTitle[] = [
  { en: 'Software Engineer', ta: 'சாஃப்ட்வேர் இன்ஜினியர் (Software Engineer)' },
  { en: 'App Developer', ta: 'ஆப் டெவலப்பர் (App Developer)' },
  { en: 'Game Developer', ta: 'கேம் டெவலப்பர் (Game Developer)' },
  { en: 'AI Engineer', ta: 'AI இன்ஜினியர் (AI Engineer)' },
  { en: 'Cybersecurity Specialist', ta: 'சைபர் செக்யூரிட்டி நிபுணர்' },
  { en: 'Tech Entrepreneur', ta: 'டெக் தொழில்முனைவோர் (Entrepreneur)' },
  { en: 'Film Director', ta: 'சினிமா இயக்குநர் (Film Director)' },
  { en: 'YouTuber & Creator', ta: 'பிரபல யூடியூபர் (YouTuber)' },
  { en: 'Film Editor', ta: 'சினிமா எடிட்டர் (Film Editor)' },
];

export const BIOMATHS_CAREERS: BilingualTitle[] = [
  { en: 'Research Scientist', ta: 'விஞ்ஞானி (Scientist)' },
  { en: 'Medical Professional', ta: 'மருத்துவத் துறை வல்லுநர்' },
  { en: 'Biotechnologist', ta: 'பயோடெக்னாலஜிஸ்ட் (Biotechnologist)' },
  { en: 'Lead Engineer', ta: 'முதன்மை பொறியாளர் (Engineer)' },
  { en: 'Healthcare Innovator', ta: 'சுகாதார ஆராய்ச்சியாளர்' },
  { en: 'Entrepreneur', ta: 'தொழில்முனைவோர் (Entrepreneur)' },
  { en: 'Film Director', ta: 'சினிமா இயக்குநர் (Film Director)' },
  { en: 'Cinematographer', ta: 'ஒளிப்பதிவாளர் (Cinematographer)' },
  { en: 'Actor & Creator', ta: 'நடிகர் & கிரியேட்டர்' },
];

export const TUITION_MISSIONS: BilingualTitle[] = [
  {
    en: 'Study at least one full chapter today and make your tuition friends laugh!',
    ta: 'இன்று குறைந்தது ஒரு chapter படி. நண்பர்களைச் சிரிக்க வை!',
  },
  {
    en: 'Finish your pending homework before checking WhatsApp tonight!',
    ta: 'இன்னைக்கு நைட் வாட்ஸ்அப் பார்க்குறதுக்கு முன்னாடி pending homework-ஐ முடி!',
  },
  {
    en: 'Reach tuition 5 minutes early today and shock your teacher!',
    ta: 'இன்னைக்கு டியூஷனுக்கு 5 நிமிஷம் முன்னாடியே போய் எல்லாரையும் ஷாக் ஆக்கு!',
  },
  {
    en: 'Share your clean notes with a struggling friend and earn instant good karma!',
    ta: 'கஷ்டப்படுற நண்பனுக்கு உன் நோட்ஸை ஷேர் பண்ணி ஹீரோ ஆகு!',
  },
];
