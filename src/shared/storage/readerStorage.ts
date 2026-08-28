export const BOOKMARKS_KEY = 'dhBookmarksV2';
export const LAST_READ_KEY = 'dhLastReadV2';

function canUseStorage(): boolean {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

export function readBookmarks(): string[] {
  if (!canUseStorage()) return [];
  try {
    const parsed = JSON.parse(window.localStorage.getItem(BOOKMARKS_KEY) ?? '[]');
    return Array.isArray(parsed) ? parsed.filter((value): value is string => typeof value === 'string') : [];
  } catch {
    return [];
  }
}

export function writeBookmarks(ids: Iterable<string>): void {
  if (!canUseStorage()) return;
  try {
    window.localStorage.setItem(BOOKMARKS_KEY, JSON.stringify([...ids]));
  } catch {
    // Reading must remain usable even when browser storage is unavailable.
  }
}

export function readLastRead(): string | null {
  if (!canUseStorage()) return null;
  try {
    return window.localStorage.getItem(LAST_READ_KEY);
  } catch {
    return null;
  }
}

export function writeLastRead(id: string | null): void {
  if (!canUseStorage()) return;
  try {
    if (id) window.localStorage.setItem(LAST_READ_KEY, id);
    else window.localStorage.removeItem(LAST_READ_KEY);
  } catch {
    // Reading must remain usable even when browser storage is unavailable.
  }
}
