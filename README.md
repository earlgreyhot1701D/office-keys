# Office Keys (formerly “TypeSpeed Pro”)

**Live site:** https://type-speed-boost.lovable.app  
**Lovable project:** https://lovable.dev/projects/db3136f6-f3b2-4dc9-a9a3-7451db74402e

A no-login, accessible typing practice app that helps court staff (and anyone) build foundational digital skills through short, varied passages and clear feedback.

---

## Storyboard & Justification

**Project Title:** Office Keys (working name: “TypeSpeed Pro”)  
**Developer:** La Shara Cordero  
**Intended Platform:** Santa Barbara County Superior Court intranet (internal)  
**Project Type:** Foundational digital skills practice

**Purpose:** Provide a no-cost, low-barrier way for staff to practice keyboarding with gamified repetition—improving speed and comfort for common digital workflows (email, forms, data entry).

### 1) The need
- **Digital skills are baseline:** ~**92% of U.S. jobs require digital skills** to some extent.  
  Sources: National Skills Coalition (NSC) — *Closing the Digital Skill Divide*; Federal Reserve Bank of Atlanta — *Baseline for Work: 92% of Jobs Require Digital Skills*.  
  - NSC: <https://nationalskillscoalition.org/resource/publications/closing-the-digital-skill-divide/>  
  - Atlanta Fed: <https://www.atlantafed.org/community-development/publications/partners-update/2023/08/10/baseline-for-work-92-percent-of-jobs-require-digital-skills>
- **Skills gap is real:** Roughly **one-third of U.S. workers lack basic digital skills** (typing, email, basic software). (NSC report above)
- **Public sector challenge:** Many employees learn on the job without structured practice; online tools can be blocked or too complex.

> **Why typing?** Faster, more accurate typing alone can reclaim time on common tasks. If someone types ~2,000 words/day (20 emails × 100 words):  
> • 40 WPM → **50 minutes** of pure typing  
> • 60 WPM → **33 minutes**  
> **≈17 minutes saved/day**, ≈85 minutes/week  
> *(Pure keystroke time; excludes reading/thinking.)*  
> Sources: HBR on time spent on email <https://hbr.org/2019/01/how-to-spend-way-less-time-on-email-every-day>, typical email word count <https://emailanalytics.com/ideal-email-length/>, typing time calculator <https://www.typingmaster.com/typing-simulator/>, average adult WPM context (≈40 WPM) <https://www.typingpal.com/en/blog/what-is-a-good-typing-speed>.

### 2) Storyboard (user journey)
1. **Home → Choose Level:** Short / Medium / Long. (No account needed.)  
2. **New Test:** Loads a varied passage (rotates within level; avoids recent repeats).  
3. **Type:** Live feedback; finish to see **WPM, Accuracy, Errors, Time** and a simple grade.  
4. **Review → Improve:**  
   - **History** card saves recent runs (local only) + **CSV export**.  
   - **Adaptive next step** gently suggests the next focus (letters, numbers, punctuation, mixed) **without changing the user’s chosen level**.  
5. **Accessibility & Help:** Toggle **High contrast**, **Large text**, **Dyslexia-friendly font**; first-run dialog explains how it works and hand position.

### 3) Research foundation (selected)
- **Contextualized practice** (work-like tasks) improves digital learning outcomes. NSC report above.  
- **Digital literacy** links to job quality and equity:  
  - Atlanta Fed: <https://www.atlantafed.org/community-development/publications/partners-update/2023/08/10/baseline-for-work-92-percent-of-jobs-require-digital-skills>  
  - Li, J. et al., *Digital Literacy in the Workforce* (NIH/PMC): <https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10611935/>  
- **Time savings** from higher WPM compound across routine communications (HBR/McKinsey + EmailAnalytics + TypingMaster links above).

### 4) Court alignment
| Strategic Goal          | Alignment                                               |
|-------------------------|---------------------------------------------------------|
| Workforce development   | Upskilling via no-cost, self-paced practice             |
| Digital transformation  | Reinforces core digital fluency                         |
| Equity & access         | Low-barrier tool for varied starting points             |
| Training & retention    | Non-punitive practice with visible progress             |

---

## Features (MVP+)

- **No login**; works entirely in the browser
- **Levels:** Short / Medium / Long
- **Variety engine:** Rotates passages within level and **avoids recent repeats**
- **Phases (focus):** Letters → Numbers → Punctuation → Mixed  
  _“New Test” advances the phase; “Change Text” keeps the current phase_
- **Adaptive practice (gentle):** Suggests next **focus** based on last run (e.g., digits or punctuation), **without auto-changing level**
- **Results:** WPM, Accuracy, Errors, Time + simple **grade**
- **History:** Recent runs saved locally; **Export CSV**
- **Accessibility:** Toggles for **High contrast**, **Large text**, **Dyslexia-friendly font** (persisted)
- **Help / First-run:** Short instructions (how it works + hand position); re-open anytime
- **Keyboard shortcuts:** **N** New Test, **R** Try Again (on results), **H/Esc** Home
- **Privacy:** Data stays on the device (localStorage); no accounts, no tracking

---

## Keyboard shortcuts
- **N** = New Test  
- **R** = Try Again (on results screen)  
- **H** or **Esc** = Home / Choose Level

---

## Tech stack
Vite • React • TypeScript • Tailwind • shadcn/ui  
Built with **Lovable**; deploy via Lovable “Publish”.

---

## 🚀 Local Development Setup

### 📋 Prerequisites

Make sure your system has:

- Node.js (v18+)
- npm (installed automatically with Node)
- Git

> Check using:
> `node -v` | `npm -v` | `git --version`

---

### 📥 Clone and Install

```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
npm install

## Hackathon compliance & changelog (HackVerse 2025)

**Hackathon window:** July 31 – Aug 27, 2025  
**Project start:** Aug 4, 2025 (all items below were completed within the window)

- **Aug 4:** Initialized; base typing test.
- **Aug 12:** Results history (localStorage) and **CSV export**.
- **Aug 12:** Randomized **Change Text** using level-based packs for variety.
- **Aug 13:** Persistent navigation (Home, New Test, clickable title); safe keyboard shortcuts and help.
- **Aug 14:** Branding/metadata updated to **Office Keys**.
- **Aug 14:** **Per-level rotation** persisted to avoid repeats across refresh/return.
- **Aug 14:** History UX polish (human-readable timestamps); CSV aligned with table columns.
- **Aug 14:** **Screen-reader announcement** and initial focus to “Try Again” on results.
- **Aug 14:** **Accessibility settings** (High contrast, Large text, Dyslexia font) with local persistence.
- **Aug 14:** **Within-level phases** (Letters → Numbers → Punctuation → Mixed) and **Focus** indicator; **New Test** advances phase.
- **Aug 14:** **Adaptive practice** (keeps user-selected level; adapts focus/punctuation only).
- **Aug 14:** **First-run instructions** (how it works + hand position), “don’t show again”, and Help reopen.
- **Aug 14:** Starter passages expanded; **recent-avoid** and improved variety logic.
- **Aug 14:** Help button opens the same First-Run dialog; **New Test** advances phase while **Change Text** stays in-phase; recent-avoid applied.

## Roadmap (post-hackathon)

- Court-specific practice packs (jury summons, minute orders, common forms)
- Optional supervisor dashboard (on-prem or export-only review)
- Friendly gamification (badges, benchmarks, streaks)
- Broader accessibility QA (screen readers, keyboard-only audits)
- Multi-profile (nickname) support on the same device
- Optional Spanish UI and text packs

## Citations & sources

1. National Skills Coalition (2023), **Closing the Digital Skill Divide** — national factsheet and report.  
   <https://nationalskillscoalition.org/resource/publications/closing-the-digital-skill-divide/>
2. Federal Reserve Bank of Atlanta (2023), **Baseline for Work: 92% of Jobs Require Digital Skills**.  
   <https://www.atlantafed.org/community-development/publications/partners-update/2023/08/10/baseline-for-work-92-percent-of-jobs-require-digital-skills>
3. Li, J. et al. (2023), **Digital Literacy in the Workforce**, NIH/PMC.  
   <https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10611935/>
4. Harvard Business Review (2019), **How to Spend Way Less Time on Email Every Day** (citing McKinsey ~28% time on email).  
   <https://hbr.org/2019/01/how-to-spend-way-less-time-on-email-every-day>
5. EmailAnalytics, **Ideal Email Length & Word Count** (typical email word counts).  
   <https://emailanalytics.com/ideal-email-length/>
6. TypingMaster, **Typing Test / Time Savings Calculator**.  
   <https://www.typingmaster.com/typing-simulator/>
7. TypingPal, **What Is a Good Typing Speed?** (average adult ~40 WPM context).  
   <https://www.typingpal.com/en/blog/what-is-a-good-typing-speed>



