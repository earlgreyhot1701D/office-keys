export type HistoryEntry = {
  timestamp: number; // Unix ms timestamp
  wpm: number;
  accuracy: number; // percentage
  errors: number;
  timeElapsed: number; // seconds
};

const STORAGE_KEY = "typing_history";

export function loadHistory(): HistoryEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as HistoryEntry[];
    if (!Array.isArray(parsed)) return [];
    // Ensure newest first
    return parsed
      .filter(Boolean)
      .sort((a, b) => (b?.timestamp ?? 0) - (a?.timestamp ?? 0));
  } catch {
    return [];
  }
}

export function saveResult(entry: HistoryEntry): void {
  const list = loadHistory();
  // Add newest to the front
  const next = [entry, ...list].slice(0, 10); // keep last 10
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // ignore write errors (e.g., storage full)
  }
}

export function clearHistory(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}

export function toCSV(entries: HistoryEntry[]): string {
  const header = ["Date", "WPM", "Accuracy", "Errors", "Time"];
  const rows = entries.map((e) => [
    new Date(e.timestamp).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      hour: 'numeric', 
      minute: '2-digit', 
      hour12: true 
    }),
    String(e.wpm),
    `${e.accuracy}%`,
    String(e.errors),
    `${e.timeElapsed}s`,
  ]);
  const all = [header, ...rows];
  return all
    .map((r) => r.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
    .join("\n");
}
