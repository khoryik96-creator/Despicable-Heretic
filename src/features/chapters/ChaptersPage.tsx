import { useMemo, useState } from 'react';
import { Badge } from '../../components/Badge';
import { EmptyState } from '../../components/EmptyState';
import { PageHeader } from '../../components/PageHeader';
import { includesQuery } from '../../shared/utils';
import { chapters } from './data';

const seasons = ['All', '1', '2', '3', '4', '5'] as const;
const statuses = ['All', 'Published', 'Draft', 'Planned'] as const;

export function ChaptersPage() {
  const [season, setSeason] = useState<(typeof seasons)[number]>('All');
  const [status, setStatus] = useState<(typeof statuses)[number]>('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(
    () => chapters.filter((chapter) => {
      const matchesSeason = season === 'All' || chapter.season === Number(season);
      const matchesStatus = status === 'All' || chapter.status === status;
      const matchesQuery = includesQuery([chapter.title, chapter.seasonTitle, chapter.summary, chapter.pov, ...chapter.tags], query);
      return matchesSeason && matchesStatus && matchesQuery;
    }),
    [query, season, status],
  );

  return (
    <section>
      <PageHeader eyebrow="Opening saga · 50 chapters" title="Chapters" description="Five seasons charting Lucy’s arrival on Black Mountain, Ryn’s infamous identity, the Heavenly Register, and the trial of the Despicable Heretic." />
      <div className="toolbar">
        <input className="filter-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Filter chapters..." />
        <div className="segmented-control" aria-label="Season">
          {seasons.map((item) => (
            <button key={item} className={season === item ? 'is-active' : undefined} onClick={() => setSeason(item)} type="button">
              {item === 'All' ? 'All seasons' : `S${item}`}
            </button>
          ))}
        </div>
      </div>
      <div className="toolbar toolbar--secondary">
        <div className="segmented-control" aria-label="Chapter status">
          {statuses.map((item) => (
            <button key={item} className={status === item ? 'is-active' : undefined} onClick={() => setStatus(item)} type="button">{item}</button>
          ))}
        </div>
      </div>
      {filtered.length ? (
        <div className="chapter-list">
          {filtered.map((chapter) => (
            <article className="chapter-row" key={chapter.id}>
              <div className="chapter-row__number"><span>S{chapter.season}</span><strong>{String(chapter.number).padStart(2, '0')}</strong></div>
              <div className="chapter-row__body">
                <div className="chapter-row__heading">
                  <div><span className="season-kicker">{chapter.seasonTitle}</span><h3>{chapter.title}</h3></div>
                  <Badge tone={chapter.status === 'Published' ? 'accent' : chapter.status === 'Draft' ? 'gold' : 'neutral'}>{chapter.status}</Badge>
                </div>
                <p>{chapter.summary}</p>
                <div className="meta-line"><span>POV: {chapter.pov}</span><span>{chapter.tags.join(' · ')}</span></div>
              </div>
            </article>
          ))}
        </div>
      ) : <EmptyState title="No matching chapters" message="Try another season, keyword, or status." />}
    </section>
  );
}
