import { useMemo, useState } from 'react';
import { PageHeader } from '../../components/PageHeader';
import { EmptyState } from '../../components/EmptyState';
import { includesQuery } from '../../shared/utils';
import { useReaderState } from '../reader/ReaderContext';
import { allChapters, publishedChapterCount, publishedSeasonCount } from './allData';
import type { Chapter } from './types';

interface ChaptersPageProps {
  onOpenChapter: (id: string) => void;
}

function ChapterRow({ chapter, onOpenChapter }: { chapter: Chapter; onOpenChapter: (id: string) => void }) {
  const { isBookmarked, toggleBookmark, lastRead } = useReaderState();
  const saved = isBookmarked(chapter.id);
  return (
    <article className={`chapter-row chapter-row--interactive ${lastRead === chapter.id ? 'is-last-read' : ''}`}>
      <button className="chapter-row__open" onClick={() => onOpenChapter(chapter.id)} type="button" aria-label={`Read ${chapter.title}`}>
        <div className="chapter-row__number"><span>S{chapter.season}</span><strong>{String(chapter.number).padStart(2, '0')}</strong></div>
        <div className="chapter-row__body">
          <div className="chapter-row__heading">
            <div><span className="season-kicker">{chapter.seasonTitle}</span><h3>{chapter.title}</h3></div>
            <span className="read-chip">{lastRead === chapter.id ? 'Continue' : 'Read'}</span>
          </div>
          <p>{chapter.summary}</p>
          <div className="meta-line"><span>POV: {chapter.pov}</span><span>{chapter.tags.join(' · ')}</span></div>
        </div>
      </button>
      <button
        className={`chapter-bookmark ${saved ? 'is-saved' : ''}`}
        onClick={() => toggleBookmark(chapter.id)}
        type="button"
        aria-label={saved ? `Remove bookmark from ${chapter.title}` : `Bookmark ${chapter.title}`}
      >
        {saved ? '🔖' : '♧'}
      </button>
    </article>
  );
}

export function ChaptersPage({ onOpenChapter }: ChaptersPageProps) {
  const { lastRead } = useReaderState();
  const [season, setSeason] = useState('All');
  const [query, setQuery] = useState('');

  const seasons = useMemo(() => {
    const map = new Map<number, { title: string; chapters: Chapter[] }>();
    for (const chapter of allChapters) {
      const item = map.get(chapter.season) ?? { title: chapter.seasonTitle, chapters: [] };
      item.chapters.push(chapter);
      map.set(chapter.season, item);
    }
    return [...map.entries()].sort((a, b) => a[0] - b[0]);
  }, []);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    return allChapters.filter((chapter) => includesQuery(
      [chapter.title, chapter.seasonTitle, chapter.summary, chapter.pov, ...chapter.tags],
      query,
    ));
  }, [query]);

  const selectedChapters = season === 'All'
    ? []
    : allChapters.filter((chapter) => chapter.season === Number(season));
  const lastChapter = lastRead ? allChapters.find((chapter) => chapter.id === lastRead) : undefined;

  return (
    <section>
      <PageHeader
        eyebrow={`${publishedSeasonCount} published seasons · ${publishedChapterCount} chapters`}
        title="Chapters"
        description="Open one season at a time for a fast archive, or search all 550 published chapters without loading their prose until you actually read them."
      />

      {lastChapter ? (
        <button className="continue-banner" onClick={() => onOpenChapter(lastChapter.id)} type="button">
          <span>Continue reading</span>
          <strong>S{lastChapter.season} · Ch {lastChapter.number} — {lastChapter.title}</strong>
          <span aria-hidden="true">→</span>
        </button>
      ) : null}

      <div className="toolbar">
        <input
          className="filter-input"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search all chapter metadata..."
        />
        <select className="filter-input" aria-label="Season" value={season} onChange={(event) => setSeason(event.target.value)}>
          <option value="All">Browse all seasons</option>
          {seasons.map(([number]) => <option value={String(number)} key={number}>Season {number}</option>)}
        </select>
      </div>

      {query.trim() ? (
        searchResults.length ? (
          <div className="chapter-list">
            {searchResults.map((chapter) => <ChapterRow chapter={chapter} key={chapter.id} onOpenChapter={onOpenChapter} />)}
          </div>
        ) : <EmptyState title="No matching chapters" message="Try another title, character, season, or keyword." />
      ) : season === 'All' ? (
        <div className="season-browser">
          {seasons.map(([number, item]) => {
            const hasLastRead = item.chapters.some((chapter) => chapter.id === lastRead);
            return (
              <button className={`season-card ${hasLastRead ? 'is-current' : ''}`} key={number} onClick={() => setSeason(String(number))} type="button">
                <span className="season-card__number">S{String(number).padStart(2, '0')}</span>
                <div><h3>{item.title}</h3><p>10 published chapters{hasLastRead ? ' · current reading season' : ''}</p></div>
                <span aria-hidden="true">→</span>
              </button>
            );
          })}
        </div>
      ) : selectedChapters.length ? (
        <>
          <div className="season-selected-heading">
            <button className="text-button" onClick={() => setSeason('All')} type="button">← All seasons</button>
            <div><span className="eyebrow">Season {season}</span><h3>{selectedChapters[0]?.seasonTitle}</h3></div>
          </div>
          <div className="chapter-list">
            {selectedChapters.map((chapter) => <ChapterRow chapter={chapter} key={chapter.id} onOpenChapter={onOpenChapter} />)}
          </div>
        </>
      ) : <EmptyState title="No matching chapters" message="Try another season or keyword." />}
    </section>
  );
}
