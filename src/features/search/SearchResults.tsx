import { useMemo } from 'react';
import type { WikiSectionId } from '../../shared/types';
import { includesQuery } from '../../shared/utils';
import { EmptyState } from '../../components/EmptyState';
import { searchIndex } from './searchIndex';

interface SearchResultsProps { query: string; onOpenSection: (section: WikiSectionId) => void; }

export function SearchResults({ query, onOpenSection }: SearchResultsProps) {
  const results = useMemo(() => searchIndex.filter((item) => includesQuery([item.title, item.subtitle, item.body, ...item.tags], query)).slice(0, 20), [query]);
  if (!query.trim()) return <EmptyState title="Search the wiki" message="Type a character, chapter, faction, technique, villain, or lore term." />;
  if (!results.length) return <EmptyState title="No results" message={`Nothing matched “${query}”. Try a broader term.`} />;
  return <div className="search-results"><p className="search-results__count">{results.length} results</p>{results.map((result) => <button className="search-result" key={`${result.section}-${result.id}`} onClick={() => onOpenSection(result.section)} type="button"><div><span className="search-result__section">{result.section}</span><strong>{result.title}</strong><small>{result.subtitle}</small></div><p>{result.body}</p><span aria-hidden="true">→</span></button>)}</div>;
}
