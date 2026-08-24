import { useMemo, useState } from 'react';
import { Badge } from '../../components/Badge';
import { EmptyState } from '../../components/EmptyState';
import { PageHeader } from '../../components/PageHeader';
import { includesQuery } from '../../shared/utils';
import { characters } from './data';

export function CharactersPage() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(
    () =>
      characters.filter((character) =>
        includesQuery(
          [character.name, ...character.aliases, character.role, character.affiliation, character.description, ...character.traits],
          query,
        ),
      ),
    [query],
  );

  return (
    <section>
      <PageHeader eyebrow="Cast index" title="Characters" description="Heroes, rivals, mentors, legends, and recurring figures." />
      <div className="toolbar"><input className="filter-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the cast..." /></div>
      {filtered.length ? (
        <div className="card-grid">
          {filtered.map((character) => (
            <article className="entity-card" key={character.id}>
              <div className={`entity-card__portrait portrait--${character.accent.toLowerCase()}`}><span>{character.name.slice(0, 1)}</span></div>
              <div className="entity-card__content">
                <div className="entity-card__topline"><div><h3>{character.name}</h3><p>{character.aliases.join(' · ') || 'No known alias'}</p></div><Badge tone={character.importance === 'Core' ? 'accent' : 'neutral'}>{character.importance}</Badge></div>
                <p>{character.description}</p>
                <dl className="mini-facts"><div><dt>Role</dt><dd>{character.role}</dd></div><div><dt>Affiliation</dt><dd>{character.affiliation}</dd></div><div><dt>Status</dt><dd>{character.status}</dd></div></dl>
              </div>
            </article>
          ))}
        </div>
      ) : <EmptyState title="No characters found" message="Try another name, alias, or faction." />}
    </section>
  );
}
