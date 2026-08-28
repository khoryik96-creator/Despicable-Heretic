import { PageHeader } from '../../components/PageHeader';
import { formerTopTwenty, topTwenty } from './top20';

export function RankingsPage() {
  return (
    <section>
      <PageHeader
        eyebrow="Heavenly Register · current public roster"
        title="Top 20"
        description="The post-Taewon Register after the Season 53 reassessment, with Open Gate now supplying multiple active ranked monsters without owning the ranking body itself."
      />
      <div className="ranking-grid">
        {topTwenty.map((fighter) => (
          <article className="ranking-card" key={fighter.rank}>
            <div className="ranking-card__rank">#{fighter.rank}</div>
            <div>
              <span className="eyebrow">{fighter.title}</span>
              <h3>{fighter.name}</h3>
              <p><strong>{fighter.affinity}</strong></p>
              <p>{fighter.combatStyle}</p>
              <div className="tag-row">{fighter.signatureArts.map((art) => <span key={art}>{art}</span>)}</div>
              <small>{fighter.distinction}</small>
            </div>
          </article>
        ))}
      </div>

      <div className="section-heading rankings-history-heading">
        <div><p className="eyebrow">Historical exits</p><h3>Deceased and retired ranked monsters</h3></div>
      </div>
      <div className="former-ranking-grid">
        {formerTopTwenty.map((fighter) => (
          <article className={`former-ranking-card ${fighter.status === 'Deceased' ? 'is-deceased' : 'is-retired'}`} key={fighter.name}>
            <span>Former #{fighter.rank} · {fighter.status}</span>
            <h3>{fighter.name}</h3>
            <p>{fighter.title}</p>
            <small>{fighter.distinction}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
