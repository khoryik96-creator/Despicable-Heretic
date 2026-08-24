import { Badge } from '../../components/Badge';
import { PageHeader } from '../../components/PageHeader';
import { villains } from './data';

export function VillainsPage() {
  return <section><PageHeader eyebrow="Threat archive" title="Villains" description="Major antagonists, enemy organizations, motives, and current threat levels." /><div className="villain-list">{villains.map((villain) => <article className="villain-card" key={villain.id}><div className="villain-card__header"><div><p className="eyebrow">{villain.group}</p><h3>{villain.name}</h3></div><Badge tone="danger">Threat {villain.threat}/5</Badge></div><p>{villain.description}</p><div className="objective-box"><span>Objective</span><strong>{villain.objective}</strong></div><div className="tag-row">{villain.tags.map((tag) => <span key={tag}>#{tag}</span>)}</div></article>)}</div></section>;
}
