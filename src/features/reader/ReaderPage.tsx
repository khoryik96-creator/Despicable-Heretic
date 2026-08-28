import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import { allChapters, publishedChapterCount } from '../chapters/allData';
import { loadChapterBody, preloadSeason } from './chapterLoader';
import { Prose } from './Prose';
import { useReaderState } from './ReaderContext';

interface ReaderPageProps {
  chapterId: string;
  onOpenChapter: (id: string) => void;
  onBackToArchive: () => void;
}

export function ReaderPage({ chapterId, onOpenChapter, onBackToArchive }: ReaderPageProps) {
  const { isBookmarked, toggleBookmark, markLastRead } = useReaderState();
  const [body, setBody] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [fontScale, setFontScale] = useState(1);
  const [relaxedSpacing, setRelaxedSpacing] = useState(false);

  const chapterIndex = useMemo(() => allChapters.findIndex((chapter) => chapter.id === chapterId), [chapterId]);
  const chapter = chapterIndex >= 0 ? allChapters[chapterIndex] : undefined;
  const previous = chapterIndex > 0 ? allChapters[chapterIndex - 1] : undefined;
  const next = chapterIndex >= 0 && chapterIndex < allChapters.length - 1 ? allChapters[chapterIndex + 1] : undefined;

  useEffect(() => {
    if (!chapter) return;
    let active = true;
    setBody(null);
    setError(null);
    markLastRead(chapter.id);

    loadChapterBody(chapter.season, chapter.number)
      .then((loaded) => {
        if (!active) return;
        setBody(loaded);
        if (previous) preloadSeason(previous.season);
        if (next) preloadSeason(next.season);
      })
      .catch((reason: unknown) => {
        if (!active) return;
        setError(reason instanceof Error ? reason.message : 'The chapter could not be loaded.');
      });

    return () => { active = false; };
  }, [chapter, markLastRead, next, previous]);

  if (!chapter) {
    return (
      <section className="reader-page">
        <button className="text-button" onClick={onBackToArchive} type="button">← Back to Chapters</button>
        <div className="reader-error">This chapter does not exist in the current published manifest.</div>
      </section>
    );
  }

  const readerStyle = {
    '--reader-scale': String(fontScale),
    '--reader-line-height': relaxedSpacing ? '2.05' : '1.82',
  } as CSSProperties;

  return (
    <section className="reader-page">
      <div className="reader-page__topline">
        <button className="text-button" onClick={onBackToArchive} type="button">← Chapter archive</button>
        <span>Chapter {chapterIndex + 1} of {publishedChapterCount}</span>
      </div>

      <header className="reader-header">
        <div>
          <p className="eyebrow">Season {chapter.season} · Chapter {chapter.number}</p>
          <span className="season-kicker">{chapter.seasonTitle}</span>
          <h2>{chapter.title}</h2>
          <p>{chapter.summary}</p>
        </div>
        <button
          className={`bookmark-toggle ${isBookmarked(chapter.id) ? 'is-saved' : ''}`}
          onClick={() => toggleBookmark(chapter.id)}
          type="button"
        >
          {isBookmarked(chapter.id) ? '🔖 Bookmarked' : '♧ Bookmark'}
        </button>
      </header>

      <div className="reader-controls" aria-label="Reading controls">
        <span>Reading</span>
        <button onClick={() => setFontScale((value) => Math.max(.86, Number((value - .08).toFixed(2))))} type="button">A−</button>
        <button onClick={() => setFontScale((value) => Math.min(1.28, Number((value + .08).toFixed(2))))} type="button">A+</button>
        <button className={relaxedSpacing ? 'is-active' : undefined} onClick={() => setRelaxedSpacing((value) => !value)} type="button">Spacing</button>
      </div>

      <article className="reader-surface" style={readerStyle}>
        {!body && !error ? <div className="reader-loading">Loading Season {chapter.season}…</div> : null}
        {error ? (
          <div className="reader-error">
            <strong>Chapter failed to load.</strong>
            <p>{error}</p>
            <button onClick={() => onOpenChapter(chapter.id)} type="button">Try again</button>
          </div>
        ) : null}
        {body ? <Prose body={body} season={chapter.season} chapter={chapter.number} /> : null}
      </article>

      <nav className="reader-nav" aria-label="Chapter navigation">
        <button disabled={!previous} onClick={() => previous && onOpenChapter(previous.id)} type="button">
          <span>← Previous</span>
          <strong>{previous ? `S${previous.season} · Ch ${previous.number}` : 'Beginning'}</strong>
        </button>
        <button disabled={!next} onClick={() => next && onOpenChapter(next.id)} type="button">
          <span>Next →</span>
          <strong>{next ? `S${next.season} · Ch ${next.number}` : 'Latest chapter'}</strong>
        </button>
      </nav>
    </section>
  );
}
