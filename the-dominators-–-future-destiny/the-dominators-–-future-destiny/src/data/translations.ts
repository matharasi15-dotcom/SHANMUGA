import type { Language } from './bilingualTemplates';

export interface CountdownStepTranslation {
  day: string;
  text: string;
}

export interface TranslationBundle {
  brandName: string;
  nav: {
    destiny: string;
    anbuSir: string;
    zodiac: string;
    tuitionGang: string;
  };
  hero: {
    officialSubtitle: string;
    photoCaption: string;
    editionLabel: string;
    headline: string;
    tagline: string;
    subTagline: string;
    description: string;
    ctaButton: string;
    metaSubjects: string;
    metaNoLogin: string;
    cardBadge: string;
    cardLangs: string;
  };
  form: {
    eyebrow: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    dobLabel: string;
    groupLabel: string;
    groupCs: string;
    groupBiomaths: string;
    tuitionLabel: string;
    tuitionYes: string;
    tuitionNo: string;
    languageLabel: string;
    autoZodiacLabel: string;
    cinemaStyleLabel: string;
    submitButton: string;
    errNameRequired: string;
    errDobRequired: string;
    errDobFuture: string;
  };
  loading: {
    ariaLabel: string;
    readingForPrefix: string;
    defaultName: string;
    messages: readonly [string, string, string, string];
    skip: string;
  };
  result: {
    starsSpoken: string;
    tuitionBadge: string;
    selfStudyBadge: string;
    groupCsBadge: string;
    groupBiomathsBadge: string;
    identityLabel: string;
    careerPathPrefix: string;
    cinemaHeadingPrefix: string;
    shareWhatsapp: string;
    showFullFuture: string;
    showSummary: string;
    copy: string;
    copied: string;
    countdownTitle: string;
    countdownReplay: string;
    countdownSteps: readonly [
      CountdownStepTranslation,
      CountdownStepTranslation,
      CountdownStepTranslation,
    ];
    luckyTitle: string;
    luckyNumber: string;
    luckyColour: string;
    luckyDay: string;
    luckySymbol: string;
    missionTitle: string;
    missionNote: string;
    reroll: string;
    tryAnother: string;
  };
  anbuSir: {
    sectionTitle: string;
    subtitle: string;
    alertCardTitle: string;
    alertDisclaimer: string;
    scoldingLabel: string;
    dialogueLabel: string;
    dialogueDisclaimer: string;
    nextDialogueBtn: string;
    favouriteLabel: string;
    verdictLabel: string;
    finalTitle: string;
    finalLine: string;
  };
  zodiac: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  group: {
    eyebrow: string;
    title: string;
    subtitle: string;
    inputLabel: string;
    inputPlaceholder: string;
    addBtn: string;
    generateBtn: string;
    clearAllBtn: string;
    emptyState: string;
    loadSampleBtn: string;
    friendPrefix: string;
    shareBtn: string;
    copyBtn: string;
    copiedBtn: string;
    errAddOne: string;
    errGenerateOne: string;
  };
  footer: {
    tagline: string;
    subTagline: string;
    createdBy: string;
    disclaimer: string;
  };
}

export const translations: Record<Language, TranslationBundle> = {
  en: {
    brandName: "SHANMUGA'S HOROSCOPE",
    nav: {
      destiny: 'My Destiny',
      anbuSir: 'Anbu Sir Alert',
      zodiac: 'Zodiac Signs',
      tuitionGang: 'Tuition Gang',
    },
    hero: {
      officialSubtitle: "12th Students' Official Comedy Prediction Centre 😂",
      photoCaption: 'Chief Prediction Officer – SHANMUGA 😂',
      editionLabel: '12th Students Special Edition',
      headline: "Are You a 12th Student? Let's Reveal Your Future!",
      tagline: 'We Know Your Future... But Not Your Board Exam Marks! 😂',
      subTagline: 'Your Future... Our Imagination!',
      description:
        'Your Horoscope, Your Tuition Life, Your Anbu Sir Maths Alert, and Your Future — All in One Place!',
      ctaButton: 'REVEAL MY FUTURE NOW',
      metaSubjects: '💻 Computer Science & 🧬 Bio-Maths',
      metaNoLogin: 'No Login Needed',
      cardBadge: '12th Tuition Special Edition',
      cardLangs: 'English & தமிழ்',
    },
    form: {
      eyebrow: 'Enter → Click → Laugh',
      title: 'Reveal Your 12th Tuition Destiny',
      subtitle:
        'Enter your name, date of birth, and group—your zodiac sign updates automatically.',
      nameLabel: '1. Enter Your Name',
      namePlaceholder: 'Enter your name (e.g. Ram)',
      dobLabel: '2. Date of Birth',
      groupLabel: '3. Your Group',
      groupCs: '💻 Computer Science',
      groupBiomaths: '🧬 Bio-Maths',
      tuitionLabel: '4. Tuition Student?',
      tuitionYes: 'Yes',
      tuitionNo: 'No',
      languageLabel: '5. Language',
      autoZodiacLabel: 'Auto-Detected Zodiac Sign',
      cinemaStyleLabel: '6. Cinema Dialogue Style',
      submitButton: 'REVEAL MY FUTURE',
      errNameRequired: 'Please enter your name first!',
      errDobRequired: 'Please pick your date of birth.',
      errDobFuture: 'Future birth dates are not allowed. Please choose a valid date.',
    },
    loading: {
      ariaLabel: 'Revealing Your Future',
      readingForPrefix: 'Reading Stars for',
      defaultName: 'Student',
      messages: [
        'Reading your stars...',
        'Checking Anbu Sir’s Maths register...',
        'Your 12th destiny is almost ready...',
        'Something hilarious is coming...',
      ],
      skip: 'Skip',
    },
    result: {
      starsSpoken: 'THE STARS HAVE SPOKEN!',
      tuitionBadge: 'Tuition Student',
      selfStudyBadge: 'Self-Study Legend',
      groupCsBadge: 'COMPUTER SCIENCE 💻',
      groupBiomathsBadge: 'BIO-MATHS 🧬',
      identityLabel: 'Future Identity',
      careerPathPrefix: 'Future Career:',
      cinemaHeadingPrefix: 'CINEMA DIALOGUE',
      shareWhatsapp: '📲 SHARE RESULTS',
      showFullFuture: '✨ SHOW MY FULL FUTURE',
      showSummary: 'SHOW SUMMARY ONLY',
      copy: 'Copy',
      copied: 'Copied!',
      countdownTitle: 'TWO DAYS TO HAVE A GIRLFRIEND',
      countdownReplay: 'Replay',
      countdownSteps: [
        {
          day: 'DAY 2',
          text: 'Confidence loading... Hair combed twice before tuition!',
        },
        {
          day: 'DAY 1',
          text: 'Conversation preparation... Rehearsing "Did you finish Physics?"',
        },
        {
          day: 'FINAL DAY',
          text: 'Destiny reveals... "Will they accept the friend request?" 😂',
        },
      ],
      luckyTitle: '🍀 Lucky Details',
      luckyNumber: 'Lucky Number',
      luckyColour: 'Lucky Colour',
      luckyDay: 'Lucky Day',
      luckySymbol: 'Lucky Symbol',
      missionTitle: "🎯 Today's Mission",
      missionNote: 'Just for laughs — fictional entertainment only!',
      reroll: 'Try Another Prediction',
      tryAnother: 'Try Another Name',
    },
    anbuSir: {
      sectionTitle: '📐 ANBU SIR WARNING ZONE',
      subtitle: 'Forget the stars... ANBU SIR knows your Maths destiny!',
      alertCardTitle: "🚨 TODAY'S ANBU SIR ALERT",
      alertDisclaimer: 'Fictional comedy alert only — not real information about the teacher.',
      scoldingLabel: 'ANBU SIR SCOLDING PREDICTION',
      dialogueLabel: 'FICTIONAL CLASSROOM COMEDY LINE',
      dialogueDisclaimer: 'Purely fictional comedy line (not an actual quote).',
      nextDialogueBtn: 'Another Comedy Line',
      favouriteLabel: "ANBU SIR'S FAVOURITE STUDENT TITLE",
      verdictLabel: 'ANBU SIR SAYS...',
      finalTitle: '📐 ANBU SIR vs YOUR DESTINY',
      finalLine: "First solve the Maths problem... then worry about your future! 😂",
    },
    zodiac: {
      eyebrow: '12 Zodiac Signs',
      title: 'Explore Every Zodiac Sign',
      subtitle:
        'Your sign is calculated automatically in the form above—or tap any sign below to preview its vibe.',
      cta: 'Check My Future',
    },
    group: {
      eyebrow: '12th Tuition Gang Special',
      title: '👬 TUITION FRIENDS DESTINY',
      subtitle:
        'Enter your 12th tuition friends’ names below (one by one or comma-separated). Every friend receives a unique funny tuition identity.',
      inputLabel: 'Friend name',
      inputPlaceholder: 'Enter friend name (e.g. Ram, Arun, Karthik)',
      addBtn: 'Add Friend',
      generateBtn: 'Generate Group',
      clearAllBtn: 'Clear All',
      emptyState: 'Add friend names above to reveal everyone’s funny future identity!',
      loadSampleBtn: 'Load Sample Friends',
      friendPrefix: 'Friend',
      shareBtn: '📲 SHARE GROUP DESTINY',
      copyBtn: 'Copy List',
      copiedBtn: 'Copied!',
      errAddOne: 'Enter at least one friend’s name to add.',
      errGenerateOne: 'Add at least one friend name first.',
    },
    footer: {
      tagline: '12th LIFE IS TEMPORARY... TUITION COMEDY IS PERMANENT!',
      subTagline: 'Your Future... Our Imagination!',
      createdBy: 'Created by SHANMUGA.',
      disclaimer:
        'All predictions, including Anbu Sir comedy lines, are purely fictional and intended only for entertainment. Study, friendships, and future choices are real; horoscope results are just jokes.',
    },
  },
  ta: {
    brandName: "SHANMUGA'S HOROSCOPE",
    nav: {
      destiny: 'என் எதிர்காலம்',
      anbuSir: 'அன்பு சார் எச்சரிக்கை',
      zodiac: 'ராசிகள்',
      tuitionGang: 'டியூஷன் நண்பர்கள்',
    },
    hero: {
      officialSubtitle: '12th மாணவர்களின் அதிகாரப்பூர்வ காமெடி ஜோதிட மையம் 😂',
      photoCaption: 'தலைமை ஜோதிட அதிகாரி – SHANMUGA 😂',
      editionLabel: '12-ஆம் வகுப்பு மாணவர்கள் சிறப்புப் பதிப்பு',
      headline: '12th படிக்கிறியா? அப்போ உன் எதிர்காலத்தைப் பார்ப்போம்!',
      tagline: 'உன் எதிர்காலம் எங்களுக்குத் தெரியும்... ஆனா உன் மதிப்பெண் மட்டும் தெரியாது! 😂',
      subTagline: 'உங்கள் எதிர்காலம்... எங்கள் கற்பனை!',
      description:
        'உன் ஜாதகம், டியூஷன் வாழ்க்கை, அன்பு சார் கணக்கு எச்சரிக்கை, நண்பர்கள் காமெடி எல்லாமே ஒரே இடத்தில்!',
      ctaButton: 'என் எதிர்காலத்தைக் காட்டு',
      metaSubjects: '💻 கணினி அறிவியல் & 🧬 உயிரியல் மற்றும் கணிதம்',
      metaNoLogin: 'உள்நுழைவு தேவையில்லை',
      cardBadge: '12th டியூஷன் ஸ்பெஷல் பதிப்பு',
      cardLangs: 'தமிழ் & English',
    },
    form: {
      eyebrow: 'பெயர் → பிரிவு → சிரிப்பு',
      title: 'உங்கள் எதிர்காலத்தைக் கண்டறியுங்கள்',
      subtitle:
        'உங்கள் பெயர், பிறந்த தேதி, வகுப்பைத் தேர்ந்தெடுங்கள் — ராசி தானாகக் கணக்கிடப்படும்.',
      nameLabel: '1. உங்கள் பெயர்',
      namePlaceholder: 'உங்கள் பெயரை உள்ளிடுங்கள் (எ.கா. ராம்)',
      dobLabel: '2. பிறந்த தேதி',
      groupLabel: '3. உங்கள் வகுப்பு',
      groupCs: '💻 கணினி அறிவியல்',
      groupBiomaths: '🧬 உயிரியல் மற்றும் கணிதம்',
      tuitionLabel: '4. டியூஷன் செல்கிறீர்களா?',
      tuitionYes: 'ஆம்',
      tuitionNo: 'இல்லை',
      languageLabel: '5. மொழி',
      autoZodiacLabel: 'தானாகக் கணக்கிடப்பட்ட ராசி',
      cinemaStyleLabel: '6. சினிமா வசன பாணி',
      submitButton: 'என் எதிர்காலத்தைக் காட்டு',
      errNameRequired: 'தயவுசெய்து உங்கள் பெயரை உள்ளிடுங்கள்!',
      errDobRequired: 'தயவுசெய்து உங்கள் பிறந்த தேதியைத் தேர்ந்தெடுக்கவும்.',
      errDobFuture: 'எதிர்காலப் பிறந்த தேதியை உள்ளிட முடியாது. சரியான தேதியைத் தேர்ந்தெடுக்கவும்.',
    },
    loading: {
      ariaLabel: 'உங்கள் எதிர்காலம் தயாராகிறது',
      readingForPrefix: 'நட்சத்திரக் கணிப்பு:',
      defaultName: 'மாணவர்',
      messages: [
        'உங்கள் நட்சத்திரங்களைப் பார்க்கிறோம்...',
        'அன்பு சார் கணக்கு நோட்டைச் சரிபார்க்கிறோம்...',
        'உங்கள் 12th எதிர்காலம் தயாராகிறது...',
        'செம காமெடி வரப்போகுது...',
      ],
      skip: 'தவிர்',
    },
    result: {
      starsSpoken: 'நட்சத்திரங்கள் பேசிவிட்டன!',
      tuitionBadge: 'டியூஷன் மாணவர்',
      selfStudyBadge: 'சுயமாகப் படிப்பவர்',
      groupCsBadge: 'கணினி அறிவியல் 💻',
      groupBiomathsBadge: 'உயிரியல் மற்றும் கணிதம் 🧬',
      identityLabel: 'எதிர்கால பட்டம்',
      careerPathPrefix: 'எதிர்கால வேலை:',
      cinemaHeadingPrefix: 'சினிமா வசனம்',
      shareWhatsapp: '📲 முடிவுகளைப் பகிர்',
      showFullFuture: '✨ முழு எதிர்காலத்தையும் காட்டு',
      showSummary: 'சுருக்கமாகப் பார்',
      copy: 'நகலெடு',
      copied: 'நகலெடுக்கப்பட்டது!',
      countdownTitle: 'இரண்டு நாளில் சர்ப்ரைஸ் காத்திருக்கு!',
      countdownReplay: 'மீண்டும் பார்',
      countdownSteps: [
        {
          day: 'நாள் 2',
          text: 'நம்பிக்கை லோடிங்... டியூஷனுக்கு முன்னாடி ரெண்டு தடவை தலை வாரியாச்சு!',
        },
        {
          day: 'நாள் 1',
          text: 'பேச ஒத்திகை... "இன்னைக்கு பாடம் முடிச்சிட்டியா?"னு ரிஹர்சல் நடக்குது!',
        },
        {
          day: 'கடைசி நாள்',
          text: 'விதி பதில் சொல்லுது... "அவங்க நண்பர் கோரிக்கையை ஏற்பாங்களா?" 😂',
        },
      ],
      luckyTitle: '🍀 அதிர்ஷ்ட விவரங்கள்',
      luckyNumber: 'அதிர்ஷ்ட எண்',
      luckyColour: 'அதிர்ஷ்ட நிறம்',
      luckyDay: 'அதிர்ஷ்ட நாள்',
      luckySymbol: 'அதிர்ஷ்ட சின்னம்',
      missionTitle: '🎯 இன்றைய சவால்',
      missionNote: 'சும்மா ஜாலிக்கு மட்டும் — கற்பனை பொழுதுபோக்கு மட்டுமே!',
      reroll: 'மீண்டும் முயற்சி செய்',
      tryAnother: 'புதிய பெயர் போடு',
    },
    anbuSir: {
      sectionTitle: '📐 அன்பு சார் எச்சரிக்கை மண்டலம்',
      subtitle: 'உன் ஜாதகத்தை விட ANBU SIR-க்கு உன்னைப் பற்றி நல்லா தெரியும்! 😂',
      alertCardTitle: '🚨 இன்றைய அன்பு சார் எச்சரிக்கை',
      alertDisclaimer: 'இது கற்பனை நகைச்சுவை மட்டுமே — ஆசிரியரின் உண்மையான திட்டம் அல்ல.',
      scoldingLabel: 'அன்பு சார் திட்டுவாரா? கணிப்பு',
      dialogueLabel: 'கற்பனை வகுப்பறை காமெடி வசனம்',
      dialogueDisclaimer: 'முழுக்க முழுக்க கற்பனை காமெடி (உண்மையான மேற்கோள் அல்ல).',
      nextDialogueBtn: 'வேறு வசனம் காட்டு',
      favouriteLabel: 'அன்பு சாரின் செல்ல மாணவர் பட்டம்',
      verdictLabel: 'அன்பு சார் சொல்வது...',
      finalTitle: '📐 அன்பு சார் vs உன் எதிர்காலம்',
      finalLine: 'முதலில் கணக்கைப் போடு... அப்புறம் எதிர்காலத்தைப் பார்! 😂',
    },
    zodiac: {
      eyebrow: '12 ராசிகள்',
      title: 'உங்கள் ராசியைப் பாருங்கள்',
      subtitle:
        'பிறந்த தேதியை வைத்தே உங்கள் ராசி தானாகத் தேர்ந்தெடுக்கப்படும். எந்த ராசியையும் தொட்டு விவரம் பார்க்கலாம்.',
      cta: 'என் எதிர்காலத்தைப் பார்',
    },
    group: {
      eyebrow: '12th டியூஷன் நண்பர்கள் சிறப்பு',
      title: '👬 டியூஷன் நண்பர்கள் எதிர்காலம்!',
      subtitle:
        'உங்க 12th டியூஷன் மற்றும் வாட்ஸ்அப் குரூப் நண்பர்கள் பெயர்களைச் சேருங்கள்! ஒவ்வொருவருக்கும் ஒரு காமெடி பட்டம் தானாகக் கிடைக்கும்.',
      inputLabel: 'நண்பர் பெயர்',
      inputPlaceholder: 'நண்பர் பெயர் (எ.கா. ராம், அருண், கார்த்திக்)',
      addBtn: 'சேர்',
      generateBtn: 'பட்டங்களைக் காட்டு',
      clearAllBtn: 'அனைத்தையும் நீக்கு',
      emptyState: 'மேலே நண்பர்கள் பெயரைச் சேர்த்து பட்டங்களைப் பாருங்கள்!',
      loadSampleBtn: 'மாதிரி நண்பர்களைச் சேர்',
      friendPrefix: 'நண்பர்',
      shareBtn: '📲 நண்பர்கள் முடிவைப் பகிர்',
      copyBtn: 'நகலெடு',
      copiedBtn: 'நகலெடுக்கப்பட்டது!',
      errAddOne: 'சேர்க்க குறைந்தது ஒரு நண்பரின் பெயரை உள்ளிடுங்கள்.',
      errGenerateOne: 'குறைந்தது ஒரு நண்பரின் பெயரைச் சேர்க்கவும்.',
    },
    footer: {
      tagline: '12th வாழ்க்கை தற்காலிகம்... டியூஷன் காமெடி நிரந்தரம்!',
      subTagline: 'உங்கள் எதிர்காலம்... எங்கள் கற்பனை!',
      createdBy: 'உருவாக்கம்: SHANMUGA.',
      disclaimer:
        'இந்த இணையதளத்தில் வரும் ஜாதகக் கணிப்புகளும் அன்பு சார் காமெடிகளும் முழுக்க முழுக்க கற்பனையானவை மற்றும் பொழுதுபோக்கிற்காக மட்டுமே. படிப்பு, நட்பு, எதிர்கால முடிவுகள் மட்டுமே நிஜம்!',
    },
  },
};
