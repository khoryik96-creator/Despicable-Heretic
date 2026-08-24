import { Badge } from '../../components/Badge';
import { PageHeader } from '../../components/PageHeader';
import { techniques } from './data';

function tierTone(tier: string): 'neutral' | 'accent' | 'gold' {
  if (tier === 'Ultimate' || tier === 'Supreme') return 'gold';
  if (tier === 'Transcended') return 'accent';
  return 'neutral';
}

export function TechniquesPage() {
  return <section><PageHeader eyebrow="Martial archive" title="Techniques" description="Ryn avoids named techniques early; this archive tracks the absurdly casual actions the world mistakes for secret arts." /><div className="technique-table"><div className="technique-table__head"><span>Technique</span><span>User</span><span>Category</span><span>Tier</span></div>{techniques.map((technique) => <article className="technique-table__row" key={technique.id}><div><strong>{technique.name}</strong><p>{technique.description}</p></div><span>{technique.user}</span><span>{technique.category}</span><span><Badge tone={tierTone(technique.tier)}>{technique.tier}</Badge></span></article>)}</div></section>;
}
