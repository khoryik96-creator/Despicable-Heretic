import { Badge } from '../../components/Badge';
import { PageHeader } from '../../components/PageHeader';
import { factions } from './data';

export function FactionsPage() {
  return (
    <section>
      <PageHeader eyebrow="Organizations" title="Factions" description="Ranks, alliances, clans, enemy groups, and political power blocs." />
      <div className="card-grid card-grid--compact">
        {factions.map((faction) => (
          <article className="simple-card" key={faction.id}>
            <div className="simple-card__heading"><div><p className="eyebrow">{faction.category}</p><h3>{faction.name}</h3></div><Badge tone={faction.alignment === 'Hostile' ? 'danger' : faction.alignment === 'Allied' ? 'accent' : 'neutral'}>{faction.alignment}</Badge></div>
            <p>{faction.summary}</p><div className="member-list">{faction.members.map((member) => <span key={member}>{member}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
