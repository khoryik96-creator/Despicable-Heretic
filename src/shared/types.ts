export type WikiSectionId = 'overview' | 'chapters' | 'bookmarks' | 'rankings' | 'characters' | 'villains' | 'factions' | 'techniques' | 'timeline' | 'lore';
export type Importance = 'Core' | 'Major' | 'Supporting';
export interface SearchableWikiItem { id: string; title: string; subtitle: string; section: WikiSectionId; body: string; tags: string[]; }
