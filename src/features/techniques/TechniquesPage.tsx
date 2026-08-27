import { Badge } from '../../components/Badge';
import { PageHeader } from '../../components/PageHeader';
import { techniques } from './data';

function tierTone(tier: string): 'neutral' | 'accent' | 'gold' {
  if (tier === 'Ultimate' || tier === 'Supreme') return 'gold';
  if (tier === 'Transcended') return 'accent';
  return 'neutral';
}

export function TechniquesPage() {
  return (
    <section>
      <PageHeader
        eyebrow="Ryn’s formal martial archive"
        title="Techniques"
        description="Fourteen formal arts and evolved states are defined through Season 55. Three Supremes are revealed, Unwritten Law remains sealed, and The Last Quiet Beneath Heaven remains hard-locked. Open Gate Sanctuary is an automatic effect of Ryn’s healing lineage, not a fifteenth formal art."
      />
      <div className="technique-table">
        <div className="technique-table__head"><span>Technique</span><span>User</span><span>Category</span><span>Tier</span></div>
        {techniques.map((technique) => (
          <article className="technique-table__row" key={technique.id}>
            <div><strong>{technique.name}</strong><p>{technique.description}</p>{technique.revealedIn ? <p>Reveal: {technique.revealedIn}</p> : null}</div>
            <span>{technique.user}</span>
            <span>{technique.category}</span>
            <span><Badge tone={tierTone(technique.tier)}>{technique.reveal === 'Sealed' ? `${technique.tier} · SEALED` : technique.tier}</Badge></span>
          </article>
        ))}
      </div>
    </section>
  );
}
