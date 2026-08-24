import type { WikiSectionId } from '../../shared/types';
import { StatCard } from '../../components/StatCard';
import { chapters } from '../chapters/data';
import { characters } from '../characters/data';
import { villains } from '../villains/data';
import { factions } from '../factions/data';
import { techniques } from '../techniques/data';
import { loreArticles } from '../lore/data';

interface OverviewPageProps { onNavigate: (section: WikiSectionId) => void; }

const quickLinks: Array<{ section: WikiSectionId; title: string; description: string; symbol: string; }> = [
  { section: 'chapters', title: 'Chapter archive', description: 'Reading order, summaries, POV, and status.', symbol: '01' },
  { section: 'characters', title: 'Character index', description: 'Heroes, legends, ranks, aliases, and affiliations.', symbol: '02' },
  { section: 'villains', title: 'Threat archive', description: 'Antagonists, motives, organizations, and danger levels.', symbol: '03' },
  { section: 'lore', title: 'World bible', description: 'Power rules, terminology, motifs, and background.', symbol: '04' },
];

export function OverviewPage({ onNavigate }: OverviewPageProps) {
  return (
    <section>
      <div className="hero"><div><p className="eyebrow">Wiki dashboard</p><h2>A villain to the world.<br />A hermit by choice.</h2><p>Ryn wants a quiet mountain life. Princess Lucy keeps accidentally dragging the Despicable Heretic back into a martial world obsessed with rankings, rules, and his supposed villainy.</p></div><div className="hero__seal" aria-hidden="true"><span>雪</span></div></div>
      <div className="stats-grid">
        <StatCard label="Chapters" value={chapters.length} hint="Five seasons planned" />
        <StatCard label="Characters" value={characters.length} hint="Core + major cast" />
        <StatCard label="Villains" value={villains.length} hint="Tracked major threats" />
        <StatCard label="World entries" value={factions.length + techniques.length + loreArticles.length} hint="Factions, arts, and lore" />
      </div>
      <div className="section-heading"><div><p className="eyebrow">Explore</p><h3>Wiki sections</h3></div><p>Each section is its own module and can grow independently.</p></div>
      <div className="quick-grid">{quickLinks.map((link) => <button className="quick-card" key={link.section} onClick={() => onNavigate(link.section)} type="button"><span className="quick-card__symbol">{link.symbol}</span><div><h3>{link.title}</h3><p>{link.description}</p></div><span className="quick-card__arrow" aria-hidden="true">↗</span></button>)}</div>
    </section>
  );
}
