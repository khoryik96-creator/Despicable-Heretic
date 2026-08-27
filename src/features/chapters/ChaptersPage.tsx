import { useMemo, useState } from 'react';
import { Badge } from '../../components/Badge';
import { EmptyState } from '../../components/EmptyState';
import { PageHeader } from '../../components/PageHeader';
import { includesQuery } from '../../shared/utils';
import { allChapters, publishedChapterCount, publishedSeasonCount } from './allData';

export function ChaptersPage() {
  const [season, setSeason] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(
    () => allChapters.filter((chapter) => {
      const matchesSeason = season === 'All' || chapter.season === Number(season);
      const matchesQuery = includesQuery([chapter.title, chapter.seasonTitle, chapter.summary, chapter.pov, ...chapter.tags], query);
      return matchesSeason && matchesQuery;
    }),
    [query, season],
  );

  return (
    <section>
      <PageHeader
        eyebrow={`${publishedSeasonCount} published seasons · ${publishedChapterCount} chapters`}
        title="Chapters"
        description="The complete published archive from Lucy’s first climb up Black Mountain through the Rank Hunter Saga and One Blossom Buries Heaven."
      />
      <div className="toolbar">
        <input className="filter-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Filter chapters..." />
        <select className="filter-input" aria-label="Season" value={season} onChange={(event) => setSeason(event.target.value)}>
          <option value="All">All seasons</option>
          {Array.from({ length: publishedSeasonCount }, (_, index) => index + 1).map((item) => (
            <option value={String(item)} key={item}>Season {item}</option>
          ))}
        </select>
      </div>
      {filtered.length ? (
        <div className="chapter-list">
          {filtered.map((chapter) => (
            <article className="chapter-row" key={chapter.id}>
              <div className="chapter-row__number"><span>S{chapter.season}</span><strong>{String(chapter.number).padStart(2, '0')}</strong></div>
              <div className="chapter-row__body">
                <div className="chapter-row__heading">
                  <div><span className="season-kicker">{chapter.seasonTitle}</span><h3>{chapter.title}</h3></div>
                  <Badge tone="accent">Published</Badge>
                </div>
                <p>{chapter.summary}</p>
                <div className="meta-line"><span>POV: {chapter.pov}</span><span>{chapter.tags.join(' · ')}</span></div>
              </div>
            </article>
          ))}
        </div>
      ) : <EmptyState title="No matching chapters" message="Try another season or keyword." />}
    </section>
  );
}
