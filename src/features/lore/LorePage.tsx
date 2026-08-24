import { PageHeader } from '../../components/PageHeader';
import { loreArticles } from './data';

export function LorePage() {
  return (
    <section>
      <PageHeader eyebrow="World bible" title="Lore" description="Rules, terminology, motifs, history, and setting reference." />
      <div className="lore-grid">
        {loreArticles.map((article) => (
          <article className="lore-card" key={article.id}>
            <p className="eyebrow">{article.category}</p><h3>{article.title}</h3><p>{article.summary}</p>
            <ul>{article.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}
