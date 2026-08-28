import type { WikiSectionId } from '../../shared/types';
import { StatCard } from '../../components/StatCard';
import { allChapters, publishedChapterCount, publishedSeasonCount } from '../chapters/allData';
import { characters } from '../characters/data';
import { villains } from '../villains/data';
import { factions } from '../factions/data';
import { useReaderState } from '../reader/ReaderContext';
import { techniques } from '../techniques/data';
import { loreArticles } from '../lore/data';

interface OverviewPageProps {
  onNavigate: (section: WikiSectionId) => void;
  onOpenChapter: (id: string) => void;
}

const quickLinks: Array<{ section: WikiSectionId; title: string; description: string; symbol: string; }> = [
  { section: 'chapters', title: 'Chapter archive', description: 'All 55 published seasons with lazy full-prose reading.', symbol: '01' },
  { section: 'bookmarks', title: 'Bookmarks', description: 'Saved chapters preserved with the existing reader storage keys.', symbol: '02' },
  { section: 'rankings', title: 'Heavenly Register', description: 'Current Top 20 plus ranked deaths and retirements.', symbol: '03' },
  { section: 'characters', title: 'Character index', description: 'Ryn, Lucy #5, Open Gate, ranked monsters, former legends, and recurring cast.', symbol: '04' },
  { section: 'techniques', title: 'Ryn’s arts', description: 'Evolved Transcended skills, Spring, three revealed Supremes, and the sealed Ultimate.', symbol: '05' },
  { section: 'lore', title: 'World bible', description: 'Register succession, Open Gate, World Meridian, Thousand Lanterns, and setting rules.', symbol: '06' },
];

export function OverviewPage({ onNavigate, onOpenChapter }: OverviewPageProps) {
  const { lastRead } = useReaderState();
  const continueChapter = lastRead ? allChapters.find((chapter) => chapter.id === lastRead) : allChapters[0];

  return (
    <section>
      <div className="hero">
        <div>
          <p className="eyebrow">Canon workspace · Season 55</p>
          <h2>The mountain<br />opened its gate.</h2>
          <p>Ryn remains UNRANKABLE beneath a permanent sakura aura. Princess Lucy is now Heavenly Register #5, and the school neither of them intended to build has become an intercontinental martial superpower designed specifically not to become a throne.</p>
          {continueChapter ? (
            <button className="hero-continue" onClick={() => onOpenChapter(continueChapter.id)} type="button">
              <span>{lastRead ? 'Continue Reading' : 'Start Reading'}</span>
              <strong>S{continueChapter.season} · Ch {continueChapter.number} — {continueChapter.title}</strong>
              <span aria-hidden="true">→</span>
            </button>
          ) : null}
        </div>
        <div className="hero__seal" aria-hidden="true"><span>花</span></div>
      </div>
      <div className="stats-grid">
        <StatCard label="Chapters" value={publishedChapterCount} hint={`${publishedSeasonCount} published seasons`} />
        <StatCard label="Characters" value={characters.length} hint="Core cast, ranked monsters, legends" />
        <StatCard label="Ryn’s formal arts" value={techniques.length} hint="3 revealed Supremes · Ultimate sealed" />
        <StatCard label="World entries" value={factions.length + villains.length + loreArticles.length} hint="Factions, threats, and lore" />
      </div>
      <div className="section-heading"><div><p className="eyebrow">Explore</p><h3>Wiki sections</h3></div><p>{allChapters.length} published chapter records share the same canon data used across the modular wiki.</p></div>
      <div className="quick-grid">{quickLinks.map((link) => <button className="quick-card" key={link.section} onClick={() => onNavigate(link.section)} type="button"><span className="quick-card__symbol">{link.symbol}</span><div><h3>{link.title}</h3><p>{link.description}</p></div><span className="quick-card__arrow" aria-hidden="true">↗</span></button>)}</div>
    </section>
  );
}
