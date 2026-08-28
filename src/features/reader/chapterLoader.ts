interface SeasonPayload {
  version: number;
  season: number;
  chapterCount: number;
  chapters: Record<string, string>;
}

const seasonCache = new Map<number, Promise<SeasonPayload>>();

function seasonUrl(season: number): string {
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
  return `${base}generated/reader/season-${String(season).padStart(2, '0')}.json`;
}

async function fetchSeason(season: number): Promise<SeasonPayload> {
  const response = await fetch(seasonUrl(season), { cache: 'force-cache' });
  if (!response.ok) throw new Error(`Season ${season} failed to load (${response.status}).`);
  const payload = await response.json() as SeasonPayload;
  if (payload.season !== season || payload.chapterCount !== 10) {
    throw new Error(`Season ${season} reader data is invalid.`);
  }
  return payload;
}

export function loadSeason(season: number): Promise<SeasonPayload> {
  const existing = seasonCache.get(season);
  if (existing) return existing;
  const promise = fetchSeason(season).catch((error) => {
    seasonCache.delete(season);
    throw error;
  });
  seasonCache.set(season, promise);
  return promise;
}

export async function loadChapterBody(season: number, chapter: number): Promise<string> {
  const payload = await loadSeason(season);
  const body = payload.chapters[String(chapter)];
  if (!body) throw new Error(`Season ${season} Chapter ${chapter} is missing from reader data.`);
  return body;
}

export function preloadSeason(season: number): void {
  if (season < 1) return;
  void loadSeason(season).catch(() => undefined);
}
