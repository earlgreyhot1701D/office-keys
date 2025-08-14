export type Level = 'short' | 'medium' | 'long';

const SHORT_TEXTS: string[] = [
  `The quick brown fox jumps over the lazy dog; meanwhile, a cat naps—unbothered, uncaring.`,
  `Practice daily, breathe steadily, and keep your wrists straight; speed comes slowly, then suddenly.`,
  `"Focus," she said, "on accuracy first; speed follows."`,
  `Numbers and symbols: 1, 2, 3... type them cleanly—no slips!`,
  `Rain fell, keyboards clicked, and thoughts flowed like rivers into notes.`,
  `Don't look down; trust your fingers and glance ahead at the next word.`,
  `Slow is smooth; smooth is fast—repeat until it sticks.`,
  `Typing well is a craft: rhythm, posture, and patience.`,
  `Short sentences help build tempo; longer ones test endurance.`,
  `Punctuation matters: commas, semicolons; dashes—yes, those too.`,
  `Stay relaxed; shoulders low, elbows light, eyes forward.`,
  `Errors happen; recover quickly, breathe, and continue.`,
];

const MEDIUM_TEXTS: string[] = [
  `When you practice typing, aim for consistency over bursts of speed. Each session should feel calm and repeatable, like a quiet metronome. Over days, your fingers learn the paths, errors shrink, and confidence grows naturally; the scoreboard follows.`,
  `Start with the home row, then expand to sentences using varied punctuation—commas, quotes, dashes, and parentheses. This variety prevents boredom and prepares you for real writing. Keep your gaze slightly ahead, anticipating the next phrase rather than reacting to each letter.`,
  `Clean technique beats raw force. Float your wrists, tap lightly, and let the keys rebound. If tension builds in your shoulders, pause, stretch, and reset. Speed that comes from strain fades quickly; speed that grows from rhythm and correctness endures.`,
  `A short daily routine works wonders: two warmups, a focused drill, and a timed run. Record your results—WPM, accuracy, errors, time—and notice small improvements. Celebrate wins, learn from misses, and keep the practice playful.`,
  `Switching passages keeps training fresh. Rotate between short, medium, and long texts so your brain adapts. Include punctuation variants like semicolons; colons: quotes "like this" and parenthetical notes (which you shouldn't skip). Variation builds resilience.`,
  `When mistakes cluster, slow down to reestablish control. Chase clarity, not chaos. Reset your breathing, relax your jaw, and aim for clean lines of text. The paradox is simple: by easing up a little, you actually move faster on average.`,
  `Measure what matters. Accuracy above ninety-five percent beats reckless speed. Build a sturdy base, then nudge the tempo. Over weeks, you'll see sustainable gains; plateaus will pass, and your best performances will start to feel ordinary.`,
  `Treat typing as a musical exercise. Hear the cadence of your keys and shape a steady rhythm. Short rests help, too—stand, sip water, roll your wrists. Attention returns sharper, and the work feels lighter.`,
  `Use custom texts that match your interests: articles, code snippets, or dialogue. Relevance keeps motivation high. Just remember to include punctuation, numbers, and symbols occasionally, because real-world writing rarely arrives as plain, easy lines.`,
  `The mind wanders; bring it back gently. If your focus drifts, mark the point, take a breath, and continue. Training attention alongside technique compounds your progress and makes tough passages feel manageable.`,
  `On challenging days, lower expectations but not standards. Maintain form, value precision, and finish the set. Discipline today—however modest—protects momentum tomorrow and keeps the habit alive.`,
  `Typing mastery is iterative: test, review, adjust, repeat. Keep logs, compare sessions, and set targets just beyond comfortable. This steady, deliberate loop builds durable speed without sacrificing accuracy.`,
];

const LONG_TEXTS: string[] = [
  `Skill grows from steady repetition, not from heroic bursts of effort that burn out in a day. Typing is the same: small, frequent sessions compound into lasting progress. You learn the terrain of the keyboard like a familiar map, then build pathways your fingers can trust. Accuracy lays the foundation; speed rises on top of it. Practice with variety—dialogue, lists, dense paragraphs, and code-like snippets—so your technique generalizes. When fatigue creeps in, rest briefly, breathe, and return with lighter hands and a clearer head.`,
  `Many people chase speed first and feel disappointed when accuracy drops, but that frustration is a signal, not a failure. It suggests that the tempo is outrunning your technique. Slow down just enough to restore control, and watch how error patterns dissolve. Over time, the faster rhythm becomes natural, like a song you can finally hum without thinking. Charts and grades can motivate, yet the deeper reward is the quiet confidence of reliable skill under gentle pressure.`,
  `Consider posture as an invisible coach. The chair supports your spine; your feet rest flat; your shoulders hang easy; your elbows float near your sides. Your wrists hover, not pressed into the desk, and your fingers curve lightly over the home row. This arrangement looks simple, but it prevents strain and unlocks endurance. The same principles apply to attention: relaxed yet ready. When you notice tension, you also notice the opportunity to adjust, to choose a calmer pace, and to sharpen your aim.`,
  `Real-world typing rarely arrives as perfectly clean prose. It includes dates, numbers, and odd punctuation: em dashes, ellipses, colons, and parentheses (plus the occasional quotation). Training with those symbols now prevents costly stumbles later. Try passages that mix narrative with lists, like agendas or release notes, or that mimic email threads with quoted replies. The target is fluency, not mere familiarity; the more forms you practice, the smoother your transitions become when the text turns messy or unexpected.`,
  `Progress is uneven by nature. Some days you glide; other days, your fingers feel wooden and slow. The solution is neither panic nor punishment—it is perspective. Review your history, observe the trend, and keep the habit alive. A small victory today might simply be showing up and finishing two clean runs. Patience is not passivity; it is active steadiness. By honoring form and maintaining attention, you earn the right to increase speed without inviting chaos into your lines.`,
  `If you write code, include syntax: brackets, braces, and operators. If you draft reports, include citations, footnotes, and headings. Match your practice to your work, because transfer depends on similarity. Build drills that challenge you just beyond comfort, then return to easier passages to confirm improvements. This oscillation prevents frustration and engrains new patterns. Over weeks, your hands learn to place characters precisely, while your eyes learn to read ahead and orchestrate each line with economical movements.`,
  `A timer adds pressure, which can be useful in small doses. Treat it like a wind that you lean into without losing balance. Set intervals that encourage focus but allow recovery. Between rounds, note where errors cluster: after punctuation, near capital letters, or during transitions between rows. Create micro-drills for those spots. This targeted approach turns vague wishes—"type faster"—into concrete habits that survive stress and show up when it matters.`,
  `Tools can help, but they cannot replace practice. Fancy keyboards, custom keycaps, and elaborate layouts might feel inspiring, yet they only amplify your existing habits. The essential work remains: clean repetitions, deliberate corrections, and steady attention. When you measure results, be kind and precise. Celebrate improvements in accuracy as much as increases in WPM, because durable speed is built on correctness, not on noise. Over months, the payoff feels inevitable.`,
  `Typing is a conversation between intention and execution. Your mind frames a phrase; your fingers translate it; the screen reflects the outcome. Friction in any link slows the flow. That is why posture, breath, and rhythm matter: they smooth the channel. Once smooth, you can choose to accelerate without losing clarity. This control is the real milestone: the point where you can play with speed and complexity while maintaining the calm, confident precision of an expert.`,
  `Long passages test endurance and attention more than technique. The challenge is to maintain form across paragraphs, not to sprint through a single sentence. Use a soft gaze that sees the next few words, not just the current letter. Let your hands follow a practiced route rather than forcing each keystroke. With time, fatigue arrives later, recovery takes less effort, and your baseline speed inches upward in a way that feels almost effortless.`,
  `For many learners, the turning point is tracking history. A simple log shows patterns hidden by memory: steady weeks, hot streaks, and dips that follow stress or poor sleep. The data is not a verdict; it is guidance. When you can see your path, you can adjust intelligently—changing the mix of drills, rests, and challenges. The loop is humane and effective: test, reflect, refine, repeat.`,
  `Mastery is a moving horizon. Each improvement opens space for the next. Rather than chasing a single perfect score, chase reliability under changing conditions. That is the kind of skill that survives deadlines, distractions, and demanding texts. It is also the kind that feels satisfying, because it is earned through patient, thoughtful practice that respects both your ambition and your wellbeing.`,
];

export function getRandomText(level: Level, exclude?: string): string {
  const pool = level === 'short' ? SHORT_TEXTS : level === 'medium' ? MEDIUM_TEXTS : LONG_TEXTS;
  if (pool.length === 0) return exclude ?? '';
  const candidates = exclude ? pool.filter((t) => t !== exclude) : pool;
  if (candidates.length === 0) return pool[0];
  const idx = Math.floor(Math.random() * candidates.length);
  return candidates[idx];
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
const LAST_TEXT_KEY = 'ok_lastText_v1';

// Default fallback text
const DEFAULT_TEXT = `The quick brown fox jumps over the lazy dog; meanwhile, a cat naps—unbothered, uncaring.`;

interface QueueIndices {
  short: number;
  medium: number;
  long: number;
}

interface LastTexts {
  short: string;
  medium: string;
  long: string;
}

function getStoredQueueIndices(): QueueIndices {
  try {
    const stored = localStorage.getItem(QUEUE_INDEX_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.warn('Failed to parse stored queue indices:', e);
  }
  return { short: -1, medium: -1, long: -1 };
}

function setStoredQueueIndices(indices: QueueIndices): void {
  try {
    localStorage.setItem(QUEUE_INDEX_KEY, JSON.stringify(indices));
  } catch (e) {
    console.warn('Failed to store queue indices:', e);
  }
}

function getStoredLastTexts(): LastTexts {
  try {
    const stored = localStorage.getItem(LAST_TEXT_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.warn('Failed to parse stored last texts:', e);
  }
  return { short: '', medium: '', long: '' };
}

function setStoredLastText(level: Level, text: string): void {
  try {
    const lastTexts = getStoredLastTexts();
    lastTexts[level] = text;
    localStorage.setItem(LAST_TEXT_KEY, JSON.stringify(lastTexts));
  } catch (e) {
    console.warn('Failed to store last text:', e);
  }
}

export function getNextText(
  level: Level, 
  opts: { advance?: boolean; exclude?: string } = {}
): string {
  const { advance = true, exclude } = opts;
  
  const pool = level === 'short' ? SHORT_TEXTS : level === 'medium' ? MEDIUM_TEXTS : LONG_TEXTS;
  
  // Fallback if pool is empty or has only one item that matches exclusions
  if (pool.length === 0) {
    console.warn(`Empty text pool for level "${level}", falling back to default text`);
    return DEFAULT_TEXT;
  }
  
  if (pool.length === 1 && (pool[0] === exclude || pool[0] === getStoredLastTexts()[level])) {
    console.warn(`Only one text available for level "${level}" and it matches exclusions, falling back to default text`);
    return DEFAULT_TEXT;
  }
  
  const indices = getStoredQueueIndices();
  const lastTexts = getStoredLastTexts();
  
  // Initialize with random starting index if first use
  if (indices[level] === -1) {
    indices[level] = Math.floor(Math.random() * pool.length);
    setStoredQueueIndices(indices);
  }
  
  let currentIndex = indices[level];
  let chosenText = pool[currentIndex];
  let attempts = 0;
  const maxAttempts = pool.length;
  
  // Find next text that doesn't match exclusions
  while (
    attempts < maxAttempts && 
    (chosenText === exclude || chosenText === lastTexts[level])
  ) {
    currentIndex = (currentIndex + 1) % pool.length;
    chosenText = pool[currentIndex];
    attempts++;
  }
  
  // If we've tried all texts and they all match exclusions, just use the current one
  if (attempts === maxAttempts && (chosenText === exclude || chosenText === lastTexts[level])) {
    console.warn(`All texts for level "${level}" match exclusions, using current text anyway`);
  }
  
  // Advance the queue index if requested
  if (advance) {
    const newIndices = { ...indices };
    newIndices[level] = (currentIndex + 1) % pool.length;
    setStoredQueueIndices(newIndices);
  }
  
  // Always store the chosen text as the last served for this level
  setStoredLastText(level, chosenText);
  
  return chosenText;
}
