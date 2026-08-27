import { allChapters } from '../chapters/allData';
import { characters } from '../characters/data';
import { factions } from '../factions/data';
import { loreArticles } from '../lore/data';
import { techniques } from '../techniques/data';
import { timeline } from '../timeline/data';
import { villains } from '../villains/data';
import type { SearchableWikiItem } from '../../shared/types';

export const searchIndex: SearchableWikiItem[] = [
  ...allChapters.map((item) => ({ id: item.id, title: item.title, subtitle: `Season ${item.season} · Chapter ${item.number}`, section: 'chapters' as const, body: item.summary, tags: item.tags })),
  ...characters.map((item) => ({ id: item.id, title: item.name, subtitle: item.aliases.join(' · ') || item.role, section: 'characters' as const, body: item.description, tags: [item.role, item.affiliation, ...item.traits] })),
  ...villains.map((item) => ({ id: item.id, title: item.name, subtitle: item.group, section: 'villains' as const, body: `${item.description} ${item.objective}`, tags: item.tags })),
  ...factions.map((item) => ({ id: item.id, title: item.name, subtitle: item.category, section: 'factions' as const, body: item.summary, tags: [...item.members, item.alignment] })),
  ...techniques.map((item) => ({ id: item.id, title: item.name, subtitle: `${item.user} · ${item.tier}`, section: 'techniques' as const, body: item.description, tags: [item.user, item.category, item.tier, item.reveal ?? ''] })),
  ...timeline.map((item) => ({ id: item.id, title: item.title, subtitle: item.era, section: 'timeline' as const, body: item.summary, tags: [item.importance] })),
  ...loreArticles.map((item) => ({ id: item.id, title: item.title, subtitle: item.category, section: 'lore' as const, body: `${item.summary} ${item.details.join(' ')}`, tags: [item.category] })),
];
