export type Level = 'short' | 'medium' | 'long';
export type Phase = 'letters' | 'numbers' | 'punctuation' | 'mixed';

export interface TextWithPhase {
  id?: string;
  text: string;
  phase: Phase;
}

const SHORT_TEXTS: TextWithPhase[] = [
  { id: 's_letters_01', phase: 'letters', text: 'find a calm rhythm on the home row keep wrists level and eyes forward' },
  { id: 's_letters_02', phase: 'letters', text: 'practice small bursts then rest and return to steady typing flow' },
  { id: 's_numbers_01', phase: 'numbers', text: 'enter 394 208 517 then add 45 and 62 to verify totals' },
  { id: 's_numbers_02', phase: 'numbers', text: 'type 2025 08 14 for the date and 7 30 am for the time' },
  { id: 's_punct_01', phase: 'punctuation', text: 'please bring pens, paper, clips, and folders; label each box.' },
  { id: 's_punct_02', phase: 'punctuation', text: 'ready, set, type—keep pace, pause, and continue.' },
  { id: 's_mixed_01', phase: 'mixed', text: 'today at 9:30, sam sent 3 emails—quick, clear, and kind.' },
  { id: 's_mixed_02', phase: 'mixed', text: 'draft #2 is due by 5pm; save it as report_final.txt.' },
  { text: `The quick brown fox jumps over the lazy dog meanwhile a cat naps unbothered uncaring`, phase: 'letters' },
  { text: `Practice daily breathe steadily and keep your wrists straight speed comes slowly then suddenly`, phase: 'letters' },
  { text: `Focus she said on accuracy first speed follows naturally with proper form and patience`, phase: 'letters' },
  { text: `Rain fell keyboards clicked and thoughts flowed like rivers into notes and documents`, phase: 'letters' },
  { text: `Numbers and symbols type these cleanly without slips or hesitation`, phase: 'numbers' },
  { text: `Count to ten slowly one two three four five six seven eight nine ten`, phase: 'numbers' },
  { text: `Years pass quickly from nineteen ninety to twenty twenty five and beyond`, phase: 'numbers' },
  { text: `Temperature readings show ninety eight point six degrees on the digital display`, phase: 'numbers' },
  { text: `Punctuation matters: commas, semicolons; dashes—yes, those too!`, phase: 'punctuation' },
  { text: `"Focus," she said, "on accuracy first; speed follows."`, phase: 'punctuation' },
  { text: `Don't look down; trust your fingers and glance ahead at the next word.`, phase: 'punctuation' },
  { text: `Errors happen—recover quickly, breathe, and continue with confidence.`, phase: 'punctuation' },
  { text: `The quick brown fox jumps over the lazy dog; meanwhile, a cat naps—unbothered, uncaring.`, phase: 'mixed' },
  { text: `Slow is smooth; smooth is fast—repeat until it sticks in your muscle memory.`, phase: 'mixed' },
  { text: `Typing well is a craft: rhythm, posture, and patience combined with deliberate practice.`, phase: 'mixed' },
  { text: `Short sentences help build tempo; longer ones test endurance and sustained focus.`, phase: 'mixed' },
];

const MEDIUM_TEXTS: TextWithPhase[] = [
  { id: 'm_letters_01', phase: 'letters', text: 'practice builds confidence and control over each key you press keep shoulders relaxed and let the fingers glide from the home row to nearby letters you will see progress when you stay patient and return for short daily sessions' },
  { id: 'm_letters_02', phase: 'letters', text: 'steady motion matters more than raw speed at first keep your gaze on the words ahead and let your hands follow the plan with time your accuracy rises and speed follows' },
  { id: 'm_numbers_01', phase: 'numbers', text: 'enter 12 24 36 and 48 across the row then note the total 120 next add 5 10 15 and 20 to reach 150 parse phone 415 555 0199 and time 10 45 am to build number precision' },
  { id: 'm_numbers_02', phase: 'numbers', text: 'record counts 7 14 21 28 then shift to prices 19 99 24 50 30 00 and 45 75 finish by typing dates 01 02 2026 and 11 30 2025' },
  { id: 'm_punct_01', phase: 'punctuation', text: 'Bring these items: pens, paper, clips, and folders. If anything is missing, note it, then re-check; accuracy first.' },
  { id: 'm_punct_02', phase: 'punctuation', text: 'When you pause—briefly—breathe and reset. Commas, periods, and dashes matter; they guide pacing, clarity, and tone.' },
  { id: 'm_mixed_01', phase: 'mixed', text: 'At 8:15, Jordan filed 4 forms, emailed 2 teams, and updated "Notes — Week 2." Small wins add up—keep going.' },
  { id: 'm_mixed_02', phase: 'mixed', text: 'Version 1.3 shipped on Friday; tickets #142 and #147 closed. Next, draft the recap by 5:30 pm and send it to ops.' },
  { text: `When you practice typing aim for consistency over bursts of speed Each session should feel calm and repeatable like a quiet metronome Over days your fingers learn the paths errors shrink and confidence grows naturally`, phase: 'letters' },
  { text: `Start with the home row then expand to sentences using varied text patterns This variety prevents boredom and prepares you for real writing Keep your gaze slightly ahead anticipating the next phrase rather than reacting to each letter`, phase: 'letters' },
  { text: `Clean technique beats raw force Float your wrists tap lightly and let the keys rebound If tension builds in your shoulders pause stretch and reset Speed that comes from strain fades quickly`, phase: 'letters' },
  { text: `A short daily routine works wonders two warmups a focused drill and a timed run Record your results WPM accuracy errors time and notice small improvements Celebrate wins learn from misses`, phase: 'letters' },
  { text: `When you practice typing in 2024 aim for consistency over bursts of speed Each session should feel calm and repeatable like a quiet metronome Over 30 days your fingers learn the paths`, phase: 'numbers' },
  { text: `Record your results 45 WPM 95 percent accuracy 3 errors 120 seconds time and notice small improvements over 7 days 14 days and 30 day periods for best tracking`, phase: 'numbers' },
  { text: `A typing speed of 40 words per minute with 90 percent accuracy beats 60 words per minute with 75 percent accuracy every time in real world applications`, phase: 'numbers' },
  { text: `Set goals that challenge you 25 WPM for beginners 40 WPM for intermediate and 60 WPM for advanced typists with accuracy above 95 percent always`, phase: 'numbers' },
  { text: `Start with the home row, then expand to sentences using varied punctuation—commas, quotes, dashes, and parentheses. This variety prevents boredom and prepares you for real writing.`, phase: 'punctuation' },
  { text: `When mistakes cluster, slow down to reestablish control. Chase clarity, not chaos. Reset your breathing, relax your jaw, and aim for clean lines of text.`, phase: 'punctuation' },
  { text: `Measure what matters. Accuracy above ninety-five percent beats reckless speed. Build a sturdy base, then nudge the tempo. Over weeks, you'll see sustainable gains.`, phase: 'punctuation' },
  { text: `Treat typing as a musical exercise. Hear the cadence of your keys and shape a steady rhythm. Short rests help, too—stand, sip water, roll your wrists.`, phase: 'punctuation' },
  { text: `When you practice typing, aim for consistency over bursts of speed. Each session should feel calm and repeatable, like a quiet metronome. Over days, your fingers learn the paths, errors shrink, and confidence grows naturally; the scoreboard follows.`, phase: 'mixed' },
  { text: `Switching passages keeps training fresh. Rotate between short, medium, and long texts so your brain adapts. Include punctuation variants like semicolons; colons: quotes "like this" and parenthetical notes (which you shouldn't skip). Variation builds resilience.`, phase: 'mixed' },
  { text: `Use custom texts that match your interests: articles, code snippets, or dialogue. Relevance keeps motivation high. Just remember to include punctuation, numbers, and symbols occasionally, because real-world writing rarely arrives as plain, easy lines.`, phase: 'mixed' },
  { text: `Typing mastery is iterative: test, review, adjust, repeat. Keep logs, compare sessions, and set targets just beyond comfortable. This steady, deliberate loop builds durable speed without sacrificing accuracy.`, phase: 'mixed' },
];

const LONG_TEXTS: TextWithPhase[] = [
  { id: 'l_letters_01', phase: 'letters', text: 'as you settle into the routine you learn to trust the motion of your hands and the memory of position steady practice turns effort into ease accuracy into speed and doubt into confidence return each day for a few minutes and watch the skills build' },
  { id: 'l_numbers_01', phase: 'numbers', text: 'type these sequences carefully 10 20 30 40 50 then log totals 125 275 300 next practice times 9 05 am 12 45 pm 6 30 pm and the ids 1002 2048 5096 accuracy on digits improves real office speed' },
  { id: 'l_punct_01', phase: 'punctuation', text: 'Accuracy beats haste: check names, dates, and lines. Use commas, periods, and dashes—sparingly—to guide the reader; clarity comes first.' },
  { id: 'l_mixed_01', phase: 'mixed', text: 'On Monday, the team logged 3 updates at 9:00, 11:15, and 4:45; by close, all tasks were synced—no loose ends. Keep the momentum.' },
  { text: `Skill grows from steady repetition not from heroic bursts of effort that burn out in a day Typing is the same small frequent sessions compound into lasting progress You learn the terrain of the keyboard like a familiar map then build pathways your fingers can trust Accuracy lays the foundation speed rises on top of it Practice with variety dialogue lists dense paragraphs and code like snippets so your technique generalizes When fatigue creeps in rest briefly breathe and return with lighter hands and a clearer head`, phase: 'letters' },
  { text: `Many people chase speed first and feel disappointed when accuracy drops but that frustration is a signal not a failure It suggests that the tempo is outrunning your technique Slow down just enough to restore control and watch how error patterns dissolve Over time the faster rhythm becomes natural like a song you can finally hum without thinking Charts and grades can motivate yet the deeper reward is the quiet confidence of reliable skill under gentle pressure`, phase: 'letters' },
  { text: `Consider posture as an invisible coach The chair supports your spine your feet rest flat your shoulders hang easy your elbows float near your sides Your wrists hover not pressed into the desk and your fingers curve lightly over the home row This arrangement looks simple but it prevents strain and unlocks endurance The same principles apply to attention relaxed yet ready When you notice tension you also notice the opportunity to adjust to choose a calmer pace and to sharpen your aim`, phase: 'letters' },
  { text: `Real world typing in 2024 rarely arrives as perfectly clean prose It includes dates like January 15 2024 numbers like 1234567890 and odd punctuation em dashes ellipses colons and parentheses plus the occasional quotation Training with those symbols now prevents costly stumbles later Try passages that mix narrative with lists like agendas from 9 AM to 5 PM or release notes from version 1.0 to version 2.5 The target is fluency not mere familiarity the more forms you practice the smoother your transitions become when the text turns messy or unexpected`, phase: 'numbers' },
  { text: `Progress tracking shows patterns over 30 days 60 days and 90 day periods Some days you glide at 45 WPM other days your fingers feel wooden and slow at 25 WPM The solution is neither panic nor punishment it is perspective Review your history observe the trend and keep the habit alive A small victory today might simply be showing up and finishing 2 clean runs or achieving 95 percent accuracy on 3 consecutive attempts Patience is not passivity it is active steadiness`, phase: 'numbers' },
  { text: `If you write code include syntax brackets like curly braces square brackets and parentheses operators like plus minus equals and comparison symbols If you draft reports include citations footnotes with numbers like reference 123 and headings Match your practice to your work because transfer depends on similarity Build drills that challenge you just beyond comfort at levels 1 through 10 then return to easier passages to confirm improvements This oscillation prevents frustration and engrains new patterns`, phase: 'numbers' },
  { text: `Real-world typing rarely arrives as perfectly clean prose. It includes dates, numbers, and odd punctuation: em dashes, ellipses, colons, and parentheses (plus the occasional quotation). Training with those symbols now prevents costly stumbles later. Try passages that mix narrative with lists, like agendas or release notes, or that mimic email threads with quoted replies. The target is fluency, not mere familiarity; the more forms you practice, the smoother your transitions become when the text turns messy or unexpected.`, phase: 'punctuation' },
  { text: `A timer adds pressure, which can be useful in small doses. Treat it like a wind that you lean into without losing balance. Set intervals that encourage focus but allow recovery. Between rounds, note where errors cluster: after punctuation, near capital letters, or during transitions between rows. Create micro-drills for those spots. This targeted approach turns vague wishes—"type faster"—into concrete habits that survive stress and show up when it matters.`, phase: 'punctuation' },
  { text: `Tools can help, but they cannot replace practice. Fancy keyboards, custom keycaps, and elaborate layouts might feel inspiring, yet they only amplify your existing habits. The essential work remains: clean repetitions, deliberate corrections, and steady attention. When you measure results, be kind and precise. Celebrate improvements in accuracy as much as increases in WPM, because durable speed is built on correctness, not on noise. Over months, the payoff feels inevitable.`, phase: 'punctuation' },
  { text: `Skill grows from steady repetition, not from heroic bursts of effort that burn out in a day. Typing is the same: small, frequent sessions compound into lasting progress. You learn the terrain of the keyboard like a familiar map, then build pathways your fingers can trust. Accuracy lays the foundation; speed rises on top of it. Practice with variety—dialogue, lists, dense paragraphs, and code-like snippets—so your technique generalizes. When fatigue creeps in, rest briefly, breathe, and return with lighter hands and a clearer head.`, phase: 'mixed' },
  { text: `Typing is a conversation between intention and execution. Your mind frames a phrase; your fingers translate it; the screen reflects the outcome. Friction in any link slows the flow. That is why posture, breath, and rhythm matter: they smooth the channel. Once smooth, you can choose to accelerate without losing clarity. This control is the real milestone: the point where you can play with speed and complexity while maintaining the calm, confident precision of an expert.`, phase: 'mixed' },
  { text: `For many learners, the turning point is tracking history. A simple log shows patterns hidden by memory: steady weeks, hot streaks, and dips that follow stress or poor sleep. The data is not a verdict; it is guidance. When you can see your path, you can adjust intelligently—changing the mix of drills, rests, and challenges. The loop is humane and effective: test, reflect, refine, repeat.`, phase: 'mixed' },
  { text: `Mastery is a moving horizon. Each improvement opens space for the next. Rather than chasing a single perfect score, chase reliability under changing conditions. That is the kind of skill that survives deadlines, distractions, and demanding texts. It is also the kind that feels satisfying, because it is earned through patient, thoughtful practice that respects both your ambition and your wellbeing.`, phase: 'mixed' },
];

export function getRandomText(level: Level, exclude?: string, phase?: Phase): string {
  const pool = level === 'short' ? SHORT_TEXTS : level === 'medium' ? MEDIUM_TEXTS : LONG_TEXTS;
  if (pool.length === 0) return exclude ?? '';
  
  let candidates = pool;
  if (phase) {
    candidates = pool.filter(item => item.phase === phase);
    if (candidates.length === 0) {
      console.warn(`No texts found for phase "${phase}" in level "${level}", falling back to all texts`);
      candidates = pool;
    }
  }
  
  if (exclude) {
    candidates = candidates.filter((item) => item.text !== exclude);
  }
  
  if (candidates.length === 0) return pool[0].text;
  const idx = Math.floor(Math.random() * candidates.length);
  return candidates[idx].text;
}

export function detectLevelFromText(text: string): Level {
  const words = text.trim().split(/\s+/).filter(Boolean);
  const count = words.length;
  if (count <= 25) return 'short';
  if (count <= 60) return 'medium';
  return 'long';
}

// Storage keys for persistence
const QUEUE_INDEX_KEY = 'ok_queueIndex_v1';
const LAST_TEXTS_KEY = 'ok_lastTexts_v1';
const PHASE_INDEX_KEY = 'ok_phaseIndex_v1';

// Default fallback text
const DEFAULT_TEXT = `The quick brown fox jumps over the lazy dog; meanwhile, a cat naps—unbothered, uncaring.`;

// Phase progression order
const PHASE_ORDER: Phase[] = ['letters', 'numbers', 'punctuation', 'mixed'];

// Shuffled queue management
interface QueueState {
  [key: string]: {
    queue: TextWithPhase[];
    index: number;
  };
}

interface LastTexts {
  [key: string]: string[];
}

interface PhaseIndices {
  short: number;
  medium: number;
  long: number;
}

function getStoredQueueState(): QueueState {
  try {
    const stored = localStorage.getItem(QUEUE_INDEX_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.warn('Failed to parse stored queue state:', e);
  }
  return {};
}

function setStoredQueueState(state: QueueState): void {
  try {
    localStorage.setItem(QUEUE_INDEX_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn('Failed to store queue state:', e);
  }
}

function getStoredLastTexts(): LastTexts {
  try {
    const stored = localStorage.getItem(LAST_TEXTS_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.warn('Failed to parse stored last texts:', e);
  }
  return {};
}

function addToLastTexts(key: string, text: string): void {
  try {
    const lastTexts = getStoredLastTexts();
    if (!lastTexts[key]) {
      lastTexts[key] = [];
    }
    lastTexts[key] = [text, ...lastTexts[key].slice(0, 4)]; // Keep last 5
    localStorage.setItem(LAST_TEXTS_KEY, JSON.stringify(lastTexts));
  } catch (e) {
    console.warn('Failed to store last text:', e);
  }
}

function getStoredPhaseIndices(): PhaseIndices {
  try {
    const stored = localStorage.getItem(PHASE_INDEX_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.warn('Failed to parse stored phase indices:', e);
  }
  return { short: 0, medium: 0, long: 0 };
}

function setStoredPhaseIndices(indices: PhaseIndices): void {
  try {
    localStorage.setItem(PHASE_INDEX_KEY, JSON.stringify(indices));
  } catch (e) {
    console.warn('Failed to store phase indices:', e);
  }
}

export function getCurrentPhase(level: Level): Phase {
  const phaseIndices = getStoredPhaseIndices();
  return PHASE_ORDER[phaseIndices[level]];
}

export function advancePhase(level: Level): Phase {
  const phaseIndices = getStoredPhaseIndices();
  phaseIndices[level] = (phaseIndices[level] + 1) % PHASE_ORDER.length;
  setStoredPhaseIndices(phaseIndices);
  return PHASE_ORDER[phaseIndices[level]];
}

export function getNextPhase(currentPhase: Phase): Phase {
  const currentIndex = PHASE_ORDER.indexOf(currentPhase);
  const nextIndex = (currentIndex + 1) % PHASE_ORDER.length;
  return PHASE_ORDER[nextIndex];
}

export function detectPhaseFromText(text: string): Phase {
  const pool = [...SHORT_TEXTS, ...MEDIUM_TEXTS, ...LONG_TEXTS];
  const match = pool.find(item => item.text === text);
  return match ? match.phase : 'mixed';
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function getQueueKey(level: Level, phase?: Phase): string {
  return phase ? `${level}|${phase}` : level;
}

export function getNextText(
  level: Level, 
  opts: { advance?: boolean; exclude?: string; forNewTest?: boolean; phase?: Phase; avoidRecent?: number } = {}
): string {
  const { advance = true, exclude, forNewTest = false, phase, avoidRecent = 5 } = opts;
  
  const pool = level === 'short' ? SHORT_TEXTS : level === 'medium' ? MEDIUM_TEXTS : LONG_TEXTS;
  
  // Fallback if pool is empty
  if (pool.length === 0) {
    console.warn(`Empty text pool for level "${level}", falling back to default text`);
    return DEFAULT_TEXT;
  }
  
  // Determine target phase
  let targetPhase = phase;
  if (forNewTest && !targetPhase) {
    targetPhase = advancePhase(level);
  } else if (!targetPhase) {
    targetPhase = getCurrentPhase(level);
  }
  
  // Create queue key
  const queueKey = getQueueKey(level, targetPhase);
  const queueState = getStoredQueueState();
  
  // Filter pool by phase
  let candidates = pool.filter(item => item.phase === targetPhase);
  
  // If no texts for target phase, fall back to normal rotation
  if (candidates.length === 0) {
    console.warn(`No texts found for phase "${targetPhase}" in level "${level}", falling back to normal rotation`);
    candidates = pool;
  }
  
  // Initialize or refresh queue if needed
  if (!queueState[queueKey] || queueState[queueKey].index >= queueState[queueKey].queue.length) {
    queueState[queueKey] = {
      queue: shuffleArray(candidates),
      index: 0
    };
  }
  
  // Get last N texts for this queue to avoid repetition
  const lastTexts = getStoredLastTexts();
  const recentTexts = lastTexts[queueKey] || [];
  const recentToAvoid = recentTexts.slice(0, avoidRecent);
  
  // Find next text that hasn't been used recently
  let chosenText = '';
  let attempts = 0;
  const maxAttempts = queueState[queueKey].queue.length * 2; // Prevent infinite loop
  
  while (attempts < maxAttempts) {
    const currentItem = queueState[queueKey].queue[queueState[queueKey].index];
    const candidateText = currentItem.text;
    
    // Check if this text should be excluded
    const shouldExclude = candidateText === exclude || recentToAvoid.includes(candidateText);
    
    if (!shouldExclude) {
      chosenText = candidateText;
      break;
    }
    
    // Move to next text in queue
    queueState[queueKey].index = (queueState[queueKey].index + 1) % queueState[queueKey].queue.length;
    
    // If we've gone through the whole queue, reshuffle to try different order
    if (queueState[queueKey].index === 0) {
      queueState[queueKey].queue = shuffleArray(candidates);
    }
    
    attempts++;
  }
  
  // If still no text found, fall back to first available or default
  if (!chosenText) {
    if (queueState[queueKey].queue.length > 0) {
      chosenText = queueState[queueKey].queue[0].text;
    } else {
      console.warn(`All texts exhausted for queue "${queueKey}", falling back to default text`);
      chosenText = DEFAULT_TEXT;
    }
  }
  
  // Advance queue for next time
  if (queueState[queueKey]) {
    queueState[queueKey].index = (queueState[queueKey].index + 1) % queueState[queueKey].queue.length;
  }
  
  // Store updated queue state and add to recent texts (keep last avoidRecent + 1)
  setStoredQueueState(queueState);
  addToLastTexts(queueKey, chosenText);
  
  return chosenText;
}
