import type { WikiSectionId } from '../shared/types';

export interface NavigationItem {
  id: WikiSectionId;
  label: string;
  shortLabel: string;
}

export const navigationItems: NavigationItem[] = [
  { id: 'overview', label: 'Overview', shortLabel: 'Home' },
  { id: 'chapters', label: 'Chapters', shortLabel: 'Chapters' },
  { id: 'characters', label: 'Characters', shortLabel: 'Cast' },
  { id: 'villains', label: 'Villains', shortLabel: 'Villains' },
  { id: 'factions', label: 'Factions', shortLabel: 'Factions' },
  { id: 'techniques', label: 'Techniques', shortLabel: 'Skills' },
  { id: 'timeline', label: 'Timeline', shortLabel: 'Timeline' },
  { id: 'lore', label: 'Lore', shortLabel: 'Lore' },
];
