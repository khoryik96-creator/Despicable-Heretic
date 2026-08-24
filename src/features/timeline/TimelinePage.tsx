import { Badge } from '../../components/Badge';
import { PageHeader } from '../../components/PageHeader';
import { timeline } from './data';

export function TimelinePage() {
  return (
    <section>
      <PageHeader eyebrow="Chronology" title="Timeline" description="Track major world events, arc milestones, and character history in order." />
      <div className="timeline">
        {timeline.map((entry) => (
          <article className="timeline__item" key={entry.id}>
            <div className="timeline__marker" />
            <div className="timeline__card"><div className="timeline__heading"><div><p className="eyebrow">{entry.era}</p><h3>{entry.title}</h3></div><Badge tone={entry.importance === 'World' ? 'gold' : 'neutral'}>{entry.importance}</Badge></div><p>{entry.summary}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}
